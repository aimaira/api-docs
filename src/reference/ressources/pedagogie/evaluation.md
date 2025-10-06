# Évaluation

## Récupérer une évaluation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Evaluation/8620651 \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Evaluation/$entity",
  "Id": 8005250,
  "Nom": "Projet 1",
  "Code": "",
  "CoursId": 6026547,
  "TypeEvaluationId": 3920802,
  "NotesPubliees": true,
  "Ponderation": 50.0,
  "Excusable": true,
  "Anonyme": false,
  "Duree": 0.0,
  "IdEvaluationParent": 6026549,
  "DateFinalisation": null,
  "CoursSegmenteId": null
}
```

:::

## Lister les évaluations d’un apprenant

::: tip Note

Pour retrouver toutes les étapes nécessaires à la récupération des notes d’un apprenant, consulter
[la documentation associée][notes-apprenant] dans les cas d’usage.

:::

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionCours/1234567/ApprenantEvaluation \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

Une valeur à `-1.0` indique qu’une note n’est pas renseignée.

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionCours(1234567)/ApprenantEvaluation",
  "value": [
    {
      "Id": 9054738,
      "Nom": "Oraux",
      "Code": "50",
      "IdApprenant": 0,
      "InscriptionCoursId": 1234567,
      "EvaluationId": 8620651,
      "Note": -1.0,
      "NoteAvantCorrection": null,
      "Excuse": false,
      "Absent": false,
      "Dispense": false,
      "DeuxiemeSession": false,
      "MotifCorrection": "",
      "MotifExcuse": "",
      "ReferencePlanification": "",
      "CodePresence": ""
    },
    {
      "Id": 9054739,
      "Nom": "Evaluations Semestre 1",
      "Code": "100",
      "IdApprenant": 0,
      "InscriptionCoursId": 1234567,
      "EvaluationId": 6026549,
      "Note": -1.0,
      "NoteAvantCorrection": null,
      "Excuse": false,
      "Absent": false,
      "Dispense": false,
      "DeuxiemeSession": false,
      "MotifCorrection": "",
      "MotifExcuse": "",
      "ReferencePlanification": "",
      "CodePresence": ""
    },
    {
      "Id": 9054740,
      "Nom": "Projet 1",
      "Code": "50",
      "IdApprenant": 0,
      "InscriptionCoursId": 1234567,
      "EvaluationId": 8005250,
      "Note": -1.0,
      "NoteAvantCorrection": null,
      "Excuse": false,
      "Absent": false,
      "Dispense": false,
      "DeuxiemeSession": false,
      "MotifCorrection": "",
      "MotifExcuse": "",
      "ReferencePlanification": "",
      "CodePresence": ""
    }
  ]
}
```

:::

[notes-apprenant]: /reference/cas-d-usage/recuperer-les-notes-d-un-apprenant
