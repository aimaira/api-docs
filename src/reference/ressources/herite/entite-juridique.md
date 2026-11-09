# Entité juridique

## Récupérer une entité juridique avec son id

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EntiteJuridique/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EntiteJuridique/$entity",
    "Id": 1234567,
    "Nom": "Mon campus",
    "Code": "MON_CAMPUS",
    "Acronyme": "MON_CAMPUS",
    "NumeroTVAIntracommunautaire": "FR48123456789",
    "SIRET": "12345678900017",
    "CodeAPE": "",
    "CodeNAF": "01.02Z",
    "CodeMedecineTravail": "",
    "CodeURSSAF": "",
    "AdresseId": 2215214,
    "TelephoneId": 0,
    "MailId": 2215215,
    "FaxId": 0,
    "NomDomaine": "",
    "MerchantID": "",
    "AlgoCodeClientId": 123360,
    "AlgoCodeFactureId": 292,
    "AlgoCodeAffaireId": 346,
    "AlgoCodeApprenantId": 56407,
    "AlgoCodeRecrutementId": 119068,
    "AlgoCodeEnseignantId": 119067,
    "AlgoCodeCompteId": 0,
    "AlgoCodeCoursId": 119454,
    "AlgoRUMId": 123358,
    "AlgoCodeDossierId": 0,
    "AlgoCodeConventionId": 334216,
    "ISICAPIKey": "",
    "NumeroActivite": "12345678901",
    "NumeroUai": "0123456Y",
    "Parametres": null,
    "FileSystemRoot": "moncampus",
    "FileSystemSharename": "moncampus",
    "NomSysteme": "MON CAMPUS",
    "Comptable": true,
    "Pedagogique": false,
    "MailDefaut": "",
    "SIREN": "123456789",
    "Capital": 0.0,
    "FormeJuridique": "",
    "IdSocieteFacturationParDefaut": 0,
    "CodeAnalytique": ""
}
```

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Créer une entité juridique

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EntiteJuridique \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Acronyme": "texte",
  "NumeroTVAIntracommunautaire": "texte",
  "SIRET": "texte",
  "CodeAPE": "texte",
  "CodeNAF": "texte",
  "CodeMedecineTravail": "texte",
  "CodeURSSAF": "texte",
  "AdresseId": 1234567,
  "TelephoneId": 1234567,
  "MailId": 1234567,
  "FaxId": 1234567,
  "NomDomaine": "texte",
  "MerchantID": "texte",
  "AlgoCodeClientId": 1234567,
  "AlgoCodeFactureId": 1234567,
  "AlgoCodeAffaireId": 1234567,
  "AlgoCodeApprenantId": 1234567,
  "AlgoCodeRecrutementId": 1234567,
  "AlgoCodeEnseignantId": 1234567,
  "AlgoCodeCompteId": 1234567,
  "AlgoCodeCoursId": 1234567,
  "AlgoRUMId": 1234567,
  "AlgoCodeDossierId": 1234567,
  "AlgoCodeConventionId": 1234567,
  "ISICAPIKey": "texte",
  "NumeroActivite": "texte",
  "NumeroUai": "texte",
  "FileSystemRoot": "texte",
  "FileSystemSharename": "texte",
  "NomSysteme": "texte",
  "Comptable": false,
  "Pedagogique": false,
  "MailDefaut": "texte",
  "SIREN": "texte",
  "Capital": 0,
  "FormeJuridique": "texte",
  "IdSocieteFacturationParDefaut": 0,
  "CodeAnalytique": "texte",
  "CleTableauBordApprentissage": "texte",
  "NumeroRCS": "texte",
  "TypeCfaId": 1234567,
  "IsiPortalGroupId": 1234567,
  "Color": "texte",
  "PrefetRegion": "texte",
  "MentionRecouvrement": "texte",
  "MentionPenalitesRetard": "texte",
  "MentionEscompte": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EntiteJuridique/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Acronyme": "texte",
  "NumeroTVAIntracommunautaire": "texte",
  "SIRET": "texte",
  "CodeAPE": "texte",
  "CodeNAF": "texte",
  "CodeMedecineTravail": "texte",
  "CodeURSSAF": "texte",
  "AdresseId": 1234567,
  "TelephoneId": 1234567,
  "MailId": 1234567,
  "FaxId": 1234567,
  "NomDomaine": "texte",
  "MerchantID": "texte",
  "AlgoCodeClientId": 1234567,
  "AlgoCodeFactureId": 1234567,
  "AlgoCodeAffaireId": 1234567,
  "AlgoCodeApprenantId": 1234567,
  "AlgoCodeRecrutementId": 1234567,
  "AlgoCodeEnseignantId": 1234567,
  "AlgoCodeCompteId": 1234567,
  "AlgoCodeCoursId": 1234567,
  "AlgoRUMId": 1234567,
  "AlgoCodeDossierId": 1234567,
  "AlgoCodeConventionId": 1234567,
  "ISICAPIKey": "texte",
  "NumeroActivite": "texte",
  "NumeroUai": "texte",
  "FileSystemRoot": "texte",
  "FileSystemSharename": "texte",
  "NomSysteme": "texte",
  "Comptable": false,
  "Pedagogique": false,
  "MailDefaut": "texte",
  "SIREN": "texte",
  "Capital": 0,
  "FormeJuridique": "texte",
  "IdSocieteFacturationParDefaut": 0,
  "CodeAnalytique": "texte",
  "CleTableauBordApprentissage": "texte",
  "NumeroRCS": "texte",
  "TypeCfaId": 1234567,
  "IsiPortalGroupId": 1234567,
  "Color": "texte",
  "PrefetRegion": "texte",
  "MentionRecouvrement": "texte",
  "MentionPenalitesRetard": "texte",
  "MentionEscompte": "texte"
}
```

:::

## Modifier une entité juridique

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EntiteJuridique/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Acronyme": "texte",
  "NumeroTVAIntracommunautaire": "texte",
  "SIRET": "texte",
  "CodeAPE": "texte",
  "CodeNAF": "texte",
  "CodeMedecineTravail": "texte",
  "CodeURSSAF": "texte",
  "AdresseId": 1234567,
  "TelephoneId": 1234567,
  "MailId": 1234567,
  "FaxId": 1234567,
  "NomDomaine": "texte",
  "MerchantID": "texte",
  "AlgoCodeClientId": 1234567,
  "AlgoCodeFactureId": 1234567,
  "AlgoCodeAffaireId": 1234567,
  "AlgoCodeApprenantId": 1234567,
  "AlgoCodeRecrutementId": 1234567,
  "AlgoCodeEnseignantId": 1234567,
  "AlgoCodeCompteId": 1234567,
  "AlgoCodeCoursId": 1234567,
  "AlgoRUMId": 1234567,
  "AlgoCodeDossierId": 1234567,
  "AlgoCodeConventionId": 1234567,
  "ISICAPIKey": "texte",
  "NumeroActivite": "texte",
  "NumeroUai": "texte",
  "FileSystemRoot": "texte",
  "FileSystemSharename": "texte",
  "NomSysteme": "texte",
  "Comptable": false,
  "Pedagogique": false,
  "MailDefaut": "texte",
  "SIREN": "texte",
  "Capital": 0,
  "FormeJuridique": "texte",
  "IdSocieteFacturationParDefaut": 0,
  "CodeAnalytique": "texte",
  "CleTableauBordApprentissage": "texte",
  "NumeroRCS": "texte",
  "TypeCfaId": 1234567,
  "IsiPortalGroupId": 1234567,
  "Color": "texte",
  "PrefetRegion": "texte",
  "MentionRecouvrement": "texte",
  "MentionPenalitesRetard": "texte",
  "MentionEscompte": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EntiteJuridique/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Acronyme": "texte",
  "NumeroTVAIntracommunautaire": "texte",
  "SIRET": "texte",
  "CodeAPE": "texte",
  "CodeNAF": "texte",
  "CodeMedecineTravail": "texte",
  "CodeURSSAF": "texte",
  "AdresseId": 1234567,
  "TelephoneId": 1234567,
  "MailId": 1234567,
  "FaxId": 1234567,
  "NomDomaine": "texte",
  "MerchantID": "texte",
  "AlgoCodeClientId": 1234567,
  "AlgoCodeFactureId": 1234567,
  "AlgoCodeAffaireId": 1234567,
  "AlgoCodeApprenantId": 1234567,
  "AlgoCodeRecrutementId": 1234567,
  "AlgoCodeEnseignantId": 1234567,
  "AlgoCodeCompteId": 1234567,
  "AlgoCodeCoursId": 1234567,
  "AlgoRUMId": 1234567,
  "AlgoCodeDossierId": 1234567,
  "AlgoCodeConventionId": 1234567,
  "ISICAPIKey": "texte",
  "NumeroActivite": "texte",
  "NumeroUai": "texte",
  "FileSystemRoot": "texte",
  "FileSystemSharename": "texte",
  "NomSysteme": "texte",
  "Comptable": false,
  "Pedagogique": false,
  "MailDefaut": "texte",
  "SIREN": "texte",
  "Capital": 0,
  "FormeJuridique": "texte",
  "IdSocieteFacturationParDefaut": 0,
  "CodeAnalytique": "texte",
  "CleTableauBordApprentissage": "texte",
  "NumeroRCS": "texte",
  "TypeCfaId": 1234567,
  "IsiPortalGroupId": 1234567,
  "Color": "texte",
  "PrefetRegion": "texte",
  "MentionRecouvrement": "texte",
  "MentionPenalitesRetard": "texte",
  "MentionEscompte": "texte"
}
```

:::

## Supprimer une entité juridique

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EntiteJuridique/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
