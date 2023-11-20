# Régime de l’apprenant

## Lister les régimes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RegimeInscription
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#RegimeInscription",
  "value": [
    {
      "Id": 544,
      "Nom": "Etudiant",
      "Code": "10",
      "LibelleExterne": "",
      "CodeSISE": "10"
    },
    {
      "Id": 56647,
      "Nom": "FC hors contrat pro",
      "Code": "20",
      "LibelleExterne": "",
      "CodeSISE": "20"
    },
    {
      "Id": 56648,
      "Nom": "Contrat pro",
      "Code": "22",
      "LibelleExterne": "",
      "CodeSISE": "22"
    },
    {
      "Id": 345751,
      "Nom": "Apprenti",
      "Code": "12",
      "LibelleExterne": "",
      "CodeSISE": "12"
    },
    {
      "Id": 2196756,
      "Nom": "En attente de contrat",
      "Code": "En",
      "LibelleExterne": "",
      "CodeSISE": "En"
    }
  ]
}
```

:::