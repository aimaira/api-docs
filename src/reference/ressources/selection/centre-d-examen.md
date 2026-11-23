# Centre d’examen

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les centres d’examen

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/CentreExamen \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#CentreExamen",
  "value": [
    {
      "EcoleId": 0,
      "IdLink": 0,
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer un centre d’examen avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/CentreExamen/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#CentreExamen/$entity",
  "EcoleId": 0,
  "IdLink": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un centre d’examen

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/CentreExamen \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "EcoleId": 1234567,
  "IdLink": 0,
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#CentreExamen/$entity",
  "EcoleId": 1234567,
  "IdLink": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un centre d’examen

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/CentreExamen/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "EcoleId": 1234567,
  "IdLink": 0,
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#CentreExamen/$entity",
  "EcoleId": 1234567,
  "IdLink": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un centre d’examen

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/CentreExamen/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
