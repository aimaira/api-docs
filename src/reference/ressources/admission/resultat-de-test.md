# Résultat de test

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un résultat de test avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauTest/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauTest/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "DossierId": 0,
  "TestId": 0,
  "Resultat": "",
  "DatePassage": null,
  "GrilleEvaluation": 0
}
```

:::

## Créer un résultat de test

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauTest \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "TestId": 1234567,
  "Resultat": "texte",
  "DatePassage": "2026-09-01T00:00:00+02:00",
  "GrilleEvaluation": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauTest/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "TestId": 1234567,
  "Resultat": "texte",
  "DatePassage": "2026-09-01T00:00:00+02:00",
  "GrilleEvaluation": 0
}
```

:::

## Modifier un résultat de test

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauTest/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "TestId": 1234567,
  "Resultat": "texte",
  "DatePassage": "2026-09-01T00:00:00+02:00",
  "GrilleEvaluation": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauTest/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "TestId": 1234567,
  "Resultat": "texte",
  "DatePassage": "2026-09-01T00:00:00+02:00",
  "GrilleEvaluation": 0
}
```

:::

## Supprimer un résultat de test

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauTest/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
