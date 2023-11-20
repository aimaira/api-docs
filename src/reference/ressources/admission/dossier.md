# Dossier

## Lister les dossiers

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Dossier \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Dossier",
  "value": [
    {
      "Id": 2253444,
      "Nom": "DUPONT",
      "Code": "C00001",
      "AffaireId": 2253443,
      "CandidatId": 2253433,
      "SessionRecrutementId": 2253424,
      "EtatCandidatureId": 119058,
      "DateDebut": "2023-11-08T21:53:11.673+01:00",
      "DateFin": null,
      "DateEvaluation": null,
      "DecisionId": 0,
      "DateDecision": null,
      "AnneeBac": "",
      "NoteBac": "",
      "SpecialiteBac": "",
      "SpecialiteBaccalaureatGeneral1Id": 0,
      "SpecialiteBaccalaureatGeneral2Id": 0,
      "EtablissementBac": "",
      "EtablissementVilleBac": "",
      "EtablissementNumeroUAIBac": "",
      "NumeroINEBac": "",
      "EnCoursBac": false,
      "PaysIdBac": 0,
      "BaccalaureatId": 0,
      "MentionId": 0,
      "InscriptionId": 0,
      "CreneauId": 0,
      "SituationActuelleId": 0,
      "DernierDiplomeId": 0,
      "Numero": "C00001-1",
      "ReferenceCRM": "",
      "Referent1Id": 0,
      "Referent2Id": 0,
      "SessionId": 0,
      "ReponseQuestionnaireCandidatId": 0,
      "ReponseQuestionnaireReferent1Id": 0,
      "ReponseQuestionnaireReferent2Id": 0,
      "ReponseQuestionnaireEvaluateurId": 0,
      "CreneauLibre": null,
      "AgentId": 0,
      "NiveauEtudeId": 0,
      "PourcentageAvancement": 0
    }
  ]
}
```

:::

## Créer un dossier

Afin de créer un dossier depuis l’API AIMAIRA, il est nécessaire de passer au minimum l’id d'une 
[Voie d'admission][voie-d-admission], l’id d'un [Candidat][candidat] et l’id d'un 
[Etat de candidature][etat-de-candidature].

### Données obligatoires

- `CandidatId` *(voir [Candidat][candidat])*
- `EtatCandidatureId` *(voir [Etat de candidature][etat-de-candidature])*
- `SessionRecrutementId` *(voir [Voie d'admission][voie-d-admission])*

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Dossier 
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Dossier/$entity",
  "SessionRecrutementId": 2253424,
  "CandidatId": 2253433,
  "EtatCandidatureId": 119058
}' \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Dossier/$entity",
  "Id": 2253447,
  "Nom": "DUPONT",
  "Code": "C00001",
  "AffaireId": 2253446,
  "CandidatId": 2253433,
  "SessionRecrutementId": 2253424,
  "EtatCandidatureId": 119058,
  "DateDebut": "2023-11-08T21:53:27.0844735+01:00",
  "DateFin": null,
  "DateEvaluation": null,
  "DecisionId": 0,
  "DateDecision": null,
  "AnneeBac": "",
  "NoteBac": null,
  "SpecialiteBac": "",
  "SpecialiteBaccalaureatGeneral1Id": 0,
  "SpecialiteBaccalaureatGeneral2Id": 0,
  "EtablissementBac": "",
  "EtablissementVilleBac": "",
  "EtablissementNumeroUAIBac": "",
  "NumeroINEBac": "",
  "EnCoursBac": false,
  "PaysIdBac": 0,
  "BaccalaureatId": 0,
  "MentionId": 0,
  "InscriptionId": 0,
  "CreneauId": 0,
  "SituationActuelleId": 0,
  "DernierDiplomeId": 0,
  "Numero": "C00001-2",
  "ReferenceCRM": "",
  "Referent1Id": 0,
  "Referent2Id": 0,
  "SessionId": 0,
  "ReponseQuestionnaireCandidatId": 0,
  "ReponseQuestionnaireReferent1Id": 0,
  "ReponseQuestionnaireReferent2Id": 0,
  "ReponseQuestionnaireEvaluateurId": 0,
  "CreneauLibre": null,
  "AgentId": 0,
  "NiveauEtudeId": 0,
  "PourcentageAvancement": 0
}
```

:::

[candidat]: /reference/ressources/admission/candidat
[etat-de-candidature]: /reference/ressources/admission/etat-de-candidature
[voie-d-admission]: /reference/ressources/admission/voie-d-admission