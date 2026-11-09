# Cours

Un cours représente une unité pédagogique à laquelle un apprenant peut s’inscrire et pour lequel il peut être évalué.

## Récupérer un cours avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cours/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Cours/$entity",
  "Id": 1234567,
  "Nom": "TPDLC_1",
  "Code": "C00001234-1",
  "Actif": true,
  "ReferenceECTSId": 1234566,
  "EtablissementId": 0,
  "ConnaissancesId": 0,
  "PrerequisId": 0,
  "MethodeId": 0,
  "PresentationId": 0,
  "DiversId": 0,
  "StructureId": 0,
  "EvaluationId": 0,
  "Debut": "2024-09-01T00:00:00+02:00",
  "Fin": "2025-01-14T00:00:00+01:00",
  "EffectifMax": 0,
  "VolumeHorairePresentiel": 0.0,
  "VolumeHorairePersonnel": 0.0,
  "VolumeHoraireDistanciel": 0.0,
  "SyllabusComplet": false,
  "SyllabusPublie": false,
  "TypeCalculId": 2240738,
  "CodeDroit": "",
  "CodeDroitProgramme": "",
  "LibelleProgramme": "",
  "Couleur": "",
  "LibelleExterne": "Transitions de phases dans les cristaux - Partie 1",
  "CoursAnnuelId": null,
  "SegmentId": null,
  "EstUtiliseDansParcoursBase": false
}
```

:::

## Récupérer les enseignants d’un cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cours/1234567/EnseignantsCours \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Cours(1234567)/EnseignantsCours",
  "value": [
    {
      "Id": 8836006,
      "Nom": "DUPONT Louis",
      "Code": "",
      "EnseignantId": 2552118,
      "CoursId": 1234567,
      "Responsable": true,
      "NbGroupe": 1,
      "Intervenant": true,
      "CodesGroupes": "SLS41/"
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Lister les cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cours \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Cours",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "Actif": false,
      "ReferenceECTSId": 0,
      "EtablissementId": 0,
      "ConnaissancesId": 0,
      "PrerequisId": 0,
      "MethodeId": 0,
      "PresentationId": 0,
      "DiversId": 0,
      "StructureId": 0,
      "EvaluationId": 0,
      "Debut": null,
      "Fin": null,
      "EffectifMax": 0,
      "VolumeHorairePresentiel": 0,
      "VolumeHorairePersonnel": 0,
      "VolumeHoraireDistanciel": 0,
      "SyllabusComplet": false,
      "SyllabusPublie": false,
      "TypeCalculId": 0,
      "CodeDroit": "",
      "CodeDroitProgramme": "",
      "LibelleProgramme": "",
      "Couleur": "",
      "ReferenceExterne": "",
      "LibelleExterne": "",
      "CoursAnnuelId": 0,
      "SegmentId": 0,
      "EstUtiliseDansParcoursBase": false,
      "TypeProjetId": 0,
      "ProjetEntreprise": "",
      "ProjetSiret": "",
      "ProjetDescriptif": ""
    }
  ]
}
```

:::

## Créer un cours

### Champs particuliers

#### `EstUtiliseDansParcoursBase`

Indique si ce cours est utilisable dans un parcours de base (pour la segmentation) ou non.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cours \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Actif": false,
  "ReferenceECTSId": 1234567,
  "EtablissementId": 1234567,
  "ConnaissancesId": 1234567,
  "PrerequisId": 1234567,
  "MethodeId": 1234567,
  "PresentationId": 1234567,
  "DiversId": 1234567,
  "StructureId": 1234567,
  "EvaluationId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "EffectifMax": 0,
  "VolumeHorairePresentiel": 0,
  "VolumeHorairePersonnel": 0,
  "VolumeHoraireDistanciel": 0,
  "SyllabusComplet": false,
  "SyllabusPublie": false,
  "TypeCalculId": 1234567,
  "CodeDroit": "texte",
  "CodeDroitProgramme": "texte",
  "LibelleProgramme": "texte",
  "Couleur": "texte",
  "ReferenceExterne": "texte",
  "LibelleExterne": "texte",
  "CoursAnnuelId": 1234567,
  "SegmentId": 1234567,
  "EstUtiliseDansParcoursBase": false,
  "TypeProjetId": 1234567,
  "ProjetEntreprise": "texte",
  "ProjetSiret": "texte",
  "ProjetDescriptif": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Cours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Actif": false,
  "ReferenceECTSId": 1234567,
  "EtablissementId": 1234567,
  "ConnaissancesId": 1234567,
  "PrerequisId": 1234567,
  "MethodeId": 1234567,
  "PresentationId": 1234567,
  "DiversId": 1234567,
  "StructureId": 1234567,
  "EvaluationId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "EffectifMax": 0,
  "VolumeHorairePresentiel": 0,
  "VolumeHorairePersonnel": 0,
  "VolumeHoraireDistanciel": 0,
  "SyllabusComplet": false,
  "SyllabusPublie": false,
  "TypeCalculId": 1234567,
  "CodeDroit": "texte",
  "CodeDroitProgramme": "texte",
  "LibelleProgramme": "texte",
  "Couleur": "texte",
  "ReferenceExterne": "texte",
  "LibelleExterne": "texte",
  "CoursAnnuelId": 1234567,
  "SegmentId": 1234567,
  "EstUtiliseDansParcoursBase": false,
  "TypeProjetId": 1234567,
  "ProjetEntreprise": "texte",
  "ProjetSiret": "texte",
  "ProjetDescriptif": "texte"
}
```

:::

## Modifier un cours

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cours/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Actif": false,
  "ReferenceECTSId": 1234567,
  "EtablissementId": 1234567,
  "ConnaissancesId": 1234567,
  "PrerequisId": 1234567,
  "MethodeId": 1234567,
  "PresentationId": 1234567,
  "DiversId": 1234567,
  "StructureId": 1234567,
  "EvaluationId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "EffectifMax": 0,
  "VolumeHorairePresentiel": 0,
  "VolumeHorairePersonnel": 0,
  "VolumeHoraireDistanciel": 0,
  "SyllabusComplet": false,
  "SyllabusPublie": false,
  "TypeCalculId": 1234567,
  "CodeDroit": "texte",
  "CodeDroitProgramme": "texte",
  "LibelleProgramme": "texte",
  "Couleur": "texte",
  "ReferenceExterne": "texte",
  "LibelleExterne": "texte",
  "CoursAnnuelId": 1234567,
  "SegmentId": 1234567,
  "EstUtiliseDansParcoursBase": false,
  "TypeProjetId": 1234567,
  "ProjetEntreprise": "texte",
  "ProjetSiret": "texte",
  "ProjetDescriptif": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Cours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Actif": false,
  "ReferenceECTSId": 1234567,
  "EtablissementId": 1234567,
  "ConnaissancesId": 1234567,
  "PrerequisId": 1234567,
  "MethodeId": 1234567,
  "PresentationId": 1234567,
  "DiversId": 1234567,
  "StructureId": 1234567,
  "EvaluationId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "EffectifMax": 0,
  "VolumeHorairePresentiel": 0,
  "VolumeHorairePersonnel": 0,
  "VolumeHoraireDistanciel": 0,
  "SyllabusComplet": false,
  "SyllabusPublie": false,
  "TypeCalculId": 1234567,
  "CodeDroit": "texte",
  "CodeDroitProgramme": "texte",
  "LibelleProgramme": "texte",
  "Couleur": "texte",
  "ReferenceExterne": "texte",
  "LibelleExterne": "texte",
  "CoursAnnuelId": 1234567,
  "SegmentId": 1234567,
  "EstUtiliseDansParcoursBase": false,
  "TypeProjetId": 1234567,
  "ProjetEntreprise": "texte",
  "ProjetSiret": "texte",
  "ProjetDescriptif": "texte"
}
```

:::

## Supprimer un cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cours/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
