# Province

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une province avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Province/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Province/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "PaysId": 0,
  "CodeISO": ""
}
```

:::

## Créer une province

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Province \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "PaysId": 1234567,
  "CodeISO": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Province/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "PaysId": 1234567,
  "CodeISO": "texte"
}
```

:::

## Modifier une province

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Province/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "PaysId": 1234567,
  "CodeISO": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Province/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "PaysId": 1234567,
  "CodeISO": "texte"
}
```

:::

<!-- reference:end -->
