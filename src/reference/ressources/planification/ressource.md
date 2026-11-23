# Ressource

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les ressources

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ressource \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ressource",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EntiteJuridiqueId": 0,
      "TypeRessourceId": 0,
      "Reference": "",
      "Capacite": 0,
      "Etage": 0,
      "LibelleExterne": "",
      "InformationComplementaireId": 0,
      "TypeSalleId": 0,
      "BatimentId": 0
    }
  ]
}
```

:::

## Récupérer une ressource avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ressource/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ressource/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "TypeRessourceId": 0,
  "Reference": "",
  "Capacite": 0,
  "Etage": 0,
  "LibelleExterne": "",
  "InformationComplementaireId": 0,
  "TypeSalleId": 0,
  "BatimentId": 0
}
```

:::

## Créer une ressource

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ressource \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "TypeRessourceId": 1234567,
  "Reference": "texte",
  "Capacite": 0,
  "Etage": 0,
  "LibelleExterne": "texte",
  "InformationComplementaireId": 1234567,
  "TypeSalleId": 1234567,
  "BatimentId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ressource/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "TypeRessourceId": 1234567,
  "Reference": "texte",
  "Capacite": 0,
  "Etage": 0,
  "LibelleExterne": "texte",
  "InformationComplementaireId": 1234567,
  "TypeSalleId": 1234567,
  "BatimentId": 1234567
}
```

:::

## Modifier une ressource

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ressource/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "TypeRessourceId": 1234567,
  "Reference": "texte",
  "Capacite": 0,
  "Etage": 0,
  "LibelleExterne": "texte",
  "InformationComplementaireId": 1234567,
  "TypeSalleId": 1234567,
  "BatimentId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ressource/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "TypeRessourceId": 1234567,
  "Reference": "texte",
  "Capacite": 0,
  "Etage": 0,
  "LibelleExterne": "texte",
  "InformationComplementaireId": 1234567,
  "TypeSalleId": 1234567,
  "BatimentId": 1234567
}
```

:::

## Supprimer une ressource

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ressource/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
