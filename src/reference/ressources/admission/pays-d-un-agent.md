# Pays d’un agent

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un pays d’un agent avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AgentPays/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AgentPays/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "AgentId": 0,
  "PaysId": 0
}
```

:::

## Créer un pays d’un agent

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AgentPays \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "AgentId": 1234567,
  "PaysId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AgentPays/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "AgentId": 1234567,
  "PaysId": 1234567
}
```

:::

## Modifier un pays d’un agent

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AgentPays/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "AgentId": 1234567,
  "PaysId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AgentPays/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "AgentId": 1234567,
  "PaysId": 1234567
}
```

:::

## Supprimer un pays d’un agent

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AgentPays/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
