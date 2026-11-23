# Inscription à une séquence

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les inscriptions aux séquences

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionSequence \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionSequence",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ApprenantId": 0,
      "SequenceId": 0,
      "RedoublementPartiel": false,
      "PourcentageCorrectionNote": 0,
      "PointsCorrectionNote": 0,
      "CreditBonus": 0,
      "CreditJury": 0,
      "Precision": "",
      "AppreciationId": 0,
      "EtatCandidatureParcoursId": 0,
      "ReponseSurveyCandidatureId": 0,
      "ValidationInfosPerso": null,
      "ValidationGlobale": null,
      "DateDesinscription": null,
      "RelanceApprenant": false,
      "ContentieuxApprenant": false,
      "Note": 0,
      "NoteAvantRattrapage": 0,
      "Valide": false,
      "Rattrape": false,
      "NbCredits": 0,
      "DetailValidation": "",
      "SommePonderation": 0,
      "NoteFinale": 0,
      "CreditFinal": 0,
      "NoteSurcharge": 0,
      "CreditAvantRattrapage": 0,
      "CreditSurcharge": 0,
      "NoteRetenu": 0,
      "CreditRetenu": 0,
      "DecisionJuryId": 0,
      "CreditMax": 0
    }
  ]
}
```

:::

## Récupérer une inscription à une séquence avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionSequence/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionSequence/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ApprenantId": 0,
  "SequenceId": 0,
  "RedoublementPartiel": false,
  "PourcentageCorrectionNote": 0,
  "PointsCorrectionNote": 0,
  "CreditBonus": 0,
  "CreditJury": 0,
  "Precision": "",
  "AppreciationId": 0,
  "EtatCandidatureParcoursId": 0,
  "ReponseSurveyCandidatureId": 0,
  "ValidationInfosPerso": null,
  "ValidationGlobale": null,
  "DateDesinscription": null,
  "RelanceApprenant": false,
  "ContentieuxApprenant": false,
  "Note": 0,
  "NoteAvantRattrapage": 0,
  "Valide": false,
  "Rattrape": false,
  "NbCredits": 0,
  "DetailValidation": "",
  "SommePonderation": 0,
  "NoteFinale": 0,
  "CreditFinal": 0,
  "NoteSurcharge": 0,
  "CreditAvantRattrapage": 0,
  "CreditSurcharge": 0,
  "NoteRetenu": 0,
  "CreditRetenu": 0,
  "DecisionJuryId": 0,
  "CreditMax": 0
}
```

:::

## Créer une inscription à une séquence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionSequence \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "SequenceId": 1234567,
  "RedoublementPartiel": false,
  "PourcentageCorrectionNote": 0,
  "PointsCorrectionNote": 0,
  "CreditBonus": 0,
  "CreditJury": 0,
  "Precision": "texte",
  "AppreciationId": 1234567,
  "EtatCandidatureParcoursId": 1234567,
  "ReponseSurveyCandidatureId": 1234567,
  "ValidationInfosPerso": "2026-09-01T00:00:00+02:00",
  "ValidationGlobale": "2026-09-01T00:00:00+02:00",
  "DateDesinscription": "2026-09-01T00:00:00+02:00",
  "RelanceApprenant": false,
  "ContentieuxApprenant": false,
  "Note": 0,
  "NoteAvantRattrapage": 0,
  "Valide": false,
  "Rattrape": false,
  "NbCredits": 0,
  "DetailValidation": "texte",
  "SommePonderation": 0,
  "NoteFinale": 0,
  "CreditFinal": 0,
  "NoteSurcharge": 0,
  "CreditAvantRattrapage": 0,
  "CreditSurcharge": 0,
  "NoteRetenu": 0,
  "CreditRetenu": 0,
  "DecisionJuryId": 1234567,
  "CreditMax": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionSequence/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "SequenceId": 1234567,
  "RedoublementPartiel": false,
  "PourcentageCorrectionNote": 0,
  "PointsCorrectionNote": 0,
  "CreditBonus": 0,
  "CreditJury": 0,
  "Precision": "texte",
  "AppreciationId": 1234567,
  "EtatCandidatureParcoursId": 1234567,
  "ReponseSurveyCandidatureId": 1234567,
  "ValidationInfosPerso": "2026-09-01T00:00:00+02:00",
  "ValidationGlobale": "2026-09-01T00:00:00+02:00",
  "DateDesinscription": "2026-09-01T00:00:00+02:00",
  "RelanceApprenant": false,
  "ContentieuxApprenant": false,
  "Note": 0,
  "NoteAvantRattrapage": 0,
  "Valide": false,
  "Rattrape": false,
  "NbCredits": 0,
  "DetailValidation": "texte",
  "SommePonderation": 0,
  "NoteFinale": 0,
  "CreditFinal": 0,
  "NoteSurcharge": 0,
  "CreditAvantRattrapage": 0,
  "CreditSurcharge": 0,
  "NoteRetenu": 0,
  "CreditRetenu": 0,
  "DecisionJuryId": 1234567,
  "CreditMax": 0
}
```

:::

## Modifier une inscription à une séquence

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionSequence/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "SequenceId": 1234567,
  "RedoublementPartiel": false,
  "PourcentageCorrectionNote": 0,
  "PointsCorrectionNote": 0,
  "CreditBonus": 0,
  "CreditJury": 0,
  "Precision": "texte",
  "AppreciationId": 1234567,
  "EtatCandidatureParcoursId": 1234567,
  "ReponseSurveyCandidatureId": 1234567,
  "ValidationInfosPerso": "2026-09-01T00:00:00+02:00",
  "ValidationGlobale": "2026-09-01T00:00:00+02:00",
  "DateDesinscription": "2026-09-01T00:00:00+02:00",
  "RelanceApprenant": false,
  "ContentieuxApprenant": false,
  "Note": 0,
  "NoteAvantRattrapage": 0,
  "Valide": false,
  "Rattrape": false,
  "NbCredits": 0,
  "DetailValidation": "texte",
  "SommePonderation": 0,
  "NoteFinale": 0,
  "CreditFinal": 0,
  "NoteSurcharge": 0,
  "CreditAvantRattrapage": 0,
  "CreditSurcharge": 0,
  "NoteRetenu": 0,
  "CreditRetenu": 0,
  "DecisionJuryId": 1234567,
  "CreditMax": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionSequence/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "SequenceId": 1234567,
  "RedoublementPartiel": false,
  "PourcentageCorrectionNote": 0,
  "PointsCorrectionNote": 0,
  "CreditBonus": 0,
  "CreditJury": 0,
  "Precision": "texte",
  "AppreciationId": 1234567,
  "EtatCandidatureParcoursId": 1234567,
  "ReponseSurveyCandidatureId": 1234567,
  "ValidationInfosPerso": "2026-09-01T00:00:00+02:00",
  "ValidationGlobale": "2026-09-01T00:00:00+02:00",
  "DateDesinscription": "2026-09-01T00:00:00+02:00",
  "RelanceApprenant": false,
  "ContentieuxApprenant": false,
  "Note": 0,
  "NoteAvantRattrapage": 0,
  "Valide": false,
  "Rattrape": false,
  "NbCredits": 0,
  "DetailValidation": "texte",
  "SommePonderation": 0,
  "NoteFinale": 0,
  "CreditFinal": 0,
  "NoteSurcharge": 0,
  "CreditAvantRattrapage": 0,
  "CreditSurcharge": 0,
  "NoteRetenu": 0,
  "CreditRetenu": 0,
  "DecisionJuryId": 1234567,
  "CreditMax": 0
}
```

:::

## Supprimer une inscription à une séquence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionSequence/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
