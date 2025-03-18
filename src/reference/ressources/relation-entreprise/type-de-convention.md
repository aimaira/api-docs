# Type de convention

## Lister les types de convention

::: code-group


```bash [cURL]
curl https://myapi.aimaira.net.GraphV1/TypeConvention \
  -u 'nomdutilisateur:motdepasse'
````

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeConvention",
  "value": [
    {
      "Id": 334222,
      "Nom": "Convention de stage",
      "Code": "STG",
      "AvecSignatureEnLigne": true,
      "RegimeId": 544
    },
    {
      "Id": 334223,
      "Nom": "Contrat de professionnalisation",
      "Code": "PRO",
      "AvecSignatureEnLigne": true,
      "RegimeId": 56648
    },
    {
      "Id": 334224,
      "Nom": "Contrat d'apprentissage",
      "Code": "APP",
      "AvecSignatureEnLigne": true,
      "RegimeId": 345751
    },
    {
      "Id": 2123155,
      "Nom": "Convention de stage alterné",
      "Code": "STA",
      "AvecSignatureEnLigne": true,
      "RegimeId": 544
    }
  ]
}
```

:::