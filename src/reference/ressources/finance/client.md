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

::: warning Note

Lors de la création du client qui représente un `Apprenant` ou un `Candidat`, aucune donnée n’est copiée. Il est donc
important de copier les coordonnées dans l’entité client.

Les données suivantes doivent être dupliquées. Réutiliser les identifiants utilisés dans la source engendre des
effets de bords :

- `AdresseId`, voir [comment créer une adresse][creer-une-adresse]
- `MailId`, voir [comment créer un e-mail][creer-un-e-mail]
- `TelephoneId`, voir [comment créer un téléphone][creer-un-telephone]
- `MobileId`, voir ci-dessus

En plus des données obligatoires et des données à copier, les données suivantes peuvent être utilisée telles quelles :

- `Prenom2`
- `Prenom3`
- `NomJeuneFille`
- `Fonction`
- `VilleNaissance`
- `DepartementNaissance`
- `CodeCommuneNaissance`
- `CiviliteId`
- `Nationalite1Id`
- `Nationalite2Id`
- `PaysNaissanceId`
- `DateNaissance`
- `GenreMale`
- `Handicap`
- `RefSysteme`
- `AutoriseCRM`
- `HasChosenRGPD`
- `HasChosenMarketing`

:::

### Données obligatoires

- `Nom`
- `Prenoms`
- `EntiteJuridiqueId`, l’identifiant de la [société de facturation][societe-de-facturation] souhaitée
- `NatureClientId`, l’identifiant de la [nature du client][nature-du-client] souhaitée

::: code-group

```bash [Création depuis un Apprenant]
curl https://myapi.aimaira.net/GraphV1/Apprenant/1234567/Client \
  --request POST
  --data '{
  "Nom": "ARTHURO",  
  "Prenoms": "Valentin",
  "EntiteJuridiqueId": 2215501,
  "NatureClientId": 2214750
}'
  -u 'nomdutilisateur:motdepasse'
```

```bash [Création depuis un Candidat]
curl https://myapi.aimaira.net/GraphV1/Candidat/1234568/Client \
  --request POST
  --data '{
  "Nom": "ARTHURO",  
  "Prenoms": "Valentin",
  "EntiteJuridiqueId": 2215501,
  "NatureClientId": 2214750
}'
  -u 'nomdutilisateur:motdepasse'
```

```bash [Création générique]
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
[creer-une-adresse]: /reference/ressources/core/adresse
[creer-un-e-mail]: /reference/ressources/core/e-mail
[creer-un-telephone]: /reference/ressources/core/telephone