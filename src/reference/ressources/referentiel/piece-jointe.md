# Pièce jointe

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une pièce jointe avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Attachment/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#Attachment/$entity",
  "MessageId": 0,
  "Fichier": "00000000-0000-0000-0000-000000000000",
  "Path": "",
  "Libelle": "",
  "Contenu": null,
  "LegacyNumMail": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une pièce jointe

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Attachment \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "MessageId": 1234567,
  "Fichier": "00000000-0000-0000-0000-000000000000",
  "Path": "texte",
  "Libelle": "texte",
  "Contenu": {},
  "LegacyNumMail": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#Attachment/$entity",
  "MessageId": 1234567,
  "Fichier": "00000000-0000-0000-0000-000000000000",
  "Path": "texte",
  "Libelle": "texte",
  "Contenu": {},
  "LegacyNumMail": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une pièce jointe

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Attachment/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "MessageId": 1234567,
  "Fichier": "00000000-0000-0000-0000-000000000000",
  "Path": "texte",
  "Libelle": "texte",
  "Contenu": {},
  "LegacyNumMail": 0,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/messages/$metadata#Attachment/$entity",
  "MessageId": 1234567,
  "Fichier": "00000000-0000-0000-0000-000000000000",
  "Path": "texte",
  "Libelle": "texte",
  "Contenu": {},
  "LegacyNumMail": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une pièce jointe

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/messages/Attachment/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
