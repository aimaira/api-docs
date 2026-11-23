# Catégorie d’un enseignant

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une catégorie d’un enseignant avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EnseignantType/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EnseignantType/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EnseignantId": 0,
  "TypeEnseignantId": 0
}
```

:::

## Créer une catégorie d’un enseignant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EnseignantType \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "TypeEnseignantId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EnseignantType/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "TypeEnseignantId": 1234567
}
```

:::

## Modifier une catégorie d’un enseignant

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EnseignantType/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "TypeEnseignantId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EnseignantType/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "TypeEnseignantId": 1234567
}
```

:::

## Supprimer une catégorie d’un enseignant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EnseignantType/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
