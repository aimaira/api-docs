# Juré

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un juré avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Jure/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Jure/$entity",
  "DateValidationDocument": null,
  "EntrepriseId": 0,
  "Promotion": "",
  "CommentaireId": 0,
  "CodeCRM": "",
  "DomaineId": 0,
  "NiveauAnglais": "",
  "TypeJureId": 0,
  "DiplomeON": false,
  "DemandeIntranet": false,
  "EcoleId": 0,
  "CommentaireInterneId": 0,
  "CommentaireSystemeId": 0,
  "DiplomeDetail": "",
  "ExperienceEntretien": "",
  "NbrMinimumVoeux": 0,
  "NbrMaximumVoeux": 0,
  "StatutJureId": 0,
  "SituationProfessionnelleId": 0,
  "SituationAdminstrativeId": 0,
  "RemunerationId": 0,
  "InformationId": 0,
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

## Créer un juré

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Jure \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "DateValidationDocument": "2026-09-01T00:00:00+02:00",
  "EntrepriseId": 1234567,
  "Promotion": "texte",
  "CommentaireId": 1234567,
  "CodeCRM": "texte",
  "DomaineId": 1234567,
  "NiveauAnglais": "texte",
  "TypeJureId": 1234567,
  "DiplomeON": false,
  "DemandeIntranet": false,
  "EcoleId": 1234567,
  "CommentaireInterneId": 1234567,
  "CommentaireSystemeId": 1234567,
  "DiplomeDetail": "texte",
  "ExperienceEntretien": "texte",
  "NbrMinimumVoeux": 0,
  "NbrMaximumVoeux": 0,
  "StatutJureId": 1234567,
  "SituationProfessionnelleId": 1234567,
  "SituationAdminstrativeId": 1234567,
  "RemunerationId": 1234567,
  "InformationId": 1234567,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Jure/$entity",
  "DateValidationDocument": "2026-09-01T00:00:00+02:00",
  "EntrepriseId": 1234567,
  "Promotion": "texte",
  "CommentaireId": 1234567,
  "CodeCRM": "texte",
  "DomaineId": 1234567,
  "NiveauAnglais": "texte",
  "TypeJureId": 1234567,
  "DiplomeON": false,
  "DemandeIntranet": false,
  "EcoleId": 1234567,
  "CommentaireInterneId": 1234567,
  "CommentaireSystemeId": 1234567,
  "DiplomeDetail": "texte",
  "ExperienceEntretien": "texte",
  "NbrMinimumVoeux": 0,
  "NbrMaximumVoeux": 0,
  "StatutJureId": 1234567,
  "SituationProfessionnelleId": 1234567,
  "SituationAdminstrativeId": 1234567,
  "RemunerationId": 1234567,
  "InformationId": 1234567,
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

## Modifier un juré

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Jure/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "DateValidationDocument": "2026-09-01T00:00:00+02:00",
  "EntrepriseId": 1234567,
  "Promotion": "texte",
  "CommentaireId": 1234567,
  "CodeCRM": "texte",
  "DomaineId": 1234567,
  "NiveauAnglais": "texte",
  "TypeJureId": 1234567,
  "DiplomeON": false,
  "DemandeIntranet": false,
  "EcoleId": 1234567,
  "CommentaireInterneId": 1234567,
  "CommentaireSystemeId": 1234567,
  "DiplomeDetail": "texte",
  "ExperienceEntretien": "texte",
  "NbrMinimumVoeux": 0,
  "NbrMaximumVoeux": 0,
  "StatutJureId": 1234567,
  "SituationProfessionnelleId": 1234567,
  "SituationAdminstrativeId": 1234567,
  "RemunerationId": 1234567,
  "InformationId": 1234567,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Jure/$entity",
  "DateValidationDocument": "2026-09-01T00:00:00+02:00",
  "EntrepriseId": 1234567,
  "Promotion": "texte",
  "CommentaireId": 1234567,
  "CodeCRM": "texte",
  "DomaineId": 1234567,
  "NiveauAnglais": "texte",
  "TypeJureId": 1234567,
  "DiplomeON": false,
  "DemandeIntranet": false,
  "EcoleId": 1234567,
  "CommentaireInterneId": 1234567,
  "CommentaireSystemeId": 1234567,
  "DiplomeDetail": "texte",
  "ExperienceEntretien": "texte",
  "NbrMinimumVoeux": 0,
  "NbrMaximumVoeux": 0,
  "StatutJureId": 1234567,
  "SituationProfessionnelleId": 1234567,
  "SituationAdminstrativeId": 1234567,
  "RemunerationId": 1234567,
  "InformationId": 1234567,
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

## Supprimer un juré

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Jure/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
