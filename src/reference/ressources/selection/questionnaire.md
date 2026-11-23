# Questionnaire

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un questionnaire avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Survey/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Survey/$entity",
  "Json": "",
  "Libelle": "",
  "DebutOuverture": null,
  "FinOuverture": null,
  "CategorieSurveyId": 0,
  "RefId": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un questionnaire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Survey \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Json": "texte",
  "Libelle": "texte",
  "DebutOuverture": "2026-09-01T00:00:00+02:00",
  "FinOuverture": "2026-09-01T00:00:00+02:00",
  "CategorieSurveyId": 1234567,
  "RefId": 1234567,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Survey/$entity",
  "Json": "texte",
  "Libelle": "texte",
  "DebutOuverture": "2026-09-01T00:00:00+02:00",
  "FinOuverture": "2026-09-01T00:00:00+02:00",
  "CategorieSurveyId": 1234567,
  "RefId": 1234567,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un questionnaire

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Survey/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Json": "texte",
  "Libelle": "texte",
  "DebutOuverture": "2026-09-01T00:00:00+02:00",
  "FinOuverture": "2026-09-01T00:00:00+02:00",
  "CategorieSurveyId": 1234567,
  "RefId": 1234567,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Survey/$entity",
  "Json": "texte",
  "Libelle": "texte",
  "DebutOuverture": "2026-09-01T00:00:00+02:00",
  "FinOuverture": "2026-09-01T00:00:00+02:00",
  "CategorieSurveyId": 1234567,
  "RefId": 1234567,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un questionnaire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Survey/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
