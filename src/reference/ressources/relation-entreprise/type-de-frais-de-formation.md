# Type de frais de formation

## Lister les types de frais de formation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeFraisFormation
  -u 'nomdutilisateur:motdepasse'
```
:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeFraisFormation",
  "value": [
    {
      "Id": 0,
      "Libelle": "None"
    },
    {
      "Id": 1,
      "Libelle": "Premiere"
    },
    {
      "Id": 2,
      "Libelle": "Deuxieme"
    },
    {
      "Id": 3,
      "Libelle": "Troisieme"
    },
    {
      "Id": 4,
      "Libelle": "Quatrieme"
    },
    {
      "Id": 5,
      "Libelle": "MobiliteInternationale"
    },
    {
      "Id": 6,
      "Libelle": "PremierEquipement"
    }
  ]
}
```

:::