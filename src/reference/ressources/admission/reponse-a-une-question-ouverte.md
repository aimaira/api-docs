# Réponse à une question ouverte

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une réponse à une question ouverte avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Reponse/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Reponse/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "DossierId": 0,
  "QuestionOuverteId": 0,
  "NoteId": 0
}
```

:::

## Créer une réponse à une question ouverte

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Reponse \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "QuestionOuverteId": 1234567,
  "NoteId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Reponse/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "QuestionOuverteId": 1234567,
  "NoteId": 1234567
}
```

:::

## Modifier une réponse à une question ouverte

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Reponse/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "QuestionOuverteId": 1234567,
  "NoteId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Reponse/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "QuestionOuverteId": 1234567,
  "NoteId": 1234567
}
```

:::

## Supprimer une réponse à une question ouverte

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Reponse/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
