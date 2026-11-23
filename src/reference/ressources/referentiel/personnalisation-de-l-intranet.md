# Personnalisation de l’intranet

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les personnalisations de l’intranet

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Personnalisation \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Personnalisation",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "TypePersonnalisation": "None",
      "Public": "None",
      "Restriction": "",
      "ValeursLibelles": [],
      "ValeursAutorisations": []
    }
  ]
}
```

:::

<!-- reference:end -->
