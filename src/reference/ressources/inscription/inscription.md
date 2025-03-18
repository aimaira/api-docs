# Inscription

L’entité `Inscription` lie un apprenant à un programme et représente son dossier d’inscription.

## Lister les inscriptions d’un apprenant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Inscription?$filter=ApprenantId eq 2253467 \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Inscription/$entity",
  "value": [
    {
      "Id": 2253468,
      "Nom": "",
      "Code": "",
      "EntiteJuridiqueId": 2215111,
      "Date": null,
      "CommentaireId": 0,
      "Contentieux": false,
      "AffaireId": 2253467,
      "ApprenantId": 2253466,
      "ProgrammeId": 2253425,
      "RecrutementId": 2215184,
      "EtatInscriptionId": 78736,
      "RegimeInscriptionId": 544,
      "DateInscription": "2023-11-20T13:00:00+01:00",
      "DateSortie": null,
      "OrigineId": 0,
      "SituationPrecedenteId": 0,
      "BaccalaureatId": 0,
      "MentionId": 0,
      "SpecialiteBaccalaureat1Id": 0,
      "SpecialiteBaccalaureat2Id": 0,
      "TypePrepaId": 0,
      "DernierDiplomeId": 0,
      "DomaineDiplomeId": 0,
      "DernierDiplomeLibelle": "",
      "CPDernierEtablissement": "",
      "VilleDernierEtablissement": "",
      "DernierEtablissement": "",
      "MotifDesinscription": "",
      "DiplomeRequis": false,
      "Convention": false,
      "PieceIdentite": false,
      "AttestationBourse": false,
      "ConditionsGenerales": false,
      "DernierReleveNote": false,
      "AttestationResponsabiliteCivile": false,
      "AccompteVerse": false,
      "ReferenceRecrutement": "",
      "DateArrivee": null,
      "LogistiqueArrivee": "",
      "NoteUrgenceId": 0,
      "NoteDiversAdministratifId": 0,
      "MailEcoleId": 0,
      "AnneeBac": "",
      "DepartementBac": "",
      "VilleBac": "",
      "EtablissementBac": "",
      "SpecialiteBac": "",
      "NoteBac": null,
      "PaysBacId": 0,
      "PaysDernierEtablissementId": 0,
      "NumeroDiplome": "",
      "MentionDiplome": "",
      "DetailOrigine": "",
      "DatePremiereConnexion": null,
      "EtablissementDernierDiplomeId": 0,
      "ResponseSurveyId": 0,
      "EtablissementBaccalaureatId": 0,
      "DateJuryAdmission": null,
      "DerniereMiseAJourCRM": null,
      "OffreCrm": "",
      "EnCoursBac": false
    }
  ]
}
```

:::

## Créer une inscription

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Inscription \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Inscription/$entity",
    "ApprenantId": 0,
    "ProgrammeId": 0,
    "RegimeInscriptionId": 0,
    "RecrutementId": 0,
    "EtatInscriptionId": 0,
    "DateInscription": "2023-11-20T12:00:00.000Z"
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Inscription/$entity",
  "Id": 2253468,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 2215111,
  "Date": null,
  "CommentaireId": 0,
  "Contentieux": false,
  "AffaireId": 2253467,
  "ApprenantId": 2253466,
  "ProgrammeId": 2253425,
  "RecrutementId": 2215184,
  "EtatInscriptionId": 78736,
  "RegimeInscriptionId": 544,
  "DateInscription": "2023-11-20T13:00:00+01:00",
  "DateSortie": null,
  "OrigineId": 0,
  "SituationPrecedenteId": 0,
  "BaccalaureatId": 0,
  "MentionId": 0,
  "SpecialiteBaccalaureat1Id": 0,
  "SpecialiteBaccalaureat2Id": 0,
  "TypePrepaId": 0,
  "DernierDiplomeId": 0,
  "DomaineDiplomeId": 0,
  "DernierDiplomeLibelle": "",
  "CPDernierEtablissement": "",
  "VilleDernierEtablissement": "",
  "DernierEtablissement": "",
  "MotifDesinscription": "",
  "DiplomeRequis": false,
  "Convention": false,
  "PieceIdentite": false,
  "AttestationBourse": false,
  "ConditionsGenerales": false,
  "DernierReleveNote": false,
  "AttestationResponsabiliteCivile": false,
  "AccompteVerse": false,
  "ReferenceRecrutement": "",
  "DateArrivee": null,
  "LogistiqueArrivee": "",
  "NoteUrgenceId": 0,
  "NoteDiversAdministratifId": 0,
  "MailEcoleId": 0,
  "AnneeBac": "",
  "DepartementBac": "",
  "VilleBac": "",
  "EtablissementBac": "",
  "SpecialiteBac": "",
  "NoteBac": null,
  "PaysBacId": 0,
  "PaysDernierEtablissementId": 0,
  "NumeroDiplome": "",
  "MentionDiplome": "",
  "DetailOrigine": "",
  "DatePremiereConnexion": null,
  "EtablissementDernierDiplomeId": 0,
  "ResponseSurveyId": 0,
  "EtablissementBaccalaureatId": 0,
  "DateJuryAdmission": null,
  "DerniereMiseAJourCRM": null,
  "OffreCrm": "",
  "EnCoursBac": false
}
```

:::

## Lier l’inscription à une période

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionPeriode \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionPeriode/$entity",
  "InscriptionId": 2253468,
  "PeriodeId": 1326,
  "LibellePeriode": "2023/2024",
  "Debut": "2023-09-01T00:00:00+02:00",
  "Fin": "2024-08-31T00:00:00+02:00",
  "AnneeScolaire": 1,
  "RegimeInscriptionId": 544,
  "EtatInscriptionId": 78736
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionPeriode/$entity",
  "Id": 2253469,
  "Nom": "",
  "Code": "",
  "InscriptionId": 2253468,
  "DecisionJuryId": 0,
  "PeriodeId": 1326,
  "RegimeInscriptionId": 544,
  "DateInscriptionMutuelle": null,
  "EchelonBourseId": 0,
  "MutuelleId": 0,
  "Issue": "",
  "MotifExonerationMutuelle": "",
  "Boursier": false,
  "AttestationBourse": false,
  "AttestationExonerationSS": false,
  "Cesure": false,
  "Redoublant": false,
  "AnneeScolaire": 1,
  "DateEnvoiCertificat": null,
  "DateEnvoiBulletin": null,
  "DateFinResponsabiliteCivile": null,
  "EtatInscriptionId": 78736,
  "RecrutementId": 0,
  "SpecialiteId": 0,
  "DateReinscription": null,
  "LibellePeriode": "2023/2024",
  "Debut": "2023-09-01T00:00:00+02:00",
  "Fin": "2024-08-31T00:00:00+02:00",
  "DisplayLibellePeriode": "",
  "LibellePeriodeSpecifique": "",
  "CVEC": "",
  "CVECnomrenseigne": "",
  "CVECNumeroINE": null,
  "ModalitePaiementId": 0,
  "TypePaiementAcompteId": 0,
  "TypePaiementId": 0,
  "AlternanceSouhaitee": false,
  "FraisValider": false,
  "Acompte": null,
  "DatePremiereConnexionReinscriptionIntranet": null
}
```

:::