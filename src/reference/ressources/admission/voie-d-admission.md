# Voie d’admission

Une voie d’admission est considérée comme complète quand elle dispose d’un [Programme][programme], d’une 
[Période][periode], d’un Nom, d’une date de début et d’une date de fin.

## Lister les voies d'admission

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionRecrutement \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionRecrutement",
  "value": [
    {
      "Id": 2253424,
      "Nom": "Ma voie d’admission",
      "Code": "",
      "ProgrammeId": 2215158,
      "EtablissementId": 0,
      "Debut": "2023-09-01T00:00:00+02:00",
      "Fin": "2024-08-31T00:00:00+02:00",
      "Payant": false,
      "Frais": 0,
      "CodesPieces": "",
      "CodesPiecesOptionnelles": "",
      "LibelleExterne": "",
      "ReferenceCRM": "",
      "ReferenceConcours": null,
      "CodesTests": "",
      "LibellePeriodeRentree": "2023/2024",
      "DebutPeriodeRentree": "2023-09-01T00:00:00+02:00",
      "FinPeriodeRentree": "2024-08-31T00:00:00+02:00",
      "CibleId": 0,
      "ParametresId": null,
      "PeriodeRentreeId": 1326,
      "SurveyCandidatId": 0,
      "SurveyReferentId": 0,
      "SurveyEvaluateurId": 0,
      "SessionId": 0
    }
  ]
}
```

:::

## Créer une voie d'admission

### Données obligatoires

- `ProgrammeId` *(voir [Programme][programme])*
- `PeriodeRentreeId` *(voir [Période][periode])*
- `LibelleExterne`
- `Nom`
- `Code`
- `Debut`
- `Fin`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionRecrutement \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  "Nom": "Ma nouvelle voie d’admission",
  "Code": "VOIE",
  "Debut": "2023-09-01T00:00:00+02:00",
  "Fin": "2024-08-31T00:00:00+02:00",
  "ProgrammeId": 2215158,
  "LibelleExterne": "Voie d’admission",
  "PeriodeRentreeId": 1326
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]

{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionRecrutement",
  "value": [
    {
      "Id": 2253463,
      "Nom": "Ma nouvelle voie d’admission",
      "Code": "VOIE",
      "ProgrammeId": 2215158,
      "EtablissementId": 0,
      "Debut": "2023-09-01T00:00:00+02:00",
      "Fin": "2024-08-31T00:00:00+02:00",
      "Payant": false,
      "Frais": 0,
      "CodesPieces": "",
      "CodesPiecesOptionnelles": "",
      "LibelleExterne": "Voie d’admission",
      "ReferenceCRM": "",
      "ReferenceConcours": null,
      "CodesTests": "",
      "LibellePeriodeRentree": "2023/2024",
      "DebutPeriodeRentree": "2023-09-01T00:00:00+02:00",
      "FinPeriodeRentree": "2024-08-31T00:00:00+02:00",
      "CibleId": 0,
      "ParametresId": null,
      "PeriodeRentreeId": 1326,
      "SurveyCandidatId": 0,
      "SurveyReferentId": 0,
      "SurveyEvaluateurId": 0,
      "SessionId": 0
    }
  ]
}
```

:::

[programme]: /reference/ressources/core/programme
[periode]: /reference/ressources/core/periode