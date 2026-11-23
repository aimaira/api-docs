# Échéance de facturation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les échéances de facturation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturation \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceFacturation",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EcheancierId": 0,
      "NbHeureTheorique": 0,
      "NbHeureReelle": 0,
      "Date": null,
      "NoteId": 0,
      "Compte": "",
      "CodeAnalytique": "",
      "Libelle": "",
      "LibelleExterne": "",
      "CategoriePrestationId": 0,
      "PeriodeNom": ""
    }
  ]
}
```

:::

## Récupérer une échéance de facturation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceFacturation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EcheancierId": 0,
  "NbHeureTheorique": 0,
  "NbHeureReelle": 0,
  "Date": null,
  "NoteId": 0,
  "Compte": "",
  "CodeAnalytique": "",
  "Libelle": "",
  "LibelleExterne": "",
  "CategoriePrestationId": 0,
  "PeriodeNom": ""
}
```

:::

## Créer une échéance de facturation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EcheancierId": 1234567,
  "NbHeureTheorique": 0,
  "NbHeureReelle": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceFacturation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EcheancierId": 1234567,
  "NbHeureTheorique": 0,
  "NbHeureReelle": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte"
}
```

:::

## Modifier une échéance de facturation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EcheancierId": 1234567,
  "NbHeureTheorique": 0,
  "NbHeureReelle": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceFacturation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EcheancierId": 1234567,
  "NbHeureTheorique": 0,
  "NbHeureReelle": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte"
}
```

:::

## Supprimer une échéance de facturation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
