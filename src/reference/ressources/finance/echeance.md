# Échéance

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une échéance avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Echeance/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Echeance/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "MontantHT": 0,
  "Date": null,
  "CreditON": false,
  "Compte": "",
  "CodeAnalytique": "",
  "ModalitePourPrestationId": 0,
  "LibellePeriode": "",
  "Debut": null,
  "Fin": null
}
```

:::

## Créer une échéance

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Echeance \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "MontantHT": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "ModalitePourPrestationId": 1234567,
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Echeance/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "MontantHT": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "ModalitePourPrestationId": 1234567,
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00"
}
```

:::

## Modifier une échéance

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Echeance/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "MontantHT": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "ModalitePourPrestationId": 1234567,
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Echeance/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "MontantHT": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "ModalitePourPrestationId": 1234567,
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00"
}
```

:::

## Supprimer une échéance

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Echeance/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
