# Destinataire

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un destinataire avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Recipient/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#Recipient/$entity",
  "MessageId": 0,
  "Type": "None",
  "IndividuId": 0,
  "Adresse": "",
  "Numero": "",
  "DateDelivrance": null,
  "DateOuverture": null,
  "ExternalMessageId": "",
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un destinataire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Recipient \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "MessageId": 1234567,
  "Type": "None",
  "IndividuId": 1234567,
  "Adresse": "texte",
  "Numero": "texte",
  "DateDelivrance": "2026-09-01T00:00:00+02:00",
  "DateOuverture": "2026-09-01T00:00:00+02:00",
  "ExternalMessageId": "texte",
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#Recipient/$entity",
  "MessageId": 1234567,
  "Type": "None",
  "IndividuId": 1234567,
  "Adresse": "texte",
  "Numero": "texte",
  "DateDelivrance": "2026-09-01T00:00:00+02:00",
  "DateOuverture": "2026-09-01T00:00:00+02:00",
  "ExternalMessageId": "texte",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un destinataire

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Recipient/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "MessageId": 1234567,
  "Type": "None",
  "IndividuId": 1234567,
  "Adresse": "texte",
  "Numero": "texte",
  "DateDelivrance": "2026-09-01T00:00:00+02:00",
  "DateOuverture": "2026-09-01T00:00:00+02:00",
  "ExternalMessageId": "texte",
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#Recipient/$entity",
  "MessageId": 1234567,
  "Type": "None",
  "IndividuId": 1234567,
  "Adresse": "texte",
  "Numero": "texte",
  "DateDelivrance": "2026-09-01T00:00:00+02:00",
  "DateOuverture": "2026-09-01T00:00:00+02:00",
  "ExternalMessageId": "texte",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un destinataire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Recipient/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
