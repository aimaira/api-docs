# Inscription à un groupe

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une inscription à un groupe avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionGroupe/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionGroupe/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ApprenantId": 0,
  "GroupeId": 0,
  "Herite": false,
  "GroupeFilsId": 0
}
```

:::

## Créer une inscription à un groupe

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionGroupe \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "GroupeId": 1234567,
  "Herite": false,
  "GroupeFilsId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionGroupe/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "GroupeId": 1234567,
  "Herite": false,
  "GroupeFilsId": 1234567
}
```

:::

## Modifier une inscription à un groupe

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionGroupe/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "GroupeId": 1234567,
  "Herite": false,
  "GroupeFilsId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionGroupe/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "GroupeId": 1234567,
  "Herite": false,
  "GroupeFilsId": 1234567
}
```

:::

## Supprimer une inscription à un groupe

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionGroupe/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
