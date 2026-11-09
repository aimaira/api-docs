# Nature du client

## Lister les natures de clients

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NatureClient \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NatureClient/$entity",
  "value": [
    {
      "Id": 2214718,
      "Nom": "Organisme Financeur",
      "Code": "OPCO",
      "NbJourDelaiPaiement": 0,
      "NatureId": 0
    },
    {
      "Id": 2214719,
      "Nom": "Père",
      "Code": "PERE",
      "NbJourDelaiPaiement": 0,
      "NatureId": 0
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une nature du client avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NatureClient/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NatureClient/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NbJourDelaiPaiement": 0,
  "NatureId": 0
}
```

:::

## Créer une nature du client

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NatureClient \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NbJourDelaiPaiement": 0,
  "NatureId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NatureClient/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NbJourDelaiPaiement": 0,
  "NatureId": 1234567
}
```

:::

## Modifier une nature du client

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NatureClient/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NbJourDelaiPaiement": 0,
  "NatureId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NatureClient/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NbJourDelaiPaiement": 0,
  "NatureId": 1234567
}
```

:::

## Supprimer une nature du client

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NatureClient/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
