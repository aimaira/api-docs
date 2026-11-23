# Harmonisation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une harmonisation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Harmonisation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Harmonisation/$entity",
  "EpreuveId": 0,
  "OrganisationEpreuveId": 0,
  "PointHarmonisation": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une harmonisation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Harmonisation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveId": 1234567,
  "OrganisationEpreuveId": 1234567,
  "PointHarmonisation": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Harmonisation/$entity",
  "EpreuveId": 1234567,
  "OrganisationEpreuveId": 1234567,
  "PointHarmonisation": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une harmonisation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Harmonisation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveId": 1234567,
  "OrganisationEpreuveId": 1234567,
  "PointHarmonisation": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Harmonisation/$entity",
  "EpreuveId": 1234567,
  "OrganisationEpreuveId": 1234567,
  "PointHarmonisation": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une harmonisation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Harmonisation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
