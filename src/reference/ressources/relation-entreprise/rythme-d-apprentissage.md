# Rythme d’apprentissage

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les rythmes d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RythmeApprentissage \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#RythmeApprentissage",
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

## Récupérer un rythme d’apprentissage avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RythmeApprentissage/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#RythmeApprentissage/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "LibelleExterne": ""
}
```

:::

## Créer un rythme d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RythmeApprentissage \
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#RythmeApprentissage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte"
}
```

:::

## Modifier un rythme d’apprentissage

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RythmeApprentissage/1234567 \
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#RythmeApprentissage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte"
}
```

:::

## Supprimer un rythme d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/RythmeApprentissage/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
