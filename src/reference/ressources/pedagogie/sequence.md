# Séquence

## Récupérer une séquence avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Sequence/1234567 \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Sequence/$entity",
  "Id": 1234567,
  "Nom": "26-27 PGE 1 - PROFESSIONNALISATION",
  "Code": "",
  "ProgrammeId": 123456,
  "TypeSequenceId": 122650,
  "EtablissementId": 0,
  "CycleId": 0,
  "Debut": "2024-02-02T00:00:00+01:00",
  "Fin": "2024-08-31T00:00:00+02:00",
  "Concomitant": false,
  "CreditsAuGlobal": false,
  "BulletinSurIntranet": false,
  "ReleveSurIntranet": false,
  "LibelleExterne": "26/27 - Professionnalisation",
  "ReferentEcoleId": 0,
  "CodesPieces": "",
  "CodesPiecesOptionnelles": "",
  "OuvertCandidature": false,
  "DisplayPlanning": false,
  "SurveyId": 0,
  "SurveyCalendrierId": 0,
  "SurveyEntrepriseId": 0,
  "ScenarioLANId": 0,
  "ReferentLANEcoleIds": [],
  "LibelleDemarche": "",
  "TitreDemarche": "",
  "DescriptifDemarche": "",
  "DebutPeriodeCandidature": "2023-08-03T00:00:00+02:00",
  "FinPeriodeCandidature": "2023-08-03T00:00:00+02:00",
  "MobiliteDebut": "2023-08-03T00:00:00+02:00",
  "MobiliteFin": "2023-08-03T00:00:00+02:00",
  "ConclusionDemarche": "",
  "EcheancierFacturationApprentissageId": 0,
  "EcheancierFacturationProId": 0,
  "CompetencesAcquerirId": 0,
  "NbSequenceFille": 0,
  "NbSequencePere": 0,
  "Campus": null,
  "Marque": null,
  "LibellePeriode": "2026/2027",
  "Credits": 0.0,
  "Coefficient": 0.0,
  "RegleId": 0,
  "MoyenneNotes": 0.0,
  "NoteMin": 0.0,
  "NoteMax": 0.0,
  "DateJurySession1": "2023-08-03T00:00:00+02:00",
  "DateJurySession2": "2023-08-03T00:00:00+02:00",
  "SequenceAnnuelleId": null,
  "SegmentId": null,
  "EstUtiliseeDansParcoursBase": false,
  "DureeFormation": null,
  "NbHeureFormationDistancielle": null
}
```

:::

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
