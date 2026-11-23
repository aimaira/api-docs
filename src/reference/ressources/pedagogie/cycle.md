# Cycle

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les cycles

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cycle \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Cycle",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EntiteJuridiqueId": 0,
      "CodeDroit": "",
      "NomLg": "",
      "Campus": ""
    }
  ]
}
```

:::

## Récupérer un cycle avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cycle/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Cycle/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "CodeDroit": "",
  "NomLg": "",
  "Campus": ""
}
```

:::

## Créer un cycle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cycle \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "CodeDroit": "texte",
  "NomLg": "texte",
  "Campus": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Cycle/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "CodeDroit": "texte",
  "NomLg": "texte",
  "Campus": "texte"
}
```

:::

## Modifier un cycle

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cycle/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "CodeDroit": "texte",
  "NomLg": "texte",
  "Campus": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Cycle/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "CodeDroit": "texte",
  "NomLg": "texte",
  "Campus": "texte"
}
```

:::

## Supprimer un cycle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Cycle/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
