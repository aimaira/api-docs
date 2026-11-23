# Épreuve

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les épreuves

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Epreuve \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Epreuve",
  "value": [
    {
      "LibelleExterne": "",
      "TypeId": 0,
      "LangueId": 0,
      "Duree": 0,
      "IdLink": 0,
      "IdInscritLink": 0,
      "DureePreparation": 0,
      "DureeDeliberation": 0,
      "NbCandidat": 0,
      "DebutMatin": null,
      "FinMatin": null,
      "DebutAmidi": null,
      "FinAmidi": null,
      "SurveyId": 0,
      "CodeCentreBudgetaire": "",
      "CodeNaturePrestation": "",
      "InformationComplementaire": "",
      "Affectation": 0,
      "EcoleId": 0,
      "Id": 1234567,
      "Nom": "",
      "Code": ""
    }
  ]
}
```

:::

## Récupérer une épreuve avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Epreuve/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Epreuve/$entity",
  "LibelleExterne": "",
  "TypeId": 0,
  "LangueId": 0,
  "Duree": 0,
  "IdLink": 0,
  "IdInscritLink": 0,
  "DureePreparation": 0,
  "DureeDeliberation": 0,
  "NbCandidat": 0,
  "DebutMatin": null,
  "FinMatin": null,
  "DebutAmidi": null,
  "FinAmidi": null,
  "SurveyId": 0,
  "CodeCentreBudgetaire": "",
  "CodeNaturePrestation": "",
  "InformationComplementaire": "",
  "Affectation": 0,
  "EcoleId": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une épreuve

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Epreuve \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "LibelleExterne": "texte",
  "TypeId": 1234567,
  "LangueId": 1234567,
  "Duree": 0,
  "IdLink": 0,
  "IdInscritLink": 0,
  "DureePreparation": 0,
  "DureeDeliberation": 0,
  "NbCandidat": 0,
  "DebutMatin": {},
  "FinMatin": {},
  "DebutAmidi": {},
  "FinAmidi": {},
  "SurveyId": 1234567,
  "CodeCentreBudgetaire": "texte",
  "CodeNaturePrestation": "texte",
  "InformationComplementaire": "texte",
  "Affectation": 0,
  "EcoleId": 1234567,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Epreuve/$entity",
  "LibelleExterne": "texte",
  "TypeId": 1234567,
  "LangueId": 1234567,
  "Duree": 0,
  "IdLink": 0,
  "IdInscritLink": 0,
  "DureePreparation": 0,
  "DureeDeliberation": 0,
  "NbCandidat": 0,
  "DebutMatin": {},
  "FinMatin": {},
  "DebutAmidi": {},
  "FinAmidi": {},
  "SurveyId": 1234567,
  "CodeCentreBudgetaire": "texte",
  "CodeNaturePrestation": "texte",
  "InformationComplementaire": "texte",
  "Affectation": 0,
  "EcoleId": 1234567,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une épreuve

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Epreuve/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "LibelleExterne": "texte",
  "TypeId": 1234567,
  "LangueId": 1234567,
  "Duree": 0,
  "IdLink": 0,
  "IdInscritLink": 0,
  "DureePreparation": 0,
  "DureeDeliberation": 0,
  "NbCandidat": 0,
  "DebutMatin": {},
  "FinMatin": {},
  "DebutAmidi": {},
  "FinAmidi": {},
  "SurveyId": 1234567,
  "CodeCentreBudgetaire": "texte",
  "CodeNaturePrestation": "texte",
  "InformationComplementaire": "texte",
  "Affectation": 0,
  "EcoleId": 1234567,
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Epreuve/$entity",
  "LibelleExterne": "texte",
  "TypeId": 1234567,
  "LangueId": 1234567,
  "Duree": 0,
  "IdLink": 0,
  "IdInscritLink": 0,
  "DureePreparation": 0,
  "DureeDeliberation": 0,
  "NbCandidat": 0,
  "DebutMatin": {},
  "FinMatin": {},
  "DebutAmidi": {},
  "FinAmidi": {},
  "SurveyId": 1234567,
  "CodeCentreBudgetaire": "texte",
  "CodeNaturePrestation": "texte",
  "InformationComplementaire": "texte",
  "Affectation": 0,
  "EcoleId": 1234567,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une épreuve

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Epreuve/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
