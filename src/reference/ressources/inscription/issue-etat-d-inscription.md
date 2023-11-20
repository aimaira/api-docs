# Issue - État d’inscription

## Lister les issues - états d’inscription

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatInscription
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EtatInscription",
  "value": [
    {
      "Id": 1301,
      "Nom": "En cours de scolarité",
      "Code": "APP",
      "ApprenantON": true,
      "NumeroOrdre": 1,
      "EtatInduitId": 1301,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": true,
      "ReferenceExterne": "",
      "LibelleIssue": "En cours de scolarité"
    },
    {
      "Id": 57730,
      "Nom": "Démission",
      "Code": "DEM",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 60417,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "Démission"
    },
    {
      "Id": 58448,
      "Nom": "Diplômé",
      "Code": "DIP",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 58448,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": true,
      "ReferenceExterne": "",
      "LibelleIssue": "Diplômé"
    },
    {
      "Id": 58449,
      "Nom": "Exclusion",
      "Code": "EXC",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 60417,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "Exclusion"
    },
    {
      "Id": 60417,
      "Nom": "Fin de scolarité",
      "Code": "FIS",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 60417,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "Fin de scolarité"
    },
    {
      "Id": 60422,
      "Nom": "Fin d'échange",
      "Code": "FIE",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 60417,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "Fin d'échange"
    },
    {
      "Id": 60484,
      "Nom": "Renonciation",
      "Code": "REN",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 60484,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "Renonciation"
    },
    {
      "Id": 60561,
      "Nom": "En attente de jury",
      "Code": "ATD",
      "ApprenantON": true,
      "NumeroOrdre": 0,
      "EtatInduitId": 60561,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "En attente de jury"
    },
    {
      "Id": 78736,
      "Nom": "Admis",
      "Code": "ADM",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 78736,
      "SuiviInscription": true,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "Admis"
    },
    {
      "Id": 96756,
      "Nom": "Prérequis manquant",
      "Code": "DIM",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 60484,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "Prérequis manquant"
    },
    {
      "Id": 118191,
      "Nom": "Décès",
      "Code": "DCD",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 60417,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "Décès"
    },
    {
      "Id": 493208,
      "Nom": "En cours d'inscription",
      "Code": "ENC",
      "ApprenantON": false,
      "NumeroOrdre": 1,
      "EtatInduitId": 1301,
      "SuiviInscription": true,
      "SuiviReinscription": true,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "En cours d'inscription"
    },
    {
      "Id": 1542771,
      "Nom": "Non diplômé",
      "Code": "NOD",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 60417,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "Non diplômé"
    },
    {
      "Id": 1986822,
      "Nom": "Non réinscription",
      "Code": "NON",
      "ApprenantON": false,
      "NumeroOrdre": 0,
      "EtatInduitId": 60417,
      "SuiviInscription": false,
      "SuiviReinscription": false,
      "OuvreAccesIntranet": false,
      "ReferenceExterne": "",
      "LibelleIssue": "Non réinscription"
    }
  ]
}
```

:::