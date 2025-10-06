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
  "@odata.context": "http://localhost:31766/$metadata#Cours/$entity",
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
  "@odata.context": "http://localhost:31766/$metadata#Cours(1234567)/EnseignantsCours",
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