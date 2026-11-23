# Type de juré

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un type de juré avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/TypeJure/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#TypeJure/$entity",
  "EcoleId": 0,
  "Un": false,
  "Deux": false,
  "Trois": false,
  "Apprenant": false,
  "Enseignant": false,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un type de juré

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/TypeJure \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "EcoleId": 1234567,
  "Un": false,
  "Deux": false,
  "Trois": false,
  "Apprenant": false,
  "Enseignant": false,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#TypeJure/$entity",
  "EcoleId": 1234567,
  "Un": false,
  "Deux": false,
  "Trois": false,
  "Apprenant": false,
  "Enseignant": false,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un type de juré

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/TypeJure/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "EcoleId": 1234567,
  "Un": false,
  "Deux": false,
  "Trois": false,
  "Apprenant": false,
  "Enseignant": false,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#TypeJure/$entity",
  "EcoleId": 1234567,
  "Un": false,
  "Deux": false,
  "Trois": false,
  "Apprenant": false,
  "Enseignant": false,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un type de juré

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/TypeJure/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
