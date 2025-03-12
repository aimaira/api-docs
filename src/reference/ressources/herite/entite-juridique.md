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