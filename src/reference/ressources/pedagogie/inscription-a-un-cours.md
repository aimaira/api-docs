# Inscription à un cours

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les inscriptions aux cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionCours \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionCours",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ApprenantId": 0,
      "CoursId": 0,
      "AppreciationId": 0,
      "Valide": false,
      "Rattrape": false,
      "Note": 0,
      "Bonus": 0,
      "NoteAvantRattrapage": 0,
      "NbAbsencesJustifiees": 0,
      "NbAbsencesInjustifiees": 0,
      "NoteECTS": "",
      "Ponderation": 0,
      "CreditAvantRattrapage": 0,
      "NbCredits": 0,
      "CreditSurcharge": 0,
      "CreditFinal": 0,
      "DateDesinscription": null,
      "Precision": "",
      "DetailValidation": "",
      "NoteFinale": 0,
      "NoteRetenu": 0,
      "CreditRetenu": 0
    }
  ]
}
```

:::

## Récupérer une inscription à un cours avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionCours/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionCours/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ApprenantId": 0,
  "CoursId": 0,
  "AppreciationId": 0,
  "Valide": false,
  "Rattrape": false,
  "Note": 0,
  "Bonus": 0,
  "NoteAvantRattrapage": 0,
  "NbAbsencesJustifiees": 0,
  "NbAbsencesInjustifiees": 0,
  "NoteECTS": "",
  "Ponderation": 0,
  "CreditAvantRattrapage": 0,
  "NbCredits": 0,
  "CreditSurcharge": 0,
  "CreditFinal": 0,
  "DateDesinscription": null,
  "Precision": "",
  "DetailValidation": "",
  "NoteFinale": 0,
  "NoteRetenu": 0,
  "CreditRetenu": 0
}
```

:::

## Créer une inscription à un cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionCours \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "CoursId": 1234567,
  "AppreciationId": 1234567,
  "Valide": false,
  "Rattrape": false,
  "Note": 0,
  "Bonus": 0,
  "NoteAvantRattrapage": 0,
  "NbAbsencesJustifiees": 0,
  "NbAbsencesInjustifiees": 0,
  "NoteECTS": "texte",
  "Ponderation": 0,
  "CreditAvantRattrapage": 0,
  "NbCredits": 0,
  "CreditSurcharge": 0,
  "CreditFinal": 0,
  "DateDesinscription": "2026-09-01T00:00:00+02:00",
  "Precision": "texte",
  "DetailValidation": "texte",
  "NoteFinale": 0,
  "NoteRetenu": 0,
  "CreditRetenu": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionCours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "CoursId": 1234567,
  "AppreciationId": 1234567,
  "Valide": false,
  "Rattrape": false,
  "Note": 0,
  "Bonus": 0,
  "NoteAvantRattrapage": 0,
  "NbAbsencesJustifiees": 0,
  "NbAbsencesInjustifiees": 0,
  "NoteECTS": "texte",
  "Ponderation": 0,
  "CreditAvantRattrapage": 0,
  "NbCredits": 0,
  "CreditSurcharge": 0,
  "CreditFinal": 0,
  "DateDesinscription": "2026-09-01T00:00:00+02:00",
  "Precision": "texte",
  "DetailValidation": "texte",
  "NoteFinale": 0,
  "NoteRetenu": 0,
  "CreditRetenu": 0
}
```

:::

## Modifier une inscription à un cours

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionCours/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "CoursId": 1234567,
  "AppreciationId": 1234567,
  "Valide": false,
  "Rattrape": false,
  "Note": 0,
  "Bonus": 0,
  "NoteAvantRattrapage": 0,
  "NbAbsencesJustifiees": 0,
  "NbAbsencesInjustifiees": 0,
  "NoteECTS": "texte",
  "Ponderation": 0,
  "CreditAvantRattrapage": 0,
  "NbCredits": 0,
  "CreditSurcharge": 0,
  "CreditFinal": 0,
  "DateDesinscription": "2026-09-01T00:00:00+02:00",
  "Precision": "texte",
  "DetailValidation": "texte",
  "NoteFinale": 0,
  "NoteRetenu": 0,
  "CreditRetenu": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionCours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "CoursId": 1234567,
  "AppreciationId": 1234567,
  "Valide": false,
  "Rattrape": false,
  "Note": 0,
  "Bonus": 0,
  "NoteAvantRattrapage": 0,
  "NbAbsencesJustifiees": 0,
  "NbAbsencesInjustifiees": 0,
  "NoteECTS": "texte",
  "Ponderation": 0,
  "CreditAvantRattrapage": 0,
  "NbCredits": 0,
  "CreditSurcharge": 0,
  "CreditFinal": 0,
  "DateDesinscription": "2026-09-01T00:00:00+02:00",
  "Precision": "texte",
  "DetailValidation": "texte",
  "NoteFinale": 0,
  "NoteRetenu": 0,
  "CreditRetenu": 0
}
```

:::

## Supprimer une inscription à un cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionCours/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
