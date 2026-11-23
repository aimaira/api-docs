# Épreuve d’un juré

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une épreuve d’un juré avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveJure/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#EpreuveJure/$entity",
  "EpreuveId": 0,
  "JureId": 0,
  "NbrMinimumVoeux": 0,
  "NbrMaximumVoeux": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une épreuve d’un juré

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveJure \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveId": 1234567,
  "JureId": 1234567,
  "NbrMinimumVoeux": 0,
  "NbrMaximumVoeux": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#EpreuveJure/$entity",
  "EpreuveId": 1234567,
  "JureId": 1234567,
  "NbrMinimumVoeux": 0,
  "NbrMaximumVoeux": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une épreuve d’un juré

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveJure/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveId": 1234567,
  "JureId": 1234567,
  "NbrMinimumVoeux": 0,
  "NbrMaximumVoeux": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#EpreuveJure/$entity",
  "EpreuveId": 1234567,
  "JureId": 1234567,
  "NbrMinimumVoeux": 0,
  "NbrMaximumVoeux": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une épreuve d’un juré

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveJure/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
