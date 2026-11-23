# Ligne de commande de cartes

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une ligne de commande de cartes avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CommandeCarteLigne/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CommandeCarteLigne/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "CommandeId": 0,
  "IndividuId": 0,
  "ReferencePorteur": 0,
  "CarteId": 0,
  "ValiditeCarteId": 0,
  "DateRetour": null
}
```

:::

## Créer une ligne de commande de cartes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CommandeCarteLigne \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CommandeId": 1234567,
  "IndividuId": 1234567,
  "ReferencePorteur": 0,
  "CarteId": 1234567,
  "ValiditeCarteId": 1234567,
  "DateRetour": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CommandeCarteLigne/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CommandeId": 1234567,
  "IndividuId": 1234567,
  "ReferencePorteur": 0,
  "CarteId": 1234567,
  "ValiditeCarteId": 1234567,
  "DateRetour": "2026-09-01T00:00:00+02:00"
}
```

:::

## Modifier une ligne de commande de cartes

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CommandeCarteLigne/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "CommandeId": 1234567,
  "IndividuId": 1234567,
  "ReferencePorteur": 0,
  "CarteId": 1234567,
  "ValiditeCarteId": 1234567,
  "DateRetour": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CommandeCarteLigne/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "CommandeId": 1234567,
  "IndividuId": 1234567,
  "ReferencePorteur": 0,
  "CarteId": 1234567,
  "ValiditeCarteId": 1234567,
  "DateRetour": "2026-09-01T00:00:00+02:00"
}
```

:::

## Supprimer une ligne de commande de cartes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CommandeCarteLigne/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
