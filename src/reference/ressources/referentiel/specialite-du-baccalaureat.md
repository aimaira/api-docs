# Spécialité du baccalauréat

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les spécialités du baccalauréat

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SpecialiteBaccalaureat \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SpecialiteBaccalaureat",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "NomLong": ""
    }
  ]
}
```

:::

## Récupérer une spécialité du baccalauréat avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SpecialiteBaccalaureat/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SpecialiteBaccalaureat/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NomLong": ""
}
```

:::

## Créer une spécialité du baccalauréat

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SpecialiteBaccalaureat \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NomLong": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SpecialiteBaccalaureat/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomLong": "texte"
}
```

:::

## Modifier une spécialité du baccalauréat

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SpecialiteBaccalaureat/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NomLong": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SpecialiteBaccalaureat/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomLong": "texte"
}
```

:::

## Supprimer une spécialité du baccalauréat

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SpecialiteBaccalaureat/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
