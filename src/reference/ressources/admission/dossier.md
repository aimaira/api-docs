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
      "DecisionId": null,
      "DateDecision": null,
      "AnneeBac": "",
      "NoteBac": "",
      "SpecialiteBac": "",
      "SpecialiteBaccalaureatGeneral1Id": null,
      "SpecialiteBaccalaureatGeneral2Id": null,
      "EtablissementBac": "",
      "EtablissementVilleBac": "",
      "EtablissementNumeroUAIBac": "",
      "NumeroINEBac": "",
      "EnCoursBac": false,
      "PaysIdBac": null,
      "BaccalaureatId": null,
      "MentionId": null,
      "InscriptionId": null,
      "CreneauId": null,
      "SituationActuelleId": null,
      "DernierDiplomeId": null,
      "Numero": "C00001-1",
      "ReferenceCRM": "",
      "Referent1Id": null,
      "Referent2Id": null,
      "SessionId": null,
      "ReponseQuestionnaireCandidatId": null,
      "ReponseQuestionnaireReferent1Id": null,
      "ReponseQuestionnaireReferent2Id": null,
      "ReponseQuestionnaireEvaluateurId": null,
      "CreneauLibre": null,
      "AgentId": null,
      "NiveauEtudeId": null,
      "PourcentageAvancement": 0,
      "Parametres": []
    }
  ]
}
```

:::

## Récupérer un dossier avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Dossier/2253444 \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
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
  "DecisionId": null,
  "DateDecision": null,
  "AnneeBac": "",
  "NoteBac": "",
  "SpecialiteBac": "",
  "SpecialiteBaccalaureatGeneral1Id": null,
  "SpecialiteBaccalaureatGeneral2Id": null,
  "EtablissementBac": "",
  "EtablissementVilleBac": "",
  "EtablissementNumeroUAIBac": "",
  "NumeroINEBac": "",
  "EnCoursBac": false,
  "PaysIdBac": null,
  "BaccalaureatId": null,
  "MentionId": null,
  "InscriptionId": null,
  "CreneauId": null,
  "SituationActuelleId": null,
  "DernierDiplomeId": null,
  "Numero": "C00001-1",
  "ReferenceCRM": "",
  "Referent1Id": null,
  "Referent2Id": null,
  "SessionId": null,
  "ReponseQuestionnaireCandidatId": null,
  "ReponseQuestionnaireReferent1Id": null,
  "ReponseQuestionnaireReferent2Id": null,
  "ReponseQuestionnaireEvaluateurId": null,
  "CreneauLibre": null,
  "AgentId": null,
  "NiveauEtudeId": null,
  "PourcentageAvancement": 0,
  "Parametres": []
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
  "DecisionId": null,
  "DateDecision": null,
  "AnneeBac": "",
  "NoteBac": null,
  "SpecialiteBac": "",
  "SpecialiteBaccalaureatGeneral1Id": null,
  "SpecialiteBaccalaureatGeneral2Id": null,
  "EtablissementBac": "",
  "EtablissementVilleBac": "",
  "EtablissementNumeroUAIBac": "",
  "NumeroINEBac": "",
  "EnCoursBac": false,
  "PaysIdBac": null,
  "BaccalaureatId": null,
  "MentionId": null,
  "InscriptionId": null,
  "CreneauId": null,
  "SituationActuelleId": null,
  "DernierDiplomeId": null,
  "Numero": "C00001-2",
  "ReferenceCRM": "",
  "Referent1Id": null,
  "Referent2Id": null,
  "SessionId": null,
  "ReponseQuestionnaireCandidatId": null,
  "ReponseQuestionnaireReferent1Id": null,
  "ReponseQuestionnaireReferent2Id": null,
  "ReponseQuestionnaireEvaluateurId": null,
  "CreneauLibre": null,
  "AgentId": null,
  "NiveauEtudeId": null,
  "PourcentageAvancement": 0,
  "Parametres": []
}
```

:::

## Modifier un dossier

Avant toute modification des propriétés d’un dossier, et pour éviter d’écraser des données, il faut au préalable 
[récupérer le dossier actuel](#récupérer-un-dossier-avec-son-identifiant).

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Dossier/2253447 
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  "Nom": "DUPONT",
  "Code": "C00001",
  "AffaireId": 2253446,
  "CandidatId": 2253433,
  "SessionRecrutementId": 2253424,
  "EtatCandidatureId": 119058,
  "DateDebut": "2023-11-08T21:53:27.0844735+01:00",
  "DateFin": null,
  "DateEvaluation": null,
  "DecisionId": null,
  "DateDecision": null,
  "AnneeBac": "",
  "NoteBac": null,
  "SpecialiteBac": "",
  "SpecialiteBaccalaureatGeneral1Id": null,
  "SpecialiteBaccalaureatGeneral2Id": null,
  "EtablissementBac": "",
  "EtablissementVilleBac": "",
  "EtablissementNumeroUAIBac": "",
  "NumeroINEBac": "",
  "EnCoursBac": false,
  "PaysIdBac": null,
  "BaccalaureatId": null,
  "MentionId": null,
  "InscriptionId": null,
  "CreneauId": null,
  "SituationActuelleId": null,
  "DernierDiplomeId": null,
  "Numero": "C00001-2",
  "ReferenceCRM": "",
  "Referent1Id": null,
  "Referent2Id": null,
  "SessionId": null,
  "ReponseQuestionnaireCandidatId": null,
  "ReponseQuestionnaireReferent1Id": null,
  "ReponseQuestionnaireReferent2Id": null,
  "ReponseQuestionnaireEvaluateurId": null,
  "CreneauLibre": null,
  "AgentId": null,
  "NiveauEtudeId": null,
  "PourcentageAvancement": 0,
  "Parametres": []
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
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
  "DecisionId": null,
  "DateDecision": null,
  "AnneeBac": "",
  "NoteBac": null,
  "SpecialiteBac": "",
  "SpecialiteBaccalaureatGeneral1Id": null,
  "SpecialiteBaccalaureatGeneral2Id": null,
  "EtablissementBac": "",
  "EtablissementVilleBac": "",
  "EtablissementNumeroUAIBac": "",
  "NumeroINEBac": "",
  "EnCoursBac": false,
  "PaysIdBac": null,
  "BaccalaureatId": null,
  "MentionId": null,
  "InscriptionId": null,
  "CreneauId": null,
  "SituationActuelleId": null,
  "DernierDiplomeId": null,
  "Numero": "C00001-2",
  "ReferenceCRM": "",
  "Referent1Id": null,
  "Referent2Id": null,
  "SessionId": null,
  "ReponseQuestionnaireCandidatId": null,
  "ReponseQuestionnaireReferent1Id": null,
  "ReponseQuestionnaireReferent2Id": null,
  "ReponseQuestionnaireEvaluateurId": null,
  "CreneauLibre": null,
  "AgentId": null,
  "NiveauEtudeId": null,
  "PourcentageAvancement": 0,
  "Parametres": []
}
```

:::

## Modifier les champs personnalisés

Les champs personnalisés du dossier sont disponibles dans la propriété `Parametres` de l’entité `Dossier`.

Lors de la [modification d’un dossier](#modifier-un-dossier), il est possible de passer des champs personnalisés comme
suit :

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Dossier/2253447 
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  ...
  "Parametres": [
    {
      "Code": "MonChampPersonnalisé",
      "Valeur": "lavaleurdemonchamp"
    }
  ]
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "Id": 2253447,
  ...
  "Parametres": [
    {
      "Id": 0,
      "Code": "MonChampPersonnalisé",
      "Valeur": "lavaleurdemonchamp"
    }
  ]
}
```

:::

[candidat]: /reference/ressources/admission/candidat
[etat-de-candidature]: /reference/ressources/admission/etat-de-candidature
[voie-d-admission]: /reference/ressources/admission/voie-d-admission