# Séquence

## Lister les séquences d'une inscription

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionSequence \
  --header 'Content-Type: application/json' \
  --data '{
  "Id": 2220515
}' \
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
      "Id": 2267402,
      "Nom": "",
      "Code": "",
      "ApprenantId": 2220513,
      "SequenceId": 2232383,
      "RedoublementPartiel": false,
      "PourcentageCorrectionNote": 0.0,
      "PointsCorrectionNote": null,
      "CreditBonus": null,
      "CreditJury": 0.0,
      "Precision": "",
      "AppreciationId": 0,
      "EtatCandidatureParcoursId": 0,
      "ReponseSurveyCandidatureId": 0,
      "ValidationInfosPerso": null,
      "ValidationGlobale": null,
      "DateDesinscription": null,
      "RelanceReferentFinancier": false,
      "Note": null,
      "NoteAvantRattrapage": null,
      "Valide": false,
      "Rattrape": false,
      "NbCredits": null,
      "DetailValidation": "",
      "SommePonderation": null,
      "NoteFinale": null,
      "CreditFinal": null,
      "NoteSurcharge": null,
      "CreditAvantRattrapage": null,
      "CreditSurcharge": null,
      "NoteRetenu": null,
      "CreditRetenu": null,
      "DecisionJuryId": 0,
      "CreditMax": null
    },
    {
      "Id": 2267509,
      "Nom": "",
      "Code": "",
      "ApprenantId": 2220513,
      "SequenceId": 2232385,
      "RedoublementPartiel": false,
      "PourcentageCorrectionNote": 0.0,
      "PointsCorrectionNote": null,
      "CreditBonus": null,
      "CreditJury": 0.0,
      "Precision": "",
      "AppreciationId": 0,
      "EtatCandidatureParcoursId": 0,
      "ReponseSurveyCandidatureId": 0,
      "ValidationInfosPerso": null,
      "ValidationGlobale": null,
      "DateDesinscription": null,
      "RelanceReferentFinancier": false,
      "Note": null,
      "NoteAvantRattrapage": null,
      "Valide": false,
      "Rattrape": false,
      "NbCredits": null,
      "DetailValidation": "",
      "SommePonderation": null,
      "NoteFinale": null,
      "CreditFinal": null,
      "NoteSurcharge": null,
      "CreditAvantRattrapage": null,
      "CreditSurcharge": null,
      "NoteRetenu": null,
      "CreditRetenu": null,
      "DecisionJuryId": 0,
      "CreditMax": null
    },
    ...
  ]
}
```

:::
