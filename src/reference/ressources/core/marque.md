# Marque

::: tip Note

Pour des raisons historiques, les points d’entrée de l’entité `Marque` sont nommés `Ecole`.

:::

## Lister les marques

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ecole \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://graphskolae.aimaira.net/GraphV1/$metadata#Ecole",
  "value": [
    {
      "Id": 2215112,
      "Nom": "ALPT",
      "Code": "ALP",
      "CodeSysteme": "",
      "LibelleExterne": "ALPT",
      "CodeAnalytique": "ALP0000000000",
      "CodeDroit": "",
      "Parametres": null
    },
    {
      "Id": 2215530,
      "Nom": "URNL",
      "Code": "URN",
      "CodeSysteme": "",
      "LibelleExterne": "URNL",
      "CodeAnalytique": "URN0000000000",
      "CodeDroit": "",
      "Parametres": null
    }
  ]
}
```

:::