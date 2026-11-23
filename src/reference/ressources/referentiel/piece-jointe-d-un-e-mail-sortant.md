# Pièce jointe d’un e-mail sortant

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une pièce jointe d’un e-mail sortant avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Attachement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Attachement/$entity",
  "NumAttachement": 0,
  "NumMail": 0,
  "Contenu": null,
  "Nom": ""
}
```

:::

<!-- reference:end -->
