# Détail de prestation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un détail de prestation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DetailPrestation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DetailPrestation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "MontantHT": 0,
  "Date": null,
  "CreditON": false,
  "Compte": "",
  "CodeAnalytique": "",
  "PrestationId": 0,
  "PeriodeId": 0
}
```

:::

## Créer un détail de prestation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DetailPrestation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "MontantHT": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "PrestationId": 1234567,
  "PeriodeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DetailPrestation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "MontantHT": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "PrestationId": 1234567,
  "PeriodeId": 1234567
}
```

:::

## Modifier un détail de prestation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DetailPrestation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "MontantHT": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "PrestationId": 1234567,
  "PeriodeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DetailPrestation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "MontantHT": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "PrestationId": 1234567,
  "PeriodeId": 1234567
}
```

:::

## Supprimer un détail de prestation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DetailPrestation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
