# Spécialité de professionnalisation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les spécialités de professionnalisation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SpecialiteProfessionnalisation \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SpecialiteProfessionnalisation",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "NomExterne": ""
    }
  ]
}
```

:::

## Récupérer une spécialité de professionnalisation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SpecialiteProfessionnalisation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SpecialiteProfessionnalisation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NomExterne": ""
}
```

:::

<!-- reference:end -->
