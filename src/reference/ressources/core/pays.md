# Pays

## Lister les pays

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Pays
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Pays",
  "value": [
    {
      "Id": 1155,
      "Nom": "France",
      "Code": "FR",
      "ContinentId": 1,
      "Nationalite": "française",
      "Prioritaire": true,
      "Europeen": true,
      "CodeSISE": "100",
      "CodeAlpha3": "FRA"
    }
  ]
}
```

:::