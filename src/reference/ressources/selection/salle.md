# Salle

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une salle avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Salle/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Salle/$entity",
  "Etage": "",
  "NbPLace": 0,
  "IdSysteme": 0,
  "EcoleId": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une salle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Salle \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Etage": "texte",
  "NbPLace": 0,
  "IdSysteme": 0,
  "EcoleId": 1234567,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Salle/$entity",
  "Etage": "texte",
  "NbPLace": 0,
  "IdSysteme": 0,
  "EcoleId": 1234567,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une salle

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Salle/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Etage": "texte",
  "NbPLace": 0,
  "IdSysteme": 0,
  "EcoleId": 1234567,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Salle/$entity",
  "Etage": "texte",
  "NbPLace": 0,
  "IdSysteme": 0,
  "EcoleId": 1234567,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une salle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Salle/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
