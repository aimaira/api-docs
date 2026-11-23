# Type de message

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les types de message

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/MessageType \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#MessageType",
  "value": [
    {
      "Type": "None",
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer un type de message avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/MessageType/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#MessageType/$entity",
  "Type": "None",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un type de message

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/MessageType \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Type": "None",
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#MessageType/$entity",
  "Type": "None",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un type de message

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/MessageType/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Type": "None",
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#MessageType/$entity",
  "Type": "None",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un type de message

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/MessageType/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
