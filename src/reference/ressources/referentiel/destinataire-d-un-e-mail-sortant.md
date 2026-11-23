# Destinataire d’un e-mail sortant

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un destinataire d’un e-mail sortant avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Recipient/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Recipient/$entity",
  "NumRecipient": 0,
  "NumMail": 0,
  "Address": "",
  "Name": "",
  "TypeRecipient": 0,
  "IdRecipient": 0
}
```

:::

<!-- reference:end -->
