# Webhook

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les webhooks

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Webhook \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Webhook",
  "value": [
    {
      "Id": 1234567,
      "Code": "",
      "Nom": "",
      "Actif": false,
      "Url": "",
      "Configuration": "",
      "AuthType": 0,
      "AuthClientId": "",
      "AuthTokenEndpoint": ""
    }
  ]
}
```

:::

## Récupérer un webhook avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Webhook/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Webhook/$entity",
  "Id": 1234567,
  "Code": "",
  "Nom": "",
  "Actif": false,
  "Url": "",
  "Configuration": "",
  "AuthType": 0,
  "AuthClientId": "",
  "AuthTokenEndpoint": ""
}
```

:::

<!-- reference:end -->
