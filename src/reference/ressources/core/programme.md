# Programme

## Lister les programmes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Programme \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Programme(Parametres())",
  "value": [
    {
      "Id": 2215158,
      "Nom": "PGE",
      "Code": "PGE",
      "EntiteJuridiqueId": 2215156,
      "EtablissementId": 0,
      "EcoleId": 2215157,
      "diplomeViseEJ20Id": 0,
      "diplomeViseFA13Id": 2214615,
      "IntitulePrecisDiplomeCERFA": "Programme Grande Ecole",
      "CodeDroit": "PGE",
      "CodeAnalytique": "",
      "Extension": "",
      "Marque": "Ecole",
      "Campus": "Campus",
      "SC": "",
      "AgeMin": 0,
      "AgeMax": 100,
      "NbAnnee": 3,
      "LibelleExterne": "Programme Grande Ecole",
      "TemplateUserId": 0,
      "NiveauViseLibelleExterne": "Niveau 7",
      "LibelleRNCP": "Programme Grande Ecole",
      "EnqueteSISE": true,
      "EnqueteCTI": false,
      "EnqueteSISEDiplom": "00X00000",
      "EnqueteSISECompos": "",
      "CodeRNCP": "00000",
      "Parametres": [
        {
          "Id": 0,
          "Code": "DIPLOM",
          "Valeur": ""
        },
        {
          "Id": 0,
          "Code": "COMPOS",
          "Valeur": ""
        }
      ]
    }
  ]
}
```

:::
