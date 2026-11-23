# Objet

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un objet avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Objet/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Objet/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

<!-- reference:end -->
