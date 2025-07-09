# Origine

L’origine (historiquement appellée « origine du recrutement ») est une entité contenant la provenance d’une inscription.

## Lister les origines

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Origine
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "http://localhost:31766/$metadata#Origine",
  "value": [
    {
      "Id": 1234567,
      "Nom": "Origine 1",
      "Code": "",
      "ConcoursON": true,
      "PartenaireON": false,
      "EntiteJuridiqueId": 7654321
    },
    {
      "Id": 1234568,
      "Nom": "Origine 2",
      "Code": "",
      "ConcoursON": false,
      "PartenaireON": false,
      "EntiteJuridiqueId": 87654321
    }
  ]
}
```

:::