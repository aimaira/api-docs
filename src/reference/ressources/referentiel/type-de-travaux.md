# Type de travaux

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les types de travaux

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeTravaux \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeTravaux",
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

## Récupérer un type de travaux avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeTravaux/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeTravaux/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un type de travaux

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeTravaux \
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeTravaux/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un type de travaux

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeTravaux/1234567 \
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeTravaux/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un type de travaux

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeTravaux/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
