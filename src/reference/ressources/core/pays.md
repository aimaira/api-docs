# Pays

## Lister les pays

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Pays
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Pays",
  "value": [
    {
      "Id": 1155,
      "Nom": "France",
      "Code": "FR",
      "ContinentId": 1,
      "Nationalite": "française",
      "Prioritaire": true,
      "Europeen": true,
      "CodeSISE": "100",
      "CodeAlpha3": "FRA"
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un pays avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Pays/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Pays/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ContinentId": 0,
  "Nationalite": "",
  "Prioritaire": false,
  "Europeen": false,
  "CodeSISE": "",
  "CodeAlpha3": ""
}
```

:::

## Créer un pays

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Pays \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ContinentId": 1234567,
  "Nationalite": "texte",
  "Prioritaire": false,
  "Europeen": false,
  "CodeSISE": "texte",
  "CodeAlpha3": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Pays/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ContinentId": 1234567,
  "Nationalite": "texte",
  "Prioritaire": false,
  "Europeen": false,
  "CodeSISE": "texte",
  "CodeAlpha3": "texte"
}
```

:::

## Modifier un pays

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Pays/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ContinentId": 1234567,
  "Nationalite": "texte",
  "Prioritaire": false,
  "Europeen": false,
  "CodeSISE": "texte",
  "CodeAlpha3": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Pays/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ContinentId": 1234567,
  "Nationalite": "texte",
  "Prioritaire": false,
  "Europeen": false,
  "CodeSISE": "texte",
  "CodeAlpha3": "texte"
}
```

:::

## Supprimer un pays

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Pays/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
