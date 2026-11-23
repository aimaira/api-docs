# Échéance de facturation d’apprentissage

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les échéances de facturation d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturationApprentissage \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceFacturationApprentissage",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EcheancierId": 0,
      "Libelle": "",
      "Pourcentage": 0,
      "Montant": 0,
      "Date": null,
      "Compte": "",
      "CodeAnalytique": "",
      "LibelleExterne": "",
      "CategoriePrestationId": 0,
      "PeriodeNom": "",
      "IsEntreprise": false
    }
  ]
}
```

:::

## Récupérer une échéance de facturation d’apprentissage avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturationApprentissage/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceFacturationApprentissage/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EcheancierId": 0,
  "Libelle": "",
  "Pourcentage": 0,
  "Montant": 0,
  "Date": null,
  "Compte": "",
  "CodeAnalytique": "",
  "LibelleExterne": "",
  "CategoriePrestationId": 0,
  "PeriodeNom": "",
  "IsEntreprise": false
}
```

:::

## Créer une échéance de facturation d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturationApprentissage \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EcheancierId": 1234567,
  "Libelle": "texte",
  "Pourcentage": 0,
  "Montant": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "IsEntreprise": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceFacturationApprentissage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EcheancierId": 1234567,
  "Libelle": "texte",
  "Pourcentage": 0,
  "Montant": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "IsEntreprise": false
}
```

:::

## Modifier une échéance de facturation d’apprentissage

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturationApprentissage/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EcheancierId": 1234567,
  "Libelle": "texte",
  "Pourcentage": 0,
  "Montant": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "IsEntreprise": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceFacturationApprentissage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EcheancierId": 1234567,
  "Libelle": "texte",
  "Pourcentage": 0,
  "Montant": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "IsEntreprise": false
}
```

:::

## Supprimer une échéance de facturation d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturationApprentissage/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
