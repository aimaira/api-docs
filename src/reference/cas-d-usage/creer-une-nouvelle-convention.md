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

### État de la convention

Lors de sa création, la convention est placée dans le premier état de convention disponible.

Lors du passage de la convention vers un état de convention avec un code `SAISIE` depuis un autre état, les documents de
la convention sont supprimés.

[Lister les états de convention][lister-les-etats-de-convention]

### Renseigner une entreprise

Avant de pouvoir renseigner une entreprise pour la convention, il est nécessaire de la créer.
Il n’existe pas de référentiel d’entreprises dans AIMAIRA.

::: warning Attention

Chaque convention dispose d’une entité entreprise qui lui est propre, même si deux conventions différentes ciblent la
même entreprise physique. Cela veut dire que deux conventions ne peuvent pas avoir la même valeur renseignée dans le
champ `EntrepriseId`.

:::

[Créer une entreprise][creer-une-entreprise]

Il vous faudra ensuite [modifier la convention](#modifier-la-convention) en passant l’identifiant de l’entreprise
nouvellement créée.

### Renseigner les informations du contrat

Certaines informations du contrat s’appuient sur des entités distinctes de la convention. Il est nécessaire de créer ou 
de modifier ces entités pour pouvoir renseigner ces informations.

#### Renseigner les informations de rémunération

Certaines informations de rémunération sont directement portées par la convention. Voir la section 
[propriétés spécifiques][convention-proprietes-specifiques] de la convention.

Les autres informations peuvent être renseignées en utilisant l’entité `Remuneration`.

[Créer les informations de rémunération de l’apprenant][creer-remuneration]

#### Renseigner les frais de formation

Les frais de formation peuvent être renseignés en utilisant l’entité `FraisFormation`.

[Créer les frais de formation][creer-frais-formation]

### Renseigner la partie facturation

Afin de créer la structure de données nécessaire pour pouvoir renseigner les informations de facturation, il faut au
préalable appeler le point d’entrée `SynchronisationAffaire`.

[Créer les données de facturation de la convention][creer-les-donnees-de-facturation]

### Convention de stage

#### Renseigner un enseignant

Avant de renseigner un enseignant, il vous faudra retrouver son identifiant.

[Lister les enseignants][lister-les-enseignants]

Il vous faudra ensuite [modifier la convention](#modifier-la-convention) en passant l’identifiant de l’enseignant 
choisi.

#### Renseigner un tuteur, un signataire ou un autre contact

Un tuteur, un signataire ou un autre contact est représenté par un professionnel. Avant de pouvoir ajouter un tuteur, un
signataire ou un autre contact à la convention, il faut préalablement les créer.

Le tuteur, le signataire et l’autre contact doivent être trois professionnels différents avec trois identifiants
différents. Dans le cas où il s’agit de la même personne physique, il faudra créer plusieurs professionnels avec les
mêmes informations.

[Créer un professionnel][creer-un-professionnel]

Il vous faudra ensuite [modifier la convention](#modifier-la-convention) en passant l’identifiant du professionnel
nouvellement créé.

Pour renseigner le tuteur, il faut modifier le champ `MaitreId`.
Pour renseigner l’autre contact, il faut modifier le champ `ReferentId`.

### Contrat d’apprentissage

Lors de la création d’une convention de type « contrat d’apprentissage », le premier mode contractuel disponible est
automatiquement sélectionné.

#### Renseigner un organisme financeur

Afin de renseigner un organisme financeur pour une convention, il vous faut au préalable récupérer son identifiant.

[Lister les organismes financeurs][lister-les-organismes-financeurs]  
[Ajouter un organisme financeur à une convention][ajouter-un-organisme-financeur-a-une-convention]

#### Renseigner un signataire, un maître d’apprentissage ou un autre contact

Voir [comment renseigner un professionnel pour une convention de stage](#renseigner-un-tuteur-un-signataire-ou-un-autre-contact).

Pour renseigner le maître d’apprentissage 1, il faut modifier le champ `MaitreId`.
Pour renseigner le maître d’apprentissage 2, il faut modifier le champ `MaitreBisId`.
Pour renseigner l’autre contact, il faut modifier le champ `ReferentId`.

### Contrat de professionnalisation

#### Renseigner un organisme financeur

L’organisme financeur d’un contrat de professionnalisation peut être renseigné 
[comme pour un contrat d’apprentissage](#renseigner-un-organisme-financeur).

#### Renseigner un signataire, un tuteur (employeur), un tuteur (entreprise utilisatrice) ou un autre contact

Voir [comment renseigner un professionnel pour une convention de stage](#renseigner-un-tuteur-un-signataire-ou-un-autre-contact).

Pour renseigner le tuteur (employeur), il faut modifier le champ `MaitreId`.
Pour renseigner le tuteur (entreprise utilisatrice), il faut modifier le champ `MaitreBisId`.
Pour renseigner l’autre contact, il faut modifier le champ `ReferentId`.

## Modifier la convention

Comme pour toute autre entité, il n’est pas possible de modifier seulement certaines propriétés d’une convention lors
d’une modification *([voir la documentation de prise en main de l’API][prise-en-main-mise-a-jour])*.

Avant toute modification, il est donc nécessaire de récupérer la convention choisie, de modifier les propriétés 
appropriées et de mettre à jour intégralement l’entité.

[Modifier une convention][modifier-une-convention]

[prise-en-main-mise-a-jour]: /creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees
[creer-un-dossier-d-inscription]: /reference/cas-d-usage/creer-un-nouveau-dossier-d-inscription
[lister-les-enseignants]: /reference/ressources/academie/enseignant#lister-les-enseignants
[retrouver-un-apprenant-existant]: /reference/ressources/inscription/apprenant#retrouver-un-apprenant
[lister-dossiers-d-inscription-d-un-apprenant]: /reference/ressources/inscription/inscription
[lister-les-sequences]: /reference/ressources/pedagogie/sequence#lister-les-sequences-d-une-inscription
[creer-une-convention]: /reference/ressources/relation-entreprise/convention#creer-une-convention
[modifier-une-convention]: /reference/ressources/relation-entreprise/convention#modifier-une-convention
[ajouter-un-organisme-financeur-a-une-convention]: /reference/ressources/relation-entreprise/convention#ajouter-un-organisme-financeur
[lister-les-etats-de-convention]: /reference/ressources/relation-entreprise/etat-de-convention#lister-les-etats-de-convention
[creer-une-entreprise]: /reference/ressources/relation-entreprise/entreprise
[lister-les-organismes-financeurs]: /reference/ressources/relation-entreprise/organisme-financeur#lister-les-organismes-financeurs
[lister-les-types-de-convention]: /reference/ressources/relation-entreprise/type-de-convention
[creer-un-professionnel]: /reference/ressources/relation-entreprise/professionnel#creer-un-professionnel
[creer-les-donnees-de-facturation]: /reference/ressources/relation-entreprise/convention#creer-les-donnees-de-facturation
[convention-proprietes-specifiques]: /reference/ressources/relation-entreprise/convention#remuneration-de-l-apprenant
[creer-remuneration]: /reference/ressources/relation-entreprise/remuneration#creer-les-informations-de-remuneration-d-une-convention
[creer-frais-formation]: /reference/ressources/relation-entreprise/frais-de-formation#creer-les-frais-de-formation-d-une-convention