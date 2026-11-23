# École

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les écoles

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Ecole \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Ecole",
  "value": [
    {
      "Acronyme": "",
      "Siret": "",
      "AdresseId": 0,
      "MailId": 0,
      "TelephoneId": 0,
      "FaxId": 0,
      "IdLink": 0,
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer une école avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Ecole/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Ecole/$entity",
  "Acronyme": "",
  "Siret": "",
  "AdresseId": 0,
  "MailId": 0,
  "TelephoneId": 0,
  "FaxId": 0,
  "IdLink": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une école

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Ecole \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Acronyme": "texte",
  "Siret": "texte",
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "FaxId": 1234567,
  "IdLink": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Ecole/$entity",
  "Acronyme": "texte",
  "Siret": "texte",
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "FaxId": 1234567,
  "IdLink": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une école

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Ecole/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Acronyme": "texte",
  "Siret": "texte",
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "FaxId": 1234567,
  "IdLink": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Ecole/$entity",
  "Acronyme": "texte",
  "Siret": "texte",
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "FaxId": 1234567,
  "IdLink": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une école

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Ecole/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
