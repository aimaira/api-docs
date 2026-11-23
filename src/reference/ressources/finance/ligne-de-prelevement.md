# Ligne de prélèvement

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une ligne de prélèvement avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LignePrelevement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#LignePrelevement/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "IBAN": "",
  "ICS": "",
  "BIC": "",
  "Reference": "",
  "RUM": "",
  "DateRUM": null,
  "First": false,
  "Montant": 0,
  "NomDebiteur": "",
  "BalanceClientId": 0,
  "SessionExportPrelevementId": 0
}
```

:::

## Créer une ligne de prélèvement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LignePrelevement \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "IBAN": "texte",
  "ICS": "texte",
  "BIC": "texte",
  "Reference": "texte",
  "RUM": "texte",
  "DateRUM": "2026-09-01T00:00:00+02:00",
  "First": false,
  "Montant": 0,
  "NomDebiteur": "texte",
  "BalanceClientId": 1234567,
  "SessionExportPrelevementId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#LignePrelevement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "IBAN": "texte",
  "ICS": "texte",
  "BIC": "texte",
  "Reference": "texte",
  "RUM": "texte",
  "DateRUM": "2026-09-01T00:00:00+02:00",
  "First": false,
  "Montant": 0,
  "NomDebiteur": "texte",
  "BalanceClientId": 1234567,
  "SessionExportPrelevementId": 1234567
}
```

:::

## Modifier une ligne de prélèvement

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LignePrelevement/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "IBAN": "texte",
  "ICS": "texte",
  "BIC": "texte",
  "Reference": "texte",
  "RUM": "texte",
  "DateRUM": "2026-09-01T00:00:00+02:00",
  "First": false,
  "Montant": 0,
  "NomDebiteur": "texte",
  "BalanceClientId": 1234567,
  "SessionExportPrelevementId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#LignePrelevement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "IBAN": "texte",
  "ICS": "texte",
  "BIC": "texte",
  "Reference": "texte",
  "RUM": "texte",
  "DateRUM": "2026-09-01T00:00:00+02:00",
  "First": false,
  "Montant": 0,
  "NomDebiteur": "texte",
  "BalanceClientId": 1234567,
  "SessionExportPrelevementId": 1234567
}
```

:::

## Supprimer une ligne de prélèvement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LignePrelevement/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
