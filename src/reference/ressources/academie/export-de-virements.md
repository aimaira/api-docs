# Export de virements

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un export de virements avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportVirement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionExportVirement/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "IBAN": "",
  "ICS": "",
  "Adresse": "",
  "CP": "",
  "Ville": "",
  "BIC": "",
  "Pays": "",
  "Reference": "",
  "DateOperation": null,
  "DateGeneration": null
}
```

:::

## Créer un export de virements

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportVirement \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "IBAN": "texte",
  "ICS": "texte",
  "Adresse": "texte",
  "CP": "texte",
  "Ville": "texte",
  "BIC": "texte",
  "Pays": "texte",
  "Reference": "texte",
  "DateOperation": "2026-09-01T00:00:00+02:00",
  "DateGeneration": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionExportVirement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "IBAN": "texte",
  "ICS": "texte",
  "Adresse": "texte",
  "CP": "texte",
  "Ville": "texte",
  "BIC": "texte",
  "Pays": "texte",
  "Reference": "texte",
  "DateOperation": "2026-09-01T00:00:00+02:00",
  "DateGeneration": "2026-09-01T00:00:00+02:00"
}
```

:::

## Modifier un export de virements

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportVirement/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "IBAN": "texte",
  "ICS": "texte",
  "Adresse": "texte",
  "CP": "texte",
  "Ville": "texte",
  "BIC": "texte",
  "Pays": "texte",
  "Reference": "texte",
  "DateOperation": "2026-09-01T00:00:00+02:00",
  "DateGeneration": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionExportVirement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "IBAN": "texte",
  "ICS": "texte",
  "Adresse": "texte",
  "CP": "texte",
  "Ville": "texte",
  "BIC": "texte",
  "Pays": "texte",
  "Reference": "texte",
  "DateOperation": "2026-09-01T00:00:00+02:00",
  "DateGeneration": "2026-09-01T00:00:00+02:00"
}
```

:::

## Supprimer un export de virements

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportVirement/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
