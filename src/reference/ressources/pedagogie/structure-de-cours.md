# Structure de cours

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une structure de cours avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/StructureCours/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#StructureCours/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "CoursId": 0,
  "Numero": "",
  "Duree": 0,
  "Commentaire": "",
  "TypeSeanceId": 0,
  "ModaliteSeanceId": 0
}
```

:::

## Créer une structure de cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/StructureCours \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "Numero": "texte",
  "Duree": 0,
  "Commentaire": "texte",
  "TypeSeanceId": 1234567,
  "ModaliteSeanceId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#StructureCours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "Numero": "texte",
  "Duree": 0,
  "Commentaire": "texte",
  "TypeSeanceId": 1234567,
  "ModaliteSeanceId": 1234567
}
```

:::

## Modifier une structure de cours

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/StructureCours/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "Numero": "texte",
  "Duree": 0,
  "Commentaire": "texte",
  "TypeSeanceId": 1234567,
  "ModaliteSeanceId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#StructureCours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "Numero": "texte",
  "Duree": 0,
  "Commentaire": "texte",
  "TypeSeanceId": 1234567,
  "ModaliteSeanceId": 1234567
}
```

:::

## Supprimer une structure de cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/StructureCours/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
