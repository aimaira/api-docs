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

### Champs particuliers

#### `CodesPieces` et `CodesPiecesOptionnelles`

Ces deux champs listent les pièces justificatives demandées au candidat, respectivement obligatoires et facultatives.

Les valeurs attendues sont les **codes** des types de pièce, et non leurs identifiants. Ils sont séparés par le
caractère `/`, par exemple `NOTES/CV/`. Un code inconnu est ignoré silencieusement : la pièce correspondante n’est
alors pas demandée au candidat.

#### `Parametres`

Les champs personnalisés de la voie d’admission se lisent avec `GET /SessionRecrutement/{id}/Parametres`. À la création comme à la
modification, chaque champ envoyé est identifié par son `Code` :

- un code existant prend la nouvelle valeur, un code inconnu est ajouté ;
- les codes absents de la requête sont conservés ;
- une liste vide (`"Parametres": []`) supprime tous les champs personnalisés ;
- sans la propriété `Parametres`, les champs personnalisés ne changent pas.

```json
"Parametres": [
  { "Code": "CODE_DU_CHAMP", "Valeur": "Nouvelle valeur" }
]
```

### Données obligatoires

- `Nom`
- `ProgrammeId` *(voir [Programme][programme])*
- `Debut`
- `Fin`

Fortement recommandées, sans être rejetées si elles sont absentes :

- `Code`
- `LibelleExterne`
- `PeriodeRentreeId` *(voir [Période][periode])*

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

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une voie d’admission avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionRecrutement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionRecrutement/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ProgrammeId": 0,
  "EtablissementId": 0,
  "Debut": null,
  "Fin": null,
  "Payant": false,
  "Frais": 0,
  "CodesPieces": "",
  "CodesPiecesOptionnelles": "",
  "LibelleExterne": "",
  "LibelleExterneEn": "",
  "ReferenceCRM": "",
  "ReferenceConcours": 0,
  "CodesTests": "",
  "LibellePeriodeRentree": "",
  "DebutPeriodeRentree": null,
  "FinPeriodeRentree": null,
  "CibleId": 0,
  "PeriodeRentreeId": 0,
  "SurveyCandidatId": 0,
  "SurveyReferentId": 0,
  "SurveyEvaluateurId": 0,
  "SessionId": 0,
  "AutreInformation": ""
}
```

:::

## Modifier une voie d’admission

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionRecrutement/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "LibelleExterne": "texte",
  "PeriodeRentreeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SessionRecrutement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "EtablissementId": 0,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Payant": false,
  "Frais": 0,
  "CodesPieces": "",
  "CodesPiecesOptionnelles": "",
  "LibelleExterne": "texte",
  "LibelleExterneEn": "",
  "ReferenceCRM": "",
  "ReferenceConcours": 0,
  "CodesTests": "",
  "LibellePeriodeRentree": "",
  "DebutPeriodeRentree": null,
  "FinPeriodeRentree": null,
  "CibleId": 0,
  "PeriodeRentreeId": 1234567,
  "SurveyCandidatId": 0,
  "SurveyReferentId": 0,
  "SurveyEvaluateurId": 0,
  "SessionId": 0,
  "AutreInformation": ""
}
```

:::

## Supprimer une voie d’admission

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SessionRecrutement/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
