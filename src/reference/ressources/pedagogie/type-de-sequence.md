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

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un type de séquence avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeSequence/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeSequence/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un type de séquence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeSequence \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeSequence/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un type de séquence

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeSequence/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeSequence/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un type de séquence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeSequence/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
