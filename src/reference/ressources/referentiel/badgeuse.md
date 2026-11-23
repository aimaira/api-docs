# Badgeuse

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une badgeuse avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Terminal/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Terminal/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "CodeTerminal": "",
  "Desactive": false,
  "DateStartup": null,
  "DateLastseen": null
}
```

:::

## Créer une badgeuse

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Terminal \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CodeTerminal": "texte",
  "Desactive": false,
  "DateStartup": "2026-09-01T00:00:00+02:00",
  "DateLastseen": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Terminal/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CodeTerminal": "texte",
  "Desactive": false,
  "DateStartup": "2026-09-01T00:00:00+02:00",
  "DateLastseen": "2026-09-01T00:00:00+02:00"
}
```

:::

## Modifier une badgeuse

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Terminal/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CodeTerminal": "texte",
  "Desactive": false,
  "DateStartup": "2026-09-01T00:00:00+02:00",
  "DateLastseen": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Terminal/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CodeTerminal": "texte",
  "Desactive": false,
  "DateStartup": "2026-09-01T00:00:00+02:00",
  "DateLastseen": "2026-09-01T00:00:00+02:00"
}
```

:::

## Supprimer une badgeuse

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Terminal/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
