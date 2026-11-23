# Vœu de juré

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un vœu de juré avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/VoeuxJure/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#VoeuxJure/$entity",
  "JureId": 0,
  "OrganisationId": 0,
  "DateEnregistrement": null,
  "Verrouille": false,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un vœu de juré

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/VoeuxJure \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "JureId": 1234567,
  "OrganisationId": 1234567,
  "DateEnregistrement": "2026-09-01T00:00:00+02:00",
  "Verrouille": false,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#VoeuxJure/$entity",
  "JureId": 1234567,
  "OrganisationId": 1234567,
  "DateEnregistrement": "2026-09-01T00:00:00+02:00",
  "Verrouille": false,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un vœu de juré

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/VoeuxJure/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "JureId": 1234567,
  "OrganisationId": 1234567,
  "DateEnregistrement": "2026-09-01T00:00:00+02:00",
  "Verrouille": false,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#VoeuxJure/$entity",
  "JureId": 1234567,
  "OrganisationId": 1234567,
  "DateEnregistrement": "2026-09-01T00:00:00+02:00",
  "Verrouille": false,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un vœu de juré

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/VoeuxJure/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
