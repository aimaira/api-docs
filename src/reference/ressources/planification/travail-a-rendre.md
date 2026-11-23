# Travail à rendre

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un travail à rendre avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Travaux/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Travaux/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "CoursId": 0,
  "GroupeId": 0,
  "TypeTravauxId": 0,
  "Date": null,
  "DescriptifId": 0,
  "SeanceId": 0,
  "DateDernierUpload": null
}
```

:::

## Créer un travail à rendre

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Travaux \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "GroupeId": 1234567,
  "TypeTravauxId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DescriptifId": 1234567,
  "SeanceId": 1234567,
  "DateDernierUpload": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Travaux/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "GroupeId": 1234567,
  "TypeTravauxId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DescriptifId": 1234567,
  "SeanceId": 1234567,
  "DateDernierUpload": "2026-09-01T00:00:00+02:00"
}
```

:::

## Modifier un travail à rendre

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Travaux/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "GroupeId": 1234567,
  "TypeTravauxId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DescriptifId": 1234567,
  "SeanceId": 1234567,
  "DateDernierUpload": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Travaux/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "GroupeId": 1234567,
  "TypeTravauxId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DescriptifId": 1234567,
  "SeanceId": 1234567,
  "DateDernierUpload": "2026-09-01T00:00:00+02:00"
}
```

:::

## Supprimer un travail à rendre

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Travaux/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
