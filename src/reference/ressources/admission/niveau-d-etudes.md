# Niveau d’études

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les niveaux d’études

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauEtude \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauEtude",
  "value": [
    {
      "Id": 1234567,
      "Code": "",
      "Libelle": "",
      "LibelleExterne": "",
      "ReferenceExterne": ""
    }
  ]
}
```

:::

## Récupérer un niveau d’études avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauEtude/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauEtude/$entity",
  "Id": 1234567,
  "Code": "",
  "Libelle": "",
  "LibelleExterne": "",
  "ReferenceExterne": ""
}
```

:::

<!-- reference:end -->
