# Type de convention d’un programme

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les types de convention des programmes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ProgrammeTypeConvention \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ProgrammeTypeConvention",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ProgrammeId": 0,
      "TypeConventionId": 0,
      "EntiteJuridiqueId": 0,
      "TauxTva": 0
    }
  ]
}
```

:::

## Récupérer un type de convention d’un programme avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ProgrammeTypeConvention/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ProgrammeTypeConvention/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ProgrammeId": 0,
  "TypeConventionId": 0,
  "EntiteJuridiqueId": 0,
  "TauxTva": 0
}
```

:::

## Créer un type de convention d’un programme

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ProgrammeTypeConvention \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "TypeConventionId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "TauxTva": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ProgrammeTypeConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "TypeConventionId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "TauxTva": 0
}
```

:::

## Modifier un type de convention d’un programme

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ProgrammeTypeConvention/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "TypeConventionId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "TauxTva": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ProgrammeTypeConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "TypeConventionId": 1234567,
  "EntiteJuridiqueId": 1234567,
  "TauxTva": 0
}
```

:::

## Supprimer un type de convention d’un programme

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ProgrammeTypeConvention/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
