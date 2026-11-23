# Bâtiment

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les bâtiments

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Batiment \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Batiment",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "AdresseId": 0,
      "SiteId": 0,
      "EntiteJuridiqueId": 0,
      "NomExterne": "",
      "Latitude": 0,
      "Longitude": 0,
      "ReferenceExterne": ""
    }
  ]
}
```

:::

## Récupérer un bâtiment avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Batiment/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Batiment/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "AdresseId": 0,
  "SiteId": 0,
  "EntiteJuridiqueId": 0,
  "NomExterne": "",
  "Latitude": 0,
  "Longitude": 0,
  "ReferenceExterne": ""
}
```

:::

## Créer un bâtiment

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Batiment \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "AdresseId": 1234567,
  "SiteId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "NomExterne": "texte",
  "Latitude": 0,
  "Longitude": 0,
  "ReferenceExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Batiment/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "AdresseId": 1234567,
  "SiteId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "NomExterne": "texte",
  "Latitude": 0,
  "Longitude": 0,
  "ReferenceExterne": "texte"
}
```

:::

## Modifier un bâtiment

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Batiment/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "AdresseId": 1234567,
  "SiteId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "NomExterne": "texte",
  "Latitude": 0,
  "Longitude": 0,
  "ReferenceExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Batiment/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "AdresseId": 1234567,
  "SiteId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "NomExterne": "texte",
  "Latitude": 0,
  "Longitude": 0,
  "ReferenceExterne": "texte"
}
```

:::

## Supprimer un bâtiment

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Batiment/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
