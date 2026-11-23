# Jury

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un jury avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Jury/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Jury/$entity",
  "EpreuveOrganisationId": 0,
  "JureEcoleId": 0,
  "JureEntrepriseId": 0,
  "JureInviteId": 0,
  "SalleId": 0,
  "ContactVisioId": 0,
  "Matin": false,
  "Description": "",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un jury

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Jury \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveOrganisationId": 1234567,
  "JureEcoleId": 1234567,
  "JureEntrepriseId": 1234567,
  "JureInviteId": 1234567,
  "SalleId": 1234567,
  "ContactVisioId": 1234567,
  "Matin": false,
  "Description": "texte",
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Jury/$entity",
  "EpreuveOrganisationId": 1234567,
  "JureEcoleId": 1234567,
  "JureEntrepriseId": 1234567,
  "JureInviteId": 1234567,
  "SalleId": 1234567,
  "ContactVisioId": 1234567,
  "Matin": false,
  "Description": "texte",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un jury

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Jury/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveOrganisationId": 1234567,
  "JureEcoleId": 1234567,
  "JureEntrepriseId": 1234567,
  "JureInviteId": 1234567,
  "SalleId": 1234567,
  "ContactVisioId": 1234567,
  "Matin": false,
  "Description": "texte",
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Jury/$entity",
  "EpreuveOrganisationId": 1234567,
  "JureEcoleId": 1234567,
  "JureEntrepriseId": 1234567,
  "JureInviteId": 1234567,
  "SalleId": 1234567,
  "ContactVisioId": 1234567,
  "Matin": false,
  "Description": "texte",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un jury

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Jury/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
