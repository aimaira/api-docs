# Campus

Historiquement, AIMAIRA disposait d’une notion d’entité juridique qui pouvait représenter tantôt un campus tantôt une
société de facturation. Ces notions ont été séparées en deux entités distinctes qui doivent maintenant être utilisées
indépendamment.

::: warning Note

Cette séparation des entités n’est pas encore implémentée sur la version actuelle de l’API d’AIMAIRA.

:::

## Afficher les données d’un campus

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EntiteJuridique/1234567 \
  --request GET \
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