# Type de salle

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les types de salle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeSalle \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeSalle",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "NomExterne": "",
      "RefExterne": ""
    }
  ]
}
```

:::

## Récupérer un type de salle avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeSalle/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeSalle/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NomExterne": "",
  "RefExterne": ""
}
```

:::

## Créer un type de salle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeSalle \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NomExterne": "texte",
  "RefExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeSalle/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomExterne": "texte",
  "RefExterne": "texte"
}
```

:::

## Modifier un type de salle

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeSalle/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NomExterne": "texte",
  "RefExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeSalle/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomExterne": "texte",
  "RefExterne": "texte"
}
```

:::

## Supprimer un type de salle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeSalle/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
