# Type de projet

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les types de projet

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeProjet \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeProjet",
  "value": [
    {
      "Id": 1234567,
      "Code": "",
      "Libelle": "",
      "LibelleEn": "",
      "LibelleExterne": "",
      "LibelleExterneEn": ""
    }
  ]
}
```

:::

## Récupérer un type de projet avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeProjet/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeProjet/$entity",
  "Id": 1234567,
  "Code": "",
  "Libelle": "",
  "LibelleEn": "",
  "LibelleExterne": "",
  "LibelleExterneEn": ""
}
```

:::

## Créer un type de projet

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeProjet \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Code": "CODE",
  "Libelle": "texte",
  "LibelleEn": "texte",
  "LibelleExterne": "texte",
  "LibelleExterneEn": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeProjet/$entity",
  "Id": 1234567,
  "Code": "CODE",
  "Libelle": "texte",
  "LibelleEn": "texte",
  "LibelleExterne": "texte",
  "LibelleExterneEn": "texte"
}
```

:::

## Modifier un type de projet

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeProjet/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Code": "CODE",
  "Libelle": "texte",
  "LibelleEn": "texte",
  "LibelleExterne": "texte",
  "LibelleExterneEn": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeProjet/$entity",
  "Id": 1234567,
  "Code": "CODE",
  "Libelle": "texte",
  "LibelleEn": "texte",
  "LibelleExterne": "texte",
  "LibelleExterneEn": "texte"
}
```

:::

## Supprimer un type de projet

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeProjet/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
