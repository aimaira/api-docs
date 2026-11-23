# Décision du jury

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une décision du jury avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DecisionJury/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DecisionJury/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NumeroOrdre": 0,
  "LibelleExterne": ""
}
```

:::

## Créer une décision du jury

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DecisionJury \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NumeroOrdre": 0,
  "LibelleExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DecisionJury/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NumeroOrdre": 0,
  "LibelleExterne": "texte"
}
```

:::

## Modifier une décision du jury

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DecisionJury/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NumeroOrdre": 0,
  "LibelleExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DecisionJury/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NumeroOrdre": 0,
  "LibelleExterne": "texte"
}
```

:::

## Supprimer une décision du jury

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DecisionJury/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
