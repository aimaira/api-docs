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