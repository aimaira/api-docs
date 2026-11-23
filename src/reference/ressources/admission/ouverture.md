# Ouverture

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une ouverture avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ouverture/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ouverture/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "DossierId": 0,
  "Debut": null,
  "Fin": null,
  "Objet": "",
  "MissionsId": 0
}
```

:::

## Créer une ouverture

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ouverture \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Objet": "texte",
  "MissionsId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ouverture/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Objet": "texte",
  "MissionsId": 1234567
}
```

:::

## Modifier une ouverture

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ouverture/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Objet": "texte",
  "MissionsId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ouverture/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Objet": "texte",
  "MissionsId": 1234567
}
```

:::

## Supprimer une ouverture

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ouverture/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
