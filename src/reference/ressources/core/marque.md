# Marque

::: tip Note

Pour des raisons historiques, les points d’entrée de l’entité `Marque` sont nommés `Ecole`.

:::

## Lister les marques

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ecole \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ecole",
  "value": [
    {
      "Id": 2215112,
      "Nom": "ALPT",
      "Code": "ALP",
      "CodeSysteme": "",
      "LibelleExterne": "ALPT",
      "CodeAnalytique": "ALP0000000000",
      "CodeDroit": "",
      "Parametres": null
    },
    {
      "Id": 2215530,
      "Nom": "URNL",
      "Code": "URN",
      "CodeSysteme": "",
      "LibelleExterne": "URNL",
      "CodeAnalytique": "URN0000000000",
      "CodeDroit": "",
      "Parametres": null
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une marque avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ecole/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ecole/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "CodeSysteme": "",
  "LibelleExterne": "",
  "CodeAnalytique": "",
  "CodeDroit": "",
  "Parametres": ""
}
```

:::

## Créer une marque

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ecole \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CodeSysteme": "texte",
  "LibelleExterne": "texte",
  "CodeAnalytique": "texte",
  "CodeDroit": "texte",
  "Parametres": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ecole/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CodeSysteme": "texte",
  "LibelleExterne": "texte",
  "CodeAnalytique": "texte",
  "CodeDroit": "texte",
  "Parametres": "texte"
}
```

:::

## Modifier une marque

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ecole/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CodeSysteme": "texte",
  "LibelleExterne": "texte",
  "CodeAnalytique": "texte",
  "CodeDroit": "texte",
  "Parametres": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Ecole/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CodeSysteme": "texte",
  "LibelleExterne": "texte",
  "CodeAnalytique": "texte",
  "CodeDroit": "texte",
  "Parametres": "texte"
}
```

:::

## Supprimer une marque

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Ecole/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
