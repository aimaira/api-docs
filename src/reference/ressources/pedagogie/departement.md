# Département

## Lister les départements

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Departement \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Departement",
  "value": [
    {
      "Id": 3206864,
      "Nom": "fr",
      "Code": "PAR",
      "EntiteJuridiqueId": 2215651,
      "CodeDroit": "PAR",
      "NomLg": "fr",
      "Campus": null
    },
    {
      "Id": 3280313,
      "Nom": "fr",
      "Code": "MAR",
      "EntiteJuridiqueId": 2215683,
      "CodeDroit": "MAR",
      "NomLg": "fr",
      "Campus": null
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un département avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Departement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Departement/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "CodeDroit": "",
  "NomLg": "",
  "Campus": ""
}
```

:::

## Créer un département

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Departement \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "CodeDroit": "texte",
  "NomLg": "texte",
  "Campus": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Departement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "CodeDroit": "texte",
  "NomLg": "texte",
  "Campus": "texte"
}
```

:::

## Modifier un département

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Departement/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "CodeDroit": "texte",
  "NomLg": "texte",
  "Campus": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Departement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "CodeDroit": "texte",
  "NomLg": "texte",
  "Campus": "texte"
}
```

:::

## Supprimer un département

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Departement/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
