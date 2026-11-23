# E-mail sortant

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un e-mail sortant avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Message/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Message/$entity",
  "NumMail": 0,
  "From": "",
  "FromName": "",
  "To": "",
  "CC": "",
  "Body": "",
  "Statut": 0,
  "Retry": 0,
  "Reponse": "",
  "Subject": "",
  "DateEnvoi": null,
  "DateCreation": null,
  "DateReponse": null,
  "DateDelivrance": null,
  "DateOuverture": null,
  "Provenance": "",
  "Utilisateur": "",
  "TypeContent": 0,
  "NumCampaign": 0,
  "MessageID": ""
}
```

:::

## Créer un e-mail sortant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Message \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "NumMail": 0,
  "From": "texte",
  "FromName": "texte",
  "To": "texte",
  "CC": "texte",
  "Body": "texte",
  "Statut": 0,
  "Retry": 0,
  "Reponse": "texte",
  "Subject": "texte",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "DateCreation": "2026-09-01T00:00:00+02:00",
  "DateReponse": "2026-09-01T00:00:00+02:00",
  "DateDelivrance": "2026-09-01T00:00:00+02:00",
  "DateOuverture": "2026-09-01T00:00:00+02:00",
  "Provenance": "texte",
  "Utilisateur": "texte",
  "TypeContent": 0,
  "NumCampaign": 0,
  "MessageID": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Message/$entity",
  "NumMail": 0,
  "From": "texte",
  "FromName": "texte",
  "To": "texte",
  "CC": "texte",
  "Body": "texte",
  "Statut": 0,
  "Retry": 0,
  "Reponse": "texte",
  "Subject": "texte",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "DateCreation": "2026-09-01T00:00:00+02:00",
  "DateReponse": "2026-09-01T00:00:00+02:00",
  "DateDelivrance": "2026-09-01T00:00:00+02:00",
  "DateOuverture": "2026-09-01T00:00:00+02:00",
  "Provenance": "texte",
  "Utilisateur": "texte",
  "TypeContent": 0,
  "NumCampaign": 0,
  "MessageID": "texte"
}
```

:::

<!-- reference:end -->
