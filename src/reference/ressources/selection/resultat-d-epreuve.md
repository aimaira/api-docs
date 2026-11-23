# Résultat d’épreuve

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les résultats d’épreuve

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/ResultatEpreuve \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#ResultatEpreuve",
  "value": [
    {
      "EpreuveId": 0,
      "CandidatId": 0,
      "EcoleId": 0,
      "SalleId": 0,
      "Place": 0,
      "Horaire": null,
      "OrganisationEpreuveId": 0,
      "Note": 0,
      "Absent": false,
      "NoteHarmonise": 0,
      "DoubleSaisie": null,
      "DoubleSaisieJury": null,
      "SourceSaisie": "",
      "NoteLettre": "",
      "Detail": "",
      "ComplementOrganisation": "",
      "EstADistance": false,
      "InfoVisioId": 0,
      "IdJury": 0,
      "EmargementPreparation": null,
      "EmargementJury": null,
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer un résultat d’épreuve avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/ResultatEpreuve/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#ResultatEpreuve/$entity",
  "EpreuveId": 0,
  "CandidatId": 0,
  "EcoleId": 0,
  "SalleId": 0,
  "Place": 0,
  "Horaire": null,
  "OrganisationEpreuveId": 0,
  "Note": 0,
  "Absent": false,
  "NoteHarmonise": 0,
  "DoubleSaisie": null,
  "DoubleSaisieJury": null,
  "SourceSaisie": "",
  "NoteLettre": "",
  "Detail": "",
  "ComplementOrganisation": "",
  "EstADistance": false,
  "InfoVisioId": 0,
  "IdJury": 0,
  "EmargementPreparation": null,
  "EmargementJury": null,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un résultat d’épreuve

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/ResultatEpreuve \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveId": 1234567,
  "CandidatId": 1234567,
  "EcoleId": 1234567,
  "SalleId": 1234567,
  "Place": 0,
  "Horaire": {},
  "OrganisationEpreuveId": 1234567,
  "Note": 0,
  "Absent": false,
  "NoteHarmonise": 0,
  "DoubleSaisie": "2026-09-01T00:00:00+02:00",
  "DoubleSaisieJury": "2026-09-01T00:00:00+02:00",
  "SourceSaisie": "texte",
  "NoteLettre": "texte",
  "Detail": "texte",
  "ComplementOrganisation": "texte",
  "EstADistance": false,
  "InfoVisioId": 1234567,
  "IdJury": 0,
  "EmargementPreparation": "2026-09-01T00:00:00+02:00",
  "EmargementJury": "2026-09-01T00:00:00+02:00",
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#ResultatEpreuve/$entity",
  "EpreuveId": 1234567,
  "CandidatId": 1234567,
  "EcoleId": 1234567,
  "SalleId": 1234567,
  "Place": 0,
  "Horaire": {},
  "OrganisationEpreuveId": 1234567,
  "Note": 0,
  "Absent": false,
  "NoteHarmonise": 0,
  "DoubleSaisie": "2026-09-01T00:00:00+02:00",
  "DoubleSaisieJury": "2026-09-01T00:00:00+02:00",
  "SourceSaisie": "texte",
  "NoteLettre": "texte",
  "Detail": "texte",
  "ComplementOrganisation": "texte",
  "EstADistance": false,
  "InfoVisioId": 1234567,
  "IdJury": 0,
  "EmargementPreparation": "2026-09-01T00:00:00+02:00",
  "EmargementJury": "2026-09-01T00:00:00+02:00",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un résultat d’épreuve

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/ResultatEpreuve/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveId": 1234567,
  "CandidatId": 1234567,
  "EcoleId": 1234567,
  "SalleId": 1234567,
  "Place": 0,
  "Horaire": {},
  "OrganisationEpreuveId": 1234567,
  "Note": 0,
  "Absent": false,
  "NoteHarmonise": 0,
  "DoubleSaisie": "2026-09-01T00:00:00+02:00",
  "DoubleSaisieJury": "2026-09-01T00:00:00+02:00",
  "SourceSaisie": "texte",
  "NoteLettre": "texte",
  "Detail": "texte",
  "ComplementOrganisation": "texte",
  "EstADistance": false,
  "InfoVisioId": 1234567,
  "IdJury": 0,
  "EmargementPreparation": "2026-09-01T00:00:00+02:00",
  "EmargementJury": "2026-09-01T00:00:00+02:00",
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#ResultatEpreuve/$entity",
  "EpreuveId": 1234567,
  "CandidatId": 1234567,
  "EcoleId": 1234567,
  "SalleId": 1234567,
  "Place": 0,
  "Horaire": {},
  "OrganisationEpreuveId": 1234567,
  "Note": 0,
  "Absent": false,
  "NoteHarmonise": 0,
  "DoubleSaisie": "2026-09-01T00:00:00+02:00",
  "DoubleSaisieJury": "2026-09-01T00:00:00+02:00",
  "SourceSaisie": "texte",
  "NoteLettre": "texte",
  "Detail": "texte",
  "ComplementOrganisation": "texte",
  "EstADistance": false,
  "InfoVisioId": 1234567,
  "IdJury": 0,
  "EmargementPreparation": "2026-09-01T00:00:00+02:00",
  "EmargementJury": "2026-09-01T00:00:00+02:00",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un résultat d’épreuve

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/ResultatEpreuve/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
