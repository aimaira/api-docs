# Groupe d’une séance

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un groupe d’une séance avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SeanceGroupe/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SeanceGroupe/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "SeanceId": 0,
  "GroupeId": 0
}
```

:::

## Créer un groupe d’une séance

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SeanceGroupe \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "SeanceId": 1234567,
  "GroupeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SeanceGroupe/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "SeanceId": 1234567,
  "GroupeId": 1234567
}
```

:::

## Modifier un groupe d’une séance

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SeanceGroupe/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "SeanceId": 1234567,
  "GroupeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SeanceGroupe/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "SeanceId": 1234567,
  "GroupeId": 1234567
}
```

:::

## Supprimer un groupe d’une séance

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SeanceGroupe/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
