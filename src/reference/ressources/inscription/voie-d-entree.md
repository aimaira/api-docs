# Voie d’entrée

Pour s’afficher dans l’API, une voie d’entrée doit disposer d’une référence externe.

## Lister les voies d’entrées

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Recrutement
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Recrutement",
  "value": [
    {
      "Id": 2215184,
      "Nom": "23-26 Voie d’entrée",
      "Code": "",
      "ProgrammeId": 2215158,
      "ParcoursId": 2215168,
      "TypeRecrutementId": 0,
      "EtablissementId": 0,
      "TemplateIsic": 0,
      "Racine": "",
      "LibelleExterne": "Inscription Rentrée 2023",
      "PayePar": "",
      "CodesPieces": "NOTES/",
      "CodesPiecesOptionnelles": "RQTH/",
      "Debut": "2023-04-01T00:00:00+02:00",
      "Fin": "2023-12-01T00:00:00+01:00",
      "Rentree": "2023-10-02T00:00:00+02:00",
      "Accompte": 0.0,
      "Payant": false,
      "Reinscription": false,
      "Passage": false,
      "Diplomant": true,
      "EntiteJuridiqueId": null,
      "DebutFormation": null,
      "FinFormation": null,
      "EnqueteSISE": false,
      "EnqueteCTI": false,
      "EnqueteSISEDiplom": "",
      "EnqueteSISECompos": "",
      "ReferenceExterneId": 2253450,
      "Parametres": [
        {
          "Code": "templatePreInscription"
        },
        {
          "Code": "templateIdentifiant"
        },
        {
          "Code": "templateComplet"
        },
        {
          "Code": "templateConfirmation"
        },
        {
          "Code": "nomContact"
        },
        {
          "Code": "telephoneContact"
        },
        {
          "Code": "mailContact"
        },
        {
          "Code": "templateAcompte"
        },
        {
          "Code": "ouvertAlternance"
        }
      ]
    }
  ]
}
```

:::
