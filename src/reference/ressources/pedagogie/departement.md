# Département

## Lister les départements

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Departement \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Departement",
  "value": [
    {
      "Id": 3206864,
      "Nom": "fr",
      "Code": "PAR",
      "EntiteJuridiqueId": 2215651,
      "CodeDroit": "PAR",
      "NomLg": "fr",
      "Campus": null
    },
    {
      "Id": 3280313,
      "Nom": "fr",
      "Code": "MAR",
      "EntiteJuridiqueId": 2215683,
      "CodeDroit": "MAR",
      "NomLg": "fr",
      "Campus": null
    }
  ]
}
```

:::