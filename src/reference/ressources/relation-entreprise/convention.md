# Convention

L’entité `Convention` contient les informations d’une convention de stage, d’un contrat d’apprentissage ou de
professionnalisation.

## Récupérer une convention avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Convention/1234567
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Convention/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "CS00000001",
  "ProvenanceOffreId": 0,
  "FonctionExerceId": 0,
  "TypeContratApprentissageId": 0,
  "TypeContratProfessionnalisationId": 0,
  "DiplomePlusEleveProfessionnalisationId": 0,
  "DernierDiplomePrepareProfessionalisationId": 0,
  "DiplomeViseId": 0,
  "DernierDiplomePrepareId": 0,
  "DiplomePlusEleveId": 0,
  "DerniereClasseId": 0,
  "SituationAvantContratApprentissageId": 0,
  "SituationAvantContratProfessionnalisationId": 0,
  "RythmeProfessionnalisationId": 0,
  "RythmeApprentissageId": 0,
  "TypeDerogationId": 0,
  "ApprenantId": 2215651,
  "SequenceId": 2217285,
  "EnseignantId": 0,
  "EntrepriseId": 2217300,
  "SignataireId": 0,
  "MaitreId": 2217298,
  "MaitreBisId": 0,
  "ReferentId": 0,
  "Remuneration": 0.0,
  "CoutFormation": 0.0,
  "CoutFormationOrganismeFinanceur": 0.0,
  "CoutFormationResteChargeEntreprise": 0.0,
  "EstLieuDeFormationPrincipal": false,
  "AutreLieuFormationId": 0,
  "MissionId": 0,
  "DateRupture": null,
  "DateFinMaintienFormation": null,
  "MotifRuptureId": 0,
  "DateDebutSaisie": null,
  "Avenant": false,
  "ConventionOrigineId": 0,
  "DateValidationApprenant": null,
  "DateValidationEcole": null,
  "DateValidationEnseignant": null,
  "DateValidationEntreprise": null,
  "DateValidationMaitre": null,
  "DateDebut": "2022-11-14T00:00:00+01:00",
  "DateFin": "2024-08-31T00:00:00+02:00",
  "TypeConventionId": 334224,
  "MinimumSocialProfessionnalisationId": 0,
  "EtatConventionId": 334217,
  "NbJourPeriodeEssai": 0,
  "DureePoleEmploi": 0,
  "ClassificationEmploi": "",
  "Subrogation": false,
  "InscritPoleEmploi": false,
  "NbHeureFormation": 0.0,
  "NbHeureEnseignement": 0.0,
  "NbHeureOPCA": 0.0,
  "NbHeureEntreprise": 0.0,
  "NumeroPoleEmploi": "",
  "Poste": "",
  "NiveauPoste": "",
  "CoeficientHierarchique": "",
  "ReferenceId": 0,
  "NatureContratId": 0,
  "OrganismeFormation": "",
  "TypeQualification": "",
  "OrigineContratId": 0,
  "ReferentEcoleId": 0,
  "CompetencesAcquerirId": 0,
  "NbJourConges": "",
  "NbJourPresence": 0.0,
  "AvantageAccordId": 0,
  "RemunerationHoraire": 0.0,
  "StageEtranger": false,
  "RemunerationNette": false,
  "CasParticulierId": 0,
  "CommentaireId": 0,
  "DureeEffective": 0.0000,
  "DureeEffectiveHeure": 0.0000,
  "DebutFormation": "2022-09-01T00:00:00+02:00",
  "FinFormation": "2024-08-31T00:00:00+02:00",
  "Devise": "Euro",
  "PeriodeConventionId": null,
  "NombreOrganismeFormation": 0,
  "OrganismeFormationInterne": false,
  "IdMotifAvenant": 0,
  "MotifAvenant": "",
  "TauxEntreprise": 0.0,
  "TauxOPCA": 0.0,
  "TravailHandicape": false,
  "InscritListeSportive": false,
  "ProjetEntreprise": false,
  "RegimeSocial": "",
  "AssuranceChomage": false,
  "AvantageAutre": "",
  "AvantageLogement": 0.00,
  "AvantageNourriture": 0.00,
  "CaisseRetraite": "",
  "NumContrat": "",
  "NumCommande": "",
  "DateFinEssai": null,
  "DateAvenant": null,
  "TravailDangereux": false,
  "AttesteEnsembleDoc": false,
  "LanId": 0,
  "IdClasseAnneeDerniere": null,
  "IdDepartement": 0,
  "DateConclusion": "2025-09-01T00:00:00+02:00",
}
```

:::

## Créer une convention

### Propriétés spécifiques

#### Rémunération de l’apprenant

##### `Remuneration`

Cette propriété correspond à la rémunération brute mensuelle à l’embauche, sous la forme d’un nombre décimal au format 
international.

- `CaisseRetraite` : cette propriété correspond à la caisse de retraite complémentaire pour le contrat au format chaîne de caractères.
- `AvantageNourriture` : cette propriété correspond aux avantages repas, en euros par repas, sous la forme d’un nombre décimal au format
international.
- `AvantageLogement` : cette propriété correspond aux avantages en nature relatif au logement, en euros par mois, sous la forme d’un nombre 
décimal au format international.
- `AvantageAutre` : cette propriété correspond à un champ libre permettant de décrire les autres avantages en nature à destination de 
l’apprenant.

### Données obligatoires

- `ApprenantId`
- `TypeConventionId`
- `SequenceId`

::: code-group

```bash [cURL]
curl 'https://myapi.aimaira.net/GraphV1/Convention' \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "ApprenantId": 2220513,
  "TypeConventionId": 334222,
  "SequenceId": 2251455
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Convention/$entity",
  "Id": 2410937,
  "Nom": "",
  "Code": "CS00000573",
  "ProvenanceOffreId": 0,
  "FonctionExerceId": 0,
  "TypeContratApprentissageId": 0,
  "TypeContratProfessionnalisationId": 0,
  "DiplomePlusEleveProfessionnalisationId": 0,
  "DernierDiplomePrepareProfessionalisationId": 0,
  "DiplomeViseId": null,
  "DernierDiplomePrepareId": null,
  "DiplomePlusEleveId": null,
  "DerniereClasseId": 0,
  "SituationAvantContratApprentissageId": 0,
  "SituationAvantContratProfessionnalisationId": 0,
  "RythmeProfessionnalisationId": 0,
  "RythmeApprentissageId": 0,
  "TypeDerogationId": 0,
  "ApprenantId": 2220513,
  "SequenceId": 2251455,
  "EnseignantId": 0,
  "EntrepriseId": 0,
  "SignataireId": 0,
  "MaitreId": 0,
  "MaitreBisId": 0,
  "ReferentId": 0,
  "Remuneration": 0.0,
  "CoutFormation": 0.0,
  "CoutFormationOrganismeFinanceur": 0.0,
  "CoutFormationResteChargeEntreprise": 0.0,
  "EstLieuDeFormationPrincipal": false,
  "AutreLieuFormationId": 0,
  "MissionId": 0,
  "DateRupture": null,
  "DateFinMaintienFormation": null,
  "MotifRuptureId": 0,
  "DateDebutSaisie": null,
  "Avenant": false,
  "ConventionOrigineId": 0,
  "DateValidationApprenant": null,
  "DateValidationEcole": null,
  "DateValidationEnseignant": null,
  "DateValidationEntreprise": null,
  "DateValidationMaitre": null,
  "DateDebut": null,
  "DateFin": null,
  "TypeConventionId": 334222,
  "MinimumSocialProfessionnalisationId": 0,
  "EtatConventionId": 334217,
  "NbJourPeriodeEssai": 0,
  "DureePoleEmploi": 0,
  "ClassificationEmploi": "",
  "Subrogation": false,
  "InscritPoleEmploi": false,
  "NbHeureFormation": 0.0,
  "NbHeureEnseignement": 0.0,
  "NbHeureOPCA": 0.0,
  "NbHeureEntreprise": 0.0,
  "NumeroPoleEmploi": "",
  "Poste": "",
  "NiveauPoste": "",
  "CoeficientHierarchique": "",
  "ReferenceId": 0,
  "NatureContratId": 0,
  "OrganismeFormation": "",
  "TypeQualification": "",
  "OrigineContratId": 0,
  "ReferentEcoleId": 0,
  "CompetencesAcquerirId": 0,
  "NbJourConges": "",
  "NbJourPresence": 0.0,
  "AvantageAccordId": 0,
  "RemunerationHoraire": 0.0,
  "StageEtranger": false,
  "RemunerationNette": false,
  "CasParticulierId": 0,
  "CommentaireId": 0,
  "DureeEffective": 0,
  "DureeEffectiveHeure": 0,
  "DebutFormation": null,
  "FinFormation": null,
  "Devise": "Euro",
  "PeriodeConventionId": 0,
  "NombreOrganismeFormation": 0,
  "OrganismeFormationInterne": false,
  "IdMotifAvenant": 0,
  "MotifAvenant": null,
  "TauxEntreprise": 0.0,
  "TauxOPCA": 0.0,
  "TravailHandicape": false,
  "InscritListeSportive": false,
  "ProjetEntreprise": false,
  "RegimeSocial": "",
  "AssuranceChomage": false,
  "AvantageAutre": "",
  "AvantageLogement": null,
  "AvantageNourriture": null,
  "CaisseRetraite": "",
  "NumContrat": "",
  "NumCommande": "",
  "DateFinEssai": null,
  "DateAvenant": null,
  "TravailDangereux": false,
  "AttesteEnsembleDoc": false,
  "LanId": null,
  "IdClasseAnneeDerniere": null,
  "IdDepartement": null
}
```

:::

## Modifier une convention

::: code-group

```bash [cURL]
curl 'https://myapi.aimaira.net/GraphV1/Convention/2410937' \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "",
  "Code": "CS00000573",
  "ProvenanceOffreId": 0,
  "FonctionExerceId": 0,
  "TypeContratApprentissageId": 0,
  "TypeContratProfessionnalisationId": 0,
  "DiplomePlusEleveProfessionnalisationId": 0,
  "DernierDiplomePrepareProfessionalisationId": 0,
  "DiplomeViseId": null,
  "DernierDiplomePrepareId": null,
  "DiplomePlusEleveId": null,
  "DerniereClasseId": 0,
  "SituationAvantContratApprentissageId": 0,
  "SituationAvantContratProfessionnalisationId": 0,
  "RythmeProfessionnalisationId": 0,
  "RythmeApprentissageId": 0,
  "TypeDerogationId": 0,
  "ApprenantId": 2220513,
  "SequenceId": 2251455,
  "EnseignantId": 2232819,
  "EntrepriseId": 2410939,
  "SignataireId": 2410956,
  "MaitreId": 2410955,
  "MaitreBisId": 0,
  "ReferentId": 2410958,
  "Remuneration": 0.0,
  "CoutFormation": 0.0,
  "CoutFormationOrganismeFinanceur": 0.0,
  "CoutFormationResteChargeEntreprise": 0.0,
  "EstLieuDeFormationPrincipal": false,
  "AutreLieuFormationId": 0,
  "MissionId": 0,
  "DateRupture": null,
  "DateFinMaintienFormation": null,
  "MotifRuptureId": 0,
  "DateDebutSaisie": null,
  "Avenant": false,
  "ConventionOrigineId": 0,
  "DateValidationApprenant": null,
  "DateValidationEcole": null,
  "DateValidationEnseignant": null,
  "DateValidationEntreprise": null,
  "DateValidationMaitre": null,
  "DateDebut": null,
  "DateFin": null,
  "TypeConventionId": 334222,
  "MinimumSocialProfessionnalisationId": 0,
  "EtatConventionId": 334217,
  "NbJourPeriodeEssai": 0,
  "DureePoleEmploi": 0,
  "ClassificationEmploi": "",
  "Subrogation": false,
  "InscritPoleEmploi": false,
  "NbHeureFormation": 0.0,
  "NbHeureEnseignement": 0.0,
  "NbHeureOPCA": 0.0,
  "NbHeureEntreprise": 0.0,
  "NumeroPoleEmploi": "",
  "Poste": "",
  "NiveauPoste": "",
  "CoeficientHierarchique": "",
  "ReferenceId": 0,
  "NatureContratId": 0,
  "OrganismeFormation": "",
  "TypeQualification": "",
  "OrigineContratId": 0,
  "ReferentEcoleId": 0,
  "CompetencesAcquerirId": 0,
  "NbJourConges": "",
  "NbJourPresence": 0.0,
  "AvantageAccordId": 0,
  "RemunerationHoraire": 0.0,
  "StageEtranger": false,
  "RemunerationNette": false,
  "CasParticulierId": 0,
  "CommentaireId": 0,
  "DureeEffective": 0,
  "DureeEffectiveHeure": 0,
  "DebutFormation": null,
  "FinFormation": null,
  "Devise": "Euro",
  "PeriodeConventionId": 0,
  "NombreOrganismeFormation": 0,
  "OrganismeFormationInterne": false,
  "IdMotifAvenant": 0,
  "MotifAvenant": null,
  "TauxEntreprise": 0.0,
  "TauxOPCA": 0.0,
  "TravailHandicape": false,
  "InscritListeSportive": false,
  "ProjetEntreprise": false,
  "RegimeSocial": "",
  "AssuranceChomage": false,
  "AvantageAutre": "",
  "AvantageLogement": null,
  "AvantageNourriture": null,
  "CaisseRetraite": "",
  "NumContrat": "",
  "NumCommande": "",
  "DateFinEssai": null,
  "DateAvenant": null,
  "TravailDangereux": false,
  "AttesteEnsembleDoc": false,
  "LanId": null,
  "IdClasseAnneeDerniere": null,
  "IdDepartement": null
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Convention/$entity",
  "Id": 2410937,
  "Nom": "",
  "Code": "CS00000573",
  "ProvenanceOffreId": 0,
  "FonctionExerceId": 0,
  "TypeContratApprentissageId": 0,
  "TypeContratProfessionnalisationId": 0,
  "DiplomePlusEleveProfessionnalisationId": 0,
  "DernierDiplomePrepareProfessionalisationId": 0,
  "DiplomeViseId": null,
  "DernierDiplomePrepareId": null,
  "DiplomePlusEleveId": null,
  "DerniereClasseId": 0,
  "SituationAvantContratApprentissageId": 0,
  "SituationAvantContratProfessionnalisationId": 0,
  "RythmeProfessionnalisationId": 0,
  "RythmeApprentissageId": 0,
  "TypeDerogationId": 0,
  "ApprenantId": 2220513,
  "SequenceId": 2251455,
  "EnseignantId": 2232819,
  "EntrepriseId": 2410939,
  "SignataireId": 2410956,
  "MaitreId": 2410955,
  "MaitreBisId": 0,
  "ReferentId": 2410958,
  "Remuneration": 0.0,
  "CoutFormation": 0.0,
  "CoutFormationOrganismeFinanceur": 0.0,
  "CoutFormationResteChargeEntreprise": 0.0,
  "EstLieuDeFormationPrincipal": false,
  "AutreLieuFormationId": 0,
  "MissionId": 0,
  "DateRupture": null,
  "DateFinMaintienFormation": null,
  "MotifRuptureId": 0,
  "DateDebutSaisie": null,
  "Avenant": false,
  "ConventionOrigineId": 0,
  "DateValidationApprenant": null,
  "DateValidationEcole": null,
  "DateValidationEnseignant": null,
  "DateValidationEntreprise": null,
  "DateValidationMaitre": null,
  "DateDebut": null,
  "DateFin": null,
  "TypeConventionId": 334222,
  "MinimumSocialProfessionnalisationId": 0,
  "EtatConventionId": 334217,
  "NbJourPeriodeEssai": 0,
  "DureePoleEmploi": 0,
  "ClassificationEmploi": "",
  "Subrogation": false,
  "InscritPoleEmploi": false,
  "NbHeureFormation": 0.0,
  "NbHeureEnseignement": 0.0,
  "NbHeureOPCA": 0.0,
  "NbHeureEntreprise": 0.0,
  "NumeroPoleEmploi": "",
  "Poste": "",
  "NiveauPoste": "",
  "CoeficientHierarchique": "",
  "ReferenceId": 0,
  "NatureContratId": 0,
  "OrganismeFormation": "",
  "TypeQualification": "",
  "OrigineContratId": 0,
  "ReferentEcoleId": 0,
  "CompetencesAcquerirId": 0,
  "NbJourConges": "",
  "NbJourPresence": 0.0,
  "AvantageAccordId": 0,
  "RemunerationHoraire": 0.0,
  "StageEtranger": false,
  "RemunerationNette": false,
  "CasParticulierId": 0,
  "CommentaireId": 0,
  "DureeEffective": 0,
  "DureeEffectiveHeure": 0,
  "DebutFormation": null,
  "FinFormation": null,
  "Devise": "Euro",
  "PeriodeConventionId": 0,
  "NombreOrganismeFormation": 0,
  "OrganismeFormationInterne": false,
  "IdMotifAvenant": 0,
  "MotifAvenant": null,
  "TauxEntreprise": 0.0,
  "TauxOPCA": 0.0,
  "TravailHandicape": false,
  "InscritListeSportive": false,
  "ProjetEntreprise": false,
  "RegimeSocial": "",
  "AssuranceChomage": false,
  "AvantageAutre": "",
  "AvantageLogement": null,
  "AvantageNourriture": null,
  "CaisseRetraite": "",
  "NumContrat": "",
  "NumCommande": "",
  "DateFinEssai": null,
  "DateAvenant": null,
  "TravailDangereux": false,
  "AttesteEnsembleDoc": false,
  "LanId": null,
  "IdClasseAnneeDerniere": null,
  "IdDepartement": null
}
```

:::

## Ajouter un organisme financeur à la convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ConventionOrganismeFinanceur \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "ConventionId": 2410937,
  "OrganismeFinanceurId": 2217200
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ConventionOrganismeFinanceur/$entity",
  "Id": 2410938,
  "Nom": null,
  "Code": null,
  "ConventionId": 2410937,
  "OrganismeFinanceurId": 2217200,
  "OrganismeFinanceurFacturationId": 0,
  "NumeroDossier": "",
  "NumeroDECA": "",
  "NumeroInterne": "",
  "StatutCFADOCK": "",
  "StatutTransmission": "",
  "DateEnvoiCFADOCK": null,
  "DateTransmissionHorsCFADOCK": null,
  "CodeAdherent": "",
  "DateReception": null,
  "DateEnvoi": null,
  "TypePriseCharge": "Entreprise",
  "TauxHoraire": null,
  "EcheancierEntrepriseId": 0,
  "GestionnaireDossierId": 0,
  "AutreContactId": 0,
  "DernierCertificatEnvoye": false
}
```

:::

## Créer les données de facturation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Convention/2410937/SynchronisationAffaire \
  --request POST \
  -u 'nomdutilisateur:motdepasse'
```

:::

Si la synchronisation a fonctionné, le point d’entrée répond avec le code `HTTP 200`.


## Récupérer les informations de facturation

Pour récupérer les informations de facturation, il faut retrouver le client créé pour la convention.
Il peut exister plusieurs clients avec différentes natures. Par exemple : une entreprise et un organisme financeur.

[Retrouver un client avec une référence][client-par-reference]  
[Lister les natures de clients][nature-client]

## Échéances de la convention

### Convention d’apprentissage

#### Lister les échéances de la convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceApprentissageConvention?$filter=ConventionId eq 4405973 \
  -u 'nomdutilisateur:motdepasse'
```

:::

##### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceApprentissageConvention",
  "value": [
    {
      "Id": 11028949,
      "Nom": "",
      "Code": "",
      "ConventionId": 4405973,
      "EntrepriseId": 0,
      "OPCAId": 3272001,
      "Montant": 1234.5,
      "Pourcentage": 0.0,
      "Libelle": "Echeance23076",
      "NumeroFacture": "F-2304-001",
      "Date": "2023-04-11T00:00:00+02:00",
      "NoteId": 20942404,
      "RefPrestationId": null,
      "RefPaiementId": null,
      "Compte": "7068110",
      "CodeAnalytique": "",
      "LibelleExterne": "Échéance OPCO",
      "CategoriePrestationId": 3560733,
      "PeriodeNom": "2022/2023",
      "Source": "Aimaira",
      "Codification": "1",
      "Numero": 1,
      "Nature": "Pedagogie",
      "RefEcheanceLiee": null
    },
    {
      "Id": 11028952,
      "Nom": "",
      "Code": "",
      "ConventionId": 4405973,
      "EntrepriseId": 0,
      "OPCAId": 3272001,
      "Montant": 4567.8,
      "Pourcentage": 0.0,
      "Libelle": "Echeance23077",
      "NumeroFacture": "F-2311-001",
      "Date": "2023-11-01T00:00:00+01:00",
      "NoteId": 0,
      "RefPrestationId": null,
      "RefPaiementId": null,
      "Compte": "7068110",
      "CodeAnalytique": "",
      "LibelleExterne": "Échéance OPCO",
      "CategoriePrestationId": 3560733,
      "PeriodeNom": "2023/2024",
      "Source": "Aimaira",
      "Codification": "2",
      "Numero": 2,
      "Nature": "Pedagogie",
      "RefEcheanceLiee": null
    },
    {
      "Id": 12612553,
      "Nom": "",
      "Code": "",
      "ConventionId": 4405973,
      "EntrepriseId": 0,
      "OPCAId": 3272001,
      "Montant": 123.4,
      "Pourcentage": null,
      "Libelle": "SOLDE RUPTURE",
      "NumeroFacture": "F-2402-001",
      "Date": "2024-02-10T00:00:00+01:00",
      "NoteId": 0,
      "RefPrestationId": null,
      "RefPaiementId": null,
      "Compte": "7068110",
      "CodeAnalytique": "",
      "LibelleExterne": "SOLDE RUPTURE",
      "CategoriePrestationId": 3560733,
      "PeriodeNom": "2023/2024",
      "Source": "Aimaira",
      "Codification": "2",
      "Numero": 2,
      "Nature": "Pedagogie",
      "RefEcheanceLiee": null
    }
  ]
}
```

:::

#### Créer une nouvelle échéance de la convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceApprentissageConvention \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "",
  "Code": "",
  "ConventionId": 4405973,
  "EntrepriseId": 0,
  "OPCAId": 3272001,
  "Montant": 1234.5,
  "Pourcentage": 0.0,
  "Libelle": "Echeance",
  "NumeroFacture": "F-2603-001",
  "Date": "2026-03-01T00:00:00+02:00",
  "NoteId": 20942404,
  "RefPrestationId": null,
  "RefPaiementId": null,
  "Compte": "7068110",
  "CodeAnalytique": "",
  "LibelleExterne": "Échéance OPCO",
  "CategoriePrestationId": 3560733,
  "PeriodeNom": "2025/2026",
  "Source": "Aimaira",
  "Codification": "1",
  "Numero": 1,
  "Nature": "Pedagogie",
  "RefEcheanceLiee": null
}' \
  -u 'nomdutilisateur:motdepasse'
   
```

:::

##### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceConvention",
  "Id": 11028949,
  "Nom": "",
  "Code": "",
  "ConventionId": 4405973,
  "EntrepriseId": 0,
  "OPCAId": 3272001,
  "Montant": 1234.5,
  "Pourcentage": 0.0,
  "Libelle": "Echeance",
  "NumeroFacture": "F-2603-001",
  "Date": "2026-03-01T00:00:00+02:00",
  "NoteId": 20942404,
  "RefPrestationId": null,
  "RefPaiementId": null,
  "Compte": "7068110",
  "CodeAnalytique": "",
  "LibelleExterne": "Échéance OPCO",
  "CategoriePrestationId": 3560733,
  "PeriodeNom": "2025/2026",
  "Source": "Aimaira",
  "Codification": "1",
  "Numero": 1,
  "Nature": "Pedagogie",
  "RefEcheanceLiee": null
}
```

:::

### Convention de professionnalisation

#### Lister les échéances de la convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceConvention?$filter=ConventionId eq 4405042 \
  -u 'nomdutilisateur:motdepasse'
```

:::

##### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceConvention",
  "value": [
    {
      "Id": 23908807,
      "Nom": "",
      "Code": "",
      "ConventionId": 4405042,
      "EntrepriseId": 0,
      "OPCAId": 17067068,
      "NbHeureTheorique": 3.0,
      "NbHeureReelle": 1.0,
      "Taux": 1234.0,
      "Date": "2026-02-10T00:00:00+01:00",
      "NoteId": 0,
      "RefPrestationId": null,
      "RefPaiementId": null,
      "Compte": "7068500",
      "CodeAnalytique": "",
      "DureeAbsence": 0.0,
      "TauxAbsence": 0.0,
      "FactureAbsence": "",
      "RefPrestationAbsenceId": 0,
      "RefPaiementAbsenceId": 0,
      "CompteAbsence": "",
      "CodeAnalytiqueAbsence": "",
      "NoteAbsenceId": 0,
      "Libelle": "",
      "LibelleExterne": "",
      "CategoriePrestationId": 3560712,
      "PeriodeNom": "2025/2026",
      "RefEcheanceLiee": null
    },
    {
      "Id": 23908923,
      "Nom": "",
      "Code": "",
      "ConventionId": 4405042,
      "EntrepriseId": 23907806,
      "OPCAId": 0,
      "NbHeureTheorique": 4.0,
      "NbHeureReelle": 3.8,
      "Taux": 150.0,
      "Date": "2026-02-10T00:00:00+01:00",
      "NoteId": 0,
      "RefPrestationId": null,
      "RefPaiementId": null,
      "Compte": "7068500",
      "CodeAnalytique": "",
      "DureeAbsence": 0.0,
      "TauxAbsence": 0.0,
      "FactureAbsence": "",
      "RefPrestationAbsenceId": 0,
      "RefPaiementAbsenceId": 0,
      "CompteAbsence": "",
      "CodeAnalytiqueAbsence": "",
      "NoteAbsenceId": 0,
      "Libelle": "",
      "LibelleExterne": "",
      "CategoriePrestationId": 3560712,
      "PeriodeNom": "2025/2026",
      "RefEcheanceLiee": null
    },
    {
      "Id": 23910227,
      "Nom": "",
      "Code": "",
      "ConventionId": 4405042,
      "EntrepriseId": 23907806,
      "OPCAId": 0,
      "NbHeureTheorique": -4.0,
      "NbHeureReelle": -3.8,
      "Taux": 150.0,
      "Date": "2026-02-10T00:00:00+01:00",
      "NoteId": 0,
      "RefPrestationId": null,
      "RefPaiementId": null,
      "Compte": "7068500",
      "CodeAnalytique": "",
      "DureeAbsence": 0.0,
      "TauxAbsence": 0.0,
      "FactureAbsence": "",
      "RefPrestationAbsenceId": 0,
      "RefPaiementAbsenceId": 0,
      "CompteAbsence": "",
      "CodeAnalytiqueAbsence": "",
      "NoteAbsenceId": 0,
      "Libelle": "",
      "LibelleExterne": "",
      "CategoriePrestationId": 3560712,
      "PeriodeNom": "2025/2026",
      "RefEcheanceLiee": null
    },
    {
      "Id": 23910240,
      "Nom": "",
      "Code": "",
      "ConventionId": 4405042,
      "EntrepriseId": 23907806,
      "OPCAId": 0,
      "NbHeureTheorique": 4.0,
      "NbHeureReelle": 3.79,
      "Taux": 150.0,
      "Date": "2026-02-10T00:00:00+01:00",
      "NoteId": 0,
      "RefPrestationId": null,
      "RefPaiementId": null,
      "Compte": "7068500",
      "CodeAnalytique": "",
      "DureeAbsence": 0.0,
      "TauxAbsence": 0.0,
      "FactureAbsence": "",
      "RefPrestationAbsenceId": 0,
      "RefPaiementAbsenceId": 0,
      "CompteAbsence": "",
      "CodeAnalytiqueAbsence": "",
      "NoteAbsenceId": 0,
      "Libelle": "",
      "LibelleExterne": "",
      "CategoriePrestationId": 3560712,
      "PeriodeNom": "2025/2026",
      "RefEcheanceLiee": null
    }
  ]
}
```

:::

#### Créer une nouvelle échéance de la convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceConvention \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
      "Nom": "",
      "Code": "",
      "ConventionId": 23907787,
      "EntrepriseId": 0,
      "OPCAId": 17067068,
      "NbHeureTheorique": 3.0,
      "NbHeureReelle": 1.0,
      "Taux": 1234.0,
      "Date": "2026-03-10T00:00:00+01:00",
      "NoteId": 0,
      "RefPrestationId": null,
      "RefPaiementId": null,
      "Compte": "7068500",
      "CodeAnalytique": "",
      "DureeAbsence": 0.0,
      "TauxAbsence": 0.0,
      "FactureAbsence": "",
      "RefPrestationAbsenceId": 0,
      "RefPaiementAbsenceId": 0,
      "CompteAbsence": "",
      "CodeAnalytiqueAbsence": "",
      "NoteAbsenceId": 0,
      "Libelle": "Financement VAE",
      "LibelleExterne": "Financement VAE",
      "CategoriePrestationId": 3560712,
      "PeriodeNom": "2025/2026",
      "RefEcheanceLiee": null
}' \
  -u 'nomdutilisateur:motdepasse' 
```

:::

##### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceConvention",
  "Id": 23908807,
  "Nom": "",
  "Code": "",
  "ConventionId": 23907787,
  "EntrepriseId": 0,
  "OPCAId": 17067068,
  "NbHeureTheorique": 3.0,
  "NbHeureReelle": 1.0,
  "Taux": 1234.0,
  "Date": "2026-03-10T00:00:00+01:00",
  "NoteId": 0,
  "RefPrestationId": null,
  "RefPaiementId": null,
  "Compte": "7068500",
  "CodeAnalytique": "",
  "DureeAbsence": 0.0,
  "TauxAbsence": 0.0,
  "FactureAbsence": "",
  "RefPrestationAbsenceId": 0,
  "RefPaiementAbsenceId": 0,
  "CompteAbsence": "",
  "CodeAnalytiqueAbsence": "",
  "NoteAbsenceId": 0,
  "Libelle": "Financement VAE",
  "LibelleExterne": "Financement VAE",
  "CategoriePrestationId": 3560712,
  "PeriodeNom": "2025/2026",
  "RefEcheanceLiee": null
}
```

:::

[client-par-reference]: /reference/ressources/finance/client#recuperer-un-client-avec-une-reference
[nature-client]: /reference/ressources/finance/nature-client#lister-les-natures-de-clients