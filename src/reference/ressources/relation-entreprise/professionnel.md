# Professionnel

## Créer un professionnel

### Données obligatoires

- `CiviliteId`, (voir [comment lister les civilités][lister-les-civilites])
- `Nom`
- `Prenoms`
- `NomUsage`
- `PrenomsUsage`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Professionnel \
  --request POST \
  --header 'Content-Type: application/json'
  --data '{
  "CiviliteId": 1541,
  "Nom": "LATERAL",
  "Prenoms": "Antoine",
  "NomUsage": "LATERAL",
  "PrenomUsage": "Antoine"
}'
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Professionnel/$entity",
  "Id": 2410966,
  "Nom": "LATERAL",
  "Code": "",
  "Login": "",
  "Prenoms": "Antoine",
  "NomUsage": "LATERAL",
  "PrenomUsage": "Antoine",
  "Prenom2": "",
  "Prenom3": "",
  "NomJeuneFille": "",
  "Fonction": "Dirigeant",
  "VilleNaissance": "",
  "DepartementNaissance": "",
  "CodeCommuneNaissance": "",
  "CiviliteId": 1541,
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
  "IndividuId": 2410965,
  "EntrepriseId": 0,
  "DiplomeApprentissageId": 0,
  "InseeNumber": null,
  "Promotion": "",
  "CodeActiviteEntrepriseUtilisatriceNAF": null
}
```

:::

[lister-les-civilites]: /reference/ressources/core/civilite#lister-les-civilites