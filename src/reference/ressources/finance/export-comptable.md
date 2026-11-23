# Export comptable

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un export comptable avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportCompta/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionExportCompta/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Piece": "",
  "Date": null,
  "ForceDate": false,
  "RegroupementContrePartie": false,
  "JAVente": "",
  "StatusId": 0,
  "TypeExportComptaId": 0,
  "DateGeneration": null,
  "EmailDemandeur": "",
  "Workflow": "",
  "UneFactureParLigne": false
}
```

:::

## Créer un export comptable

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportCompta \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Piece": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "ForceDate": false,
  "RegroupementContrePartie": false,
  "JAVente": "texte",
  "StatusId": 1234567,
  "TypeExportComptaId": 1234567,
  "DateGeneration": "2026-09-01T00:00:00+02:00",
  "EmailDemandeur": "texte",
  "Workflow": "texte",
  "UneFactureParLigne": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionExportCompta/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Piece": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "ForceDate": false,
  "RegroupementContrePartie": false,
  "JAVente": "texte",
  "StatusId": 1234567,
  "TypeExportComptaId": 1234567,
  "DateGeneration": "2026-09-01T00:00:00+02:00",
  "EmailDemandeur": "texte",
  "Workflow": "texte",
  "UneFactureParLigne": false
}
```

:::

## Modifier un export comptable

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportCompta/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Piece": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "ForceDate": false,
  "RegroupementContrePartie": false,
  "JAVente": "texte",
  "StatusId": 1234567,
  "TypeExportComptaId": 1234567,
  "DateGeneration": "2026-09-01T00:00:00+02:00",
  "EmailDemandeur": "texte",
  "Workflow": "texte",
  "UneFactureParLigne": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionExportCompta/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Piece": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "ForceDate": false,
  "RegroupementContrePartie": false,
  "JAVente": "texte",
  "StatusId": 1234567,
  "TypeExportComptaId": 1234567,
  "DateGeneration": "2026-09-01T00:00:00+02:00",
  "EmailDemandeur": "texte",
  "Workflow": "texte",
  "UneFactureParLigne": false
}
```

:::

## Supprimer un export comptable

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionExportCompta/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
