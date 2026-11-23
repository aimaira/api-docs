# Adresse

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une adresse avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Adresse/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Adresse/$entity",
  "Adresse1": "",
  "Adresse2": "",
  "Adresse3": "",
  "Adresse4": "",
  "CodePostal": "",
  "Ville": "",
  "Cedex": "",
  "PaysId": 0,
  "DatePeremption": null,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une adresse

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Adresse \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Adresse1": "texte",
  "Adresse2": "texte",
  "Adresse3": "texte",
  "Adresse4": "texte",
  "CodePostal": "texte",
  "Ville": "texte",
  "Cedex": "texte",
  "PaysId": 1234567,
  "DatePeremption": "2026-09-01T00:00:00+02:00",
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Adresse/$entity",
  "Adresse1": "texte",
  "Adresse2": "texte",
  "Adresse3": "texte",
  "Adresse4": "texte",
  "CodePostal": "texte",
  "Ville": "texte",
  "Cedex": "texte",
  "PaysId": 1234567,
  "DatePeremption": "2026-09-01T00:00:00+02:00",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une adresse

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Adresse/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Adresse1": "texte",
  "Adresse2": "texte",
  "Adresse3": "texte",
  "Adresse4": "texte",
  "CodePostal": "texte",
  "Ville": "texte",
  "Cedex": "texte",
  "PaysId": 1234567,
  "DatePeremption": "2026-09-01T00:00:00+02:00",
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Adresse/$entity",
  "Adresse1": "texte",
  "Adresse2": "texte",
  "Adresse3": "texte",
  "Adresse4": "texte",
  "CodePostal": "texte",
  "Ville": "texte",
  "Cedex": "texte",
  "PaysId": 1234567,
  "DatePeremption": "2026-09-01T00:00:00+02:00",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une adresse

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Adresse/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
