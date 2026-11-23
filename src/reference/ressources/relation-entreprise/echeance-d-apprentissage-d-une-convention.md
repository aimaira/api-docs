# Échéance d’apprentissage d’une convention

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les échéances d’apprentissage des conventions

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceApprentissageConvention \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceApprentissageConvention",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ConventionId": 0,
      "EntrepriseId": 0,
      "OPCAId": 0,
      "Montant": 0,
      "Pourcentage": 0,
      "Libelle": "",
      "NumeroFacture": "",
      "Lettrage": "",
      "Date": null,
      "NoteId": 0,
      "RefPrestationId": 0,
      "RefPaiementId": 0,
      "Compte": "",
      "CodeAnalytique": "",
      "LibelleExterne": "",
      "CategoriePrestationId": 0,
      "PeriodeNom": "",
      "Source": "Aimaira",
      "Codification": "",
      "Numero": 0,
      "Nature": "None",
      "RefEcheanceLiee": 0
    }
  ]
}
```

:::

## Récupérer une échéance d’apprentissage d’une convention avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceApprentissageConvention/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceApprentissageConvention/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ConventionId": 0,
  "EntrepriseId": 0,
  "OPCAId": 0,
  "Montant": 0,
  "Pourcentage": 0,
  "Libelle": "",
  "NumeroFacture": "",
  "Lettrage": "",
  "Date": null,
  "NoteId": 0,
  "RefPrestationId": 0,
  "RefPaiementId": 0,
  "Compte": "",
  "CodeAnalytique": "",
  "LibelleExterne": "",
  "CategoriePrestationId": 0,
  "PeriodeNom": "",
  "Source": "Aimaira",
  "Codification": "",
  "Numero": 0,
  "Nature": "None",
  "RefEcheanceLiee": 0
}
```

:::

## Créer une échéance d’apprentissage d’une convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceApprentissageConvention \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "EntrepriseId": 1234567,
  "OPCAId": 1234567,
  "Montant": 0,
  "Pourcentage": 0,
  "Libelle": "texte",
  "NumeroFacture": "texte",
  "Lettrage": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "RefPrestationId": 1234567,
  "RefPaiementId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "Source": "Aimaira",
  "Codification": "texte",
  "Numero": 0,
  "Nature": "None",
  "RefEcheanceLiee": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceApprentissageConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "EntrepriseId": 1234567,
  "OPCAId": 1234567,
  "Montant": 0,
  "Pourcentage": 0,
  "Libelle": "texte",
  "NumeroFacture": "texte",
  "Lettrage": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "RefPrestationId": 1234567,
  "RefPaiementId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "Source": "Aimaira",
  "Codification": "texte",
  "Numero": 0,
  "Nature": "None",
  "RefEcheanceLiee": 0
}
```

:::

## Modifier une échéance d’apprentissage d’une convention

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceApprentissageConvention/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "EntrepriseId": 1234567,
  "OPCAId": 1234567,
  "Montant": 0,
  "Pourcentage": 0,
  "Libelle": "texte",
  "NumeroFacture": "texte",
  "Lettrage": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "RefPrestationId": 1234567,
  "RefPaiementId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "Source": "Aimaira",
  "Codification": "texte",
  "Numero": 0,
  "Nature": "None",
  "RefEcheanceLiee": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceApprentissageConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "EntrepriseId": 1234567,
  "OPCAId": 1234567,
  "Montant": 0,
  "Pourcentage": 0,
  "Libelle": "texte",
  "NumeroFacture": "texte",
  "Lettrage": "texte",
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "RefPrestationId": 1234567,
  "RefPaiementId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "Source": "Aimaira",
  "Codification": "texte",
  "Numero": 0,
  "Nature": "None",
  "RefEcheanceLiee": 0
}
```

:::

## Supprimer une échéance d’apprentissage d’une convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceApprentissageConvention/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
