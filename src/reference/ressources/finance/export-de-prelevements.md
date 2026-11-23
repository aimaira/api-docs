# Export de prélèvements

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un export de prélèvements avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportPrelevement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionExportPrelevement/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "IBAN": "",
  "ICS": "",
  "EntNom": "",
  "EntAdresse": "",
  "EntCP": "",
  "EntVille": "",
  "BIC": "",
  "EntPays": "",
  "Reference": "",
  "DateOperation": null,
  "DateGeneration": null,
  "OperationSEPAId": 0
}
```

:::

## Créer un export de prélèvements

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportPrelevement \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "IBAN": "texte",
  "ICS": "texte",
  "EntNom": "texte",
  "EntAdresse": "texte",
  "EntCP": "texte",
  "EntVille": "texte",
  "BIC": "texte",
  "EntPays": "texte",
  "Reference": "texte",
  "DateOperation": "2026-09-01T00:00:00+02:00",
  "DateGeneration": "2026-09-01T00:00:00+02:00",
  "OperationSEPAId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionExportPrelevement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "IBAN": "texte",
  "ICS": "texte",
  "EntNom": "texte",
  "EntAdresse": "texte",
  "EntCP": "texte",
  "EntVille": "texte",
  "BIC": "texte",
  "EntPays": "texte",
  "Reference": "texte",
  "DateOperation": "2026-09-01T00:00:00+02:00",
  "DateGeneration": "2026-09-01T00:00:00+02:00",
  "OperationSEPAId": 1234567
}
```

:::

## Modifier un export de prélèvements

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportPrelevement/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "IBAN": "texte",
  "ICS": "texte",
  "EntNom": "texte",
  "EntAdresse": "texte",
  "EntCP": "texte",
  "EntVille": "texte",
  "BIC": "texte",
  "EntPays": "texte",
  "Reference": "texte",
  "DateOperation": "2026-09-01T00:00:00+02:00",
  "DateGeneration": "2026-09-01T00:00:00+02:00",
  "OperationSEPAId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionExportPrelevement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "IBAN": "texte",
  "ICS": "texte",
  "EntNom": "texte",
  "EntAdresse": "texte",
  "EntCP": "texte",
  "EntVille": "texte",
  "BIC": "texte",
  "EntPays": "texte",
  "Reference": "texte",
  "DateOperation": "2026-09-01T00:00:00+02:00",
  "DateGeneration": "2026-09-01T00:00:00+02:00",
  "OperationSEPAId": 1234567
}
```

:::

## Supprimer un export de prélèvements

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportPrelevement/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
