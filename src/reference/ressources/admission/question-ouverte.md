# Question ouverte

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une question ouverte avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/QuestionOuverte/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#QuestionOuverte/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "SessionRecrutementId": 0,
  "Obligatoire": false
}
```

:::

## Créer une question ouverte

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/QuestionOuverte \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "SessionRecrutementId": 1234567,
  "Obligatoire": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#QuestionOuverte/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "SessionRecrutementId": 1234567,
  "Obligatoire": false
}
```

:::

## Modifier une question ouverte

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/QuestionOuverte/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "SessionRecrutementId": 1234567,
  "Obligatoire": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#QuestionOuverte/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "SessionRecrutementId": 1234567,
  "Obligatoire": false
}
```

:::

## Supprimer une question ouverte

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/QuestionOuverte/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
