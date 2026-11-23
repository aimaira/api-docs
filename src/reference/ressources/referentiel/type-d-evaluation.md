# Type d’évaluation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les types d’évaluation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeEvaluation \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeEvaluation",
  "value": [
    {
      "Id": 1234567,
      "Code": "",
      "Nom": "",
      "Detaillable": false,
      "DiffusionImmediate": false
    }
  ]
}
```

:::

<!-- reference:end -->
