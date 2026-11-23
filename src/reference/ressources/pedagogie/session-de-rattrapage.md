# Session de rattrapage

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une session de rattrapage avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionRattrapage/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionRattrapage/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "CoursId": 0,
  "Date": null,
  "RattrapagePublie": false
}
```

:::

## Créer une session de rattrapage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionRattrapage \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "RattrapagePublie": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionRattrapage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "RattrapagePublie": false
}
```

:::

## Modifier une session de rattrapage

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionRattrapage/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "RattrapagePublie": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionRattrapage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "RattrapagePublie": false
}
```

:::

## Supprimer une session de rattrapage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionRattrapage/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
