# Module

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les modules

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Module \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Module",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ProgrammeId": 0
    }
  ]
}
```

:::

## Récupérer un module avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Module/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Module/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ProgrammeId": 0
}
```

:::

## Créer un module

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Module \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Module/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567
}
```

:::

## Modifier un module

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Module/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Module/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567
}
```

:::

## Supprimer un module

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Module/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
