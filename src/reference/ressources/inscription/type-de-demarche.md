# Type de démarche

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un type de démarche avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeDemarche/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeDemarche/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "OuvertIntranetON": false,
  "NonEuropeenON": false,
  "Description": ""
}
```

:::

## Créer un type de démarche

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeDemarche \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "OuvertIntranetON": false,
  "NonEuropeenON": false,
  "Description": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeDemarche/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "OuvertIntranetON": false,
  "NonEuropeenON": false,
  "Description": "texte"
}
```

:::

## Modifier un type de démarche

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeDemarche/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "OuvertIntranetON": false,
  "NonEuropeenON": false,
  "Description": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeDemarche/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "OuvertIntranetON": false,
  "NonEuropeenON": false,
  "Description": "texte"
}
```

:::

## Supprimer un type de démarche

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeDemarche/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
