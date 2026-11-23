# Créneau

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les créneaux

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Creneau \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Creneau",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "Debut": null,
      "Ouvert": false,
      "EntiteJuridiqueId": 0,
      "PeriodeId": 0
    }
  ]
}
```

:::

## Récupérer un créneau avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Creneau/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Creneau/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Debut": null,
  "Ouvert": false,
  "EntiteJuridiqueId": 0,
  "PeriodeId": 0
}
```

:::

## Créer un créneau

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Creneau \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Ouvert": false,
  "EntiteJuridiqueId": 1234567,
  "PeriodeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Creneau/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Ouvert": false,
  "EntiteJuridiqueId": 1234567,
  "PeriodeId": 1234567
}
```

:::

## Modifier un créneau

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Creneau/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Ouvert": false,
  "EntiteJuridiqueId": 1234567,
  "PeriodeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Creneau/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Ouvert": false,
  "EntiteJuridiqueId": 1234567,
  "PeriodeId": 1234567
}
```

:::

## Supprimer un créneau

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Creneau/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
