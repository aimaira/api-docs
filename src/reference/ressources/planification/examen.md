# Examen

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les examens

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Examen \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Examen",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EntiteJuridiqueId": 0,
      "Debut": null,
      "Fin": null,
      "TypePlanificationId": 0,
      "Enseignants": "",
      "ReferenceExterne": "",
      "DateSynchronisation": null,
      "ReferenceMultiple": "00000000-0000-0000-0000-000000000000",
      "Annule": false,
      "Realise": false,
      "CommentaireInterneId": 0,
      "CommentaireExterneId": 0,
      "ProgrammeId": 0,
      "SequenceId": 0,
      "CoursId": 0,
      "EvaluationId": 0,
      "PlanificationId": 0
    }
  ]
}
```

:::

## Récupérer un examen avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Examen/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Examen/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "Debut": null,
  "Fin": null,
  "TypePlanificationId": 0,
  "Enseignants": "",
  "ReferenceExterne": "",
  "DateSynchronisation": null,
  "ReferenceMultiple": "00000000-0000-0000-0000-000000000000",
  "Annule": false,
  "Realise": false,
  "CommentaireInterneId": 0,
  "CommentaireExterneId": 0,
  "ProgrammeId": 0,
  "SequenceId": 0,
  "CoursId": 0,
  "EvaluationId": 0,
  "PlanificationId": 0
}
```

:::

## Créer un examen

### Données obligatoires

- `EntiteJuridiqueId` *(voir [Entité juridique](/reference/ressources/herite/entite-juridique))*
- `Debut`
- `Fin`
- `TypePlanificationId` *(voir [Type d’événement du calendrier](/reference/ressources/planification/type-d-evenement))*

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Examen \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "EntiteJuridiqueId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "TypePlanificationId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Examen/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "TypePlanificationId": 1234567,
  "Enseignants": "",
  "ReferenceExterne": "",
  "DateSynchronisation": null,
  "ReferenceMultiple": "00000000-0000-0000-0000-000000000000",
  "Annule": false,
  "Realise": false,
  "CommentaireInterneId": 0,
  "CommentaireExterneId": 0,
  "ProgrammeId": 0,
  "SequenceId": 0,
  "CoursId": 0,
  "EvaluationId": 0,
  "PlanificationId": 0
}
```

:::

## Modifier un examen

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Examen/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "EntiteJuridiqueId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "TypePlanificationId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Examen/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "TypePlanificationId": 1234567,
  "Enseignants": "",
  "ReferenceExterne": "",
  "DateSynchronisation": null,
  "ReferenceMultiple": "00000000-0000-0000-0000-000000000000",
  "Annule": false,
  "Realise": false,
  "CommentaireInterneId": 0,
  "CommentaireExterneId": 0,
  "ProgrammeId": 0,
  "SequenceId": 0,
  "CoursId": 0,
  "EvaluationId": 0,
  "PlanificationId": 0
}
```

:::

## Supprimer un examen

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Examen/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
