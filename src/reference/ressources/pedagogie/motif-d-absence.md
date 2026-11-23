# Motif d’absence

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les motifs d’absence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Motif \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Motif",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EntiteJuridiqueId": 0,
      "LibelleExterne": "",
      "Excuse": false,
      "Exclusion": false,
      "Depart": false,
      "Retard": false
    }
  ]
}
```

:::

## Récupérer un motif d’absence avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Motif/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Motif/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "LibelleExterne": "",
  "Excuse": false,
  "Exclusion": false,
  "Depart": false,
  "Retard": false
}
```

:::

## Créer un motif d’absence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Motif \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "LibelleExterne": "texte",
  "Excuse": false,
  "Exclusion": false,
  "Depart": false,
  "Retard": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Motif/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "LibelleExterne": "texte",
  "Excuse": false,
  "Exclusion": false,
  "Depart": false,
  "Retard": false
}
```

:::

## Modifier un motif d’absence

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Motif/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "LibelleExterne": "texte",
  "Excuse": false,
  "Exclusion": false,
  "Depart": false,
  "Retard": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Motif/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "LibelleExterne": "texte",
  "Excuse": false,
  "Exclusion": false,
  "Depart": false,
  "Retard": false
}
```

:::

## Supprimer un motif d’absence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Motif/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
