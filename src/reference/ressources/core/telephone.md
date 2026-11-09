# Téléphone

## Créer un téléphone

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Telephone \
  --request POST \
  --data '{  
  "Numero": "0601020304",
  "IsMobile": true
}'
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Telephone/$entity",
  "Id": 2410943,
  "Nom": "",
  "Code": "",
  "Numero": "0601020304",
  "IsMobile": true
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un téléphone avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Telephone/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Telephone/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Numero": "",
  "IsMobile": false
}
```

:::

## Modifier un téléphone

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Telephone/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Numero": "texte",
  "IsMobile": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Telephone/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Numero": "texte",
  "IsMobile": false
}
```

:::

## Supprimer un téléphone

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Telephone/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
