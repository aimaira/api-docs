# Type d’employeur

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les types d’employeur

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeEmployeur \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeEmployeur",
  "value": [
    {
      "Id": 1234567,
      "Code": "",
      "Libelle": "",
      "LibelleExterne": ""
    }
  ]
}
```

:::

<!-- reference:end -->
