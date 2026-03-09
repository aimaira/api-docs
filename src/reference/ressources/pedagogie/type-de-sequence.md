# Type de séquence

## Lister les types de séquences

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeSequence \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeSequence",
  "value": [
    {
      "Id": 798,
      "Nom": "Enseignement",
      "Code": "COURS"
    },
    {
      "Id": 122519,
      "Nom": "Césure",
      "Code": "C"
    },
    {
      "Id": 122650,
      "Nom": "Période en entreprise",
      "Code": "S"
    },
    {
      "Id": 576079,
      "Nom": "En université partenaire",
      "Code": "OUTGOING"
    },
    {
      "Id": 2215053,
      "Nom": "Parcours",
      "Code": "PARCOURS"
    },
    {
      "Id": 17044838,
      "Nom": "Segmenté",
      "Code": "SEGMENTE"
    }
  ]
}
```

:::