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

## Créer un programme

### Données obligatoires

- `Nom`
- `Code`
- `EntiteJuridiqueId` *(voir [Campus][campus])*
- `CodeDroit`
- `CodeAnalytique`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Programme \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Programme/$entity",
    "Nom": "Mon programme",
    "Code": "MON_PROGRAMME",
    "EntiteJuridiqueId": 2215156,
    "CodeDroit": "MON_PROGRAMME",
    "CodeAnalytique": "MON_PROGRAMME"
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Programme/$entity",
  "Id": 2253499,
  "Nom": "Mon programme",
  "Code": "MON_PROGRAMME",
  "EntiteJuridiqueId": 2215156,
  "EtablissementId": 0,
  "EcoleId": 0,
  "diplomeViseEJ20Id": 0,
  "diplomeViseFA13Id": 0,
  "IntitulePrecisDiplomeCERFA": "",
  "CodeDroit": "MON_PROGRAMME",
  "CodeAnalytique": "MON_PROGRAMME",
  "Extension": "",
  "Marque": "",
  "Campus": null,
  "SC": "",
  "AgeMin": 0,
  "AgeMax": 0,
  "NbAnnee": 0,
  "LibelleExterne": "",
  "TemplateUserId": 0,
  "NiveauViseLibelleExterne": "",
  "LibelleRNCP": "",
  "EnqueteSISE": false,
  "EnqueteCTI": false,
  "EnqueteSISEDiplom": "",
  "EnqueteSISECompos": "",
  "CodeRNCP": null
}
```

:::

[campus]: /reference/ressources/core/campus