# Agent

Un agent est une personne mandatée par l’établissement pour recruter des candidats.

## Lister les agents

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Agent \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Agent",
  "value": [
    {
      "Id": 1234567,
      "Nom": "WEB",
      "Code": "WEB",
      "Login": "",
      "Prenoms": "",
      "NomUsage": "Site internet",
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
      "MailId": 1234566,
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
      "Actif": true,
      "IndividuId": 1234568,
      "EntrepriseId": 0,
      "EntiteJuridiqueId": 1234560
    },
    ...
  ]
}
```

:::

## Lister les agents d’un campus spécifique

Il vous faudra au préalable disposer de l’identifiant du campus en question.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Agent?$filter=EntiteJuridiqueId eq 1234560 \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Agent",
  "value": [
    {
      "Id": 1234567,
      "Nom": "WEB",
      "Code": "WEB",
      "Login": "",
      "Prenoms": "",
      "NomUsage": "Site internet",
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
      "MailId": 1234566,
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
      "Actif": true,
      "IndividuId": 1234568,
      "EntrepriseId": 0,
      "EntiteJuridiqueId": 1234560
    },
    {
      "Id": 1234572,
      "Nom": "PHONE",
      "Code": "PHONE",
      "Login": "",
      "Prenoms": "",
      "NomUsage": "Téléphone",
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
      "MailId": 1234570,
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
      "Actif": true,
      "IndividuId": 1234571,
      "EntrepriseId": 0,
      "EntiteJuridiqueId": 1234560
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un agent avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Agent/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Agent/$entity",
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
  "Actif": false,
  "IndividuId": 0,
  "EntrepriseId": 0,
  "EntiteJuridiqueId": 0
}
```

:::

## Créer un agent

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Agent \
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
  "Actif": false,
  "IndividuId": 1234567,
  "EntrepriseId": 1234567,
  "EntiteJuridiqueId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Agent/$entity",
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
  "Actif": false,
  "IndividuId": 1234567,
  "EntrepriseId": 1234567,
  "EntiteJuridiqueId": 1234567
}
```

:::

## Modifier un agent

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Agent/1234567 \
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
  "Actif": false,
  "IndividuId": 1234567,
  "EntrepriseId": 1234567,
  "EntiteJuridiqueId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Agent/$entity",
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
  "Actif": false,
  "IndividuId": 1234567,
  "EntrepriseId": 1234567,
  "EntiteJuridiqueId": 1234567
}
```

:::

## Supprimer un agent

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Agent/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
