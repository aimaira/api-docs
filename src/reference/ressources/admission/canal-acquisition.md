# Canal d’acquisition du candidat

## Lister les canaux d’acquisition

::: code-group

``` bash [cURL]
curl https://myapi.aimaira.com/GraphV1/CanalAcquisition \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.com/GraphV1/$metadata#CanalAcquisition",
  "value": [
    {
      "Id": 2216608,
      "Nom": "Site web",
      "Code": "WEB",
      "LibelleExterne": "Site web",
      "ReferenceExterne": ""
    }
  ]
}
```

:::