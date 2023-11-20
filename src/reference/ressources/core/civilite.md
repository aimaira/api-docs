# Civilité

## Lister les civilités

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Civilite
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Civilite",
  "value": [
    {
      "Id": 1539,
      "Nom": "Mle",
      "Code": "MLE",
      "NomLong": "Mademoiselle",
      "GenreMale": false
    },
    {
      "Id": 1540,
      "Nom": "Mme",
      "Code": "MME",
      "NomLong": "Madame",
      "GenreMale": false
    },
    {
      "Id": 1541,
      "Nom": "M",
      "Code": "M",
      "NomLong": "Monsieur",
      "GenreMale": true
    }
  ]
}
```

:::
