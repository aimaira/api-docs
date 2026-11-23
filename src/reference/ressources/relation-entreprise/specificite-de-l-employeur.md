# Spécificité de l’employeur

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les spécificités de l’employeur

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SpecifiqueEmployeur \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SpecifiqueEmployeur",
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
