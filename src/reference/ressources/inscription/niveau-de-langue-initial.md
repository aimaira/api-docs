# Niveau de langue initial

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un niveau de langue initial avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauLangueInitial/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauLangueInitial/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "InscriptionId": 0,
  "LangueEnseignementId": 0,
  "NiveauEcrit": "",
  "NiveauOral": ""
}
```

:::

## Créer un niveau de langue initial

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauLangueInitial \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionId": 1234567,
  "LangueEnseignementId": 1234567,
  "NiveauEcrit": "texte",
  "NiveauOral": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauLangueInitial/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionId": 1234567,
  "LangueEnseignementId": 1234567,
  "NiveauEcrit": "texte",
  "NiveauOral": "texte"
}
```

:::

## Modifier un niveau de langue initial

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauLangueInitial/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionId": 1234567,
  "LangueEnseignementId": 1234567,
  "NiveauEcrit": "texte",
  "NiveauOral": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauLangueInitial/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionId": 1234567,
  "LangueEnseignementId": 1234567,
  "NiveauEcrit": "texte",
  "NiveauOral": "texte"
}
```

:::

## Supprimer un niveau de langue initial

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauLangueInitial/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
