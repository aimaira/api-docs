# Organisme financeur

Tantôt appelé OPCA (Organismes Paritaires Collecteurs Agréés), tantôt appelé OPCO (OPérateurs de COmpétences) dans
AIMAIRA pour des raisons historiques, l’entité appelée organisme financeur représentent le financeur d’une formation, en
relation avec une convention.

## Lister les organismes financeurs

::: code-group

```bash [cURL]
curl 'https://myapi.aimaira.net/GraphV1/OPCA' \
  -u 'nomdutilisateur:motdepasse'
```

:::

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#OPCA",
  "value": [
    {
      "Id": 2214763,
      "Nom": "AFDAS",
      "Code": "OFP1",
      "EntiteJuridiqueId": 74,
      "RefClient": 2214756,
      "AdresseId": 0,
      "EntrepriseId": null,
      "CommentaireId": 0,
      "ContactId": null,
      "NouvelleReference": 0,
      "LibelleExterne": "AFDAS",
      "ClefCFADock": "",
      "CFADockdossier": false,
      "CFADockfacture": false,
      "FA13v10": false
    },
    {
      "Id": 2214779,
      "Nom": "AKTO",
      "Code": "OFP2",
      "EntiteJuridiqueId": 74,
      "RefClient": 2214772,
      "AdresseId": 0,
      "EntrepriseId": null,
      "CommentaireId": 0,
      "ContactId": null,
      "NouvelleReference": 0,
      "LibelleExterne": "AKTO - OPCO DES ENTREPRISES ET DES SALARIÉS À FORTE INTENSITÉ DE MAIN-D’ŒUVRE",
      "ClefCFADock": "",
      "CFADockdossier": false,
      "CFADockfacture": false,
      "FA13v10": false
    },
    {
      "Id": 2214795,
      "Nom": "ATLAS",
      "Code": "OFP3",
      "EntiteJuridiqueId": 74,
      "RefClient": 2214788,
      "AdresseId": 0,
      "EntrepriseId": null,
      "CommentaireId": 0,
      "ContactId": null,
      "NouvelleReference": 0,
      "LibelleExterne": "ATLAS",
      "ClefCFADock": "",
      "CFADockdossier": false,
      "CFADockfacture": false,
      "FA13v10": false
    },
    ...
  ]
}
```

:::