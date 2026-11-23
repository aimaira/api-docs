# Participation à un événement

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une participation à un événement avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ParticipationEvenement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ParticipationEvenement/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EvenementCRMId": 0,
  "CompteId": 0,
  "Confirme": false
}
```

:::

## Créer une participation à un événement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ParticipationEvenement \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EvenementCRMId": 1234567,
  "CompteId": 1234567,
  "Confirme": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ParticipationEvenement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EvenementCRMId": 1234567,
  "CompteId": 1234567,
  "Confirme": false
}
```

:::

## Modifier une participation à un événement

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ParticipationEvenement/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EvenementCRMId": 1234567,
  "CompteId": 1234567,
  "Confirme": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ParticipationEvenement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EvenementCRMId": 1234567,
  "CompteId": 1234567,
  "Confirme": false
}
```

:::

## Supprimer une participation à un événement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ParticipationEvenement/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
