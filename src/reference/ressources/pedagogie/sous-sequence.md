# Sous-séquence

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les sous-séquences

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceSequence \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceSequence",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "SequenceId": 0,
      "SequenceFilsId": 0,
      "Obligatoire": false,
      "Globalisee": false,
      "Credits": 0
    }
  ]
}
```

:::

## Récupérer une sous-séquence avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceSequence/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceSequence/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "SequenceId": 0,
  "SequenceFilsId": 0,
  "Obligatoire": false,
  "Globalisee": false,
  "Credits": 0
}
```

:::

## Créer une sous-séquence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceSequence \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceId": 1234567,
  "SequenceFilsId": 1234567,
  "Obligatoire": false,
  "Globalisee": false,
  "Credits": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceSequence/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceId": 1234567,
  "SequenceFilsId": 1234567,
  "Obligatoire": false,
  "Globalisee": false,
  "Credits": 0
}
```

:::

## Modifier une sous-séquence

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceSequence/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceId": 1234567,
  "SequenceFilsId": 1234567,
  "Obligatoire": false,
  "Globalisee": false,
  "Credits": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceSequence/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceId": 1234567,
  "SequenceFilsId": 1234567,
  "Obligatoire": false,
  "Globalisee": false,
  "Credits": 0
}
```

:::

## Supprimer une sous-séquence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceSequence/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
