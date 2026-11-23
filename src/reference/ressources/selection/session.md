# Session

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les sessions

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Session \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Session",
  "value": [
    {
      "LibelleExterne": "",
      "ConcoursId": 0,
      "DateDebut": null,
      "DateFin": null,
      "IdLink": 0,
      "DateJury": null,
      "DateLimDosLP": null,
      "DateLimDosLA": null,
      "DateAdmLA": null,
      "DateLimNotesBac": null,
      "DebutChoix": null,
      "FinChoix": null,
      "DelaiChangementChoix": 0,
      "CollecteVoeuxOuverteJureTypeUn": false,
      "CollecteVoeuxOuverteJureTypeDeux": false,
      "CollecteVoeuxOuverteJureTypeTrois": false,
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer une session avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Session/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Session/$entity",
  "LibelleExterne": "",
  "ConcoursId": 0,
  "DateDebut": null,
  "DateFin": null,
  "IdLink": 0,
  "DateJury": null,
  "DateLimDosLP": null,
  "DateLimDosLA": null,
  "DateAdmLA": null,
  "DateLimNotesBac": null,
  "DebutChoix": null,
  "FinChoix": null,
  "DelaiChangementChoix": 0,
  "CollecteVoeuxOuverteJureTypeUn": false,
  "CollecteVoeuxOuverteJureTypeDeux": false,
  "CollecteVoeuxOuverteJureTypeTrois": false,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une session

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Session \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "LibelleExterne": "texte",
  "ConcoursId": 1234567,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "IdLink": 0,
  "DateJury": "2026-09-01T00:00:00+02:00",
  "DateLimDosLP": "2026-09-01T00:00:00+02:00",
  "DateLimDosLA": "2026-09-01T00:00:00+02:00",
  "DateAdmLA": "2026-09-01T00:00:00+02:00",
  "DateLimNotesBac": "2026-09-01T00:00:00+02:00",
  "DebutChoix": "2026-09-01T00:00:00+02:00",
  "FinChoix": "2026-09-01T00:00:00+02:00",
  "DelaiChangementChoix": 0,
  "CollecteVoeuxOuverteJureTypeUn": false,
  "CollecteVoeuxOuverteJureTypeDeux": false,
  "CollecteVoeuxOuverteJureTypeTrois": false,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Session/$entity",
  "LibelleExterne": "texte",
  "ConcoursId": 1234567,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "IdLink": 0,
  "DateJury": "2026-09-01T00:00:00+02:00",
  "DateLimDosLP": "2026-09-01T00:00:00+02:00",
  "DateLimDosLA": "2026-09-01T00:00:00+02:00",
  "DateAdmLA": "2026-09-01T00:00:00+02:00",
  "DateLimNotesBac": "2026-09-01T00:00:00+02:00",
  "DebutChoix": "2026-09-01T00:00:00+02:00",
  "FinChoix": "2026-09-01T00:00:00+02:00",
  "DelaiChangementChoix": 0,
  "CollecteVoeuxOuverteJureTypeUn": false,
  "CollecteVoeuxOuverteJureTypeDeux": false,
  "CollecteVoeuxOuverteJureTypeTrois": false,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une session

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Session/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "LibelleExterne": "texte",
  "ConcoursId": 1234567,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "IdLink": 0,
  "DateJury": "2026-09-01T00:00:00+02:00",
  "DateLimDosLP": "2026-09-01T00:00:00+02:00",
  "DateLimDosLA": "2026-09-01T00:00:00+02:00",
  "DateAdmLA": "2026-09-01T00:00:00+02:00",
  "DateLimNotesBac": "2026-09-01T00:00:00+02:00",
  "DebutChoix": "2026-09-01T00:00:00+02:00",
  "FinChoix": "2026-09-01T00:00:00+02:00",
  "DelaiChangementChoix": 0,
  "CollecteVoeuxOuverteJureTypeUn": false,
  "CollecteVoeuxOuverteJureTypeDeux": false,
  "CollecteVoeuxOuverteJureTypeTrois": false,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Session/$entity",
  "LibelleExterne": "texte",
  "ConcoursId": 1234567,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "IdLink": 0,
  "DateJury": "2026-09-01T00:00:00+02:00",
  "DateLimDosLP": "2026-09-01T00:00:00+02:00",
  "DateLimDosLA": "2026-09-01T00:00:00+02:00",
  "DateAdmLA": "2026-09-01T00:00:00+02:00",
  "DateLimNotesBac": "2026-09-01T00:00:00+02:00",
  "DebutChoix": "2026-09-01T00:00:00+02:00",
  "FinChoix": "2026-09-01T00:00:00+02:00",
  "DelaiChangementChoix": 0,
  "CollecteVoeuxOuverteJureTypeUn": false,
  "CollecteVoeuxOuverteJureTypeDeux": false,
  "CollecteVoeuxOuverteJureTypeTrois": false,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une session

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Session/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
