# Période

## Lister les périodes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Periode \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Periode",
  "value": [
    {
      "Id": 1318,
      "Nom": "2015/2016",
      "Code": "2015/2016",
      "Debut": "2015-09-01T00:00:00+02:00",
      "Fin": "2016-08-31T00:00:00+02:00",
      "LibelleExterne": "2015/2016",
      "EnCours": false
    },
    {
      "Id": 1319,
      "Nom": "2016/2017",
      "Code": "2016/2017",
      "Debut": "2016-09-01T00:00:00+02:00",
      "Fin": "2017-08-31T00:00:00+02:00",
      "LibelleExterne": "2016/2017",
      "EnCours": false
    }
  ]
}
```

:::
