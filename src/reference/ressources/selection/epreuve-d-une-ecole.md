# Épreuve d’une école

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les épreuves des écoles

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveEcole \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#EpreuveEcole",
  "value": [
    {
      "EpreuveId": 0,
      "EcoleId": 0,
      "TypeConcoursId": 0,
      "Coefficient": 0,
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer une épreuve d’une école avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveEcole/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#EpreuveEcole/$entity",
  "EpreuveId": 0,
  "EcoleId": 0,
  "TypeConcoursId": 0,
  "Coefficient": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une épreuve d’une école

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveEcole \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveId": 1234567,
  "EcoleId": 1234567,
  "TypeConcoursId": 1234567,
  "Coefficient": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#EpreuveEcole/$entity",
  "EpreuveId": 1234567,
  "EcoleId": 1234567,
  "TypeConcoursId": 1234567,
  "Coefficient": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une épreuve d’une école

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveEcole/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveId": 1234567,
  "EcoleId": 1234567,
  "TypeConcoursId": 1234567,
  "Coefficient": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#EpreuveEcole/$entity",
  "EpreuveId": 1234567,
  "EcoleId": 1234567,
  "TypeConcoursId": 1234567,
  "Coefficient": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une épreuve d’une école

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveEcole/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
