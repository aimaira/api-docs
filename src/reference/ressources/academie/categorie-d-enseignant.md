# Catégorie d’enseignant

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une catégorie d’enseignant avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeEnseignant/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeEnseignant/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Pieces": ""
}
```

:::

## Créer une catégorie d’enseignant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeEnseignant \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Pieces": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeEnseignant/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Pieces": "texte"
}
```

:::

## Modifier une catégorie d’enseignant

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeEnseignant/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Pieces": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeEnseignant/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Pieces": "texte"
}
```

:::

## Supprimer une catégorie d’enseignant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeEnseignant/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
