# Test

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un test avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Test/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Test/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Minimum": 0,
  "Maximum": 0,
  "TypeTestId": 0,
  "RegroupementTestId": 0
}
```

:::

## Créer un test

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Test \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Minimum": 0,
  "Maximum": 0,
  "TypeTestId": 1234567,
  "RegroupementTestId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Test/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Minimum": 0,
  "Maximum": 0,
  "TypeTestId": 1234567,
  "RegroupementTestId": 1234567
}
```

:::

## Modifier un test

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Test/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Minimum": 0,
  "Maximum": 0,
  "TypeTestId": 1234567,
  "RegroupementTestId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Test/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Minimum": 0,
  "Maximum": 0,
  "TypeTestId": 1234567,
  "RegroupementTestId": 1234567
}
```

:::

## Supprimer un test

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Test/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
