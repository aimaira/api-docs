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

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un type d’événement du calendrier avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypePlanification/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypePlanification/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un type d’événement du calendrier

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypePlanification \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypePlanification/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un type d’événement du calendrier

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypePlanification/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypePlanification/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un type d’événement du calendrier

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypePlanification/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
