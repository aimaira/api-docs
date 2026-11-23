# Qualification visée en professionnalisation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les qualifications visées en professionnalisation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/QualificationViseeProfessionnalisation \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#QualificationViseeProfessionnalisation",
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

## Récupérer une qualification visée en professionnalisation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/QualificationViseeProfessionnalisation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#QualificationViseeProfessionnalisation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NomExterne": ""
}
```

:::

<!-- reference:end -->
