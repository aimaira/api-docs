# Adresse

## Créer une adresse

Avant de pouvoir créer votre adresse, il vous faudra l’identifiant du pays référencé.

[Lister les pays][lister-les-pays]

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Adresse \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  "Adresse1": "10 rue Pierre Gilles de Gennes",
  "Adresse2": "Bâtiment Odeon",
  "Adresse3": "",
  "Adresse4": "",
  "CodePostal": "76230",
  "Ville": "Quincampoix",
  "Cedex": "",
  "PaysId": 1155,
}' \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Adresse/$entity",
  "Id": 2410941,
  "Nom": "",
  "Code": "",
  "Adresse1": "10 rue Pierre Gilles de Gennes",
  "Adresse2": "Bâtiment Odeon",
  "Adresse3": "",
  "Adresse4": "",
  "CodePostal": "76230",
  "Ville": "Quincampoix",
  "Cedex": "",
  "PaysId": 1155,
  "DatePeremption": null
}
```

[lister-les-pays]: /reference/ressources/core/pays

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une adresse avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Adresse/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Adresse/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Adresse1": "",
  "Adresse2": "",
  "Adresse3": "",
  "Adresse4": "",
  "CodePostal": "",
  "Ville": "",
  "Cedex": "",
  "PaysId": 0,
  "DatePeremption": null
}
```

:::

## Modifier une adresse

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Adresse/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Adresse1": "texte",
  "Adresse2": "texte",
  "Adresse3": "texte",
  "Adresse4": "texte",
  "CodePostal": "texte",
  "Ville": "texte",
  "Cedex": "texte",
  "PaysId": 1234567,
  "DatePeremption": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Adresse/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Adresse1": "texte",
  "Adresse2": "texte",
  "Adresse3": "texte",
  "Adresse4": "texte",
  "CodePostal": "texte",
  "Ville": "texte",
  "Cedex": "texte",
  "PaysId": 1234567,
  "DatePeremption": "2026-09-01T00:00:00+02:00"
}
```

:::

## Supprimer une adresse

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Adresse/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
