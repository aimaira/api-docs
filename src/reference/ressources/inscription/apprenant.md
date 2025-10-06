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

Afin de créer l’utilisateur lié à l’apprenant, il est nécessaire de renseigner la propriété `RefSysteme` avec un 
identifiant d’utilisateur [créé au préalable][utilisateur].

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

## Modifier un apprenant existant

Comme pour toute autre mise à jour de données, [cette mise en garde][disclaimer] s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Candidat/1234567 \
    --request PUT \
    --header 'Content-Type: application/json' \
    --data '{
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
  "RefSysteme": "987654",
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
  "RefSysteme": "987654",
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

## Création d’un représentant légal

Un représentant légal est obligatoire si l'apprenant est âgé de moins de 18 ans révolu.  
Pour identifier le représentant légal d'un apprenant, utilisez la propriété `Tuteur1Id` afin d'[accéder à ses informations][retrouver-un-tuteur].


## Ajouter un utilisateur à un apprenant existant

Comme pour toute autre mise à jour de données, [cette mise en garde][disclaimer] s’applique.
Une fois [l’utilisateur créé][utilisateur], il faut [modifier l’apprenant](#modifier-un-apprenant-existant) afin de 
renseigner la `RefSysteme` avec l’identifiant de l’utilisateur créé.

## Récupérer les séquences auxquelles un apprenant est inscrit

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionSequence?$filter=ApprenantId eq 2253465 \
    --header 'Content-Type: application/json' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionSequence",
  "value": [
    {
      "Id": 9054736,
      "Nom": "",
      "Code": "",
      "ApprenantId": 2253465,
      "SequenceId": 6026533,
      "RedoublementPartiel": false,
      "PourcentageCorrectionNote": 0.0,
      "PointsCorrectionNote": null,
      "CreditBonus": null,
      "CreditJury": 0.0,
      "Precision": "",
      "AppreciationId": 0,
      "EtatCandidatureParcoursId": 0,
      "ReponseSurveyCandidatureId": 0,
      "ValidationInfosPerso": null,
      "ValidationGlobale": null,
      "DateDesinscription": null,
      "RelanceApprenant": false,
      "ContentieuxApprenant": false,
      "Note": null,
      "NoteAvantRattrapage": null,
      "Valide": false,
      "Rattrape": false,
      "NbCredits": null,
      "DetailValidation": "",
      "SommePonderation": null,
      "NoteFinale": null,
      "CreditFinal": null,
      "NoteSurcharge": null,
      "CreditAvantRattrapage": null,
      "CreditSurcharge": null,
      "NoteRetenu": null,
      "CreditRetenu": null,
      "DecisionJuryId": 0,
      "CreditMax": 0.0
    },
    ...
  ]
}
```

:::

## Récupérer les cours auxquels un apprenant est inscrit

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionCours?$filter=ApprenantId eq 2253465 \
    --header 'Content-Type: application/json' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionCours",
  "value": [
    {
      "Id": 9054737,
      "Nom": "DUPONT Jean",
      "Code": "A00294",
      "ApprenantId": 2253465,
      "CoursId": 6026547,
      "AppreciationId": 0,
      "Valide": false,
      "Rattrape": false,
      "Note": null,
      "Bonus": null,
      "NoteAvantRattrapage": null,
      "NbAbsencesJustifiees": 0,
      "NbAbsencesInjustifiees": 0,
      "NoteECTS": "",
      "Ponderation": 0.0,
      "CreditAvantRattrapage": null,
      "NbCredits": null,
      "CreditSurcharge": null,
      "CreditFinal": null,
      "DateDesinscription": null,
      "Precision": "",
      "DetailValidation": "",
      "NoteFinale": null,
      "NoteRetenu": null,
      "CreditRetenu": null
    },
    ...
  ]
}
```

:::

[civilite]: /reference/ressources/core/civilite
[e-mail]: /reference/ressources/core/e-mail
[retrouver-un-tuteur]: /reference/ressources/inscription/tuteur
[utilisateur]: /reference/ressources/core/utilisateur#creer-un-utilisateur
[disclaimer]: /creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees
