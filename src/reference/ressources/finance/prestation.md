# Prestation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une prestation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Prestation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Prestation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "PhraseExplicative": "",
  "PrestationDescription": "",
  "CategoriePrestationId": 0,
  "Automatique": false,
  "Total": 0
}
```

:::

## Créer une prestation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Prestation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "PhraseExplicative": "texte",
  "PrestationDescription": "texte",
  "CategoriePrestationId": 1234567,
  "Automatique": false,
  "Total": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Prestation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "PhraseExplicative": "texte",
  "PrestationDescription": "texte",
  "CategoriePrestationId": 1234567,
  "Automatique": false,
  "Total": 0
}
```

:::

## Modifier une prestation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Prestation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "PhraseExplicative": "texte",
  "PrestationDescription": "texte",
  "CategoriePrestationId": 1234567,
  "Automatique": false,
  "Total": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Prestation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "PhraseExplicative": "texte",
  "PrestationDescription": "texte",
  "CategoriePrestationId": 1234567,
  "Automatique": false,
  "Total": 0
}
```

:::

## Supprimer une prestation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Prestation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
