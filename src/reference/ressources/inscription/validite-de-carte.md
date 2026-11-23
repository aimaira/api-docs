# Validité de carte

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une validité de carte avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ValiditeCarte/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ValiditeCarte/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "CarteId": 0,
  "CommandeId": 0,
  "Validite": ""
}
```

:::

<!-- reference:end -->
