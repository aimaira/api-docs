# Apprenant

Un apprenant représente un individu qui est inscrit à un programme.

## Retrouver un apprenant

### Avec son id

La façon la plus simple de retrouver un apprenant est d’utiliser son identifiant.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Apprenant/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Apprenant/$entity",
  "Id": 2220513,
  "Nom": "FERNANDEZ",
  "Code": "A01337",
  "Login": "emmanuel.fernandez",
  "Prenoms": "Emmanuel",
  "NomUsage": "FERNANDEZ",
  "PrenomUsage": "Emmanuel",
  "Prenom2": "",
  "Prenom3": "",
  "NomJeuneFille": "",
  "Fonction": "",
  "VilleNaissance": "",
  "DepartementNaissance": "",
  "CodeCommuneNaissance": "",
  "CiviliteId": 1541,
  "AdresseId": 2349876,
  "MailId": 9871234,
  "TelephoneId": 0,
  "MobileId": 1230987,
  "Nationalite1Id": 1155,
  "Nationalite2Id": 0,
  "PaysNaissanceId": 0,
  "DateNaissance": "1994-09-01T00:00:00+02:00",
  "GenreMale": true,
  "Handicap": false,
  "RefSysteme": "239",
  "AutoriseCRM": false,
  "HasChosenRGPD": false,
  "HasChosenMarketing": false,
  "Tuteur1Id": 1234598,
  "Tuteur2Id": 0,
  "EntrepriseId": 0,
  "IndividuId": 1234568,
  "NumeroIne": "",
  "NumeroInsee": "",
  "Photo": null,
  "RestreintPedagogie": false,
  "RestreintFinance": false,
  "ESI": ""
}
```

:::

### Avec son code

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Apprenant?$filter=Code eq 'A01337' \
  -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Apprenant/$entity",
  "value": [
    {
      "Id": 2220513,
      "Nom": "FERNANDEZ",
      "Code": "A01337",
      "Login": "emmanuel.fernandez",
      "Prenoms": "Emmanuel",
      "NomUsage": "FERNANDEZ",
      "PrenomUsage": "Emmanuel",
      "Prenom2": "",
      "Prenom3": "",
      "NomJeuneFille": "",
      "Fonction": "",
      "VilleNaissance": "",
      "DepartementNaissance": "",
      "CodeCommuneNaissance": "",
      "CiviliteId": 1541,
      "AdresseId": 2349876,
      "MailId": 9871234,
      "TelephoneId": 0,
      "MobileId": 1230987,
      "Nationalite1Id": 1155,
      "Nationalite2Id": 0,
      "PaysNaissanceId": 0,
      "DateNaissance": "1994-09-01T00:00:00+02:00",
      "GenreMale": true,
      "Handicap": false,
      "RefSysteme": "239",
      "AutoriseCRM": false,
      "HasChosenRGPD": false,
      "HasChosenMarketing": false,
      "Tuteur1Id": 1234598,
      "Tuteur2Id": 0,
      "EntrepriseId": 0,
      "IndividuId": 1234568,
      "NumeroIne": "",
      "NumeroInsee": "",
      "Photo": null,
      "RestreintPedagogie": false,
      "RestreintFinance": false,
      "ESI": ""
    }
  ]
}
```

:::

### Avec son nom et prénom

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Apprenant?$filter=Nom eq 'FERNANDEZ' and Prenoms eq 'Emmanuel' \
  -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Apprenant/$entity",
  "value": [
    {
      "Id": 2220513,
      "Nom": "FERNANDEZ",
      "Code": "A01337",
      "Login": "emmanuel.fernandez",
      "Prenoms": "Emmanuel",
      "NomUsage": "FERNANDEZ",
      "PrenomUsage": "Emmanuel",
      "Prenom2": "",
      "Prenom3": "",
      "NomJeuneFille": "",
      "Fonction": "",
      "VilleNaissance": "",
      "DepartementNaissance": "",
      "CodeCommuneNaissance": "",
      "CiviliteId": 1541,
      "AdresseId": 2349876,
      "MailId": 9871234,
      "TelephoneId": 0,
      "MobileId": 1230987,
      "Nationalite1Id": 1155,
      "Nationalite2Id": 0,
      "PaysNaissanceId": 0,
      "DateNaissance": "1994-09-01T00:00:00+02:00",
      "GenreMale": true,
      "Handicap": false,
      "RefSysteme": "239",
      "AutoriseCRM": false,
      "HasChosenRGPD": false,
      "HasChosenMarketing": false,
      "Tuteur1Id": 1234598,
      "Tuteur2Id": 0,
      "EntrepriseId": 0,
      "IndividuId": 1234568,
      "NumeroIne": "",
      "NumeroInsee": "",
      "Photo": null,
      "RestreintPedagogie": false,
      "RestreintFinance": false,
      "ESI": ""
    }
  ]
}
```

:::

### Avec son e-mail

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Apprenant?$filter=Mail/Adresse eq 'emmanuel.fernandez@outlook.com' \
  -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Apprenant/$entity",
  "value": [
    {
      "Id": 2220513,
      "Nom": "FERNANDEZ",
      "Code": "A01337",
      "Login": "emmanuel.fernandez",
      "Prenoms": "Emmanuel",
      "NomUsage": "FERNANDEZ",
      "PrenomUsage": "Emmanuel",
      "Prenom2": "",
      "Prenom3": "",
      "NomJeuneFille": "",
      "Fonction": "",
      "VilleNaissance": "",
      "DepartementNaissance": "",
      "CodeCommuneNaissance": "",
      "CiviliteId": 1541,
      "AdresseId": 2349876,
      "MailId": 9871234,
      "TelephoneId": 0,
      "MobileId": 1230987,
      "Nationalite1Id": 1155,
      "Nationalite2Id": 0,
      "PaysNaissanceId": 0,
      "DateNaissance": "1994-09-01T00:00:00+02:00",
      "GenreMale": true,
      "Handicap": false,
      "RefSysteme": "239",
      "AutoriseCRM": false,
      "HasChosenRGPD": false,
      "HasChosenMarketing": false,
      "Tuteur1Id": 1234598,
      "Tuteur2Id": 0,
      "EntrepriseId": 0,
      "IndividuId": 1234568,
      "NumeroIne": "",
      "NumeroInsee": "",
      "Photo": null,
      "RestreintPedagogie": false,
      "RestreintFinance": false,
      "ESI": ""
    }
  ]
}
```

:::

## Création d’un apprenant

### Données obligatoires

- `CiviliteId` *(voir [Civilite][civilite])*
- `MailId` *(voir [E-mail][e-mail])*
- `Nom`
- `Prenoms`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Candidat \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  "Nom": "DUPONT",
  "Login": "jean.dupont@ecole.fr",
  "Prenoms": "Jean",
  "NomUsage": "DUPONT",
  "PrenomUsage": "Jean",
  "CiviliteId":1541,
  "MailId": 2253448
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Apprenant/$entity",
  "Id": 2253465,
  "Nom": "DUPONT",
  "Code": "A00294",
  "Login": "jean.dupont@ecole.fr",
  "Prenoms": "Jean",
  "NomUsage": "DUPONT",
  "PrenomUsage": "Jean",
  "Prenom2": "",
  "Prenom3": "",
  "NomJeuneFille": "",
  "Fonction": "",
  "VilleNaissance": "",
  "DepartementNaissance": "",
  "CodeCommuneNaissance": "",
  "CiviliteId": 1541,
  "AdresseId": 0,
  "MailId": 2253448,
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
  "Tuteur1Id": 0,
  "Tuteur2Id": 0,
  "EntrepriseId": 0,
  "IndividuId": 2253451,
  "NumeroIne": null,
  "NumeroInsee": "",
  "Photo": null,
  "RestreintPedagogie": false,
  "RestreintFinance": false,
  "ESI": ""
}
```

:::

[civilite]: /reference/ressources/core/civilite
[e-mail]: /reference/ressources/core/e-mail
