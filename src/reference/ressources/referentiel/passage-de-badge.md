# Passage de badge

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les passages de badge

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Evenement \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Evenement",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "CodeTerminal": "",
      "CodeCarte": "",
      "Date": null,
      "DateReception": null,
      "Traite": false,
      "Ignore": false,
      "DateTraitement": null,
      "Resultat": 0
    }
  ]
}
```

:::

## Récupérer un passage de badge avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Evenement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Evenement/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "CodeTerminal": "",
  "CodeCarte": "",
  "Date": null,
  "DateReception": null,
  "Traite": false,
  "Ignore": false,
  "DateTraitement": null,
  "Resultat": 0
}
```

:::

## Créer un passage de badge

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Evenement \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CodeTerminal": "texte",
  "CodeCarte": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "DateReception": "2026-09-01T00:00:00+02:00",
  "Traite": false,
  "Ignore": false,
  "DateTraitement": "2026-09-01T00:00:00+02:00",
  "Resultat": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Evenement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CodeTerminal": "texte",
  "CodeCarte": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "DateReception": "2026-09-01T00:00:00+02:00",
  "Traite": false,
  "Ignore": false,
  "DateTraitement": "2026-09-01T00:00:00+02:00",
  "Resultat": 0
}
```

:::

## Modifier un passage de badge

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Evenement/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CodeTerminal": "texte",
  "CodeCarte": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "DateReception": "2026-09-01T00:00:00+02:00",
  "Traite": false,
  "Ignore": false,
  "DateTraitement": "2026-09-01T00:00:00+02:00",
  "Resultat": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Evenement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CodeTerminal": "texte",
  "CodeCarte": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "DateReception": "2026-09-01T00:00:00+02:00",
  "Traite": false,
  "Ignore": false,
  "DateTraitement": "2026-09-01T00:00:00+02:00",
  "Resultat": 0
}
```

:::

## Supprimer un passage de badge

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Evenement/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
