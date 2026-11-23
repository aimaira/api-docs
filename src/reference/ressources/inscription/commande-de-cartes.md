# Commande de cartes

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les commandes de cartes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CommandeCarte \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CommandeCarte",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EntiteJuridiqueId": 0,
      "DateCommande": null,
      "DateRetourIsic": null,
      "DateEnvoiIsic": null,
      "Status": 0,
      "Validite": "",
      "ReferenceCommande": "",
      "TemplateNom": "",
      "EmailDemandeur": "",
      "TypeCommandeId": 0,
      "Retry": 0,
      "IsicStatus": 0
    }
  ]
}
```

:::

## Récupérer une commande de cartes avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CommandeCarte/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CommandeCarte/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "DateCommande": null,
  "DateRetourIsic": null,
  "DateEnvoiIsic": null,
  "Status": 0,
  "Validite": "",
  "ReferenceCommande": "",
  "TemplateNom": "",
  "EmailDemandeur": "",
  "TypeCommandeId": 0,
  "Retry": 0,
  "IsicStatus": 0
}
```

:::

## Créer une commande de cartes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CommandeCarte \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "DateCommande": "2026-09-01T00:00:00+02:00",
  "DateRetourIsic": "2026-09-01T00:00:00+02:00",
  "DateEnvoiIsic": "2026-09-01T00:00:00+02:00",
  "Status": 0,
  "Validite": "texte",
  "ReferenceCommande": "texte",
  "TemplateNom": "texte",
  "EmailDemandeur": "texte",
  "TypeCommandeId": 1234567,
  "Retry": 0,
  "IsicStatus": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CommandeCarte/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "DateCommande": "2026-09-01T00:00:00+02:00",
  "DateRetourIsic": "2026-09-01T00:00:00+02:00",
  "DateEnvoiIsic": "2026-09-01T00:00:00+02:00",
  "Status": 0,
  "Validite": "texte",
  "ReferenceCommande": "texte",
  "TemplateNom": "texte",
  "EmailDemandeur": "texte",
  "TypeCommandeId": 1234567,
  "Retry": 0,
  "IsicStatus": 0
}
```

:::

## Modifier une commande de cartes

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CommandeCarte/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "DateCommande": "2026-09-01T00:00:00+02:00",
  "DateRetourIsic": "2026-09-01T00:00:00+02:00",
  "DateEnvoiIsic": "2026-09-01T00:00:00+02:00",
  "Status": 0,
  "Validite": "texte",
  "ReferenceCommande": "texte",
  "TemplateNom": "texte",
  "EmailDemandeur": "texte",
  "TypeCommandeId": 1234567,
  "Retry": 0,
  "IsicStatus": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CommandeCarte/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "DateCommande": "2026-09-01T00:00:00+02:00",
  "DateRetourIsic": "2026-09-01T00:00:00+02:00",
  "DateEnvoiIsic": "2026-09-01T00:00:00+02:00",
  "Status": 0,
  "Validite": "texte",
  "ReferenceCommande": "texte",
  "TemplateNom": "texte",
  "EmailDemandeur": "texte",
  "TypeCommandeId": 1234567,
  "Retry": 0,
  "IsicStatus": 0
}
```

:::

## Supprimer une commande de cartes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CommandeCarte/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
