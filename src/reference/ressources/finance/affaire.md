# Affaire

Une affaire représente le dossier financier lié à une autre entité. À ce jour, une `Affaire` peut être liée soit à un 
[`Dossier`][dossier], soit à une [`Inscription`][inscription].

## Récupérer une affaire avec son id

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Affaire/2239761
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Affaire/$entity",
  "Id": 2239761,
  "Nom": "ARTHURO",
  "Code": "C00001",
  "EntiteJuridiqueId": 2215505,
  "Date": null,
  "CommentaireId": 0,
  "Contentieux": false
}
```

:::

[dossier]: /reference/ressources/admission/dossier
[inscription]: /reference/ressources/inscription/inscription

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Créer une affaire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Affaire \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "CommentaireId": 1234567,
  "Contentieux": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Affaire/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "CommentaireId": 1234567,
  "Contentieux": false
}
```

:::

## Modifier une affaire

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Affaire/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "CommentaireId": 1234567,
  "Contentieux": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Affaire/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "CommentaireId": 1234567,
  "Contentieux": false
}
```

:::

## Supprimer une affaire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Affaire/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
