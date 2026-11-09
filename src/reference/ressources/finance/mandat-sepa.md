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

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/MandatSEPA \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "ClientId": 19335784,
  "Compte": "FR1012739000404693178169I38",
  "BIC": "AGRIFRPPXXX",
  "RUM": "TEST-RUM",
  "Titulaire": "Test Titulaire",
  "Date": "2025-08-04T00:00:00+02:00"
}' \
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

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Lister les mandats SEPA

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/MandatSEPA \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#MandatSEPA",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ClientId": 0,
      "Compte": "",
      "BIC": "",
      "RUM": "",
      "Titulaire": "",
      "Banque": "",
      "Date": null,
      "DateFirstDowload": null,
      "DateUpload": null,
      "DateValidation": null,
      "GuidFichier": "00000000-0000-0000-0000-000000000000",
      "FirstON": false,
      "Remboursement": false
    }
  ]
}
```

:::

## Récupérer un mandat SEPA avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/MandatSEPA/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#MandatSEPA/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ClientId": 0,
  "Compte": "",
  "BIC": "",
  "RUM": "",
  "Titulaire": "",
  "Banque": "",
  "Date": null,
  "DateFirstDowload": null,
  "DateUpload": null,
  "DateValidation": null,
  "GuidFichier": "00000000-0000-0000-0000-000000000000",
  "FirstON": false,
  "Remboursement": false
}
```

:::

## Modifier un mandat SEPA

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/MandatSEPA/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "ClientId": 1234567,
  "Compte": "texte",
  "BIC": "texte",
  "Titulaire": "texte",
  "Date": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#MandatSEPA/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ClientId": 1234567,
  "Compte": "texte",
  "BIC": "texte",
  "RUM": "",
  "Titulaire": "texte",
  "Banque": "",
  "Date": "2026-09-01T00:00:00+02:00",
  "DateFirstDowload": null,
  "DateUpload": null,
  "DateValidation": null,
  "GuidFichier": "00000000-0000-0000-0000-000000000000",
  "FirstON": false,
  "Remboursement": false
}
```

:::

## Supprimer un mandat SEPA

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/MandatSEPA/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
