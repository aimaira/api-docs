# Diplôme préparé en apprentissage

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les diplômes préparés en apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomeApprentissage \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomeApprentissage",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "LibelleExterne": "",
      "Niveau": 0
    }
  ]
}
```

:::

## Récupérer un diplôme préparé en apprentissage avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomeApprentissage/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomeApprentissage/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "LibelleExterne": "",
  "Niveau": 0
}
```

:::

## Créer un diplôme préparé en apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomeApprentissage \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "Niveau": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomeApprentissage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "Niveau": 0
}
```

:::

## Modifier un diplôme préparé en apprentissage

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomeApprentissage/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "Niveau": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomeApprentissage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "Niveau": 0
}
```

:::

<!-- reference:end -->
