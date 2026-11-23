# Période d’un parcours

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une période d’un parcours avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ParcoursPeriode/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ParcoursPeriode/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ParcoursId": 0,
  "PeriodeId": 0,
  "AnneeScolaire": 0,
  "LibellePeriode": "",
  "Debut": null,
  "Fin": null,
  "LibellePeriodeSpecifique": "",
  "SpecialiteId": 0
}
```

:::

## Créer une période d’un parcours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ParcoursPeriode \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ParcoursId": 1234567,
  "PeriodeId": 1234567,
  "AnneeScolaire": 0,
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "LibellePeriodeSpecifique": "texte",
  "SpecialiteId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ParcoursPeriode/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ParcoursId": 1234567,
  "PeriodeId": 1234567,
  "AnneeScolaire": 0,
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "LibellePeriodeSpecifique": "texte",
  "SpecialiteId": 1234567
}
```

:::

## Modifier une période d’un parcours

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ParcoursPeriode/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ParcoursId": 1234567,
  "PeriodeId": 1234567,
  "AnneeScolaire": 0,
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "LibellePeriodeSpecifique": "texte",
  "SpecialiteId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ParcoursPeriode/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ParcoursId": 1234567,
  "PeriodeId": 1234567,
  "AnneeScolaire": 0,
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "LibellePeriodeSpecifique": "texte",
  "SpecialiteId": 1234567
}
```

:::

## Supprimer une période d’un parcours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ParcoursPeriode/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
