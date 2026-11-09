# Origine

L’origine (historiquement appellée « origine du recrutement ») est une entité contenant la provenance d’une inscription.

## Lister les origines

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Origine
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Origine",
  "value": [
    {
      "Id": 1234567,
      "Nom": "Origine 1",
      "Code": "",
      "ConcoursON": true,
      "PartenaireON": false,
      "EntiteJuridiqueId": 7654321
    },
    {
      "Id": 1234568,
      "Nom": "Origine 2",
      "Code": "",
      "ConcoursON": false,
      "PartenaireON": false,
      "EntiteJuridiqueId": 87654321
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une origine avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Origine/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Origine/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ConcoursON": false,
  "PartenaireON": false,
  "EntiteJuridiqueId": 0
}
```

:::

## Créer une origine

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Origine \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConcoursON": false,
  "PartenaireON": false,
  "EntiteJuridiqueId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Origine/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConcoursON": false,
  "PartenaireON": false,
  "EntiteJuridiqueId": 1234567
}
```

:::

## Modifier une origine

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Origine/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConcoursON": false,
  "PartenaireON": false,
  "EntiteJuridiqueId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Origine/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConcoursON": false,
  "PartenaireON": false,
  "EntiteJuridiqueId": 1234567
}
```

:::

## Supprimer une origine

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Origine/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
