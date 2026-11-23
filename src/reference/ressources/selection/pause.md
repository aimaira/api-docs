# Pause

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les pauses

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Pause \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Pause",
  "value": [
    {
      "Debut": null,
      "Fin": null,
      "EpreuveId": 0,
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer une pause avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Pause/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Pause/$entity",
  "Debut": null,
  "Fin": null,
  "EpreuveId": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une pause

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Pause \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Debut": {},
  "Fin": {},
  "EpreuveId": 1234567,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Pause/$entity",
  "Debut": {},
  "Fin": {},
  "EpreuveId": 1234567,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une pause

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Pause/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Debut": {},
  "Fin": {},
  "EpreuveId": 1234567,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Pause/$entity",
  "Debut": {},
  "Fin": {},
  "EpreuveId": 1234567,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une pause

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Pause/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
