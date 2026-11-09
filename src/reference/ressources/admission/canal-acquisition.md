# Canal d’acquisition du candidat

## Lister les canaux d’acquisition

::: code-group

``` bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CanalAcquisition \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CanalAcquisition",
  "value": [
    {
      "Id": 2216608,
      "Nom": "Site web",
      "Code": "WEB",
      "LibelleExterne": "Site web",
      "ReferenceExterne": ""
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Lister les canaux d’acquisition

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CanalAcquisition \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CanalAcquisition",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "LibelleExterne": "",
      "ReferenceExterne": ""
    }
  ]
}
```

:::

## Récupérer un canal d’acquisition avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CanalAcquisition/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CanalAcquisition/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "LibelleExterne": "",
  "ReferenceExterne": ""
}
```

:::

## Créer un canal d’acquisition

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CanalAcquisition \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CanalAcquisition/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}
```

:::

## Modifier un canal d’acquisition

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CanalAcquisition/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CanalAcquisition/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}
```

:::

## Supprimer un canal d’acquisition

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CanalAcquisition/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
