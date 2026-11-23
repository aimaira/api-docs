# Algorithme de code des enseignants

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un algorithme de code des enseignants avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AlgoCodeEnseignant/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AlgoCodeEnseignant/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un algorithme de code des enseignants

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AlgoCodeEnseignant \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AlgoCodeEnseignant/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un algorithme de code des enseignants

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AlgoCodeEnseignant/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AlgoCodeEnseignant/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un algorithme de code des enseignants

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AlgoCodeEnseignant/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
