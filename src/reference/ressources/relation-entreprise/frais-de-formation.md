# Frais de formation

## Lister les frais de formation d’une convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DispositionFinanciere?$filter=ConventionId eq 4394563
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DispositionFinanciere",
  "value": [
    {
      "Id": 4411537,
      "Nom": "",
      "Code": "",
      "Annee": "None",
      "ConventionId": 4394563,
      "CoutAnnuelFormation": 5400.0,
      "CoutContratOpco": 5400.0,
      "ResteChargeEntreprise": 0.0,
      "TypeFrais": "Premiere",
      "MajorationRQTH": 0.0
    },
    {
      "Id": 4411538,
      "Nom": "",
      "Code": "",
      "Annee": "None",
      "ConventionId": 4394563,
      "CoutAnnuelFormation": 5400.0,
      "CoutContratOpco": 5400.0,
      "ResteChargeEntreprise": 0.0,
      "TypeFrais": "Deuxieme",
      "MajorationRQTH": 0.0
    },
    {
      "Id": 4411539,
      "Nom": "",
      "Code": "",
      "Annee": "None",
      "ConventionId": 4394563,
      "CoutAnnuelFormation": 0.0,
      "CoutContratOpco": 0.0,
      "ResteChargeEntreprise": 0.0,
      "TypeFrais": "Troisieme",
      "MajorationRQTH": 0.0
    },
    {
      "Id": 4411540,
      "Nom": "",
      "Code": "",
      "Annee": "None",
      "ConventionId": 4394563,
      "CoutAnnuelFormation": 0.0,
      "CoutContratOpco": 0.0,
      "ResteChargeEntreprise": 0.0,
      "TypeFrais": "Quatrieme",
      "MajorationRQTH": 0.0
    },
    {
      "Id": 4411541,
      "Nom": "",
      "Code": "",
      "Annee": "None",
      "ConventionId": 4394563,
      "CoutAnnuelFormation": 0.0,
      "CoutContratOpco": 0.0,
      "ResteChargeEntreprise": 0.0,
      "TypeFrais": "MobiliteInternationale",
      "MajorationRQTH": 0.0
    },
    {
      "Id": 4411542,
      "Nom": "",
      "Code": "",
      "Annee": "None",
      "ConventionId": 4394563,
      "CoutAnnuelFormation": 0.0,
      "CoutContratOpco": 0.0,
      "ResteChargeEntreprise": 0.0,
      "TypeFrais": "PremierEquipement",
      "MajorationRQTH": 0.0
    }
  ]
}
```

:::

## Créer les frais de formation d’une convention

Toutes les propriétés spécifiées dans la requête ci-dessous sont obligatoires.

La valeur de la propriété `TypeFrais` doit être issue d’un des libellés de la liste des types de frais de formation 
[disponible via l’API][type-frais].

Si une autre entrée de frais de formation existe pour cette convention avec le même type, créer une nouvelle entrée est
possible, mais elle ne sera jamais utilisée ou disponible depuis l’interface d’administration. Il est donc préférable de
modifier l’entrée existante.

::: warning Note

Les propriétés suivantes sont désuètes et ne doivent plus être utilisées :

- `Nom`
- `Code`
- `Annee`

:::

::: code-group

```bash [cURL]
curl "https://myapi.aimaira.net/GraphV1/DispositionFinanciere" \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
  "ConventionId": 4394563,
  "CoutAnnuelFormation": 0.0,
  "CoutContratOpco": 0.0,
  "ResteChargeEntreprise": 0.0,
  "TypeFrais": "Premiere",
  "MajorationRQTH": 0.0
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "http://localhost:31766/$metadata#DispositionFinanciere/$entity",
  "Id": 18442040,
  "Nom": "",
  "Code": "",
  "Annee": "None",
  "ConventionId": 4394563,
  "CoutAnnuelFormation": 0.0,
  "CoutContratOpco": 0.0,
  "ResteChargeEntreprise": 0.0,
  "TypeFrais": "Premiere",
  "MajorationRQTH": 0.0
}
```

:::

## Modifier les frais de formation d’une convention

::: code-group

```bash [cURL]
curl "https://myapi.aimaira.net/GraphV1/DispositionFinanciere/18442040" \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
  "ConventionId": 4394563,
  "CoutAnnuelFormation": 10000.0,
  "CoutContratOpco": 0.0,
  "ResteChargeEntreprise": 0.0,
  "TypeFrais": "Premiere",
  "MajorationRQTH": 0.0
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "http://localhost:31766/$metadata#DispositionFinanciere/$entity",
  "Id": 18442040,
  "Nom": "",
  "Code": "",
  "Annee": "None",
  "ConventionId": 4394563,
  "CoutAnnuelFormation": 0.0,
  "CoutContratOpco": 0.0,
  "ResteChargeEntreprise": 0.0,
  "TypeFrais": "Premiere",
  "MajorationRQTH": 0.0
}
```

:::

[type-frais]: /reference/ressources/relation-entreprise/type-de-frais-de-formation