# Ressource d’événement du calendrier

Une ressource d’événement représente une ressource (Apprenant, Enseignant, Salle, Matériel, ...) affectée à un
événement du calendrier.

Au même titre qu’un événement du calendrier, une ressource d’événement dispose d’une date de début et d’une date de fin.

## Afficher les données d’une ressource d’événement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PlanificationRessource/2218769 \
  --request GET \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PlanificationRessource/$entity",
    "Id": 2218769,
    "Nom": "Salle_01",
    "Code": "Salle_01",
    "PlanificationId": 2218767,
    "TypeRessourceId": 334210,
    "Debut": null,
    "Fin": null,
    "PlanificationDebut": null,
    "PlanificationFin": null,
    "Presence": true,
    "Exclusion": false,
    "Depart": false,
    "Retard": false,
    "Reference": 2215222,
    "IdProgramme": 0,
    "IdSequence": 0,
    "Detail": "",
    "ControlePresence": null,
    "MotifId": 0,
    "ReferenceTraitement": "",
    "ProvenancePresence": "None",
    "CommentaireId": 0,
    "LibelleEtatInscription": null,
    "RessourceCampusId": 0
}
```

:::

## Modifier une ressource d’événement

Avant de modifier une ressource, il est nécessaire de récupérer les données existantes.

Une fois les données à disposition, il suffit de modifier les propriétés nécessaires et de publier le nouvel objet
obtenu comme suit :

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PlanificationRessource/2218769 \
    --request PUT \
    --header 'Content-Type: application/json' \
    --data '{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PlanificationRessource/$entity",
    "Id": 2218769,
    "Nom": "Salle_01",
    "Code": "Salle_01",
    "PlanificationId": 2218767,
    "TypeRessourceId": 334210,
    "Debut": "2023-01-01T10:00:00+02:00",
    "Fin": "2023-01-01T12:00:00+02:00",
    "PlanificationDebut": null,
    "PlanificationFin": null,
    "Presence": true,
    "Exclusion": false,
    "Depart": false,
    "Retard": false,
    "Reference": 2215222,
    "IdProgramme": 0,
    "IdSequence": 0,
    "Detail": "",
    "ControlePresence": null,
    "MotifId": 0,
    "ReferenceTraitement": "",
    "ProvenancePresence": "None",
    "CommentaireId": 0,
    "LibelleEtatInscription": null,
    "RessourceCampusId": 0
}' \
  -u 'nomdutilisateur:motdepasse'
  
```

:::

### Réponse

::: code-group

```json [JSON]
{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PlanificationRessource/$entity",
    "Id": 2218769,
    "Nom": "Salle_01",
    "Code": "Salle_01",
    "PlanificationId": 2218767,
    "TypeRessourceId": 334210,
    "Debut": "2023-01-01T10:00:00+02:00",
    "Fin": "2023-01-01T12:00:00+02:00",
    "PlanificationDebut": null,
    "PlanificationFin": null,
    "Presence": true,
    "Exclusion": false,
    "Depart": false,
    "Retard": false,
    "Reference": 2215222,
    "IdProgramme": 0,
    "IdSequence": 0,
    "Detail": "",
    "ControlePresence": null,
    "MotifId": 0,
    "ReferenceTraitement": "",
    "ProvenancePresence": "None",
    "CommentaireId": 0,
    "LibelleEtatInscription": null,
    "RessourceCampusId": 0
}
```

:::

## Lister les types de ressources

::: code-group

```bash [cURL]
curl  https://myapi.aimaira.net/GraphV1/TypeRessource \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeRessource",
    "value": [
        {
            "Id": 334210,
            "Nom": "Salle",
            "Code": "SALLE"
        },
        {
            "Id": 334211,
            "Nom": "Matériel",
            "Code": "MATERIEL"
        },
        {
            "Id": 334212,
            "Nom": "Apprenant",
            "Code": "APPRENANT"
        },
        {
            "Id": 334213,
            "Nom": "Enseignant",
            "Code": "PROF"
        },
        {
            "Id": 2527950,
            "Nom": "Groupe",
            "Code": "GROUPE"
        }
    ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Créer une ressource d’événement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PlanificationRessource \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "PlanificationId": 1234567,
  "TypeRessourceId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "PlanificationDebut": "2026-09-01T00:00:00+02:00",
  "PlanificationFin": "2026-09-01T00:00:00+02:00",
  "Presence": false,
  "Exclusion": false,
  "Depart": false,
  "Retard": false,
  "Reference": 0,
  "IdProgramme": 0,
  "IdSequence": 0,
  "Detail": "texte",
  "ControlePresence": "2026-09-01T00:00:00+02:00",
  "MotifId": 1234567,
  "ReferenceTraitement": "texte",
  "ProvenancePresence": "None",
  "CommentaireId": 1234567,
  "LibelleEtatInscription": "texte",
  "RessourceCampusId": 1234567,
  "GroupeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PlanificationRessource/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "PlanificationId": 1234567,
  "TypeRessourceId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "PlanificationDebut": "2026-09-01T00:00:00+02:00",
  "PlanificationFin": "2026-09-01T00:00:00+02:00",
  "Presence": false,
  "Exclusion": false,
  "Depart": false,
  "Retard": false,
  "Reference": 0,
  "IdProgramme": 0,
  "IdSequence": 0,
  "Detail": "texte",
  "ControlePresence": "2026-09-01T00:00:00+02:00",
  "MotifId": 1234567,
  "ReferenceTraitement": "texte",
  "ProvenancePresence": "None",
  "CommentaireId": 1234567,
  "LibelleEtatInscription": "texte",
  "RessourceCampusId": 1234567,
  "GroupeId": 1234567
}
```

:::

## Supprimer une ressource d’événement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PlanificationRessource/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
