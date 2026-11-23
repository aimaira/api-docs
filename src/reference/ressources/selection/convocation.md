# Convocation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les convocations

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Convocation \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Convocation",
  "value": [
    {
      "CandidatId": 0,
      "SessionId": 0,
      "ConcoursId": 0,
      "Date": null,
      "DateOral": null,
      "DateEnvoi": null,
      "Creneau": "",
      "CreneauOral": "",
      "Moyenne": 0,
      "ComplementOrganisation": "",
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer une convocation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Convocation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Convocation/$entity",
  "CandidatId": 0,
  "SessionId": 0,
  "ConcoursId": 0,
  "Date": null,
  "DateOral": null,
  "DateEnvoi": null,
  "Creneau": "",
  "CreneauOral": "",
  "Moyenne": 0,
  "ComplementOrganisation": "",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une convocation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Convocation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "CandidatId": 1234567,
  "SessionId": 1234567,
  "ConcoursId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DateOral": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "Creneau": "texte",
  "CreneauOral": "texte",
  "Moyenne": 0,
  "ComplementOrganisation": "texte",
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Convocation/$entity",
  "CandidatId": 1234567,
  "SessionId": 1234567,
  "ConcoursId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DateOral": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "Creneau": "texte",
  "CreneauOral": "texte",
  "Moyenne": 0,
  "ComplementOrganisation": "texte",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une convocation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Convocation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "CandidatId": 1234567,
  "SessionId": 1234567,
  "ConcoursId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DateOral": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "Creneau": "texte",
  "CreneauOral": "texte",
  "Moyenne": 0,
  "ComplementOrganisation": "texte",
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Convocation/$entity",
  "CandidatId": 1234567,
  "SessionId": 1234567,
  "ConcoursId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DateOral": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "Creneau": "texte",
  "CreneauOral": "texte",
  "Moyenne": 0,
  "ComplementOrganisation": "texte",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une convocation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Convocation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
