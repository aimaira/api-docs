# Période

## Lister les périodes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Periode \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Periode",
  "value": [
    {
      "Id": 1318,
      "Nom": "2015/2016",
      "Code": "2015/2016",
      "Debut": "2015-09-01T00:00:00+02:00",
      "Fin": "2016-08-31T00:00:00+02:00",
      "LibelleExterne": "2015/2016",
      "EnCours": false
    },
    {
      "Id": 1319,
      "Nom": "2016/2017",
      "Code": "2016/2017",
      "Debut": "2016-09-01T00:00:00+02:00",
      "Fin": "2017-08-31T00:00:00+02:00",
      "LibelleExterne": "2016/2017",
      "EnCours": false
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une période avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Periode/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Periode/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Debut": null,
  "Fin": null,
  "LibelleExterne": "",
  "EnCours": false
}
```

:::

## Créer une période

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Periode \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "LibelleExterne": "texte",
  "EnCours": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Periode/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "LibelleExterne": "texte",
  "EnCours": false
}
```

:::

## Modifier une période

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Periode/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "LibelleExterne": "texte",
  "EnCours": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Periode/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "LibelleExterne": "texte",
  "EnCours": false
}
```

:::

## Supprimer une période

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Periode/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
