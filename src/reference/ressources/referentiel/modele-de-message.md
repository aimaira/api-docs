# Modèle de message

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un modèle de message avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TemplateMessage/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TemplateMessage/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "Text": "",
  "Univers": "",
  "TypeParametre": 0,
  "Type": 0,
  "Object": "",
  "Sender": "",
  "Field": "",
  "IsHtml": false
}
```

:::

## Créer un modèle de message

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TemplateMessage \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Text": "texte",
  "Univers": "texte",
  "TypeParametre": 0,
  "Type": 0,
  "Object": "texte",
  "Sender": "texte",
  "Field": "texte",
  "IsHtml": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TemplateMessage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Text": "texte",
  "Univers": "texte",
  "TypeParametre": 0,
  "Type": 0,
  "Object": "texte",
  "Sender": "texte",
  "Field": "texte",
  "IsHtml": false
}
```

:::

## Modifier un modèle de message

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TemplateMessage/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Text": "texte",
  "Univers": "texte",
  "TypeParametre": 0,
  "Type": 0,
  "Object": "texte",
  "Sender": "texte",
  "Field": "texte",
  "IsHtml": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TemplateMessage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Text": "texte",
  "Univers": "texte",
  "TypeParametre": 0,
  "Type": 0,
  "Object": "texte",
  "Sender": "texte",
  "Field": "texte",
  "IsHtml": false
}
```

:::

## Supprimer un modèle de message

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TemplateMessage/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
