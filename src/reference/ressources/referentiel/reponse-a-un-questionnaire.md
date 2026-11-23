# Réponse à un questionnaire

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une réponse à un questionnaire avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ResponseSurvey/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ResponseSurvey/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "JsonResponse": "",
  "RefId": 0,
  "UserID": 0,
  "JsonSurvey": "",
  "DateComplete": null,
  "LastUpdate": null,
  "SurveyId": 0
}
```

:::

## Créer une réponse à un questionnaire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ResponseSurvey \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "JsonResponse": "texte",
  "RefId": 1234567,
  "UserID": 0,
  "JsonSurvey": "texte",
  "DateComplete": "2026-09-01T00:00:00+02:00",
  "LastUpdate": "2026-09-01T00:00:00+02:00",
  "SurveyId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ResponseSurvey/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "JsonResponse": "texte",
  "RefId": 1234567,
  "UserID": 0,
  "JsonSurvey": "texte",
  "DateComplete": "2026-09-01T00:00:00+02:00",
  "LastUpdate": "2026-09-01T00:00:00+02:00",
  "SurveyId": 1234567
}
```

:::

## Modifier une réponse à un questionnaire

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ResponseSurvey/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "JsonResponse": "texte",
  "RefId": 1234567,
  "UserID": 0,
  "JsonSurvey": "texte",
  "DateComplete": "2026-09-01T00:00:00+02:00",
  "LastUpdate": "2026-09-01T00:00:00+02:00",
  "SurveyId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ResponseSurvey/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "JsonResponse": "texte",
  "RefId": 1234567,
  "UserID": 0,
  "JsonSurvey": "texte",
  "DateComplete": "2026-09-01T00:00:00+02:00",
  "LastUpdate": "2026-09-01T00:00:00+02:00",
  "SurveyId": 1234567
}
```

:::

## Supprimer une réponse à un questionnaire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ResponseSurvey/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
