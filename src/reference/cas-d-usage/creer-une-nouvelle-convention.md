# Créer une nouvelle convention

Si vous souhaitez créer de façon automatisée les conventions des apprenants depuis un outil externe à AIMAIRA, vous
pouvez utiliser l’API publique.

## Créer ou récupérer un apprenant

Avant de pouvoir créer une convention pour un apprenant, il vous est nécessaire d’avoir renseigné son dossier
d’inscription.

[Créer un nouveau dossier d’inscription][creer-un-dossier-d-inscription]
[Retrouver un apprenant existant][retrouver-un-apprenant-existant]

## Choisir le type de convention

[Lister les types de convention][lister-les-types-de-convention]

## Choisir la séquence appropriée

Afin de choisir les séquences pédagogiques éligibles pour la création d’une convention, il vous faudra utiliser 
l’identifiant de l’apprenant obtenu lors de la première étape de cette documentation.

[Lister les dossiers d’inscription d’un apprenant][lister-dossiers-d-inscription-d-un-apprenant]

Puis récupérer l’identifiant du dossier d’inscription approprié, afin de récupérer la liste des séquences possibles. 

[Lister les séquences][lister-les-sequences]

Afin de lister les séquences utilisables lors de la création d’une convention, il faut utiliser le point d’entrée
ci-dessus, et la requête OData ci-dessous.

::: code-group

```bash [Requête cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionSequence?$expand=Sequence&$select=Sequence&$filter=startswith(Sequence/TypeSequence/Code, 'S') \
  --header 'Content-Type: application/json' \
  --data '{
  "Id": 2220515
}' \
  -u 'nomdutilisateur:motdepasse'
```

```json [Réponse JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionSequence(Sequence,Sequence())",
  "value": [
    {
      "Sequence": {
        "Id": 2251455,
        "Nom": "23-26 SEQUENCE",
        "Code": "",
        "ProgrammeId": 2215156,
        "TypeSequenceId": 122650,
        "EtablissementId": 0,
        "CycleId": 0,
        "Debut": "2023-09-01T00:00:00+02:00",
        "Fin": "2026-08-31T00:00:00+02:00",
        "Concomitant": false,
        "CreditsAuGlobal": false,
        "BulletinSurIntranet": false,
        "ReleveSurIntranet": false,
        "LibelleExterne": "Expert de l’éducation",
        "ReferentEcoleId": 0,
        "CodesPieces": "",
        "CodesPiecesOptionnelles": "",
        "OuvertCandidature": false,
        "DisplayPlanning": false,
        "SurveyId": 0,
        "SurveyCalendrierId": 0,
        "ScenarioLANId": 0,
        "ReferentLANEcoleIds": [],
        "LibelleDemarche": "",
        "TitreDemarche": "",
        "DescriptifDemarche": "",
        "DebutPeriodeCandidature": "2023-07-06T00:00:00+02:00",
        "FinPeriodeCandidature": "2023-07-06T00:00:00+02:00",
        "MobiliteDebut": "2023-07-06T00:00:00+02:00",
        "MobiliteFin": "2023-07-06T00:00:00+02:00",
        "ConclusionDemarche": "",
        "EcheancierFacturationApprentissageId": 0,
        "EcheancierFacturationProId": 0,
        "CompetencesAcquerirId": 0,
        "NbSequenceFille": 0,
        "NbSequencePere": 0,
        "Campus": null,
        "Marque": null,
        "LibellePeriode": "2024/2025",
        "Credits": 0.0,
        "Coefficient": 0.0,
        "RegleId": 0,
        "MoyenneNotes": 0.0,
        "NoteMin": 0.0,
        "NoteMax": 0.0,
        "DateJurySession1": null,
        "DateJurySession2": null,
        "SequenceAnnuelleId": null,
        "SegmentId": null,
        "EstUtiliseeDansParcoursBase": false
      }
    }
  ]
}
```

:::

## Créer la convention

Une fois l’identifiant de l’apprenant, l’identifiant du type de convention souhaité et l’identifiant de la séquence
appropriée récupérés, vous pouvez créer la convention.

[Créer une convention][creer-une-convention]

### Contrat d’apprentissage

Lors de la création d’une convention de type « contrat d’apprentissage », le premier mode contractuel disponible est
automatiquement sélectionné.

### État de la convention

Lors de sa création, la convention est placée dans le premier état de convention disponible.

Lors du passage de la convention vers un état de convention avec un code `SAISIE` depuis un autre état, les documents de
la convention sont supprimés.

[Lister les états de convention][lister-les-etats-de-convention]

### Organisme financeur

Afin de renseigner un organisme financeur pour une convention, il vous faut au préalable récupérer son identifiant.

[Lister les organismes financeurs][lister-les-organismes-financeurs]
[Ajouter un organisme financeur à une convention][ajouter-un-organisme-financeur-a-une-convention]

### Entreprise

Avant de pouvoir renseigner une entreprise pour la convention, il est nécessaire de la créer. 
Il n’existe pas de référentiel d’entreprises dans AIMAIRA. 

Chaque convention dispose ainsi d’une entité entreprise qui lui est propre, même si deux conventions différentes ciblent 
la même entreprise physique. Cela veut dire que deux conventions ne peuvent pas avoir la même valeur renseignée dans le
champ `EntrepriseId`.

[Créer une entreprise][creer-une-entreprise]

[creer-un-dossier-d-inscription]: /reference/cas-d-usage/creer-un-nouveau-dossier-d-inscription
[retrouver-un-apprenant-existant]: /reference/ressources/inscription/apprenant#retrouver-un-apprenant
[lister-les-types-de-convention]: /reference/ressources/relation-entreprise/type-de-convention
[lister-dossiers-d-inscription-d-un-apprenant]: /reference/ressources/inscription/inscription
[lister-les-sequences]: /reference/ressources/pedagogie/sequence#lister-les-sequences-d-une-inscription
[creer-une-convention]: /reference/ressources/relation-entreprise/convention
[lister-les-etats-de-convention]: /reference/ressources/relation-entreprise/etat-de-convention#lister-les-etats-de-convention
[lister-les-organismes-financeurs]: /reference/ressources/relation-entreprise/organisme-financeur#lister-les-organismes-financeurs
[ajouter-un-organisme-financeur-a-une-convention]: /reference/ressources/relation-entreprise/convention#ajouter-un-organisme-financeur
[creer-une-entreprise]: /reference/ressources/relation-entreprise/entreprise