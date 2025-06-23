# Rémunération de l’apprenant

## Lister les informations de rémunération d’une convention

Afin de pouvoir lister les informations de rémunération, il est indispensable de passer un identifiant de convention.
Il n’est pas possible de lister toutes les informations de rémunérations contenues dans l’instance d’AIMAIRA.  

### Propriétés spécifiques

#### `SalaireMin`

Le salaire minimum peut prendre trois valeurs différentes :

- SMC (le salaire minimum conventionnel)
- SMIC (le salaire minimum interprofessionnel de croissance)
- `-` ou `null` (indiquant une donnée vide)

#### `Annee`

L’année concernée par les informations de rémunération correspond à une valeur de 1 à 4.

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Remuneration?$filter=ConventionId eq 4394563
  -u 'nomdutilisateur:motdepasse'
```

### Réponse

```json [JSON]
{
  "@odata.context": "http://localhost:31766/$metadata#Remuneration",
  "value": [
    {
      "Id": 4394565,
      "Nom": "",
      "Code": "",
      "Debut1": "2022-09-05T00:00:00+02:00",
      "Fin1": "2023-05-31T00:00:00+02:00",
      "Pourcentage1": 43.00,
      "SalaireMin1": "SMIC",
      "Debut2": "2023-06-01T00:00:00+02:00",
      "Fin2": "2023-09-04T00:00:00+02:00",
      "Pourcentage2": 53.00,
      "SalaireMin2": "SMIC",
      "Annee": 1,
      "ConventionId": 4394563
    },
    {
      "Id": 4394566,
      "Nom": "",
      "Code": "",
      "Debut1": "2023-09-05T00:00:00+02:00",
      "Fin1": "2024-08-31T00:00:00+02:00",
      "Pourcentage1": 61.00,
      "SalaireMin1": "SMIC",
      "Debut2": null,
      "Fin2": null,
      "Pourcentage2": 0.00,
      "SalaireMin2": "-",
      "Annee": 2,
      "ConventionId": 4394563
    },
    {
      "Id": 4411535,
      "Nom": "",
      "Code": "",
      "Debut1": null,
      "Fin1": null,
      "Pourcentage1": 0.00,
      "SalaireMin1": "-",
      "Debut2": null,
      "Fin2": null,
      "Pourcentage2": 0.00,
      "SalaireMin2": "-",
      "Annee": 3,
      "ConventionId": 4394563
    },
    {
      "Id": 4411536,
      "Nom": "",
      "Code": "",
      "Debut1": null,
      "Fin1": null,
      "Pourcentage1": 0.00,
      "SalaireMin1": "-",
      "Debut2": null,
      "Fin2": null,
      "Pourcentage2": 0.00,
      "SalaireMin2": "-",
      "Annee": 4,
      "ConventionId": 4394563
    }
  ]
}
```

## Créer les informations de rémunération d’une convention

:::code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Remuneration \
  --request POST
  --header "Content-Type: application/json" \
  --data '{
  "Debut1": "2025-09-01T00:00:00+02:00",
  "Fin1": "2026-05-31T00:00:00+02:00",
  "Pourcentage1": 80.00,
  "SalaireMin1": "SMIC",
  "Debut2": "2026-06-01T00:00:00+02:00",
  "Fin2": "2026-08-31T00:00:00+02:00",
  "Pourcentage2": 95.00,
  "SalaireMin2": "SMIC",
  "Annee": 1,
  "ConventionId": 4394563
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "http://localhost:31766/$metadata#Remuneration/$entity",
  "Id": 18449840,
  "Nom": "",
  "Code": "",
  "Debut1": "2022-09-05T00:00:00+02:00",
  "Fin1": "2023-05-31T00:00:00+02:00",
  "Pourcentage1": 100.00,
  "SalaireMin1": "SMIC",
  "Debut2": "2023-06-01T00:00:00+02:00",
  "Fin2": "2023-09-04T00:00:00+02:00",
  "Pourcentage2": 100.00,
  "SalaireMin2": "SMIC",
  "Annee": 1,
  "ConventionId": 4394563
}
```

:::

## Mettre à jour les informations de rémunération d’une convention

:::code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Remuneration/4394565 \
  --request PUT
  --header "Content-Type: application/json" \
  --data '{
  "Debut1": "2022-09-05T00:00:00+02:00",
  "Fin1": "2023-05-31T00:00:00+02:00",
  "Pourcentage1": 100.00,
  "SalaireMin1": "SMIC",
  "Debut2": "2023-06-01T00:00:00+02:00",
  "Fin2": "2023-09-04T00:00:00+02:00",
  "Pourcentage2": 100.00,
  "SalaireMin2": "SMIC",
  "Annee": 1,
  "ConventionId": 4394563
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "http://localhost:31766/$metadata#Remuneration/$entity",
  "Id": 4394563,
  "Nom": "",
  "Code": "",
  "Debut1": "2022-09-05T00:00:00+02:00",
  "Fin1": "2023-05-31T00:00:00+02:00",
  "Pourcentage1": 100.00,
  "SalaireMin1": "SMIC",
  "Debut2": "2023-06-01T00:00:00+02:00",
  "Fin2": "2023-09-04T00:00:00+02:00",
  "Pourcentage2": 100.00,
  "SalaireMin2": "SMIC",
  "Annee": 1,
  "ConventionId": 4394563
}
```

:::