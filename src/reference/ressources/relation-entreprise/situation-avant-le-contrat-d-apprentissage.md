# Situation avant le contrat d’apprentissage

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les situations avant le contrat d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SituationAvantContratApprentissage \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SituationAvantContratApprentissage",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "LibelleExterne": ""
    }
  ]
}
```

:::

## Récupérer une situation avant le contrat d’apprentissage avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SituationAvantContratApprentissage/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SituationAvantContratApprentissage/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "LibelleExterne": ""
}
```

:::

## Créer une situation avant le contrat d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SituationAvantContratApprentissage \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SituationAvantContratApprentissage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte"
}
```

:::

## Modifier une situation avant le contrat d’apprentissage

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SituationAvantContratApprentissage/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SituationAvantContratApprentissage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte"
}
```

:::

## Supprimer une situation avant le contrat d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SituationAvantContratApprentissage/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
