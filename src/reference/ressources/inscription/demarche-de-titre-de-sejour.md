# Démarche de titre de séjour

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une démarche de titre de séjour avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DemarcheTitreSejour/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DemarcheTitreSejour/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "TypeDemarcheInitialeId": 0,
  "DetailDemarcheInitialeId": 0,
  "EtatDemarcheId": 0,
  "ApprenantId": 0,
  "NumeroEtranger": "",
  "DateDemarche": null,
  "DateValidation": null,
  "DocumentInitial": "00000000-0000-0000-0000-000000000000",
  "DocumentInitialDebut": null,
  "DocumentInitialFin": null,
  "DocumentInitialValide": false,
  "DocumentCPAM": "00000000-0000-0000-0000-000000000000",
  "DocumentCPAM2": "00000000-0000-0000-0000-000000000000",
  "DocumentCPAM2Valide": false,
  "DocumentCPAMValide": false,
  "DetailDocumentCPAMId": 0,
  "DetailDocumentCPAM2Id": 0,
  "DocumentAttestationVisa": "00000000-0000-0000-0000-000000000000",
  "DocumentAttestationVisaValide": false,
  "DetailAttestationVisaId": 0,
  "DepotPrefecture": null,
  "RendezVousPrefecture": null,
  "RendezVousConfirme": false,
  "DetailDossierPrefectureId": 0,
  "Recepisse": "00000000-0000-0000-0000-000000000000",
  "RecepisseDebut": null,
  "RecepisseFin": null,
  "DetailRecepisseId": 0,
  "RecepisseValide": false,
  "DecisionFavorable": "00000000-0000-0000-0000-000000000000",
  "DecisionFavorableDebut": null,
  "DecisionFavorableFin": null,
  "DetailDecisionFavorableId": 0,
  "DecisionFavorableValide": false,
  "MiseADispoCarte": null,
  "PrixCarte": 0,
  "CarteSejour": "00000000-0000-0000-0000-000000000000",
  "CarteSejourDebut": null,
  "CarteSejourFin": null,
  "DetailCarteSejourId": 0,
  "CarteSejourValide": false,
  "PaysNationaliteId": 0,
  "UploadCPAMOuvert": false,
  "UploadCPAM2Ouvert": false,
  "UploadAttestationVisaOuvert": false,
  "UploadRecepisseOuvert": false,
  "UploadDecisionFavorableOuvert": false,
  "UploadCarteSejourOuvert": false,
  "TypeDossierPrefectureId": 0,
  "PrefectureId": 0,
  "ConfirmationDepot": "00000000-0000-0000-0000-000000000000",
  "ConfirmationDepotValide": false,
  "UploadConfirmationDepotOuvert": false
}
```

:::

## Créer une démarche de titre de séjour

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DemarcheTitreSejour \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "TypeDemarcheInitialeId": 1234567,
  "DetailDemarcheInitialeId": 1234567,
  "EtatDemarcheId": 1234567,
  "ApprenantId": 1234567,
  "NumeroEtranger": "texte",
  "DateDemarche": "2026-09-01T00:00:00+02:00",
  "DateValidation": "2026-09-01T00:00:00+02:00",
  "DocumentInitial": "00000000-0000-0000-0000-000000000000",
  "DocumentInitialDebut": "2026-09-01T00:00:00+02:00",
  "DocumentInitialFin": "2026-09-01T00:00:00+02:00",
  "DocumentInitialValide": false,
  "DocumentCPAM": "00000000-0000-0000-0000-000000000000",
  "DocumentCPAM2": "00000000-0000-0000-0000-000000000000",
  "DocumentCPAM2Valide": false,
  "DocumentCPAMValide": false,
  "DetailDocumentCPAMId": 1234567,
  "DetailDocumentCPAM2Id": 1234567,
  "DocumentAttestationVisa": "00000000-0000-0000-0000-000000000000",
  "DocumentAttestationVisaValide": false,
  "DetailAttestationVisaId": 1234567,
  "DepotPrefecture": "2026-09-01T00:00:00+02:00",
  "RendezVousPrefecture": "2026-09-01T00:00:00+02:00",
  "RendezVousConfirme": false,
  "DetailDossierPrefectureId": 1234567,
  "Recepisse": "00000000-0000-0000-0000-000000000000",
  "RecepisseDebut": "2026-09-01T00:00:00+02:00",
  "RecepisseFin": "2026-09-01T00:00:00+02:00",
  "DetailRecepisseId": 1234567,
  "RecepisseValide": false,
  "DecisionFavorable": "00000000-0000-0000-0000-000000000000",
  "DecisionFavorableDebut": "2026-09-01T00:00:00+02:00",
  "DecisionFavorableFin": "2026-09-01T00:00:00+02:00",
  "DetailDecisionFavorableId": 1234567,
  "DecisionFavorableValide": false,
  "MiseADispoCarte": "2026-09-01T00:00:00+02:00",
  "PrixCarte": 0,
  "CarteSejour": "00000000-0000-0000-0000-000000000000",
  "CarteSejourDebut": "2026-09-01T00:00:00+02:00",
  "CarteSejourFin": "2026-09-01T00:00:00+02:00",
  "DetailCarteSejourId": 1234567,
  "CarteSejourValide": false,
  "PaysNationaliteId": 1234567,
  "UploadCPAMOuvert": false,
  "UploadCPAM2Ouvert": false,
  "UploadAttestationVisaOuvert": false,
  "UploadRecepisseOuvert": false,
  "UploadDecisionFavorableOuvert": false,
  "UploadCarteSejourOuvert": false,
  "TypeDossierPrefectureId": 1234567,
  "PrefectureId": 1234567,
  "ConfirmationDepot": "00000000-0000-0000-0000-000000000000",
  "ConfirmationDepotValide": false,
  "UploadConfirmationDepotOuvert": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DemarcheTitreSejour/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "TypeDemarcheInitialeId": 1234567,
  "DetailDemarcheInitialeId": 1234567,
  "EtatDemarcheId": 1234567,
  "ApprenantId": 1234567,
  "NumeroEtranger": "texte",
  "DateDemarche": "2026-09-01T00:00:00+02:00",
  "DateValidation": "2026-09-01T00:00:00+02:00",
  "DocumentInitial": "00000000-0000-0000-0000-000000000000",
  "DocumentInitialDebut": "2026-09-01T00:00:00+02:00",
  "DocumentInitialFin": "2026-09-01T00:00:00+02:00",
  "DocumentInitialValide": false,
  "DocumentCPAM": "00000000-0000-0000-0000-000000000000",
  "DocumentCPAM2": "00000000-0000-0000-0000-000000000000",
  "DocumentCPAM2Valide": false,
  "DocumentCPAMValide": false,
  "DetailDocumentCPAMId": 1234567,
  "DetailDocumentCPAM2Id": 1234567,
  "DocumentAttestationVisa": "00000000-0000-0000-0000-000000000000",
  "DocumentAttestationVisaValide": false,
  "DetailAttestationVisaId": 1234567,
  "DepotPrefecture": "2026-09-01T00:00:00+02:00",
  "RendezVousPrefecture": "2026-09-01T00:00:00+02:00",
  "RendezVousConfirme": false,
  "DetailDossierPrefectureId": 1234567,
  "Recepisse": "00000000-0000-0000-0000-000000000000",
  "RecepisseDebut": "2026-09-01T00:00:00+02:00",
  "RecepisseFin": "2026-09-01T00:00:00+02:00",
  "DetailRecepisseId": 1234567,
  "RecepisseValide": false,
  "DecisionFavorable": "00000000-0000-0000-0000-000000000000",
  "DecisionFavorableDebut": "2026-09-01T00:00:00+02:00",
  "DecisionFavorableFin": "2026-09-01T00:00:00+02:00",
  "DetailDecisionFavorableId": 1234567,
  "DecisionFavorableValide": false,
  "MiseADispoCarte": "2026-09-01T00:00:00+02:00",
  "PrixCarte": 0,
  "CarteSejour": "00000000-0000-0000-0000-000000000000",
  "CarteSejourDebut": "2026-09-01T00:00:00+02:00",
  "CarteSejourFin": "2026-09-01T00:00:00+02:00",
  "DetailCarteSejourId": 1234567,
  "CarteSejourValide": false,
  "PaysNationaliteId": 1234567,
  "UploadCPAMOuvert": false,
  "UploadCPAM2Ouvert": false,
  "UploadAttestationVisaOuvert": false,
  "UploadRecepisseOuvert": false,
  "UploadDecisionFavorableOuvert": false,
  "UploadCarteSejourOuvert": false,
  "TypeDossierPrefectureId": 1234567,
  "PrefectureId": 1234567,
  "ConfirmationDepot": "00000000-0000-0000-0000-000000000000",
  "ConfirmationDepotValide": false,
  "UploadConfirmationDepotOuvert": false
}
```

:::

## Modifier une démarche de titre de séjour

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DemarcheTitreSejour/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "TypeDemarcheInitialeId": 1234567,
  "DetailDemarcheInitialeId": 1234567,
  "EtatDemarcheId": 1234567,
  "ApprenantId": 1234567,
  "NumeroEtranger": "texte",
  "DateDemarche": "2026-09-01T00:00:00+02:00",
  "DateValidation": "2026-09-01T00:00:00+02:00",
  "DocumentInitial": "00000000-0000-0000-0000-000000000000",
  "DocumentInitialDebut": "2026-09-01T00:00:00+02:00",
  "DocumentInitialFin": "2026-09-01T00:00:00+02:00",
  "DocumentInitialValide": false,
  "DocumentCPAM": "00000000-0000-0000-0000-000000000000",
  "DocumentCPAM2": "00000000-0000-0000-0000-000000000000",
  "DocumentCPAM2Valide": false,
  "DocumentCPAMValide": false,
  "DetailDocumentCPAMId": 1234567,
  "DetailDocumentCPAM2Id": 1234567,
  "DocumentAttestationVisa": "00000000-0000-0000-0000-000000000000",
  "DocumentAttestationVisaValide": false,
  "DetailAttestationVisaId": 1234567,
  "DepotPrefecture": "2026-09-01T00:00:00+02:00",
  "RendezVousPrefecture": "2026-09-01T00:00:00+02:00",
  "RendezVousConfirme": false,
  "DetailDossierPrefectureId": 1234567,
  "Recepisse": "00000000-0000-0000-0000-000000000000",
  "RecepisseDebut": "2026-09-01T00:00:00+02:00",
  "RecepisseFin": "2026-09-01T00:00:00+02:00",
  "DetailRecepisseId": 1234567,
  "RecepisseValide": false,
  "DecisionFavorable": "00000000-0000-0000-0000-000000000000",
  "DecisionFavorableDebut": "2026-09-01T00:00:00+02:00",
  "DecisionFavorableFin": "2026-09-01T00:00:00+02:00",
  "DetailDecisionFavorableId": 1234567,
  "DecisionFavorableValide": false,
  "MiseADispoCarte": "2026-09-01T00:00:00+02:00",
  "PrixCarte": 0,
  "CarteSejour": "00000000-0000-0000-0000-000000000000",
  "CarteSejourDebut": "2026-09-01T00:00:00+02:00",
  "CarteSejourFin": "2026-09-01T00:00:00+02:00",
  "DetailCarteSejourId": 1234567,
  "CarteSejourValide": false,
  "PaysNationaliteId": 1234567,
  "UploadCPAMOuvert": false,
  "UploadCPAM2Ouvert": false,
  "UploadAttestationVisaOuvert": false,
  "UploadRecepisseOuvert": false,
  "UploadDecisionFavorableOuvert": false,
  "UploadCarteSejourOuvert": false,
  "TypeDossierPrefectureId": 1234567,
  "PrefectureId": 1234567,
  "ConfirmationDepot": "00000000-0000-0000-0000-000000000000",
  "ConfirmationDepotValide": false,
  "UploadConfirmationDepotOuvert": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DemarcheTitreSejour/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "TypeDemarcheInitialeId": 1234567,
  "DetailDemarcheInitialeId": 1234567,
  "EtatDemarcheId": 1234567,
  "ApprenantId": 1234567,
  "NumeroEtranger": "texte",
  "DateDemarche": "2026-09-01T00:00:00+02:00",
  "DateValidation": "2026-09-01T00:00:00+02:00",
  "DocumentInitial": "00000000-0000-0000-0000-000000000000",
  "DocumentInitialDebut": "2026-09-01T00:00:00+02:00",
  "DocumentInitialFin": "2026-09-01T00:00:00+02:00",
  "DocumentInitialValide": false,
  "DocumentCPAM": "00000000-0000-0000-0000-000000000000",
  "DocumentCPAM2": "00000000-0000-0000-0000-000000000000",
  "DocumentCPAM2Valide": false,
  "DocumentCPAMValide": false,
  "DetailDocumentCPAMId": 1234567,
  "DetailDocumentCPAM2Id": 1234567,
  "DocumentAttestationVisa": "00000000-0000-0000-0000-000000000000",
  "DocumentAttestationVisaValide": false,
  "DetailAttestationVisaId": 1234567,
  "DepotPrefecture": "2026-09-01T00:00:00+02:00",
  "RendezVousPrefecture": "2026-09-01T00:00:00+02:00",
  "RendezVousConfirme": false,
  "DetailDossierPrefectureId": 1234567,
  "Recepisse": "00000000-0000-0000-0000-000000000000",
  "RecepisseDebut": "2026-09-01T00:00:00+02:00",
  "RecepisseFin": "2026-09-01T00:00:00+02:00",
  "DetailRecepisseId": 1234567,
  "RecepisseValide": false,
  "DecisionFavorable": "00000000-0000-0000-0000-000000000000",
  "DecisionFavorableDebut": "2026-09-01T00:00:00+02:00",
  "DecisionFavorableFin": "2026-09-01T00:00:00+02:00",
  "DetailDecisionFavorableId": 1234567,
  "DecisionFavorableValide": false,
  "MiseADispoCarte": "2026-09-01T00:00:00+02:00",
  "PrixCarte": 0,
  "CarteSejour": "00000000-0000-0000-0000-000000000000",
  "CarteSejourDebut": "2026-09-01T00:00:00+02:00",
  "CarteSejourFin": "2026-09-01T00:00:00+02:00",
  "DetailCarteSejourId": 1234567,
  "CarteSejourValide": false,
  "PaysNationaliteId": 1234567,
  "UploadCPAMOuvert": false,
  "UploadCPAM2Ouvert": false,
  "UploadAttestationVisaOuvert": false,
  "UploadRecepisseOuvert": false,
  "UploadDecisionFavorableOuvert": false,
  "UploadCarteSejourOuvert": false,
  "TypeDossierPrefectureId": 1234567,
  "PrefectureId": 1234567,
  "ConfirmationDepot": "00000000-0000-0000-0000-000000000000",
  "ConfirmationDepotValide": false,
  "UploadConfirmationDepotOuvert": false
}
```

:::

## Supprimer une démarche de titre de séjour

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DemarcheTitreSejour/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
