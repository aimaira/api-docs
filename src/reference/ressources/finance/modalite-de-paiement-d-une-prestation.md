# Modalité de paiement d’une prestation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une modalité de paiement d’une prestation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ModalitePourPrestation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ModalitePourPrestation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "PrestationId": 0,
  "ModalitePaiementId": 0,
  "TypePaiementId": 0,
  "Total": 0,
  "TotalRemisesFrais": 0,
  "Acompte": 0
}
```

:::

## Créer une modalité de paiement d’une prestation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ModalitePourPrestation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "PrestationId": 1234567,
  "ModalitePaiementId": 1234567,
  "TypePaiementId": 1234567,
  "Total": 0,
  "TotalRemisesFrais": 0,
  "Acompte": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ModalitePourPrestation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "PrestationId": 1234567,
  "ModalitePaiementId": 1234567,
  "TypePaiementId": 1234567,
  "Total": 0,
  "TotalRemisesFrais": 0,
  "Acompte": 0
}
```

:::

## Modifier une modalité de paiement d’une prestation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ModalitePourPrestation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "PrestationId": 1234567,
  "ModalitePaiementId": 1234567,
  "TypePaiementId": 1234567,
  "Total": 0,
  "TotalRemisesFrais": 0,
  "Acompte": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ModalitePourPrestation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "PrestationId": 1234567,
  "ModalitePaiementId": 1234567,
  "TypePaiementId": 1234567,
  "Total": 0,
  "TotalRemisesFrais": 0,
  "Acompte": 0
}
```

:::

## Supprimer une modalité de paiement d’une prestation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ModalitePourPrestation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
