# Type de convention

## Lister les types de convention

::: code-group


```bash [cURL]
curl https://myapi.aimaira.net.GraphV1/TypeConvention \
  -u 'nomdutilisateur:motdepasse'
````

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeConvention",
  "value": [
    {
      "Id": 334222,
      "Nom": "Convention de stage",
      "Code": "STG",
      "AvecSignatureEnLigne": true,
      "RegimeId": 544
    },
    {
      "Id": 334223,
      "Nom": "Contrat de professionnalisation",
      "Code": "PRO",
      "AvecSignatureEnLigne": true,
      "RegimeId": 56648
    },
    {
      "Id": 334224,
      "Nom": "Contrat d'apprentissage",
      "Code": "APP",
      "AvecSignatureEnLigne": true,
      "RegimeId": 345751
    },
    {
      "Id": 2123155,
      "Nom": "Convention de stage alterné",
      "Code": "STA",
      "AvecSignatureEnLigne": true,
      "RegimeId": 544
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un type de convention avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeConvention/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeConvention/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "AvecSignatureEnLigne": false,
  "RegimeId": 0
}
```

:::

## Créer un type de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeConvention \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "AvecSignatureEnLigne": false,
  "RegimeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "AvecSignatureEnLigne": false,
  "RegimeId": 1234567
}
```

:::

## Modifier un type de convention

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeConvention/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "AvecSignatureEnLigne": false,
  "RegimeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "AvecSignatureEnLigne": false,
  "RegimeId": 1234567
}
```

:::

## Supprimer un type de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeConvention/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
