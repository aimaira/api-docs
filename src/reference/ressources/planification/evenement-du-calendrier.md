# Événement du calendrier

Les événements du calendrier (historiquement appelés planifications) représentent des 
séances de cours, des événements communs ou des réservations qui 
peuvent être positionnés sur un créneau horaire.

## Référence multiple

La référence multiple est un identifiant unique qui permet d’identifier si des événements sont liés entre eux. Les
événements disposants de la même valeur de référence multiple s’afficheront comme liés entre eux dans la planification.

## Format des données de dates

Toutes les dates transmises à l’API doivent respecter le format [ISO 8601][iso-8601].

## Création d’un événement du calendrier

### Données obligatoires

- `EntiteJuridique` *(voir [Campus][campus])*
- `TypePlanification` *(voir [Type d’événement du calendrier][type-d-evenement-du-calendrier])*
- `Debut`
- `Fin`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Planification \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  "EntiteJuridiqueId": 2215111,
  "Debut": "2022-01-01T08:00:00+02:00",
  "Fin": "2022-01-01T09:00:00+02:00",
  "TypePlanificationId": 1540986
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Planification/$entity",
  "Id": 2253477,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 2215111,
  "Debut": "2022-01-01T07:00:00+01:00",
  "Fin": "2022-01-01T08:00:00+01:00",
  "TypePlanificationId": 1540986,
  "Enseignants": "",
  "ReferenceExterne": "",
  "DateSynchronisation": null,
  "ReferenceMultiple": null,
  "Annule": false,
  "Realise": false,
  "CommentaireInterneId": 0,
  "CommentaireExterneId": 0,
  "ProgrammeId": 0,
  "SequenceId": 0
}
```

:::

## Modification d’un événement du calendrier

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Planification/123456 \
    --request PUT \
    --header 'Content-Type: application/json' \
    --data '{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Planification/$entity",
  "Id": 0,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "Debut": null,
  "Fin": null,
  "TypePlanificationId": 0,
  "Enseignants": "",
  "ReferenceExterne": "",
  "DateSynchronisation": null,
  "ReferenceMultiple": null,
  "Annule": false,
  "Realise": false,
  "CommentaireInterneId": 0,
  "CommentaireExterneId": 0,
  "ProgrammeId": 0,
  "SequenceId": 0
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

[campus]: /reference/ressources/core/campus
[type-d-evenement-du-calendrier]: /reference/ressources/planification/type-d-evenement
[iso-8601]: https://fr.wikipedia.org/wiki/ISO_8601