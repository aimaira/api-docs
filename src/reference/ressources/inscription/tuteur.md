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

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Lister les tuteurs

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Tuteur \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Tuteur",
  "value": [
    {
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
      "TiersTemps": false,
      "TiersTempsPrecision": "",
      "EntrepriseId": 0,
      "AutoriseON": false,
      "DiplomeON": false,
      "CSPId": 0,
      "Profession": "",
      "Promotion": "",
      "Type": "",
      "NatureTuteurId": 0
    }
  ]
}
```

:::

## Créer un tuteur

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Tuteur \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Login": "texte",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
  "Prenom2": "texte",
  "Prenom3": "texte",
  "NomJeuneFille": "texte",
  "Fonction": "texte",
  "VilleNaissance": "texte",
  "DepartementNaissance": "texte",
  "CodeCommuneNaissance": "texte",
  "CiviliteId": 1234567,
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "MobileId": 1234567,
  "Nationalite1Id": 1234567,
  "Nationalite2Id": 1234567,
  "PaysNaissanceId": 1234567,
  "DateNaissance": "2026-09-01T00:00:00+02:00",
  "GenreMale": false,
  "Handicap": false,
  "RefSysteme": "texte",
  "AutoriseCRM": false,
  "HasChosenRGPD": false,
  "HasChosenMarketing": false,
  "TiersTemps": false,
  "TiersTempsPrecision": "texte",
  "EntrepriseId": 1234567,
  "AutoriseON": false,
  "DiplomeON": false,
  "CSPId": 1234567,
  "Profession": "texte",
  "Promotion": "texte",
  "Type": "texte",
  "NatureTuteurId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Tuteur/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Login": "texte",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
  "Prenom2": "texte",
  "Prenom3": "texte",
  "NomJeuneFille": "texte",
  "Fonction": "texte",
  "VilleNaissance": "texte",
  "DepartementNaissance": "texte",
  "CodeCommuneNaissance": "texte",
  "CiviliteId": 1234567,
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "MobileId": 1234567,
  "Nationalite1Id": 1234567,
  "Nationalite2Id": 1234567,
  "PaysNaissanceId": 1234567,
  "DateNaissance": "2026-09-01T00:00:00+02:00",
  "GenreMale": false,
  "Handicap": false,
  "RefSysteme": "texte",
  "AutoriseCRM": false,
  "HasChosenRGPD": false,
  "HasChosenMarketing": false,
  "TiersTemps": false,
  "TiersTempsPrecision": "texte",
  "EntrepriseId": 1234567,
  "AutoriseON": false,
  "DiplomeON": false,
  "CSPId": 1234567,
  "Profession": "texte",
  "Promotion": "texte",
  "Type": "texte",
  "NatureTuteurId": 1234567
}
```

:::

## Modifier un tuteur

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Tuteur/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Login": "texte",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
  "Prenom2": "texte",
  "Prenom3": "texte",
  "NomJeuneFille": "texte",
  "Fonction": "texte",
  "VilleNaissance": "texte",
  "DepartementNaissance": "texte",
  "CodeCommuneNaissance": "texte",
  "CiviliteId": 1234567,
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "MobileId": 1234567,
  "Nationalite1Id": 1234567,
  "Nationalite2Id": 1234567,
  "PaysNaissanceId": 1234567,
  "DateNaissance": "2026-09-01T00:00:00+02:00",
  "GenreMale": false,
  "Handicap": false,
  "RefSysteme": "texte",
  "AutoriseCRM": false,
  "HasChosenRGPD": false,
  "HasChosenMarketing": false,
  "TiersTemps": false,
  "TiersTempsPrecision": "texte",
  "EntrepriseId": 1234567,
  "AutoriseON": false,
  "DiplomeON": false,
  "CSPId": 1234567,
  "Profession": "texte",
  "Promotion": "texte",
  "Type": "texte",
  "NatureTuteurId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Tuteur/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Login": "texte",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
  "Prenom2": "texte",
  "Prenom3": "texte",
  "NomJeuneFille": "texte",
  "Fonction": "texte",
  "VilleNaissance": "texte",
  "DepartementNaissance": "texte",
  "CodeCommuneNaissance": "texte",
  "CiviliteId": 1234567,
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "MobileId": 1234567,
  "Nationalite1Id": 1234567,
  "Nationalite2Id": 1234567,
  "PaysNaissanceId": 1234567,
  "DateNaissance": "2026-09-01T00:00:00+02:00",
  "GenreMale": false,
  "Handicap": false,
  "RefSysteme": "texte",
  "AutoriseCRM": false,
  "HasChosenRGPD": false,
  "HasChosenMarketing": false,
  "TiersTemps": false,
  "TiersTempsPrecision": "texte",
  "EntrepriseId": 1234567,
  "AutoriseON": false,
  "DiplomeON": false,
  "CSPId": 1234567,
  "Profession": "texte",
  "Promotion": "texte",
  "Type": "texte",
  "NatureTuteurId": 1234567
}
```

:::

## Supprimer un tuteur

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Tuteur/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
