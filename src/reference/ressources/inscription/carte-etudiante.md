# Carte étudiante

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les cartes étudiantes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Carte \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Carte",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EntiteJuridiqueId": 0,
      "IndividuId": 0,
      "DateCommande": null,
      "DateRetour": null,
      "DateRemise": null,
      "CSN": "",
      "NumeroISIC": "",
      "ReferenceCommande": "",
      "TemplateNom": "",
      "ReferencePorteur": 0,
      "Active": false,
      "Reference": "00000000-0000-0000-0000-000000000000"
    }
  ]
}
```

:::

## Récupérer une carte étudiante avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Carte/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Carte/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "IndividuId": 0,
  "DateCommande": null,
  "DateRetour": null,
  "DateRemise": null,
  "CSN": "",
  "NumeroISIC": "",
  "ReferenceCommande": "",
  "TemplateNom": "",
  "ReferencePorteur": 0,
  "Active": false,
  "Reference": "00000000-0000-0000-0000-000000000000"
}
```

:::

## Créer une carte étudiante

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Carte \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "IndividuId": 1234567,
  "DateCommande": "2026-09-01T00:00:00+02:00",
  "DateRetour": "2026-09-01T00:00:00+02:00",
  "DateRemise": "2026-09-01T00:00:00+02:00",
  "CSN": "texte",
  "NumeroISIC": "texte",
  "ReferenceCommande": "texte",
  "TemplateNom": "texte",
  "ReferencePorteur": 0,
  "Active": false,
  "Reference": "00000000-0000-0000-0000-000000000000"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Carte/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "IndividuId": 1234567,
  "DateCommande": "2026-09-01T00:00:00+02:00",
  "DateRetour": "2026-09-01T00:00:00+02:00",
  "DateRemise": "2026-09-01T00:00:00+02:00",
  "CSN": "texte",
  "NumeroISIC": "texte",
  "ReferenceCommande": "texte",
  "TemplateNom": "texte",
  "ReferencePorteur": 0,
  "Active": false,
  "Reference": "00000000-0000-0000-0000-000000000000"
}
```

:::

## Modifier une carte étudiante

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Carte/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "IndividuId": 1234567,
  "DateCommande": "2026-09-01T00:00:00+02:00",
  "DateRetour": "2026-09-01T00:00:00+02:00",
  "DateRemise": "2026-09-01T00:00:00+02:00",
  "CSN": "texte",
  "NumeroISIC": "texte",
  "ReferenceCommande": "texte",
  "TemplateNom": "texte",
  "ReferencePorteur": 0,
  "Active": false,
  "Reference": "00000000-0000-0000-0000-000000000000"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Carte/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "IndividuId": 1234567,
  "DateCommande": "2026-09-01T00:00:00+02:00",
  "DateRetour": "2026-09-01T00:00:00+02:00",
  "DateRemise": "2026-09-01T00:00:00+02:00",
  "CSN": "texte",
  "NumeroISIC": "texte",
  "ReferenceCommande": "texte",
  "TemplateNom": "texte",
  "ReferencePorteur": 0,
  "Active": false,
  "Reference": "00000000-0000-0000-0000-000000000000"
}
```

:::

## Supprimer une carte étudiante

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Carte/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
