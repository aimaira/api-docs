# Apprenant

Un apprenant représente un individu qui est inscrit à un programme.

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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Apprenant/$entity",
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
