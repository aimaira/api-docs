# Concours

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les concours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Concours \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Concours",
  "value": [
    {
      "LibelleExterne": "",
      "Annee": "",
      "TypeConcoursId": 0,
      "Archive": false,
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer un concours avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Concours/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Concours/$entity",
  "LibelleExterne": "",
  "Annee": "",
  "TypeConcoursId": 0,
  "Archive": false,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un concours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Concours \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "LibelleExterne": "texte",
  "Annee": "texte",
  "TypeConcoursId": 1234567,
  "Archive": false,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Concours/$entity",
  "LibelleExterne": "texte",
  "Annee": "texte",
  "TypeConcoursId": 1234567,
  "Archive": false,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un concours

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Concours/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "LibelleExterne": "texte",
  "Annee": "texte",
  "TypeConcoursId": 1234567,
  "Archive": false,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Concours/$entity",
  "LibelleExterne": "texte",
  "Annee": "texte",
  "TypeConcoursId": 1234567,
  "Archive": false,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un concours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Concours/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
