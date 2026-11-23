# Autre candidature

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une autre candidature avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AutreCandidature/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AutreCandidature/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "DossierId": 0,
  "AdresseId": 0,
  "Diplome": "",
  "Etablissement": ""
}
```

:::

## Créer une autre candidature

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AutreCandidature \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "AdresseId": 1234567,
  "Diplome": "texte",
  "Etablissement": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AutreCandidature/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "AdresseId": 1234567,
  "Diplome": "texte",
  "Etablissement": "texte"
}
```

:::

## Modifier une autre candidature

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AutreCandidature/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "AdresseId": 1234567,
  "Diplome": "texte",
  "Etablissement": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AutreCandidature/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "AdresseId": 1234567,
  "Diplome": "texte",
  "Etablissement": "texte"
}
```

:::

## Supprimer une autre candidature

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AutreCandidature/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
