# Affaire

Une affaire représente le dossier financier lié à une autre entité. À ce jour, une `Affaire` peut être liée soit à un 
[`Dossier`][dossier], soit à une [`Inscription`][inscription].

## Récupérer une affaire avec son id

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Affaire/2239761
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Affaire/$entity",
  "Id": 2239761,
  "Nom": "ARTHURO",
  "Code": "C00001",
  "EntiteJuridiqueId": 2215505,
  "Date": null,
  "CommentaireId": 0,
  "Contentieux": false
}
```

:::

[dossier]: /reference/ressources/admission/dossier
[inscription]: /reference/ressources/inscription/inscription
