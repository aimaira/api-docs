# Type de concours

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un type de concours avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/TypeConcours/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#TypeConcours/$entity",
  "IdLink": 0,
  "CodeDroit": "",
  "EcoleId": 0,
  "ChoixSession": false,
  "ChoixCreneau": false,
  "ChoixHoraire": false,
  "MasquerCreneau": false,
  "MasquerOrganisation": false,
  "UrlAPI": "",
  "Delai": 0,
  "NbHeuresDelaisNotation": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un type de concours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/TypeConcours \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "IdLink": 0,
  "CodeDroit": "texte",
  "EcoleId": 1234567,
  "ChoixSession": false,
  "ChoixCreneau": false,
  "ChoixHoraire": false,
  "MasquerCreneau": false,
  "MasquerOrganisation": false,
  "UrlAPI": "texte",
  "Delai": 0,
  "NbHeuresDelaisNotation": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#TypeConcours/$entity",
  "IdLink": 0,
  "CodeDroit": "texte",
  "EcoleId": 1234567,
  "ChoixSession": false,
  "ChoixCreneau": false,
  "ChoixHoraire": false,
  "MasquerCreneau": false,
  "MasquerOrganisation": false,
  "UrlAPI": "texte",
  "Delai": 0,
  "NbHeuresDelaisNotation": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un type de concours

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/TypeConcours/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "IdLink": 0,
  "CodeDroit": "texte",
  "EcoleId": 1234567,
  "ChoixSession": false,
  "ChoixCreneau": false,
  "ChoixHoraire": false,
  "MasquerCreneau": false,
  "MasquerOrganisation": false,
  "UrlAPI": "texte",
  "Delai": 0,
  "NbHeuresDelaisNotation": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#TypeConcours/$entity",
  "IdLink": 0,
  "CodeDroit": "texte",
  "EcoleId": 1234567,
  "ChoixSession": false,
  "ChoixCreneau": false,
  "ChoixHoraire": false,
  "MasquerCreneau": false,
  "MasquerOrganisation": false,
  "UrlAPI": "texte",
  "Delai": 0,
  "NbHeuresDelaisNotation": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un type de concours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/TypeConcours/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
