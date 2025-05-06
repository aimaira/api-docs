# Tuteur

Un tuteur représente un individu qui est lié à un apprenant.

## Retrouver un tuteur

### Avec son id

La façon la plus simple de retrouver un tuteur est d’utiliser son identifiant.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Tuteur/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

::: code-group

```json [JSON]
{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Tuteur/$entity",
    "Id": 1234567,
    "Nom": "",
    "Code": "",
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
    "AutoriseON": false,
    "DiplomeON": false,
    "CSPId": 0,
    "Profession": "",
    "Promotion": "",
    "Type": null,
    "NatureTuteurId": 0
}
```

:::
