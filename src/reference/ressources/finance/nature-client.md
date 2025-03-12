# Nature du client

## Lister les natures de clients

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NatureClient \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NatureClient/$entity",
  "value": [
    {
      "Id": 2214718,
      "Nom": "Organisme Financeur",
      "Code": "OPCO",
      "NbJourDelaiPaiement": 0,
      "NatureId": 0
    },
    {
      "Id": 2214719,
      "Nom": "Père",
      "Code": "PERE",
      "NbJourDelaiPaiement": 0,
      "NatureId": 0
    }
  ]
}
```

:::