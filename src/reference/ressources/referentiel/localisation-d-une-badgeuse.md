# Localisation d’une badgeuse

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une localisation d’une badgeuse avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Localisation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Localisation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "TerminalId": 0,
  "EntiteJuridiqueId": 0,
  "CodeSalle": "",
  "DateDebut": null,
  "DateFin": null
}
```

:::

## Créer une localisation d’une badgeuse

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Localisation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "TerminalId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "CodeSalle": "texte",
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Localisation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "TerminalId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "CodeSalle": "texte",
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00"
}
```

:::

## Modifier une localisation d’une badgeuse

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Localisation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "TerminalId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "CodeSalle": "texte",
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Localisation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "TerminalId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "CodeSalle": "texte",
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00"
}
```

:::

## Supprimer une localisation d’une badgeuse

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Localisation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
