# Échéance de convention

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les échéances de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceConvention \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceConvention",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ConventionId": 0,
      "EntrepriseId": 0,
      "OPCAId": 0,
      "NbHeureTheorique": 0,
      "NbHeureReelle": 0,
      "Taux": 0,
      "Date": null,
      "NoteId": 0,
      "RefPrestationId": 0,
      "RefPaiementId": 0,
      "Compte": "",
      "CodeAnalytique": "",
      "DureeAbsence": 0,
      "TauxAbsence": 0,
      "FactureAbsence": "",
      "RefPrestationAbsenceId": 0,
      "RefPaiementAbsenceId": 0,
      "CompteAbsence": "",
      "CodeAnalytiqueAbsence": "",
      "NoteAbsenceId": 0,
      "Libelle": "",
      "LibelleExterne": "",
      "CategoriePrestationId": 0,
      "PeriodeNom": "",
      "RefEcheanceLiee": 0
    }
  ]
}
```

:::

## Récupérer une échéance de convention avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceConvention/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceConvention/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ConventionId": 0,
  "EntrepriseId": 0,
  "OPCAId": 0,
  "NbHeureTheorique": 0,
  "NbHeureReelle": 0,
  "Taux": 0,
  "Date": null,
  "NoteId": 0,
  "RefPrestationId": 0,
  "RefPaiementId": 0,
  "Compte": "",
  "CodeAnalytique": "",
  "DureeAbsence": 0,
  "TauxAbsence": 0,
  "FactureAbsence": "",
  "RefPrestationAbsenceId": 0,
  "RefPaiementAbsenceId": 0,
  "CompteAbsence": "",
  "CodeAnalytiqueAbsence": "",
  "NoteAbsenceId": 0,
  "Libelle": "",
  "LibelleExterne": "",
  "CategoriePrestationId": 0,
  "PeriodeNom": "",
  "RefEcheanceLiee": 0
}
```

:::

## Créer une échéance de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceConvention \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "EntrepriseId": 1234567,
  "OPCAId": 1234567,
  "NbHeureTheorique": 0,
  "NbHeureReelle": 0,
  "Taux": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "RefPrestationId": 1234567,
  "RefPaiementId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "DureeAbsence": 0,
  "TauxAbsence": 0,
  "FactureAbsence": "texte",
  "RefPrestationAbsenceId": 1234567,
  "RefPaiementAbsenceId": 1234567,
  "CompteAbsence": "texte",
  "CodeAnalytiqueAbsence": "texte",
  "NoteAbsenceId": 1234567,
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "RefEcheanceLiee": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "EntrepriseId": 1234567,
  "OPCAId": 1234567,
  "NbHeureTheorique": 0,
  "NbHeureReelle": 0,
  "Taux": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "RefPrestationId": 1234567,
  "RefPaiementId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "DureeAbsence": 0,
  "TauxAbsence": 0,
  "FactureAbsence": "texte",
  "RefPrestationAbsenceId": 1234567,
  "RefPaiementAbsenceId": 1234567,
  "CompteAbsence": "texte",
  "CodeAnalytiqueAbsence": "texte",
  "NoteAbsenceId": 1234567,
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "RefEcheanceLiee": 0
}
```

:::

## Modifier une échéance de convention

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceConvention/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "EntrepriseId": 1234567,
  "OPCAId": 1234567,
  "NbHeureTheorique": 0,
  "NbHeureReelle": 0,
  "Taux": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "RefPrestationId": 1234567,
  "RefPaiementId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "DureeAbsence": 0,
  "TauxAbsence": 0,
  "FactureAbsence": "texte",
  "RefPrestationAbsenceId": 1234567,
  "RefPaiementAbsenceId": 1234567,
  "CompteAbsence": "texte",
  "CodeAnalytiqueAbsence": "texte",
  "NoteAbsenceId": 1234567,
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "RefEcheanceLiee": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "EntrepriseId": 1234567,
  "OPCAId": 1234567,
  "NbHeureTheorique": 0,
  "NbHeureReelle": 0,
  "Taux": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "RefPrestationId": 1234567,
  "RefPaiementId": 1234567,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "DureeAbsence": 0,
  "TauxAbsence": 0,
  "FactureAbsence": "texte",
  "RefPrestationAbsenceId": 1234567,
  "RefPaiementAbsenceId": 1234567,
  "CompteAbsence": "texte",
  "CodeAnalytiqueAbsence": "texte",
  "NoteAbsenceId": 1234567,
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "CategoriePrestationId": 1234567,
  "PeriodeNom": "texte",
  "RefEcheanceLiee": 0
}
```

:::

## Supprimer une échéance de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceConvention/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
