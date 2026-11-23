# Journée d’épreuves

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les journées d’épreuves

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/OrganisationEpreuve \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#OrganisationEpreuve",
  "value": [
    {
      "TypeId": 0,
      "Creneau": "",
      "SessionId": 0,
      "EcoleId": 0,
      "Date": null,
      "DebutChoix": null,
      "FinChoix": null,
      "DelaiChangementChoix": 0,
      "CollecteVoeuxOuverteJureTypeUn": false,
      "CollecteVoeuxOuverteJureTypeDeux": false,
      "CollecteVoeuxOuverteJureTypeTrois": false,
      "Journee": false,
      "NbCandidats": 0,
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer une journée d’épreuves avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/OrganisationEpreuve/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#OrganisationEpreuve/$entity",
  "TypeId": 0,
  "Creneau": "",
  "SessionId": 0,
  "EcoleId": 0,
  "Date": null,
  "DebutChoix": null,
  "FinChoix": null,
  "DelaiChangementChoix": 0,
  "CollecteVoeuxOuverteJureTypeUn": false,
  "CollecteVoeuxOuverteJureTypeDeux": false,
  "CollecteVoeuxOuverteJureTypeTrois": false,
  "Journee": false,
  "NbCandidats": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une journée d’épreuves

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/OrganisationEpreuve \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "TypeId": 1234567,
  "Creneau": "texte",
  "SessionId": 1234567,
  "EcoleId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DebutChoix": "2026-09-01T00:00:00+02:00",
  "FinChoix": "2026-09-01T00:00:00+02:00",
  "DelaiChangementChoix": 0,
  "CollecteVoeuxOuverteJureTypeUn": false,
  "CollecteVoeuxOuverteJureTypeDeux": false,
  "CollecteVoeuxOuverteJureTypeTrois": false,
  "Journee": false,
  "NbCandidats": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#OrganisationEpreuve/$entity",
  "TypeId": 1234567,
  "Creneau": "texte",
  "SessionId": 1234567,
  "EcoleId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DebutChoix": "2026-09-01T00:00:00+02:00",
  "FinChoix": "2026-09-01T00:00:00+02:00",
  "DelaiChangementChoix": 0,
  "CollecteVoeuxOuverteJureTypeUn": false,
  "CollecteVoeuxOuverteJureTypeDeux": false,
  "CollecteVoeuxOuverteJureTypeTrois": false,
  "Journee": false,
  "NbCandidats": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une journée d’épreuves

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/OrganisationEpreuve/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "TypeId": 1234567,
  "Creneau": "texte",
  "SessionId": 1234567,
  "EcoleId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DebutChoix": "2026-09-01T00:00:00+02:00",
  "FinChoix": "2026-09-01T00:00:00+02:00",
  "DelaiChangementChoix": 0,
  "CollecteVoeuxOuverteJureTypeUn": false,
  "CollecteVoeuxOuverteJureTypeDeux": false,
  "CollecteVoeuxOuverteJureTypeTrois": false,
  "Journee": false,
  "NbCandidats": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#OrganisationEpreuve/$entity",
  "TypeId": 1234567,
  "Creneau": "texte",
  "SessionId": 1234567,
  "EcoleId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DebutChoix": "2026-09-01T00:00:00+02:00",
  "FinChoix": "2026-09-01T00:00:00+02:00",
  "DelaiChangementChoix": 0,
  "CollecteVoeuxOuverteJureTypeUn": false,
  "CollecteVoeuxOuverteJureTypeDeux": false,
  "CollecteVoeuxOuverteJureTypeTrois": false,
  "Journee": false,
  "NbCandidats": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une journée d’épreuves

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/OrganisationEpreuve/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
