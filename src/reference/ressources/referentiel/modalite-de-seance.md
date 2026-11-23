# Modalité de séance

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les modalités de séance

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Modalite \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Modalite",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "LibelleExterne": "",
      "Presentiel": false,
      "Distanciel": false
    }
  ]
}
```

:::

## Récupérer une modalité de séance avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Modalite/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Modalite/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "LibelleExterne": "",
  "Presentiel": false,
  "Distanciel": false
}
```

:::

## Créer une modalité de séance

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Modalite \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "Presentiel": false,
  "Distanciel": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Modalite/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "Presentiel": false,
  "Distanciel": false
}
```

:::

## Modifier une modalité de séance

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Modalite/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "Presentiel": false,
  "Distanciel": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Modalite/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "Presentiel": false,
  "Distanciel": false
}
```

:::

## Supprimer une modalité de séance

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Modalite/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
