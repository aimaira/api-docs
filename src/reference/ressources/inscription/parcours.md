# Parcours

## Récupérer un parcours avec son id

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Parcours/2215168
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Parcours/$entity",
  "Id": 2215168,
  "Nom": "23-26 Parcours",
  "Code": "",
  "ProgrammeId": 2215158
}
```

:::

## Lister les périodes du parcours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Parcours/2215168?$expand=ParcoursPeriodes
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Parcours(ParcoursPeriodes())/$entity",
  "Id": 2215168,
  "Nom": "23-26 Parcours",
  "Code": "",
  "ProgrammeId": 2215158,
  "ParcoursPeriodes": [
    {
      "Id": 2215169,
      "Nom": "2023/2024",
      "Code": "",
      "ParcoursId": 2215168,
      "PeriodeId": 1326,
      "AnneeScolaire": 1,
      "LibellePeriode": "2023/2024",
      "Debut": "2023-09-01T00:00:00+02:00",
      "Fin": "2024-08-31T00:00:00+02:00",
      "LibellePeriodeSpecifique": "",
      "SpecialiteId": 0
    },
    {
      "Id": 2215170,
      "Nom": "2024/2025",
      "Code": "",
      "ParcoursId": 2215168,
      "PeriodeId": 1327,
      "AnneeScolaire": 2,
      "LibellePeriode": "2024/2025",
      "Debut": "2024-09-01T00:00:00+02:00",
      "Fin": "2025-08-31T00:00:00+02:00",
      "LibellePeriodeSpecifique": "",
      "SpecialiteId": 0
    },
    {
      "Id": 2215171,
      "Nom": "2025/2026",
      "Code": "",
      "ParcoursId": 2215168,
      "PeriodeId": 2215069,
      "AnneeScolaire": 3,
      "LibellePeriode": "2025/2026",
      "Debut": "2025-09-01T00:00:00+02:00",
      "Fin": "2026-08-31T00:00:00+02:00",
      "LibellePeriodeSpecifique": "",
      "SpecialiteId": 0
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Lister les parcours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Parcours \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Parcours",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ProgrammeId": 0
    }
  ]
}
```

:::

## Créer un parcours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Parcours \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Parcours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567
}
```

:::

## Modifier un parcours

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Parcours/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Parcours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567
}
```

:::

## Supprimer un parcours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Parcours/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
