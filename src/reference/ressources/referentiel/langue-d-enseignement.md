# Langue d’enseignement

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les langues d’enseignement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LangueEnseignement \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#LangueEnseignement",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "NomLg": ""
    }
  ]
}
```

:::

## Récupérer une langue d’enseignement avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LangueEnseignement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#LangueEnseignement/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NomLg": ""
}
```

:::

## Créer une langue d’enseignement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LangueEnseignement \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NomLg": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#LangueEnseignement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomLg": "texte"
}
```

:::

## Modifier une langue d’enseignement

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LangueEnseignement/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NomLg": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#LangueEnseignement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomLg": "texte"
}
```

:::

## Supprimer une langue d’enseignement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LangueEnseignement/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
