# Diplôme préparé

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les diplômes préparés

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomePrepare \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomePrepare",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EntiteJuridiqueId": 0,
      "NomLong": "",
      "EnseignementSup": false,
      "CGE": false
    }
  ]
}
```

:::

## Récupérer un diplôme préparé avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomePrepare/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomePrepare/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "NomLong": "",
  "EnseignementSup": false,
  "CGE": false
}
```

:::

## Créer un diplôme préparé

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomePrepare \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "NomLong": "texte",
  "EnseignementSup": false,
  "CGE": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomePrepare/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "NomLong": "texte",
  "EnseignementSup": false,
  "CGE": false
}
```

:::

## Modifier un diplôme préparé

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomePrepare/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "NomLong": "texte",
  "EnseignementSup": false,
  "CGE": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomePrepare/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "NomLong": "texte",
  "EnseignementSup": false,
  "CGE": false
}
```

:::

## Supprimer un diplôme préparé

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomePrepare/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
