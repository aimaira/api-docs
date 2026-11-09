#!/usr/bin/env node
// Génère la partie « Référence » des pages de ressources à partir du modèle exporté de l'API publique
// (reference/reference-api.json, produit par tools/Export-ApiModel.ps1).
//
//   node scripts/reference.mjs                    met à jour les pages, crée les pages manquantes et le menu
//   node scripts/reference.mjs --check            échoue si une page n'est pas à jour ou si un exemple utilise un champ disparu
//   node scripts/reference.mjs --report FILE      écrit la liste de ce qu'il reste à documenter (Markdown)
//
// Tout ce qui est écrit à la main hors des marqueurs reference:start / reference:end est conservé.
import fs from 'node:fs';
import path from 'node:path';

const repo = path.resolve(import.meta.dirname, '..');
const srcDir = path.join(repo, 'src');
const resourcesDir = path.join(srcDir, 'reference', 'ressources');
const navFile = path.join(srcDir, '.vitepress', 'nav.graphv1.json');

const args = process.argv.slice(2);
const checkMode = args.includes('--check');
const reportIndex = args.indexOf('--report');
const reportFile = reportIndex >= 0 ? args[reportIndex + 1] : null;

const START = '<!-- reference:start — section générée depuis le modèle de l\'API publique (npm run reference), ne pas modifier à la main -->';
const END = '<!-- reference:end -->';
const BLOCK = /\n*<!-- reference:start[^>]*-->[\s\S]*?<!-- reference:end -->\n*/;

const readJson = file => JSON.parse(fs.readFileSync(path.join(repo, file), 'utf8').replace(/^﻿/, ''));
const model = readJson('reference/reference-api.json');
const config = readJson('reference/pages.json');

// ---------------------------------------------------------------------------------------------------------------------
// Index du modèle

const routes = new Map(model.routes.map(r => [r.prefix, r]));
const sets = new Map(); // "Convention" ou "selection/Concours" -> { key, route, set, typeName }
for (const route of model.routes) {
  for (const set of route.entitySets) {
    const key = route.prefix ? `${route.prefix}/${set.name}` : set.name;
    sets.set(key, { key, route, set, typeName: set.entityType });
  }
}

const pages = new Map(); // clé d'entity set -> { page, title }
for (const [key, value] of Object.entries(config.pages)) {
  pages.set(key, typeof value === 'string' ? { page: value } : value);
}
const ignored = config.ignore.map(pattern => new RegExp(`^${pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')}$`));
const isIgnored = key => ignored.some(re => re.test(key));

function typeChain(route, typeName) {
  const chain = [];
  for (let name = typeName; name && route.types[name]; name = route.types[name].baseType) chain.unshift(route.types[name]);
  return chain;
}

function members(route, typeName) {
  const result = new Map();
  for (const type of typeChain(route, typeName)) for (const p of type.properties) result.set(p.name, p);
  return result;
}

function requiredOnCreate(route, typeName) {
  for (const type of typeChain(route, typeName).reverse()) if (type.requiredOnCreate.length) return type.requiredOnCreate;
  return [];
}

const unwrap = type => /^Collection\((.+)\)$/.exec(type)?.[1] ?? type;
const shortName = type => unwrap(type).replace(/^.*\./, '');

function setForType(route, typeName) {
  return [...sets.values()].find(s => s.route === route && s.typeName === typeName);
}

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

// Noms métier d'une page (reference/pages.json) ; à défaut, le nom technique en monospace.
function names(key, page) {
  const technical = `\`${key.replace(/^\w+\//, '')}\``;
  return {
    nom: page?.nom ?? technical,
    un: page?.un ?? `un ${technical}`,
    les: page?.les ?? `les ${technical}`,
    possessif: page?.possessif ?? 'son',
  };
}

function linkForType(route, typeName) {
  const target = setForType(route, typeName);
  const page = target && pages.get(target.key);
  return page ? `[${capitalize(names(target.key, page).nom)}](/reference/ressources/${page.page})` : `\`${shortName(typeName)}\``;
}

// ---------------------------------------------------------------------------------------------------------------------
// Rendu des sections générées, sur le modèle des pages écrites à la main :
// « ## Lister les … », « ## Récupérer un … avec son identifiant », « ## Créer un … » (Champs particuliers,
// Données obligatoires), « ## Modifier un … », « ## Supprimer un … », chacune avec son cURL puis « ### Réponse ».

const baseUrl = config.baseUrl;
const auth = config.auth;
const UPDATE_WARNING = 'Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.';

// Valeur d'exemple envoyée dans une requête.
function requestSample(route, property) {
  const type = unwrap(property.type);
  if (property.type.startsWith('Collection(')) return [];
  switch (type) {
    case 'Edm.String': return property.name === 'Code' ? 'CODE' : property.name === 'Nom' ? 'Nom' : 'texte';
    case 'Edm.Int64': case 'Edm.Int32': case 'Edm.Int16': case 'Edm.Byte':
      return /Id$/.test(property.name) ? 1234567 : 0;
    case 'Edm.Double': case 'Edm.Decimal': case 'Edm.Single': return 0;
    case 'Edm.Boolean': return false;
    case 'Edm.DateTimeOffset': return '2026-09-01T00:00:00+02:00';
    case 'Edm.Date': return '2026-09-01';
    case 'Edm.TimeOfDay': return '08:00:00';
    case 'Edm.Guid': return '00000000-0000-0000-0000-000000000000';
  }
  const target = route.types[type];
  return target?.kind === 'enum' ? target.members[0]?.name ?? null : {};
}

// Valeur renvoyée par l'API pour un champ non renseigné, comme dans les réponses des autres pages.
function responseSample(route, property) {
  if (property.name === 'Id') return 1234567;
  const type = unwrap(property.type);
  if (property.type.startsWith('Collection(')) return [];
  switch (type) {
    case 'Edm.String': return '';
    case 'Edm.Int64': case 'Edm.Int32': case 'Edm.Int16': case 'Edm.Byte':
    case 'Edm.Double': case 'Edm.Decimal': case 'Edm.Single': return 0;
    case 'Edm.Boolean': return false;
    case 'Edm.Guid': return '00000000-0000-0000-0000-000000000000';
    case 'Edm.DateTimeOffset': case 'Edm.Date': case 'Edm.TimeOfDay': return null;
  }
  const target = route.types[type];
  return target?.kind === 'enum' ? target.members[0]?.name ?? null : null;
}

function codeGroup(lang, label, code) {
  return ['::: code-group', '', `\`\`\`${lang} [${label}]`, code, '```', '', ':::'].join('\n');
}

function curl(verb, url, body) {
  const lines = [`curl ${url} \\`];
  if (verb !== 'GET') lines.push(`  --request ${verb} \\`);
  if (body !== undefined) {
    lines.push(`  --header 'Content-Type: application/json' \\`);
    lines.push(`  --data '${JSON.stringify(body, null, 2).replace(/'/g, "'\\''")}' \\`);
  }
  lines.push(`  ${auth}`);
  return codeGroup('bash', 'cURL', lines.join('\n'));
}

function response(context, value) {
  return ['### Réponse', '', codeGroup('json', 'JSON', JSON.stringify({ '@odata.context': context, ...value }, null, 2))].join('\n');
}

// « l’identifiant (IBAN ou SWIFT) … » : style des listes de données obligatoires des autres pages.
const asClause = text => text.charAt(0).toLowerCase() + text.slice(1).replace(/\.$/, '');

function requiredItem(route, name, allMembers) {
  const property = allMembers.get(name);
  if (property?.description) return `- \`${name}\`, ${asClause(property.description)}`;
  const navigation = allMembers.get(/^(.+)Id$/.exec(name)?.[1]);
  if (navigation?.kind === 'navigation') {
    const link = linkForType(route, unwrap(navigation.type));
    if (link.startsWith('[')) return `- \`${name}\` *(voir ${link})*`;
  }
  return `- \`${name}\``;
}

// Requêtes déjà présentes dans la partie écrite à la main, sous la forme "VERBE /Set/{id}/Nav".
function documentedRequests(manual) {
  const found = new Set();
  for (const block of manual.matchAll(/```(?:bash|sh|shell)[^\n]*\n([\s\S]*?)```/g)) {
    for (const command of block[1].split(/\n(?=curl\s)/)) {
      const url = /GraphV1\/([^\s'"?\\]+)/.exec(command);
      if (!url) continue;
      const verb = (/(?:--request|-X)\s+'?(\w+)/.exec(command)?.[1]
        ?? (/(?:^|\s)(?:--data\S*|-d|-F|--form)\s/.test(command) ? 'POST' : 'GET')).toUpperCase();
      found.add(`${verb} ${normalizePath(url[1])}`);
    }
  }
  return found;
}

const KEY = /^(\d+|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i;

function normalizePath(urlPath) {
  return '/' + urlPath.replace(/\(([^)]+)\)/g, '/$1').split('/').filter(Boolean).map(s => (KEY.test(s) ? '{id}' : s)).join('/');
}

// Ordre et intitulés des sections, sur le modèle des pages existantes.
const SECTIONS = [
  { verb: 'GET', kind: 'collection', title: n => `Lister ${n.les}` },
  { verb: 'GET', kind: 'entity', title: n => `Récupérer ${n.un} avec ${n.possessif} identifiant` },
  { verb: 'POST', kind: 'collection', title: n => `Créer ${n.un}` },
  { verb: 'PUT', kind: 'entity', title: n => `Modifier ${n.un}` },
  { verb: 'PATCH', kind: 'entity', title: n => `Modifier partiellement ${n.un}` },
  { verb: 'DELETE', kind: 'entity', title: n => `Supprimer ${n.un}` },
];

// Les sections des opérations que la page ne montre pas déjà ; vide si la page couvre tout.
function renderSections(entry, frontMatter, manual) {
  if (frontMatter['reference-examples'] === false) return '';
  const { route, set, typeName, key } = entry;
  const allMembers = members(route, typeName);
  const properties = [...allMembers.values()].filter(p => p.kind === 'property');
  const writable = properties.filter(p => p.name !== 'Id');
  const required = requiredOnCreate(route, typeName);
  const documented = documentedRequests(manual);
  const name = names(key, pages.get(key));
  const collectionUrl = `${baseUrl}/${key}`;
  const entityUrl = `${collectionUrl}/1234567`;
  const metadata = `${baseUrl}/${route.prefix ? `${route.prefix}/` : ''}$metadata#${set.name}`;
  const entity = Object.fromEntries(properties.map(p => [p.name, responseSample(route, p)]));
  const createBody = Object.fromEntries((required.length ? writable.filter(p => required.includes(p.name)) : writable).map(p => [p.name, requestSample(route, p)]));

  const out = [];
  for (const section of SECTIONS) {
    const available = set.operations.some(o => o.kind === section.kind && o.verbs.includes(section.verb));
    const path = section.kind === 'entity' ? `/${key}/{id}` : `/${key}`;
    if (!available || documented.has(`${section.verb} ${path}`)) continue;

    out.push(`## ${section.title(name)}`, '');
    if (section.verb === 'GET' && section.kind === 'collection') {
      out.push(curl('GET', collectionUrl), '', response(metadata, { value: [entity] }));
    } else if (section.verb === 'GET') {
      out.push(curl('GET', entityUrl), '', response(`${metadata}/$entity`, entity));
    } else if (section.verb === 'POST') {
      const particular = writable.filter(p => p.description && !required.includes(p.name));
      if (particular.length) {
        out.push('### Champs particuliers', '');
        for (const p of particular) out.push(`#### \`${p.name}\``, '', p.description, '');
      }
      // Sans [RequiredOnCreate], pas de liste : le rapport signale ce qui manque.
      if (required.length) out.push('### Données obligatoires', '', ...writable.filter(p => required.includes(p.name)).map(p => requiredItem(route, p.name, allMembers)), '');
      out.push(curl('POST', collectionUrl, createBody), '', response(`${metadata}/$entity`, { ...entity, ...createBody }));
    } else if (section.verb === 'DELETE') {
      out.push(curl('DELETE', entityUrl), '', '### Réponse', '', 'La réponse est vide (code HTTP 204).');
    } else {
      out.push(UPDATE_WARNING, '', curl(section.verb, entityUrl, createBody), '', response(`${metadata}/$entity`, { ...entity, ...createBody }));
    }
    out.push('');
  }
  return out.length ? [START, '', ...out, END].join('\n') : '';
}

// Champs listés sous « Données obligatoires » dans la partie écrite à la main.
function documentedRequired(manual) {
  const section = /^#{2,4} Données obligatoires\s*\n([\s\S]*?)(?=\n:::|\n```|\n#)/m.exec(manual);
  return section ? [...section[1].matchAll(/^\s*-\s+`([^`]+)`/gm)].map(m => m[1]) : null;
}

// ---------------------------------------------------------------------------------------------------------------------
// Pages

function parseFrontMatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(text);
  const data = {};
  if (m) for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([\w-]+):\s*(.*)$/.exec(line);
    if (kv) data[kv[1]] = kv[2] === 'false' ? false : kv[2] === 'true' ? true : kv[2];
  }
  return data;
}

function renderPage(entry, existing) {
  const page = pages.get(entry.key);
  const original = existing ?? `# ${page.title ?? capitalize(names(entry.key, page).nom)}\n`;
  const manual = original.replace(BLOCK, '\n');
  const sections = renderSections(entry, parseFrontMatter(original), manual);
  checkRequiredList(entry, page, manual);
  return `${manual.replace(/\s+$/, '')}\n${sections ? `\n${sections}\n` : ''}`;
}

// La liste « Données obligatoires » écrite à la main doit correspondre à [RequiredOnCreate] dans l'API publique.
const requiredMismatches = [];
function checkRequiredList(entry, page, manual) {
  const documented = documentedRequired(manual);
  const expected = requiredOnCreate(entry.route, entry.typeName);
  if (!documented || !expected.length) return;
  const missing = expected.filter(r => !documented.includes(r));
  const extra = documented.filter(r => !expected.includes(r));
  if (missing.length || extra.length) requiredMismatches.push({ page: `${page.page}.md`, missing, extra });
}

const problems = [];   // bloquants en --check
const warnings = [];   // à traiter, non bloquants
const outdated = [];
const navEntries = [];

for (const [key, page] of pages) {
  const entry = sets.get(key);
  if (!entry) {
    problems.push(`La page ${page.page}.md documente l’entity set ${key}, qui n’existe plus dans l'API publique.`);
    continue;
  }
  const file = path.join(resourcesDir, `${page.page}.md`);
  const raw = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  // Les pages mélangent CRLF et LF selon les postes : on compare sans tenir compte des fins de ligne et on garde celles du fichier.
  const existing = raw?.replace(/\r\n/g, '\n') ?? null;
  const rendered = renderPage(entry, existing);
  const title = page.title ?? /^#\s+(.+)$/m.exec(rendered)?.[1].replace(/`/g, '') ?? entry.set.name;
  if (page.nav !== false) navEntries.push({ section: page.page.split('/')[0], text: title, link: `/reference/ressources/${page.page}` });
  if (rendered !== existing) {
    outdated.push(`${page.page}.md`);
    if (!checkMode) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, raw?.includes('\r\n') ? rendered.replace(/\n/g, '\r\n') : rendered);
    }
  }
}

navEntries.sort((a, b) => a.section.localeCompare(b.section) || a.text.localeCompare(b.text, 'fr'));
const nav = JSON.stringify({ sections: config.sections, pages: navEntries }, null, 2) + '\n';
if (!fs.existsSync(navFile) || fs.readFileSync(navFile, 'utf8') !== nav) {
  outdated.push(path.relative(repo, navFile));
  if (!checkMode) fs.writeFileSync(navFile, nav);
}

// ---------------------------------------------------------------------------------------------------------------------
// Tableau de correspondance des noms hérités (reference/noms-herites.json, produit par tools/export-noms-herites.mjs).

const UNIVERS = { '': 'Core', Academie: 'Académie', CRM: 'CRM', Gestion: 'Finance', International: 'International', Internship: 'Relation entreprise', Intranet: 'Intranet', Pedagogie: 'Pédagogie', Planification: 'Planification', Recrutement: 'Admission', RH: 'Ressources humaines', Scolarite: 'Inscription', Signature: 'Signature', Tempo: 'Tempo' };
const legacyFile = path.join(srcDir, 'reference', 'correspondance-entites-noms-herites.md');

if (fs.existsSync(path.join(repo, 'reference', 'noms-herites.json')) && fs.existsSync(legacyFile)) {
  const rows = readJson('reference/noms-herites.json').entites
    .filter(e => e.nomHerite && sets.has(e.entitySet))
    .map(e => {
      const page = pages.get(e.entitySet);
      const nom = page ? capitalize(names(e.entitySet, page).nom) : `\`${e.entitySet}\``;
      const univers = page ? config.sections[page.page.split('/')[0]] : UNIVERS[e.univers] ?? e.univers;
      const entite = page ? `[${nom}](/reference/ressources/${page.page})` : nom;
      return { univers, tri: nom.replace(/`/g, '').toLowerCase(), cells: [univers, entite, `\`/${e.entitySet}\``, `\`${e.nomHerite}\``] };
    })
    .sort((a, b) => a.univers.localeCompare(b.univers, 'fr') || a.tri.localeCompare(b.tri, 'fr'));
  const table = [
    START, '',
    '| Univers | Nom de l’entité | Point de terminaison dans l’API | Nom hérité |',
    '|---------|-----------------|---------------------------------|------------|',
    ...rows.map(r => `| ${r.cells.join(' | ')} |`),
    '', END,
  ].join('\n');
  const raw = fs.readFileSync(legacyFile, 'utf8');
  const existing = raw.replace(/\r\n/g, '\n');
  const manual = existing.replace(BLOCK, '\n').replace(/\n*$/, '');
  const rendered = `${manual}\n\n${table}\n`;
  if (rendered !== existing) {
    outdated.push(path.relative(srcDir, legacyFile));
    if (!checkMode) fs.writeFileSync(legacyFile, raw.includes('\r\n') ? rendered.replace(/\n/g, '\r\n') : rendered);
  }
}

// ---------------------------------------------------------------------------------------------------------------------
// Contrôle des exemples écrits à la main : un champ qui n'existe plus dans le type renvoyé ou envoyé.

const staleFields = [];

function resolvePath(segments) {
  // segments : ["Cours", "1234567", "EnseignantsCours"] ou ["selection", "Concours"]
  let prefix = '';
  if (segments.length && routes.has(segments[0]) && segments[0] !== '') prefix = segments.shift();
  const first = segments.shift();
  const entry = first && sets.get(prefix ? `${prefix}/${first}` : first);
  if (!entry) return null;
  let route = entry.route, typeName = entry.typeName;
  for (const segment of segments) {
    if (KEY.test(segment) || segment === '$entity' || segment === '$count') continue;
    const member = members(route, typeName).get(segment);
    if (member?.kind !== 'navigation') return null; // action, fonction ou segment inconnu : on ne contrôle pas
    typeName = unwrap(member.type);
  }
  return { route, typeName };
}

function contextType(context) {
  const fragment = /\$metadata#(.+)$/.exec(context)?.[1];
  if (!fragment) return null;
  const segments = fragment.replace(/\([^)]*\)/g, m => (/^\(\d+\)$/.test(m) ? `/${m.slice(1, -1)}` : '')).split('/').filter(Boolean);
  const prefix = /GraphV1\/(selection|messages)\/\$metadata/i.exec(context)?.[1]?.toLowerCase();
  return resolvePath(prefix ? [prefix, ...segments] : segments);
}

function urlType(url) {
  const m = /GraphV1\/([^\s'"?\\]+)/.exec(url);
  return m ? resolvePath(m[1].replace(/\((\d+)\)/g, '/$1').split('/').filter(Boolean)) : null;
}

function lenientParse(text) {
  try {
    // Tolère les commentaires, les lignes « ... » qui abrègent un exemple et les virgules finales.
    return JSON.parse(text.replace(/^\s*\/\/.*$/gm, '').replace(/^\s*(\.\.\.|…),?\s*$/gm, '').replace(/,(\s*[}\]])/g, '$1'));
  } catch {
    return undefined;
  }
}

function checkObject(value, target, page, where) {
  if (Array.isArray(value)) return value.forEach(v => checkObject(v, target, page, where));
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value.value) && !members(target.route, target.typeName).has('value')) return checkObject(value.value, target, page, where);
  const known = members(target.route, target.typeName);
  const derived = Object.values(target.route.types).filter(t => typeChain(target.route, Object.keys(target.route.types).find(k => target.route.types[k] === t)).includes(target.route.types[target.typeName]));
  for (const [field, child] of Object.entries(value)) {
    if (field.includes('@') || field.startsWith('#')) continue;
    const member = known.get(field) ?? derived.flatMap(t => t.properties).find(p => p.name === field);
    if (!member) {
      const stale = { page, field, type: shortName(target.typeName), where };
      if (!staleFields.some(s => JSON.stringify(s) === JSON.stringify(stale))) staleFields.push(stale);
      continue;
    }
    if (member.kind === 'navigation' && child && typeof child === 'object') checkObject(child, { route: target.route, typeName: unwrap(member.type) }, page, where);
  }
}

function walkPages(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return ['.vitepress', 'public'].includes(e.name) ? [] : walkPages(full);
    return e.name.endsWith('.md') ? [full] : [];
  });
}

for (const file of walkPages(srcDir)) {
  const rel = path.relative(srcDir, file).split(path.sep).join('/');
  const manual = fs.readFileSync(file, 'utf8').replace(BLOCK, '\n');
  let lastRequest = null;
  for (const block of manual.matchAll(/```(\w+)[^\n]*\n([\s\S]*?)```/g)) {
    const [, lang, code] = block;
    if (['bash', 'sh', 'shell'].includes(lang)) {
      lastRequest = urlType(code);
      const data = /--data(?:-raw)?\s+'([\s\S]*?)'(?=\s*\\?\s*(?:\n|$))/.exec(code);
      const body = data && lenientParse(data[1]);
      if (body && lastRequest) checkObject(body, lastRequest, rel, 'requête');
    } else if (lang === 'json') {
      const json = lenientParse(code);
      if (json === undefined) continue;
      // Un contexte OData fait foi ; s'il ne désigne pas une ressource (ex. #Edm.Guid), on ne contrôle pas le bloc.
      const target = json && typeof json['@odata.context'] === 'string' ? contextType(json['@odata.context']) : lastRequest;
      if (target) checkObject(json, target, rel, 'réponse');
    }
  }
}

for (const s of staleFields) problems.push(`${s.page} : le champ \`${s.field}\` (${s.where}) n’existe plus sur \`${s.type}\`.`);

// Un nom technique différent du nom métier ne s'écrit qu'en monospace (`Mail`, pas Mail).
const fold = text => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
// verifierNomTechnique: false pour un nom technique qui est aussi un mot courant de la doc (ex. l'univers Planification).
const technicalNames = [...pages]
  .filter(([key, page]) => page.nom && page.verifierNomTechnique !== false && fold(page.nom) !== fold(key.replace(/^\w+\//, '')))
  .map(([key, page]) => ({ name: key.replace(/^\w+\//, ''), nom: page.nom }));
const blank = match => match.replace(/[^\n]/g, ' ');
const bareTechnicalNames = [];
for (const file of walkPages(srcDir)) {
  const rel = path.relative(srcDir, file).split(path.sep).join('/');
  const prose = fs.readFileSync(file, 'utf8')
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, blank)
    .replace(/```[\s\S]*?```/g, blank)
    .replace(/<!--[\s\S]*?-->/g, blank)
    .replace(/`[^`\n]*`/g, blank)
    .replace(/\]\([^)]*\)/g, blank)
    .replace(/^\[[^\]]+\]:.*$/gm, blank);
  for (const { name, nom } of technicalNames) {
    for (const m of prose.matchAll(new RegExp(`(?<![\\w/.-])${name}(?![\\w-])`, 'g'))) {
      const line = prose.slice(0, m.index).split('\n').length;
      bareTechnicalNames.push({ page: rel, line, name, nom });
    }
  }
}
for (const t of bareTechnicalNames) problems.push(`${t.page}:${t.line} : « ${t.name} » est un nom technique, écrire « ${t.nom} » ou \`${t.name}\`.`);
for (const m of requiredMismatches) {
  problems.push(`${m.page} : « Données obligatoires » diffère de l'API publique${m.missing.length ? ` (manquent ${m.missing.join(', ')})` : ''}${m.extra.length ? ` (en trop ${m.extra.join(', ')})` : ''}.`);
}

// Entity sets publiés par l'API mais ni documentés ni volontairement ignorés.
const unsorted = [...sets.keys()].filter(k => !pages.has(k) && !isIgnored(k));
if (unsorted.length) warnings.push(`${unsorted.length} entity sets ne sont ni documentés ni ignorés (reference/pages.json).`);

// ---------------------------------------------------------------------------------------------------------------------
// Sorties

if (reportFile) fs.writeFileSync(path.resolve(reportFile), renderReport());

if (checkMode && outdated.length) problems.unshift(`Pages à régénérer (npm run reference) : ${outdated.join(', ')}`);
for (const w of warnings) console.warn(`avertissement : ${w}`);
for (const p of problems) console.error(`erreur : ${p}`);
if (!checkMode) console.log(`${pages.size} pages traitées, ${outdated.length} fichiers mis à jour.`);
// La génération n'échoue pas : les problèmes vont dans le rapport (et la PR automatique). Seul --check bloque.
if (checkMode && problems.length) process.exitCode = 1;

function renderReport() {
  const lines = ['# GraphV1 : ce qu’il reste à documenter', '', `Modèle exporté de GraphV1 ${model.assemblyVersion}.`, ''];
  const missingRequired = [...pages.keys()].map(k => sets.get(k)).filter(Boolean)
    .filter(e => e.set.operations.some(o => o.verbs.includes('POST') && o.kind === 'collection') && !requiredOnCreate(e.route, e.typeName).length);
  const undescribed = [...pages.keys()].map(k => sets.get(k)).filter(Boolean).map(e => {
    const props = [...members(e.route, e.typeName).values()].filter(p => p.kind === 'property' && p.name !== 'Id');
    const done = props.filter(p => p.description).length;
    return { key: e.key, done, total: props.length };
  }).filter(x => x.done < x.total).sort((a, b) => (a.done / a.total) - (b.done / b.total));

  lines.push('## Champs d’exemples qui n’existent plus', '');
  lines.push(...(staleFields.length ? ['| Page | Champ | Type | Où |', '|---|---|---|---|', ...staleFields.map(s => `| ${s.page} | \`${s.field}\` | ${s.type} | ${s.where} |`)] : ['Aucun.']), '');
  lines.push('## Noms techniques hors monospace', '', 'Utiliser le nom métier, ou le nom technique entre `` ` ``.', '');
  lines.push(...(bareTechnicalNames.length ? ['| Page | Ligne | Nom technique | Nom métier |', '|---|---|---|---|',
    ...bareTechnicalNames.map(t => `| ${t.page} | ${t.line} | ${t.name} | ${t.nom} |`)] : ['Aucun.']), '');
  lines.push('## « Données obligatoires » différentes de GraphV1', '');
  lines.push(...(requiredMismatches.length ? ['| Page | Manquent dans la page | En trop dans la page |', '|---|---|---|',
    ...requiredMismatches.map(m => `| ${m.page} | ${m.missing.map(f => `\`${f}\``).join(', ')} | ${m.extra.map(f => `\`${f}\``).join(', ')} |`)] : ['Aucune.']), '');
  lines.push('## Champs obligatoires à la création non renseignés dans GraphV1', '', 'À compléter avec `[RequiredOnCreate(...)]` sur la classe du modèle.', '');
  lines.push(...(missingRequired.length ? missingRequired.map(e => `- \`${e.key}\` (${e.set.controller ?? 'sans contrôleur'})`) : ['Aucun.']), '');
  lines.push('## Champs sans description', '', 'À compléter avec un commentaire `/// <summary>` sur la propriété du modèle.', '', '| Entity set | Décrits |', '|---|---|');
  lines.push(...undescribed.map(u => `| \`${u.key}\` | ${u.done} / ${u.total} |`), '');
  lines.push('## Entity sets à trier', '', 'À ajouter dans `graphv1/pages.json`, soit dans `pages` (une page sera créée), soit dans `ignore`.', '');
  const byNamespace = new Map();
  for (const key of unsorted) {
    const controller = sets.get(key).set.controller ?? '';
    const ns = controller.replace(/^GraphV1\.Controllers\.?/, '').replace(/\.?[^.]+$/, '') || 'Core';
    byNamespace.set(ns, [...(byNamespace.get(ns) ?? []), key]);
  }
  lines.push('| Domaine | Entity sets |', '|---|---|', ...[...byNamespace].sort().map(([ns, keys]) => `| ${ns} | ${keys.map(k => `\`${k}\``).join(', ')} |`), '');
  return lines.join('\n');
}
