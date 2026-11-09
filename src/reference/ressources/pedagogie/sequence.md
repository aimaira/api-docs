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

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Lister les séquences

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Sequence \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Sequence",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ProgrammeId": 0,
      "TypeSequenceId": 0,
      "EtablissementId": 0,
      "CycleId": 0,
      "Debut": null,
      "Fin": null,
      "Concomitant": false,
      "CreditsAuGlobal": false,
      "BulletinSurIntranet": false,
      "ReleveSurIntranet": false,
      "LibelleExterne": "",
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
      "DebutPeriodeCandidature": null,
      "FinPeriodeCandidature": null,
      "MobiliteDebut": null,
      "MobiliteFin": null,
      "ConclusionDemarche": "",
      "EcheancierFacturationApprentissageId": 0,
      "EcheancierFacturationProId": 0,
      "CompetencesAcquerirId": 0,
      "NbSequenceFille": 0,
      "NbSequencePere": 0,
      "Campus": "",
      "Marque": "",
      "LibellePeriode": "",
      "Credits": 0,
      "Coefficient": 0,
      "RegleId": 0,
      "MoyenneNotes": 0,
      "NoteMin": 0,
      "NoteMax": 0,
      "DateJurySession1": null,
      "DateJurySession2": null,
      "SequenceAnnuelleId": 0,
      "SegmentId": 0,
      "EstUtiliseeDansParcoursBase": false,
      "DureeFormation": 0,
      "NbHeureFormationDistancielle": 0
    }
  ]
}
```

:::

## Créer une séquence

### Champs particuliers

#### `EstUtiliseeDansParcoursBase`

Indique si ce cours est utilisable dans un parcours de base (pour la segmentation) ou non.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Sequence \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "TypeSequenceId": 1234567,
  "EtablissementId": 1234567,
  "CycleId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Concomitant": false,
  "CreditsAuGlobal": false,
  "BulletinSurIntranet": false,
  "ReleveSurIntranet": false,
  "LibelleExterne": "texte",
  "ReferentEcoleId": 1234567,
  "CodesPieces": "texte",
  "CodesPiecesOptionnelles": "texte",
  "OuvertCandidature": false,
  "DisplayPlanning": false,
  "SurveyId": 1234567,
  "SurveyCalendrierId": 1234567,
  "SurveyEntrepriseId": 1234567,
  "ScenarioLANId": 1234567,
  "ReferentLANEcoleIds": [],
  "LibelleDemarche": "texte",
  "TitreDemarche": "texte",
  "DescriptifDemarche": "texte",
  "DebutPeriodeCandidature": "2026-09-01T00:00:00+02:00",
  "FinPeriodeCandidature": "2026-09-01T00:00:00+02:00",
  "MobiliteDebut": "2026-09-01T00:00:00+02:00",
  "MobiliteFin": "2026-09-01T00:00:00+02:00",
  "ConclusionDemarche": "texte",
  "EcheancierFacturationApprentissageId": 1234567,
  "EcheancierFacturationProId": 1234567,
  "CompetencesAcquerirId": 1234567,
  "NbSequenceFille": 0,
  "NbSequencePere": 0,
  "Campus": "texte",
  "Marque": "texte",
  "LibellePeriode": "texte",
  "Credits": 0,
  "Coefficient": 0,
  "RegleId": 1234567,
  "MoyenneNotes": 0,
  "NoteMin": 0,
  "NoteMax": 0,
  "DateJurySession1": "2026-09-01T00:00:00+02:00",
  "DateJurySession2": "2026-09-01T00:00:00+02:00",
  "SequenceAnnuelleId": 1234567,
  "SegmentId": 1234567,
  "EstUtiliseeDansParcoursBase": false,
  "DureeFormation": 0,
  "NbHeureFormationDistancielle": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Sequence/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "TypeSequenceId": 1234567,
  "EtablissementId": 1234567,
  "CycleId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Concomitant": false,
  "CreditsAuGlobal": false,
  "BulletinSurIntranet": false,
  "ReleveSurIntranet": false,
  "LibelleExterne": "texte",
  "ReferentEcoleId": 1234567,
  "CodesPieces": "texte",
  "CodesPiecesOptionnelles": "texte",
  "OuvertCandidature": false,
  "DisplayPlanning": false,
  "SurveyId": 1234567,
  "SurveyCalendrierId": 1234567,
  "SurveyEntrepriseId": 1234567,
  "ScenarioLANId": 1234567,
  "ReferentLANEcoleIds": [],
  "LibelleDemarche": "texte",
  "TitreDemarche": "texte",
  "DescriptifDemarche": "texte",
  "DebutPeriodeCandidature": "2026-09-01T00:00:00+02:00",
  "FinPeriodeCandidature": "2026-09-01T00:00:00+02:00",
  "MobiliteDebut": "2026-09-01T00:00:00+02:00",
  "MobiliteFin": "2026-09-01T00:00:00+02:00",
  "ConclusionDemarche": "texte",
  "EcheancierFacturationApprentissageId": 1234567,
  "EcheancierFacturationProId": 1234567,
  "CompetencesAcquerirId": 1234567,
  "NbSequenceFille": 0,
  "NbSequencePere": 0,
  "Campus": "texte",
  "Marque": "texte",
  "LibellePeriode": "texte",
  "Credits": 0,
  "Coefficient": 0,
  "RegleId": 1234567,
  "MoyenneNotes": 0,
  "NoteMin": 0,
  "NoteMax": 0,
  "DateJurySession1": "2026-09-01T00:00:00+02:00",
  "DateJurySession2": "2026-09-01T00:00:00+02:00",
  "SequenceAnnuelleId": 1234567,
  "SegmentId": 1234567,
  "EstUtiliseeDansParcoursBase": false,
  "DureeFormation": 0,
  "NbHeureFormationDistancielle": 0
}
```

:::

## Modifier une séquence

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Sequence/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "TypeSequenceId": 1234567,
  "EtablissementId": 1234567,
  "CycleId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Concomitant": false,
  "CreditsAuGlobal": false,
  "BulletinSurIntranet": false,
  "ReleveSurIntranet": false,
  "LibelleExterne": "texte",
  "ReferentEcoleId": 1234567,
  "CodesPieces": "texte",
  "CodesPiecesOptionnelles": "texte",
  "OuvertCandidature": false,
  "DisplayPlanning": false,
  "SurveyId": 1234567,
  "SurveyCalendrierId": 1234567,
  "SurveyEntrepriseId": 1234567,
  "ScenarioLANId": 1234567,
  "ReferentLANEcoleIds": [],
  "LibelleDemarche": "texte",
  "TitreDemarche": "texte",
  "DescriptifDemarche": "texte",
  "DebutPeriodeCandidature": "2026-09-01T00:00:00+02:00",
  "FinPeriodeCandidature": "2026-09-01T00:00:00+02:00",
  "MobiliteDebut": "2026-09-01T00:00:00+02:00",
  "MobiliteFin": "2026-09-01T00:00:00+02:00",
  "ConclusionDemarche": "texte",
  "EcheancierFacturationApprentissageId": 1234567,
  "EcheancierFacturationProId": 1234567,
  "CompetencesAcquerirId": 1234567,
  "NbSequenceFille": 0,
  "NbSequencePere": 0,
  "Campus": "texte",
  "Marque": "texte",
  "LibellePeriode": "texte",
  "Credits": 0,
  "Coefficient": 0,
  "RegleId": 1234567,
  "MoyenneNotes": 0,
  "NoteMin": 0,
  "NoteMax": 0,
  "DateJurySession1": "2026-09-01T00:00:00+02:00",
  "DateJurySession2": "2026-09-01T00:00:00+02:00",
  "SequenceAnnuelleId": 1234567,
  "SegmentId": 1234567,
  "EstUtiliseeDansParcoursBase": false,
  "DureeFormation": 0,
  "NbHeureFormationDistancielle": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Sequence/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "TypeSequenceId": 1234567,
  "EtablissementId": 1234567,
  "CycleId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Concomitant": false,
  "CreditsAuGlobal": false,
  "BulletinSurIntranet": false,
  "ReleveSurIntranet": false,
  "LibelleExterne": "texte",
  "ReferentEcoleId": 1234567,
  "CodesPieces": "texte",
  "CodesPiecesOptionnelles": "texte",
  "OuvertCandidature": false,
  "DisplayPlanning": false,
  "SurveyId": 1234567,
  "SurveyCalendrierId": 1234567,
  "SurveyEntrepriseId": 1234567,
  "ScenarioLANId": 1234567,
  "ReferentLANEcoleIds": [],
  "LibelleDemarche": "texte",
  "TitreDemarche": "texte",
  "DescriptifDemarche": "texte",
  "DebutPeriodeCandidature": "2026-09-01T00:00:00+02:00",
  "FinPeriodeCandidature": "2026-09-01T00:00:00+02:00",
  "MobiliteDebut": "2026-09-01T00:00:00+02:00",
  "MobiliteFin": "2026-09-01T00:00:00+02:00",
  "ConclusionDemarche": "texte",
  "EcheancierFacturationApprentissageId": 1234567,
  "EcheancierFacturationProId": 1234567,
  "CompetencesAcquerirId": 1234567,
  "NbSequenceFille": 0,
  "NbSequencePere": 0,
  "Campus": "texte",
  "Marque": "texte",
  "LibellePeriode": "texte",
  "Credits": 0,
  "Coefficient": 0,
  "RegleId": 1234567,
  "MoyenneNotes": 0,
  "NoteMin": 0,
  "NoteMax": 0,
  "DateJurySession1": "2026-09-01T00:00:00+02:00",
  "DateJurySession2": "2026-09-01T00:00:00+02:00",
  "SequenceAnnuelleId": 1234567,
  "SegmentId": 1234567,
  "EstUtiliseeDansParcoursBase": false,
  "DureeFormation": 0,
  "NbHeureFormationDistancielle": 0
}
```

:::

## Supprimer une séquence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Sequence/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
