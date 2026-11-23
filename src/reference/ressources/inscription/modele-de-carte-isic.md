# Modèle de carte ISIC

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les modèles de carte ISIC

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TemplateISIC \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TemplateISIC",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EntiteJuridiqueId": 0,
      "Field": "",
      "TypeCarte": 0,
      "IsiPortalId": 0
    }
  ]
}
```

:::

## Récupérer un modèle de carte ISIC avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TemplateISIC/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TemplateISIC/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "Field": "",
  "TypeCarte": 0,
  "IsiPortalId": 0
}
```

:::

## Créer un modèle de carte ISIC

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TemplateISIC \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Field": "texte",
  "TypeCarte": 0,
  "IsiPortalId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TemplateISIC/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Field": "texte",
  "TypeCarte": 0,
  "IsiPortalId": 1234567
}
```

:::

## Modifier un modèle de carte ISIC

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TemplateISIC/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Field": "texte",
  "TypeCarte": 0,
  "IsiPortalId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TemplateISIC/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Field": "texte",
  "TypeCarte": 0,
  "IsiPortalId": 1234567
}
```

:::

## Supprimer un modèle de carte ISIC

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TemplateISIC/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
