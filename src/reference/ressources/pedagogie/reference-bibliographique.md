# Référence bibliographique

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une référence bibliographique avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Bibliographie/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Bibliographie/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "CoursId": 0,
  "TypeReferenceBibliographiqueId": 0
}
```

:::

## Créer une référence bibliographique

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Bibliographie \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "TypeReferenceBibliographiqueId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Bibliographie/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "TypeReferenceBibliographiqueId": 1234567
}
```

:::

## Modifier une référence bibliographique

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Bibliographie/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "TypeReferenceBibliographiqueId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Bibliographie/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CoursId": 1234567,
  "TypeReferenceBibliographiqueId": 1234567
}
```

:::

## Supprimer une référence bibliographique

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Bibliographie/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
