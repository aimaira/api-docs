# Message

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un message avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Message/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#Message/$entity",
  "Statut": "EnCoursCreation",
  "MessageTypeId": 0,
  "Retry": 0,
  "Provenance": "",
  "Destination": "",
  "FromAddress": "",
  "FromName": "",
  "ReplyToAddress": "",
  "Titre": "",
  "IsHtml": false,
  "Contenu": "",
  "DateCreation": null,
  "DateEnvoi": null,
  "ParentId": 0,
  "ExternalMessageId": "",
  "Source": "",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un message

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Message \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Statut": "EnCoursCreation",
  "MessageTypeId": 1234567,
  "Retry": 0,
  "Provenance": "texte",
  "Destination": "texte",
  "FromAddress": "texte",
  "FromName": "texte",
  "ReplyToAddress": "texte",
  "Titre": "texte",
  "IsHtml": false,
  "Contenu": "texte",
  "DateCreation": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "ParentId": 1234567,
  "ExternalMessageId": "texte",
  "Source": "texte",
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#Message/$entity",
  "Statut": "EnCoursCreation",
  "MessageTypeId": 1234567,
  "Retry": 0,
  "Provenance": "texte",
  "Destination": "texte",
  "FromAddress": "texte",
  "FromName": "texte",
  "ReplyToAddress": "texte",
  "Titre": "texte",
  "IsHtml": false,
  "Contenu": "texte",
  "DateCreation": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "ParentId": 1234567,
  "ExternalMessageId": "texte",
  "Source": "texte",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un message

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Message/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Statut": "EnCoursCreation",
  "MessageTypeId": 1234567,
  "Retry": 0,
  "Provenance": "texte",
  "Destination": "texte",
  "FromAddress": "texte",
  "FromName": "texte",
  "ReplyToAddress": "texte",
  "Titre": "texte",
  "IsHtml": false,
  "Contenu": "texte",
  "DateCreation": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "ParentId": 1234567,
  "ExternalMessageId": "texte",
  "Source": "texte",
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#Message/$entity",
  "Statut": "EnCoursCreation",
  "MessageTypeId": 1234567,
  "Retry": 0,
  "Provenance": "texte",
  "Destination": "texte",
  "FromAddress": "texte",
  "FromName": "texte",
  "ReplyToAddress": "texte",
  "Titre": "texte",
  "IsHtml": false,
  "Contenu": "texte",
  "DateCreation": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "ParentId": 1234567,
  "ExternalMessageId": "texte",
  "Source": "texte",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un message

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Message/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
