# Validation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une validation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Validation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Validation/$entity",
  "TypeValidation": "",
  "IdReference": 0,
  "Date": null,
  "Rejete": false,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une validation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Validation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "TypeValidation": "texte",
  "IdReference": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "Rejete": false,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Validation/$entity",
  "TypeValidation": "texte",
  "IdReference": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "Rejete": false,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une validation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Validation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "TypeValidation": "texte",
  "IdReference": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "Rejete": false,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Validation/$entity",
  "TypeValidation": "texte",
  "IdReference": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "Rejete": false,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une validation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Validation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
