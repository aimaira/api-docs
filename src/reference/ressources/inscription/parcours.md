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
curl https://myapi.aimaira.net/GraphV1/Parcours/2215168?$expand=ParcoursPeriode
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