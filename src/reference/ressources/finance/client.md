# Client

## Récupérer un client avec une référence

La référence est l’identifiant de l’entité liée.

```bash [cURL]
curl 'https://myapi.aimaira.net/GraphV1/Client?%24filter=ReferenceId+eq+2410937' \
    -u 'nomdutilisateur:motdepasse'
```

### Réponse

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Client",
  "value": [
    {
      "Id": 2410948,
      "Nom": "Altis Cyberdéfense",
      "Code": "411-A00182-",
      "Login": "",
      "Prenoms": "",
      "NomUsage": "",
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
      "MailId": 0,
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
      "EntrepriseId": 2410939,
      "SignataireId": null,
      "Douteux": false,
      "EntiteJuridiqueId": 2215111,
      "NatureClientId": 2214717,
      "ReferenceId": 2410937,
      "ContactId": null,
      "TVAintracommunautaire": ""
    },
    {
      "Id": 2410952,
      "Nom": "ATLAS",
      "Code": "CATLAS",
      "Login": "",
      "Prenoms": "",
      "NomUsage": "",
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
      "MailId": 0,
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
      "EntrepriseId": 0,
      "SignataireId": null,
      "Douteux": false,
      "EntiteJuridiqueId": 2215111,
      "NatureClientId": 2214718,
      "ReferenceId": 2410937,
      "ContactId": null,
      "TVAintracommunautaire": ""
    }
  ]
}
```

## Créer un client

### Données obligatoires

- `Nom`
- `Prenoms`
- `EntiteJuridiqueId`, l’identifiant de la [société de facturation][societe-de-facturation] souhaitée
- `NatureClientId`, l’identifiant de la [nature du client][nature-du-client] souhaitée

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Client \
  --request POST
  --data '{
  "Nom": "ARTHURO",  
  "Prenoms": "Valentin",
  "EntiteJuridiqueId": 2215501,
  "NatureClientId": 2214750
}'
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Client/$entity",
  "Id": 0,
  "Nom": "ARTHURO",
  "Code": "",
  "Login": "",
  "Prenoms": "Valentin",
  "NomUsage": "ARTHURO",
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
  "MailId": 0,
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
  "EntrepriseId": 0,
  "SignataireId": null,
  "Douteux": false,
  "EntiteJuridiqueId": 74,
  "NatureClientId": 1234567,
  "ReferenceId": null,
  "ContactId": null,
  "TVAintracommunautaire": null
}
```

:::

## Comment lier un `Client` à une `Affaire`

Afin de lier un `Client` et une `Affaire`, il faut créer un [`ClientPourAffaire`][client-pour-affaire], l’entité qui représente cette relation.

[client-pour-affaire]: /reference/ressources/finance/client-pour-affaire
[societe-de-facturation]: /reference/ressources/finance/societe-de-facturation
[nature-du-client]: /reference/ressources/finance/nature-client