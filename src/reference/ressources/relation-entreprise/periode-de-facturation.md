# Période de facturation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une période de facturation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PeriodeFacturation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PeriodeFacturation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ConventionId": 0,
  "LibellePeriode": "",
  "NbHeureFormation": 0,
  "NbHeureEnseignement": 0,
  "CoutFormation": 0
}
```

:::

## Créer une période de facturation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PeriodeFacturation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "LibellePeriode": "texte",
  "NbHeureFormation": 0,
  "NbHeureEnseignement": 0,
  "CoutFormation": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PeriodeFacturation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "LibellePeriode": "texte",
  "NbHeureFormation": 0,
  "NbHeureEnseignement": 0,
  "CoutFormation": 0
}
```

:::

## Modifier une période de facturation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PeriodeFacturation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "LibellePeriode": "texte",
  "NbHeureFormation": 0,
  "NbHeureEnseignement": 0,
  "CoutFormation": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PeriodeFacturation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "LibellePeriode": "texte",
  "NbHeureFormation": 0,
  "NbHeureEnseignement": 0,
  "CoutFormation": 0
}
```

:::

## Supprimer une période de facturation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PeriodeFacturation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
