# Candidat

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les candidats

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Candidat \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Candidat",
  "value": [
    {
      "Numero": "",
      "DernierEtablissementId": 0,
      "StatutId": 0,
      "AdresseParentId": 0,
      "TelephonePereId": 0,
      "TelephoneMereId": 0,
      "ProfessionPere": "",
      "ProfessionMere": "",
      "BaccalaureatId": 0,
      "MentionId": 0,
      "EstBoursier": false,
      "AnneeObtention": "",
      "EnCoursObtention": false,
      "LangueMaternelle": "",
      "Echelon": "",
      "TelephoneInternationalId": 0,
      "NiveauLv1Id": 0,
      "NiveauLv2Id": 0,
      "NiveauLv3Id": 0,
      "Lv1": "",
      "Lv2": "",
      "Lv3": "",
      "Orientation1ComplementId": 0,
      "Orientation2ComplementId": 0,
      "Orientation3ComplementId": 0,
      "Orientation4ComplementId": 0,
      "Orientation5ComplementId": 0,
      "BaccalaureatAutreId": 0,
      "IdLink": 0,
      "NumeroDossier": "",
      "Annee": "",
      "RangAdmissibilite": 0,
      "RangAdmission": 0,
      "RangFinal": 0,
      "StatutAdmissibiliteId": 0,
      "CentreExamenId": 0,
      "CohorteId": 0,
      "EpreuveOptionId": 0,
      "NationaliteId": 0,
      "DateImport": null,
      "DateReceptionDossier": null,
      "TiersTemps": false,
      "DernierDiplome": "",
      "ContactVisioId": 0,
      "MoyenneAdmissibilite": 0,
      "MoyenneAdmission": 0,
      "MoyenneFinale": 0,
      "Login": "",
      "Prenoms": "",
      "NomUsage": "",
      "PrenomUsage": "",
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
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer un candidat avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Candidat/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Candidat/$entity",
  "Numero": "",
  "DernierEtablissementId": 0,
  "StatutId": 0,
  "AdresseParentId": 0,
  "TelephonePereId": 0,
  "TelephoneMereId": 0,
  "ProfessionPere": "",
  "ProfessionMere": "",
  "BaccalaureatId": 0,
  "MentionId": 0,
  "EstBoursier": false,
  "AnneeObtention": "",
  "EnCoursObtention": false,
  "LangueMaternelle": "",
  "Echelon": "",
  "TelephoneInternationalId": 0,
  "NiveauLv1Id": 0,
  "NiveauLv2Id": 0,
  "NiveauLv3Id": 0,
  "Lv1": "",
  "Lv2": "",
  "Lv3": "",
  "Orientation1ComplementId": 0,
  "Orientation2ComplementId": 0,
  "Orientation3ComplementId": 0,
  "Orientation4ComplementId": 0,
  "Orientation5ComplementId": 0,
  "BaccalaureatAutreId": 0,
  "IdLink": 0,
  "NumeroDossier": "",
  "Annee": "",
  "RangAdmissibilite": 0,
  "RangAdmission": 0,
  "RangFinal": 0,
  "StatutAdmissibiliteId": 0,
  "CentreExamenId": 0,
  "CohorteId": 0,
  "EpreuveOptionId": 0,
  "NationaliteId": 0,
  "DateImport": null,
  "DateReceptionDossier": null,
  "TiersTemps": false,
  "DernierDiplome": "",
  "ContactVisioId": 0,
  "MoyenneAdmissibilite": 0,
  "MoyenneAdmission": 0,
  "MoyenneFinale": 0,
  "Login": "",
  "Prenoms": "",
  "NomUsage": "",
  "PrenomUsage": "",
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
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un candidat

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Candidat \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Numero": "texte",
  "DernierEtablissementId": 1234567,
  "StatutId": 1234567,
  "AdresseParentId": 1234567,
  "TelephonePereId": 1234567,
  "TelephoneMereId": 1234567,
  "ProfessionPere": "texte",
  "ProfessionMere": "texte",
  "BaccalaureatId": 1234567,
  "MentionId": 1234567,
  "EstBoursier": false,
  "AnneeObtention": "texte",
  "EnCoursObtention": false,
  "LangueMaternelle": "texte",
  "Echelon": "texte",
  "TelephoneInternationalId": 1234567,
  "NiveauLv1Id": 1234567,
  "NiveauLv2Id": 1234567,
  "NiveauLv3Id": 1234567,
  "Lv1": "texte",
  "Lv2": "texte",
  "Lv3": "texte",
  "Orientation1ComplementId": 1234567,
  "Orientation2ComplementId": 1234567,
  "Orientation3ComplementId": 1234567,
  "Orientation4ComplementId": 1234567,
  "Orientation5ComplementId": 1234567,
  "BaccalaureatAutreId": 1234567,
  "IdLink": 0,
  "NumeroDossier": "texte",
  "Annee": "texte",
  "RangAdmissibilite": 0,
  "RangAdmission": 0,
  "RangFinal": 0,
  "StatutAdmissibiliteId": 1234567,
  "CentreExamenId": 1234567,
  "CohorteId": 1234567,
  "EpreuveOptionId": 1234567,
  "NationaliteId": 1234567,
  "DateImport": "2026-09-01T00:00:00+02:00",
  "DateReceptionDossier": "2026-09-01T00:00:00+02:00",
  "TiersTemps": false,
  "DernierDiplome": "texte",
  "ContactVisioId": 1234567,
  "MoyenneAdmissibilite": 0,
  "MoyenneAdmission": 0,
  "MoyenneFinale": 0,
  "Login": "texte",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
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
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Candidat/$entity",
  "Numero": "texte",
  "DernierEtablissementId": 1234567,
  "StatutId": 1234567,
  "AdresseParentId": 1234567,
  "TelephonePereId": 1234567,
  "TelephoneMereId": 1234567,
  "ProfessionPere": "texte",
  "ProfessionMere": "texte",
  "BaccalaureatId": 1234567,
  "MentionId": 1234567,
  "EstBoursier": false,
  "AnneeObtention": "texte",
  "EnCoursObtention": false,
  "LangueMaternelle": "texte",
  "Echelon": "texte",
  "TelephoneInternationalId": 1234567,
  "NiveauLv1Id": 1234567,
  "NiveauLv2Id": 1234567,
  "NiveauLv3Id": 1234567,
  "Lv1": "texte",
  "Lv2": "texte",
  "Lv3": "texte",
  "Orientation1ComplementId": 1234567,
  "Orientation2ComplementId": 1234567,
  "Orientation3ComplementId": 1234567,
  "Orientation4ComplementId": 1234567,
  "Orientation5ComplementId": 1234567,
  "BaccalaureatAutreId": 1234567,
  "IdLink": 0,
  "NumeroDossier": "texte",
  "Annee": "texte",
  "RangAdmissibilite": 0,
  "RangAdmission": 0,
  "RangFinal": 0,
  "StatutAdmissibiliteId": 1234567,
  "CentreExamenId": 1234567,
  "CohorteId": 1234567,
  "EpreuveOptionId": 1234567,
  "NationaliteId": 1234567,
  "DateImport": "2026-09-01T00:00:00+02:00",
  "DateReceptionDossier": "2026-09-01T00:00:00+02:00",
  "TiersTemps": false,
  "DernierDiplome": "texte",
  "ContactVisioId": 1234567,
  "MoyenneAdmissibilite": 0,
  "MoyenneAdmission": 0,
  "MoyenneFinale": 0,
  "Login": "texte",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
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
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un candidat

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Candidat/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Numero": "texte",
  "DernierEtablissementId": 1234567,
  "StatutId": 1234567,
  "AdresseParentId": 1234567,
  "TelephonePereId": 1234567,
  "TelephoneMereId": 1234567,
  "ProfessionPere": "texte",
  "ProfessionMere": "texte",
  "BaccalaureatId": 1234567,
  "MentionId": 1234567,
  "EstBoursier": false,
  "AnneeObtention": "texte",
  "EnCoursObtention": false,
  "LangueMaternelle": "texte",
  "Echelon": "texte",
  "TelephoneInternationalId": 1234567,
  "NiveauLv1Id": 1234567,
  "NiveauLv2Id": 1234567,
  "NiveauLv3Id": 1234567,
  "Lv1": "texte",
  "Lv2": "texte",
  "Lv3": "texte",
  "Orientation1ComplementId": 1234567,
  "Orientation2ComplementId": 1234567,
  "Orientation3ComplementId": 1234567,
  "Orientation4ComplementId": 1234567,
  "Orientation5ComplementId": 1234567,
  "BaccalaureatAutreId": 1234567,
  "IdLink": 0,
  "NumeroDossier": "texte",
  "Annee": "texte",
  "RangAdmissibilite": 0,
  "RangAdmission": 0,
  "RangFinal": 0,
  "StatutAdmissibiliteId": 1234567,
  "CentreExamenId": 1234567,
  "CohorteId": 1234567,
  "EpreuveOptionId": 1234567,
  "NationaliteId": 1234567,
  "DateImport": "2026-09-01T00:00:00+02:00",
  "DateReceptionDossier": "2026-09-01T00:00:00+02:00",
  "TiersTemps": false,
  "DernierDiplome": "texte",
  "ContactVisioId": 1234567,
  "MoyenneAdmissibilite": 0,
  "MoyenneAdmission": 0,
  "MoyenneFinale": 0,
  "Login": "texte",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
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
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Candidat/$entity",
  "Numero": "texte",
  "DernierEtablissementId": 1234567,
  "StatutId": 1234567,
  "AdresseParentId": 1234567,
  "TelephonePereId": 1234567,
  "TelephoneMereId": 1234567,
  "ProfessionPere": "texte",
  "ProfessionMere": "texte",
  "BaccalaureatId": 1234567,
  "MentionId": 1234567,
  "EstBoursier": false,
  "AnneeObtention": "texte",
  "EnCoursObtention": false,
  "LangueMaternelle": "texte",
  "Echelon": "texte",
  "TelephoneInternationalId": 1234567,
  "NiveauLv1Id": 1234567,
  "NiveauLv2Id": 1234567,
  "NiveauLv3Id": 1234567,
  "Lv1": "texte",
  "Lv2": "texte",
  "Lv3": "texte",
  "Orientation1ComplementId": 1234567,
  "Orientation2ComplementId": 1234567,
  "Orientation3ComplementId": 1234567,
  "Orientation4ComplementId": 1234567,
  "Orientation5ComplementId": 1234567,
  "BaccalaureatAutreId": 1234567,
  "IdLink": 0,
  "NumeroDossier": "texte",
  "Annee": "texte",
  "RangAdmissibilite": 0,
  "RangAdmission": 0,
  "RangFinal": 0,
  "StatutAdmissibiliteId": 1234567,
  "CentreExamenId": 1234567,
  "CohorteId": 1234567,
  "EpreuveOptionId": 1234567,
  "NationaliteId": 1234567,
  "DateImport": "2026-09-01T00:00:00+02:00",
  "DateReceptionDossier": "2026-09-01T00:00:00+02:00",
  "TiersTemps": false,
  "DernierDiplome": "texte",
  "ContactVisioId": 1234567,
  "MoyenneAdmissibilite": 0,
  "MoyenneAdmission": 0,
  "MoyenneFinale": 0,
  "Login": "texte",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
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
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un candidat

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Candidat/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
