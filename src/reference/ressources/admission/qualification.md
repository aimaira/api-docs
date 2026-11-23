# Qualification

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une qualification avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Qualification/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Qualification/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "CandidatId": 0,
  "Resultat": "",
  "Date": null,
  "Valide": false,
  "TypeQualificationId": 0
}
```

:::

## Créer une qualification

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Qualification \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CandidatId": 1234567,
  "Resultat": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "Valide": false,
  "TypeQualificationId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Qualification/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CandidatId": 1234567,
  "Resultat": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "Valide": false,
  "TypeQualificationId": 1234567
}
```

:::

## Modifier une qualification

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Qualification/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CandidatId": 1234567,
  "Resultat": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "Valide": false,
  "TypeQualificationId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Qualification/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CandidatId": 1234567,
  "Resultat": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "Valide": false,
  "TypeQualificationId": 1234567
}
```

:::

## Supprimer une qualification

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Qualification/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
