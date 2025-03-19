# Enseignant

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