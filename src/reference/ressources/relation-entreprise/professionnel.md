# Professionnel

## Créer un professionnel

### Données obligatoires

- `CiviliteId`, (voir [comment lister les civilités][lister-les-civilites])
- `Nom`
- `Prenoms`
- `NomUsage`
- `PrenomUsage`

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

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un professionnel avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Professionnel/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Professionnel/$entity",
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
  "IndividuId": 0,
  "EntrepriseId": 0,
  "DiplomeApprentissageId": 0,
  "InseeNumber": "",
  "Promotion": "",
  "CodeActiviteEntrepriseUtilisatriceNAF": "",
  "EligibleTuteur": false
}
```

:::

## Modifier un professionnel

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Professionnel/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
  "CiviliteId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Professionnel/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "",
  "Login": "",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
  "Prenom2": "",
  "Prenom3": "",
  "NomJeuneFille": "",
  "Fonction": "",
  "VilleNaissance": "",
  "DepartementNaissance": "",
  "CodeCommuneNaissance": "",
  "CiviliteId": 1234567,
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
  "IndividuId": 0,
  "EntrepriseId": 0,
  "DiplomeApprentissageId": 0,
  "InseeNumber": "",
  "Promotion": "",
  "CodeActiviteEntrepriseUtilisatriceNAF": "",
  "EligibleTuteur": false
}
```

:::

## Supprimer un professionnel

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Professionnel/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
