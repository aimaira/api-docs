# SMS

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Créer un SMS

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Sms \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "NumSMS": 0,
  "From": "texte",
  "To": "texte",
  "Message": "texte",
  "Statut": 0,
  "Retry": 0,
  "Reponse": "texte",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "DateCreation": "2026-09-01T00:00:00+02:00",
  "DateReponse": "2026-09-01T00:00:00+02:00",
  "Provenance": "texte",
  "Utilisateur": "texte",
  "NumProvider": 0,
  "MessageId": "texte",
  "DLR": 0,
  "Cost": 0,
  "Tag": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Sms/$entity",
  "NumSMS": 0,
  "From": "texte",
  "To": "texte",
  "Message": "texte",
  "Statut": 0,
  "Retry": 0,
  "Reponse": "texte",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "DateCreation": "2026-09-01T00:00:00+02:00",
  "DateReponse": "2026-09-01T00:00:00+02:00",
  "Provenance": "texte",
  "Utilisateur": "texte",
  "NumProvider": 0,
  "MessageId": "texte",
  "DLR": 0,
  "Cost": 0,
  "Tag": "texte"
}
```

:::

<!-- reference:end -->
