# Civilité

## Lister les civilités

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Civilite
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Civilite",
  "value": [
    {
      "Id": 1539,
      "Nom": "Mle",
      "Code": "MLE",
      "NomLong": "Mademoiselle",
      "GenreMale": false
    },
    {
      "Id": 1540,
      "Nom": "Mme",
      "Code": "MME",
      "NomLong": "Madame",
      "GenreMale": false
    },
    {
      "Id": 1541,
      "Nom": "M",
      "Code": "M",
      "NomLong": "Monsieur",
      "GenreMale": true
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une civilité avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Civilite/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Civilite/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NomLong": "",
  "GenreMale": false
}
```

:::

## Créer une civilité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Civilite \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NomLong": "texte",
  "GenreMale": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Civilite/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomLong": "texte",
  "GenreMale": false
}
```

:::

## Modifier une civilité

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Civilite/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NomLong": "texte",
  "GenreMale": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Civilite/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomLong": "texte",
  "GenreMale": false
}
```

:::

## Supprimer une civilité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Civilite/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
