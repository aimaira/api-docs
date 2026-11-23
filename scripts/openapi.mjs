// Construit la description OpenAPI 3 de l'API publique à partir du modèle exporté (reference/reference-api.json).
// Appelé par scripts/reference.mjs, qui écrit le résultat dans src/public/openapi.json.
//
// Seules les opérations réellement exposées par les contrôleurs sont décrites (le $metadata, lui, ne dit pas quels
// verbes chaque ressource accepte). Les ressources ignorées dans reference/pages.json sont absentes.

const EDM = {
  'Edm.String': { type: 'string' },
  'Edm.Int64': { type: 'integer', format: 'int64' },
  'Edm.Int32': { type: 'integer', format: 'int32' },
  'Edm.Int16': { type: 'integer', format: 'int32', minimum: -32768, maximum: 32767 },
  'Edm.Byte': { type: 'integer', format: 'int32', minimum: 0, maximum: 255 },
  'Edm.Boolean': { type: 'boolean' },
  'Edm.Double': { type: 'number', format: 'double' },
  'Edm.Single': { type: 'number', format: 'float' },
  'Edm.Decimal': { type: 'number', format: 'decimal' },
  'Edm.DateTimeOffset': { type: 'string', format: 'date-time' },
  'Edm.Date': { type: 'string', format: 'date' },
  'Edm.TimeOfDay': { type: 'string', format: 'time' },
  'Edm.Duration': { type: 'string', format: 'duration' },
  'Edm.Guid': { type: 'string', format: 'uuid' },
  'Edm.Binary': { type: 'string', format: 'byte' },
};

const QUERY = {
  filter: { name: '$filter', description: 'Filtre OData, par exemple `Code eq \'CODE\'`.', schema: { type: 'string' } },
  select: { name: '$select', description: 'Champs à renvoyer, séparés par des virgules.', schema: { type: 'string' } },
  expand: { name: '$expand', description: 'Entités liées à inclure dans la réponse, séparées par des virgules.', schema: { type: 'string' } },
  orderby: { name: '$orderby', description: 'Tri, par exemple `Nom desc`.', schema: { type: 'string' } },
  top: { name: '$top', description: 'Nombre maximal de résultats.', schema: { type: 'integer', minimum: 0 } },
  skip: { name: '$skip', description: 'Nombre de résultats à sauter.', schema: { type: 'integer', minimum: 0 } },
  count: { name: '$count', description: 'Ajoute le nombre total de résultats (`@odata.count`).', schema: { type: 'boolean' } },
};

const unwrap = type => /^Collection\((.+)\)$/.exec(type)?.[1] ?? type;
const isCollection = type => type.startsWith('Collection(');
const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * @param {object} model   reference/reference-api.json
 * @param {object} config  reference/pages.json
 * @param {(key: string) => boolean} isIgnored
 * @returns {{ document: object, skipped: string[] }}
 */
export function buildOpenApi(model, config, isIgnored) {
  const skipped = [];
  const schemas = {};
  const paths = {};
  const usedTags = new Set();
  const operationIds = new Set();

  // Les routes « selection » et « messages » réutilisent des noms de types de la racine avec d'autres définitions.
  const schemaName = (route, typeName) =>
    (route.prefix ? `${route.prefix}.` : '') + typeName.replace(/^GraphV1\./, '').replace(/[^A-Za-z0-9._-]/g, '_');
  const ref = (route, typeName) => ({ $ref: `#/components/schemas/${schemaName(route, typeName)}` });

  function typeChain(route, typeName) {
    const chain = [];
    for (let name = typeName; name && route.types[name]; name = route.types[name].baseType) chain.unshift(route.types[name]);
    return chain;
  }
  const members = (route, typeName) => new Map(typeChain(route, typeName).flatMap(t => t.properties ?? []).map(p => [p.name, p]));

  function typeSchema(route, type) {
    const single = unwrap(type);
    let schema = EDM[single] ? { ...EDM[single] } : route.types[single] ? ref(route, single) : { type: 'object' };
    return isCollection(type) ? { type: 'array', items: schema } : schema;
  }

  function propertySchema(route, property) {
    let schema = typeSchema(route, property.type);
    if (schema.$ref) schema = { allOf: [schema] };
    if (property.nullable && !isCollection(property.type)) schema.nullable = true;
    if (property.description) schema.description = property.description;
    else if (property.kind === 'navigation') schema.description = 'Entité liée, renvoyée avec `$expand`.';
    return schema;
  }

  for (const route of model.routes) {
    for (const [typeName, type] of Object.entries(route.types)) {
      const name = schemaName(route, typeName);
      if (type.kind === 'enum') {
        schemas[name] = { type: 'string', enum: type.members.map(m => m.name) };
        continue;
      }
      const own = {
        type: 'object',
        properties: Object.fromEntries((type.properties ?? []).map(p => [p.name, propertySchema(route, p)])),
      };
      if (type.description) own.description = type.description;
      schemas[name] = type.baseType && route.types[type.baseType] ? { allOf: [ref(route, type.baseType), own] } : own;
    }
  }

  const tagFor = key => {
    const page = config.pages[key];
    const section = page ? page.page.split('/')[0] : null;
    return section ? config.sections[section] ?? section : 'Autres';
  };

  for (const route of model.routes) {
    const prefix = route.prefix ? `/${route.prefix}` : '';
    for (const set of route.entitySets) {
      const key = route.prefix ? `${route.prefix}/${set.name}` : set.name;
      if (isIgnored(key)) continue;
      const page = config.pages[key];
      const technical = `\`${set.name}\``;
      const n = { un: page?.un ?? `un ${technical}`, les: page?.les ?? `les ${technical}`, possessif: page?.possessif ?? 'son' };
      const tag = tagFor(key);
      const entityRef = ref(route, set.entityType);
      const all = members(route, set.entityType);
      const keyName = typeChain(route, set.entityType).reverse().find(t => t.key)?.key?.[0] ?? 'Id';
      const keyParameter = {
        name: 'id', in: 'path', required: true, description: `Identifiant (\`${keyName}\`).`,
        schema: EDM[all.get(keyName)?.type] ?? EDM['Edm.Int64'],
      };
      let required = [];
      for (const t of typeChain(route, set.entityType).reverse()) if (t.requiredOnCreate?.length) { required = t.requiredOnCreate; break; }
      const createBody = required.length ? { allOf: [entityRef, { required }] } : entityRef;
      const context = { '@odata.context': { type: 'string' } };
      const entityResponse = description => ({ description, content: { 'application/json': { schema: entityRef } } });
      const listResponse = (items, description) => ({
        description,
        content: { 'application/json': { schema: { type: 'object', properties: { ...context, '@odata.count': { type: 'integer' }, value: { type: 'array', items } } } } },
      });
      const docs = page ? { externalDocs: { url: `reference/ressources/${page.page}` } } : {};

      const add = (path, verb, operation, name) => {
        const fullPath = `${prefix}/${set.name}${path}`;
        paths[fullPath] ??= {};
        if (paths[fullPath][verb]) return; // même route déclarée deux fois par le contrôleur
        let operationId = `${key.replace('/', '_')}_${name}`;
        for (let i = 2; operationIds.has(operationId); i++) operationId = `${key.replace('/', '_')}_${name}${i}`;
        operationIds.add(operationId);
        usedTags.add(tag);
        paths[fullPath][verb] = { tags: [tag], operationId, ...operation, ...docs };
      };

      for (const o of set.operations) {
        const verb = o.verbs[0].toLowerCase();
        const scalarId = o.parameters.includes('key') || o.parameters.includes('id');
        const description = o.summary ? { description: o.summary } : {};
        if (o.kind === 'collection' && verb === 'get') {
          add('', 'get', { summary: capitalize(`lister ${n.les}`), ...description, parameters: Object.values(QUERY).map(q => ({ in: 'query', ...q })), responses: { 200: listResponse(entityRef, 'Liste') } }, 'list');
        } else if (o.kind === 'collection' && verb === 'post') {
          add('', 'post', { summary: capitalize(`créer ${n.un}`), ...description, requestBody: { required: true, content: { 'application/json': { schema: createBody } } }, responses: { 201: entityResponse('Créé') } }, 'create');
        } else if ((o.kind === 'entity' || o.kind === 'collection') && scalarId && verb === 'get') {
          add('/{id}', 'get', { summary: capitalize(`récupérer ${n.un} avec ${n.possessif} identifiant`), ...description, parameters: [keyParameter, { in: 'query', ...QUERY.select }, { in: 'query', ...QUERY.expand }], responses: { 200: entityResponse('Trouvé'), 404: { description: 'Introuvable' } } }, 'get');
        } else if ((o.kind === 'entity' || o.kind === 'collection') && scalarId && (verb === 'put' || verb === 'patch')) {
          add('/{id}', verb, { summary: capitalize(`${verb === 'put' ? 'modifier' : 'modifier partiellement'} ${n.un}`), ...description, parameters: [keyParameter], requestBody: { required: true, content: { 'application/json': { schema: entityRef } } }, responses: { 200: entityResponse('Modifié') } }, verb === 'put' ? 'update' : 'patch');
        } else if ((o.kind === 'entity' || o.kind === 'collection') && scalarId && verb === 'delete') {
          add('/{id}', 'delete', { summary: capitalize(`supprimer ${n.un}`), ...description, parameters: [keyParameter], responses: { 204: { description: 'Supprimé' } } }, 'delete');
        } else if (o.kind === 'navigation' && o.parameters.includes('key')) {
          const property = all.get(o.navigation);
          const schema = property ? typeSchema(route, property.type) : { type: 'object' };
          const response = schema.type === 'array'
            ? listResponse(schema.items, 'Liste')
            : { description: 'Trouvé', content: { 'application/json': { schema } } };
          add(`/{id}/${o.navigation}`, 'get', { summary: o.summary ?? o.navigation,parameters: [keyParameter], responses: { 200: response } }, `get${o.navigation}`);
        } else if (o.kind === 'custom' && o.parameters.includes('key')) {
          const action = verb === 'get' ? o.method.replace(/^Get/, '') : o.method;
          const body = o.parameters.filter(p => p !== 'key').length && verb !== 'get'
            ? { requestBody: { required: true, content: { 'application/json': { schema: { type: 'object' } } } } } : {};
          add(`/{id}/${action}`, verb, { summary: o.summary ?? action, parameters: [keyParameter], ...body, responses: { 200: { description: 'Succès' } } }, action);
        } else {
          skipped.push(`${o.verbs.join('/')} ${key}.${o.method}(${o.parameters.join(', ')})`);
        }
      }
    }
  }

  const tagOrder = Object.values(config.sections);
  const tags = [...usedTags].sort((a, b) => ((tagOrder.indexOf(a) + 1 || 99) - (tagOrder.indexOf(b) + 1 || 99)) || a.localeCompare(b, 'fr')).map(name => ({ name }));

  const document = {
    openapi: '3.0.3',
    info: {
      title: 'API publique AIMAIRA',
      version: model.assemblyVersion ?? '1.0.0',
      description: 'Description générée depuis le modèle de l’API publique (GraphV1). L’API suit le protocole OData v4 : '
        + 'les listes acceptent les options de requête `$filter`, `$select`, `$expand`, `$orderby`, `$top`, `$skip` et `$count`.',
    },
    servers: [{ url: config.baseUrl }],
    security: [{ basic: [] }],
    tags,
    paths: Object.fromEntries(Object.entries(paths).sort(([a], [b]) => a.localeCompare(b))),
    components: {
      securitySchemes: { basic: { type: 'http', scheme: 'basic' } },
      schemas: Object.fromEntries(Object.entries(schemas).sort(([a], [b]) => a.localeCompare(b))),
    },
  };
  return { document, skipped };
}
