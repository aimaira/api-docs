# Agent

Un agent est une personne mandatée par l’établissement pour recruter des candidats.

## Lister les agents

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Agent \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://graphskolae.aimaira.net/GraphV1/$metadata#Agent",
  "value": [
    {
      "Id": 1234567,
      "Nom": "WEB",
      "Code": "WEB",
      "Login": "",
      "Prenoms": "",
      "NomUsage": "Site internet",
      "PrenomUsage": "",
      "Prenom2": "",
      "Prenom3": "",
      "NomJeuneFille": "",
      "Fonction": "",
      "VilleNaissance": "",
      "DepartementNaissance": "",
      "CodeCommuneNaissance": "",
      "CiviliteId": 0,
      "AdresseId": 0,
      "MailId": 1234566,
      "TelephoneId": 0,
      "MobileId": 0,
      "Nationalite1Id": 0,
      "Nationalite2Id": 0,
      "PaysNaissanceId": 0,
      "DateNaissance": null,
      "GenreMale": false,
      "Handicap": false,
      "RefSysteme": "",
      "AutoriseCRM": false,
      "HasChosenRGPD": false,
      "HasChosenMarketing": false,
      "TiersTemps": false,
      "TiersTempsPrecision": "",
      "Actif": true,
      "IndividuId": 1234568,
      "EntrepriseId": 0,
      "EntiteJuridiqueId": 1234560
    },
    ...
  ]
}
```

:::

## Lister les agents d’un campus spécifique

Il vous faudra au préalable disposer de l’identifiant du campus en question.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Agent?$filter=EntiteJuridiqueId eq 1234560 \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://graphskolae.aimaira.net/GraphV1/$metadata#Agent",
  "value": [
    {
      "Id": 1234567,
      "Nom": "WEB",
      "Code": "WEB",
      "Login": "",
      "Prenoms": "",
      "NomUsage": "Site internet",
      "PrenomUsage": "",
      "Prenom2": "",
      "Prenom3": "",
      "NomJeuneFille": "",
      "Fonction": "",
      "VilleNaissance": "",
      "DepartementNaissance": "",
      "CodeCommuneNaissance": "",
      "CiviliteId": 0,
      "AdresseId": 0,
      "MailId": 1234566,
      "TelephoneId": 0,
      "MobileId": 0,
      "Nationalite1Id": 0,
      "Nationalite2Id": 0,
      "PaysNaissanceId": 0,
      "DateNaissance": null,
      "GenreMale": false,
      "Handicap": false,
      "RefSysteme": "",
      "AutoriseCRM": false,
      "HasChosenRGPD": false,
      "HasChosenMarketing": false,
      "TiersTemps": false,
      "TiersTempsPrecision": "",
      "Actif": true,
      "IndividuId": 1234568,
      "EntrepriseId": 0,
      "EntiteJuridiqueId": 1234560
    },
    {
      "Id": 1234572,
      "Nom": "PHONE",
      "Code": "PHONE",
      "Login": "",
      "Prenoms": "",
      "NomUsage": "Téléphone",
      "PrenomUsage": "",
      "Prenom2": "",
      "Prenom3": "",
      "NomJeuneFille": "",
      "Fonction": "",
      "VilleNaissance": "",
      "DepartementNaissance": "",
      "CodeCommuneNaissance": "",
      "CiviliteId": 0,
      "AdresseId": 0,
      "MailId": 1234570,
      "TelephoneId": 0,
      "MobileId": 0,
      "Nationalite1Id": 0,
      "Nationalite2Id": 0,
      "PaysNaissanceId": 0,
      "DateNaissance": null,
      "GenreMale": false,
      "Handicap": false,
      "RefSysteme": "",
      "AutoriseCRM": false,
      "HasChosenRGPD": false,
      "HasChosenMarketing": false,
      "TiersTemps": false,
      "TiersTempsPrecision": "",
      "Actif": true,
      "IndividuId": 1234571,
      "EntrepriseId": 0,
      "EntiteJuridiqueId": 1234560
    }
  ]
}
```

:::