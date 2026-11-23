# Type de paiement

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un type de paiement avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypePaiement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypePaiement/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "Compte": "",
  "Credit": false,
  "ParDefaut": false,
  "Prelevement": false,
  "JA": "",
  "RegroupementContrePartie": false,
  "LibelleExterne": ""
}
```

:::

## Créer un type de paiement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypePaiement \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Compte": "texte",
  "Credit": false,
  "ParDefaut": false,
  "Prelevement": false,
  "JA": "texte",
  "RegroupementContrePartie": false,
  "LibelleExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypePaiement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Compte": "texte",
  "Credit": false,
  "ParDefaut": false,
  "Prelevement": false,
  "JA": "texte",
  "RegroupementContrePartie": false,
  "LibelleExterne": "texte"
}
```

:::

## Modifier un type de paiement

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypePaiement/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Compte": "texte",
  "Credit": false,
  "ParDefaut": false,
  "Prelevement": false,
  "JA": "texte",
  "RegroupementContrePartie": false,
  "LibelleExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypePaiement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Compte": "texte",
  "Credit": false,
  "ParDefaut": false,
  "Prelevement": false,
  "JA": "texte",
  "RegroupementContrePartie": false,
  "LibelleExterne": "texte"
}
```

:::

## Supprimer un type de paiement

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypePaiement/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
