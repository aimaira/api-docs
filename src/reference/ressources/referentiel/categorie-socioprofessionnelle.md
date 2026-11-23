# Catégorie socioprofessionnelle

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les catégories socioprofessionnelles

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CSP \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CSP",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer une catégorie socioprofessionnelle avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CSP/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CSP/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une catégorie socioprofessionnelle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CSP \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CSP/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une catégorie socioprofessionnelle

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CSP/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CSP/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une catégorie socioprofessionnelle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CSP/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
