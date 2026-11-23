# Barre d’admission

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une barre d’admission avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Barres/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Barres/$entity",
  "SessionId": 0,
  "EcoleId": 0,
  "Admission": 0,
  "Attente": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une barre d’admission

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Barres \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "SessionId": 1234567,
  "EcoleId": 1234567,
  "Admission": 0,
  "Attente": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Barres/$entity",
  "SessionId": 1234567,
  "EcoleId": 1234567,
  "Admission": 0,
  "Attente": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une barre d’admission

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Barres/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "SessionId": 1234567,
  "EcoleId": 1234567,
  "Admission": 0,
  "Attente": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Barres/$entity",
  "SessionId": 1234567,
  "EcoleId": 1234567,
  "Admission": 0,
  "Attente": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une barre d’admission

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Barres/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
