# Type d’événement du calendrier

## Lister les types d’événements du calendrier

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypePlanification \
    --request GET \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypePlanification",
    "value": [
        {
            "Id": 334214,
            "Nom": "Seance de cours",
            "Code": "SEANCE"
        },
        {
            "Id": 334215,
            "Nom": "Examen",
            "Code": "EXAMEN"
        },
        {
            "Id": 1540986,
            "Nom": "Evenement commun",
            "Code": "EVENEMENT"
        },
        {
            "Id": 1540987,
            "Nom": "Reservation",
            "Code": "RESERVATIO"
        }
    ]
}
```

:::