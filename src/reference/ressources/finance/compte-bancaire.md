# Compte bancaire

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un compte bancaire avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Banque/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Banque/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "Compte": "",
  "BIC": "",
  "Titulaire": "",
  "NomBanque": "",
  "ICS": "",
  "EstPrevelement": false,
  "EstRemboursement": false
}
```

:::

<!-- reference:end -->
