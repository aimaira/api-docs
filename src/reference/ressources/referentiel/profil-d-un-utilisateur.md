# Profil d’un utilisateur

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les profils des utilisateurs

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/UserProfil \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#UserProfil",
  "value": [
    {
      "Code": "",
      "Nom": ""
    }
  ]
}
```

:::

<!-- reference:end -->
