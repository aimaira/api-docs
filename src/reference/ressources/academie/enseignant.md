# Enseignant

## Créer un enseignant

::: warning Note

Lors de la création d’un enseignant, un compte [utilisateur][utilisateur] est créé automatiquement s’il n’est pas
fourni. Si un compte avec le même `Login` existe déjà, il est réutilisé pour cet enseignant.

:::

### Données obligatoires

- `EntiteJuridiqueId`, l’identifiant du [campus][campus] souhaité
- `Nom`
- `NomUsage`
- `Prenoms`
- `PrenomUsage`
- `CiviliteId`, l’identifiant de la [civilité][civilite] souhaitée
- `MailId`, voir [comment créer un e-mail][creer-un-e-mail]
- `DateNaissance`
- `Login`, si aucun login n’est fourni, l’adresse e-mail rattachée à `MailId` est utilisée

::: warning Note

Si le `Code` n’est pas fourni, il est généré automatiquement selon l’algorithme de codification configuré pour le
campus.

:::

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Enseignant \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "EntiteJuridiqueId": 74,
  "Nom": "PHILIBERT",
  "NomUsage": "PHILIBERT",
  "Prenoms": "Arnaud",
  "PrenomUsage": "Arnaud",
  "CiviliteId": 1541,
  "MailId": 2291252,
  "DateNaissance": "1978-04-12T00:00:00+02:00",
  "Login": "aphilibert"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Enseignant/$entity",
  "Id": 2291254,
  "Nom": "PHILIBERT",
  "Code": "P00000042",
  "Login": "aphilibert",
  "Prenoms": "Arnaud",
  "NomUsage": "PHILIBERT",
  "PrenomUsage": "Arnaud",
  "Prenom2": "",
  "Prenom3": "",
  "NomJeuneFille": "",
  "Fonction": "",
  "VilleNaissance": "",
  "DepartementNaissance": "",
  "CodeCommuneNaissance": "",
  "CiviliteId": 1541,
  "AdresseId": 0,
  "MailId": 2291252,
  "TelephoneId": 0,
  "MobileId": 0,
  "Nationalite1Id": 0,
  "Nationalite2Id": 0,
  "PaysNaissanceId": 0,
  "DateNaissance": "1978-04-12T00:00:00+02:00",
  "GenreMale": true,
  "Handicap": false,
  "RefSysteme": "1234",
  "AutoriseCRM": false,
  "HasChosenRGPD": false,
  "HasChosenMarketing": false,
  "EntrepriseId": 0,
  "EntiteJuridiqueId": 74,
  "IndividuId": 2291253,
  "DiplomeON": false,
  "DoctoratON": false,
  "Profession": "",
  "Promotion": "",
  "Discipline": "",
  "NumeroINSEE": "",
  "NumeroURSSAF": "",
  "NumeroSIREN": "",
  "NumeroTVAintraCommunautaire": "",
  "DernierDiplome": "",
  "MatriculeRH": "",
  "NumeroRCS": "",
  "MailEcoleId": 0,
  "BatimentId": 0,
  "Photo": null
}
```

:::

## Lister les enseignants

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Enseignant \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Enseignant",
  "value": [
    {
      "Id": 2291254,
      "Nom": "PHILIBERT",
      "Code": "P00000042",
      "Login": "aphilibert",
      "Prenoms": "",
      "NomUsage": "PHILIBERT",
      "PrenomUsage": "Arnaud",
      "Prenom2": "",
      "Prenom3": "",
      "NomJeuneFille": "",
      "Fonction": "",
      "VilleNaissance": "",
      "DepartementNaissance": "",
      "CodeCommuneNaissance": "",
      "CiviliteId": 0,
      "AdresseId": 0,
      "MailId": 2291252,
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
      "EntiteJuridiqueId": 0,
      "IndividuId": 2291253,
      "DiplomeON": false,
      "DoctoratON": false,
      "Profession": "",
      "Promotion": "",
      "Discipline": "",
      "NumeroINSEE": "",
      "NumeroURSSAF": "",
      "NumeroSIREN": "",
      "NumeroTVAintraCommunautaire": "",
      "DernierDiplome": "",
      "MatriculeRH": "",
      "NumeroRCS": "",
      "MailEcoleId": 0,
      "BatimentId": 0,
      "Photo": null
    },
    ...
  ]
}
```

:::

## Récupérer les catégories d’un enseignant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Enseignant/2291254/EnseignantsTypes \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Enseignant(2291254)/EnseignantsTypes",
  "value": [
    {
      "Id": 6975051,
      "Nom": "Intervenant",
      "Code": "INTER",
      "EnseignantId": 2291254,
      "TypeEnseignantId": 4979451
    },
    {
      "Id": 6975052,
      "Nom": "Adresse mail",
      "Code": "MAIL",
      "EnseignantId": 2291254,
      "TypeEnseignantId": 6974632
    }
  ]
}
```

:::

[utilisateur]: /reference/ressources/core/utilisateur
[campus]: /reference/ressources/core/campus#lister-tous-les-campus
[civilite]: /reference/ressources/core/civilite#lister-les-civilites
[creer-un-e-mail]: /reference/ressources/core/e-mail#creer-un-e-mail