# Prestation rattachée à une entité

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les prestations rattachées aux entités

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PrestationReference \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PrestationReference",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ReferenceId": 0,
      "PrestationId": 0,
      "Automatique": false,
      "Optionnelle": false,
      "OptionnelleCochee": false,
      "DateDeReference": null,
      "LibelleReference": "",
      "DisplayLibelleReference": "",
      "DisplayLibelleReferenceSpecifique": "",
      "Compatible": false
    }
  ]
}
```

:::

## Récupérer une prestation rattachée à une entité avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PrestationReference/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PrestationReference/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ReferenceId": 0,
  "PrestationId": 0,
  "Automatique": false,
  "Optionnelle": false,
  "OptionnelleCochee": false,
  "DateDeReference": null,
  "LibelleReference": "",
  "DisplayLibelleReference": "",
  "DisplayLibelleReferenceSpecifique": "",
  "Compatible": false
}
```

:::

## Créer une prestation rattachée à une entité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PrestationReference \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ReferenceId": 1234567,
  "PrestationId": 1234567,
  "Automatique": false,
  "Optionnelle": false,
  "OptionnelleCochee": false,
  "DateDeReference": "2026-09-01T00:00:00+02:00",
  "LibelleReference": "texte",
  "DisplayLibelleReference": "texte",
  "DisplayLibelleReferenceSpecifique": "texte",
  "Compatible": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PrestationReference/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ReferenceId": 1234567,
  "PrestationId": 1234567,
  "Automatique": false,
  "Optionnelle": false,
  "OptionnelleCochee": false,
  "DateDeReference": "2026-09-01T00:00:00+02:00",
  "LibelleReference": "texte",
  "DisplayLibelleReference": "texte",
  "DisplayLibelleReferenceSpecifique": "texte",
  "Compatible": false
}
```

:::

## Modifier une prestation rattachée à une entité

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PrestationReference/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ReferenceId": 1234567,
  "PrestationId": 1234567,
  "Automatique": false,
  "Optionnelle": false,
  "OptionnelleCochee": false,
  "DateDeReference": "2026-09-01T00:00:00+02:00",
  "LibelleReference": "texte",
  "DisplayLibelleReference": "texte",
  "DisplayLibelleReferenceSpecifique": "texte",
  "Compatible": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PrestationReference/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ReferenceId": 1234567,
  "PrestationId": 1234567,
  "Automatique": false,
  "Optionnelle": false,
  "OptionnelleCochee": false,
  "DateDeReference": "2026-09-01T00:00:00+02:00",
  "LibelleReference": "texte",
  "DisplayLibelleReference": "texte",
  "DisplayLibelleReferenceSpecifique": "texte",
  "Compatible": false
}
```

:::

## Supprimer une prestation rattachée à une entité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PrestationReference/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
