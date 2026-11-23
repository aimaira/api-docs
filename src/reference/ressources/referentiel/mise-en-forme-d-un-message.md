# Mise en forme d’un message

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Créer une mise en forme d’un message

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/MessageTransform \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Body": "texte",
  "Parameters": []
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#MessageTransform/$entity",
  "Id": 1234567,
  "Body": "texte",
  "Parameters": []
}
```

:::

<!-- reference:end -->
