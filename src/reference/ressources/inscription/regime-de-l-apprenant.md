# Régime de l’apprenant

## Lister les régimes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RegimeInscription
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#RegimeInscription",
  "value": [
    {
      "Id": 544,
      "Nom": "Etudiant",
      "Code": "10",
      "LibelleExterne": "",
      "CodeSISE": "10"
    },
    {
      "Id": 56647,
      "Nom": "FC hors contrat pro",
      "Code": "20",
      "LibelleExterne": "",
      "CodeSISE": "20"
    },
    {
      "Id": 56648,
      "Nom": "Contrat pro",
      "Code": "22",
      "LibelleExterne": "",
      "CodeSISE": "22"
    },
    {
      "Id": 345751,
      "Nom": "Apprenti",
      "Code": "12",
      "LibelleExterne": "",
      "CodeSISE": "12"
    },
    {
      "Id": 2196756,
      "Nom": "En attente de contrat",
      "Code": "En",
      "LibelleExterne": "",
      "CodeSISE": "En"
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un régime de l’apprenant avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RegimeInscription/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#RegimeInscription/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "LibelleExterne": "",
  "CodeSISE": "",
  "CodeAnalytique": ""
}
```

:::

## Créer un régime de l’apprenant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RegimeInscription \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "CodeSISE": "texte",
  "CodeAnalytique": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#RegimeInscription/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "CodeSISE": "texte",
  "CodeAnalytique": "texte"
}
```

:::

## Modifier un régime de l’apprenant

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RegimeInscription/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "CodeSISE": "texte",
  "CodeAnalytique": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#RegimeInscription/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "CodeSISE": "texte",
  "CodeAnalytique": "texte"
}
```

:::

## Supprimer un régime de l’apprenant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RegimeInscription/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
