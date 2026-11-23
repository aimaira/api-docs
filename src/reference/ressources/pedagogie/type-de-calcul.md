# Type de calcul

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les types de calcul

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeCalcul \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeCalcul",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EntiteJuridiqueId": 0,
      "Libelle": "",
      "LibelleExterne": "",
      "DebutExclusion": 0,
      "FinExclusion": 0,
      "PasArrondi": 0,
      "SeuilValidation": 0,
      "ExcuseParExamen": false,
      "ValidationManuelle": false,
      "SurRattrapage": false,
      "NoteMaxRattrapage": false,
      "EFExcusableSansPlafondRattrapage": false,
      "ValidationSurDispense": false,
      "RattrapageSurExamenFinal": false,
      "NoteRattrapageRetenu": 0,
      "PeutEtreDispenseSurEvaluation": false,
      "PeutEtreExcuseSurEvaluation": false,
      "PeutEtreExcuseSurExamenFinal": false,
      "PlafonnementMoyenneCours": false,
      "NePasPlafonnerSiAbsExc": false,
      "PlafonnementNoteEvaluation": false,
      "NotePlafondNoteEvaluation": 0,
      "NoteAPrendreEnCompteSiRattrapageEvaluation": 0,
      "NeutraliserCoursAbsenceExcuseeSurEF": false
    }
  ]
}
```

:::

## Récupérer un type de calcul avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeCalcul/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeCalcul/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "Libelle": "",
  "LibelleExterne": "",
  "DebutExclusion": 0,
  "FinExclusion": 0,
  "PasArrondi": 0,
  "SeuilValidation": 0,
  "ExcuseParExamen": false,
  "ValidationManuelle": false,
  "SurRattrapage": false,
  "NoteMaxRattrapage": false,
  "EFExcusableSansPlafondRattrapage": false,
  "ValidationSurDispense": false,
  "RattrapageSurExamenFinal": false,
  "NoteRattrapageRetenu": 0,
  "PeutEtreDispenseSurEvaluation": false,
  "PeutEtreExcuseSurEvaluation": false,
  "PeutEtreExcuseSurExamenFinal": false,
  "PlafonnementMoyenneCours": false,
  "NePasPlafonnerSiAbsExc": false,
  "PlafonnementNoteEvaluation": false,
  "NotePlafondNoteEvaluation": 0,
  "NoteAPrendreEnCompteSiRattrapageEvaluation": 0,
  "NeutraliserCoursAbsenceExcuseeSurEF": false
}
```

:::

## Créer un type de calcul

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeCalcul \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "DebutExclusion": 0,
  "FinExclusion": 0,
  "PasArrondi": 0,
  "SeuilValidation": 0,
  "ExcuseParExamen": false,
  "ValidationManuelle": false,
  "SurRattrapage": false,
  "NoteMaxRattrapage": false,
  "EFExcusableSansPlafondRattrapage": false,
  "ValidationSurDispense": false,
  "RattrapageSurExamenFinal": false,
  "NoteRattrapageRetenu": 0,
  "PeutEtreDispenseSurEvaluation": false,
  "PeutEtreExcuseSurEvaluation": false,
  "PeutEtreExcuseSurExamenFinal": false,
  "PlafonnementMoyenneCours": false,
  "NePasPlafonnerSiAbsExc": false,
  "PlafonnementNoteEvaluation": false,
  "NotePlafondNoteEvaluation": 0,
  "NoteAPrendreEnCompteSiRattrapageEvaluation": 0,
  "NeutraliserCoursAbsenceExcuseeSurEF": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeCalcul/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "DebutExclusion": 0,
  "FinExclusion": 0,
  "PasArrondi": 0,
  "SeuilValidation": 0,
  "ExcuseParExamen": false,
  "ValidationManuelle": false,
  "SurRattrapage": false,
  "NoteMaxRattrapage": false,
  "EFExcusableSansPlafondRattrapage": false,
  "ValidationSurDispense": false,
  "RattrapageSurExamenFinal": false,
  "NoteRattrapageRetenu": 0,
  "PeutEtreDispenseSurEvaluation": false,
  "PeutEtreExcuseSurEvaluation": false,
  "PeutEtreExcuseSurExamenFinal": false,
  "PlafonnementMoyenneCours": false,
  "NePasPlafonnerSiAbsExc": false,
  "PlafonnementNoteEvaluation": false,
  "NotePlafondNoteEvaluation": 0,
  "NoteAPrendreEnCompteSiRattrapageEvaluation": 0,
  "NeutraliserCoursAbsenceExcuseeSurEF": false
}
```

:::

## Modifier un type de calcul

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeCalcul/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "DebutExclusion": 0,
  "FinExclusion": 0,
  "PasArrondi": 0,
  "SeuilValidation": 0,
  "ExcuseParExamen": false,
  "ValidationManuelle": false,
  "SurRattrapage": false,
  "NoteMaxRattrapage": false,
  "EFExcusableSansPlafondRattrapage": false,
  "ValidationSurDispense": false,
  "RattrapageSurExamenFinal": false,
  "NoteRattrapageRetenu": 0,
  "PeutEtreDispenseSurEvaluation": false,
  "PeutEtreExcuseSurEvaluation": false,
  "PeutEtreExcuseSurExamenFinal": false,
  "PlafonnementMoyenneCours": false,
  "NePasPlafonnerSiAbsExc": false,
  "PlafonnementNoteEvaluation": false,
  "NotePlafondNoteEvaluation": 0,
  "NoteAPrendreEnCompteSiRattrapageEvaluation": 0,
  "NeutraliserCoursAbsenceExcuseeSurEF": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeCalcul/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "Libelle": "texte",
  "LibelleExterne": "texte",
  "DebutExclusion": 0,
  "FinExclusion": 0,
  "PasArrondi": 0,
  "SeuilValidation": 0,
  "ExcuseParExamen": false,
  "ValidationManuelle": false,
  "SurRattrapage": false,
  "NoteMaxRattrapage": false,
  "EFExcusableSansPlafondRattrapage": false,
  "ValidationSurDispense": false,
  "RattrapageSurExamenFinal": false,
  "NoteRattrapageRetenu": 0,
  "PeutEtreDispenseSurEvaluation": false,
  "PeutEtreExcuseSurEvaluation": false,
  "PeutEtreExcuseSurExamenFinal": false,
  "PlafonnementMoyenneCours": false,
  "NePasPlafonnerSiAbsExc": false,
  "PlafonnementNoteEvaluation": false,
  "NotePlafondNoteEvaluation": 0,
  "NoteAPrendreEnCompteSiRattrapageEvaluation": 0,
  "NeutraliserCoursAbsenceExcuseeSurEF": false
}
```

:::

## Supprimer un type de calcul

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeCalcul/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
