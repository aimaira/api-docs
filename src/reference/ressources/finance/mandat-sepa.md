# Mandat SEPA

## Créer un Mandat SEPA

### Génération automatique du RUM

Le RUM est automatiquement généré en fonction de la règle configurée sur la société de facturation s’il n'est pas fourni
lors de la création du mandat SEPA.

Le RUM ne peut être renseigné qu’à la création du mandat SEPA. Il n’est plus modifiable par la suite.

### Données obligatoires

- `ClientId`
- `Compte`, l’identifiant (IBAN ou SWIFT) du compte bancaire cible
- `BIC`
- `Titulaire`
- `Date`

::: code-groupe

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/MandatSEPA
  --request POST
  --data '{
  "ClientId": 19335784,
  "Compte": "FR1012739000404693178169I38",
  "BIC": "AGRIFRPPXXX",
  "RUM": "TEST-RUM",
  "Titulaire": "Test Titulaire",
  "Date": "2025-08-04T00:00:00+02:00"
}'
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#MandatSEPA/$entity",
  "Id": 19387012,
  "Nom": "",
  "Code": "",
  "ClientId": 19335784,
  "Compte": "FR1012739000404693178169I38",
  "BIC": "AGRIFRPPXXX",
  "RUM": "TEST-RUM",
  "Titulaire": "Test Titulaire",
  "Banque": "",
  "Date": "2025-08-04T00:00:00+02:00",
  "DateFirstDowload": null,
  "DateUpload": null,
  "DateValidation": null,
  "GuidFichier": "00000000-0000-0000-0000-000000000000",
  "FirstON": false,
  "Remboursement": false
}
```

:::