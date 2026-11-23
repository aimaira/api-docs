# Référence ECTS

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les références ECTS

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceECTS \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferenceECTS",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "DepartementId": 0,
      "AACSBDisciplineId": 0,
      "AACSBType1Id": 0,
      "AACSBType2Id": 0,
      "NiveauEnseignementId": 0,
      "NiveauPublicId": 0,
      "LangueEnseignementId": 0,
      "NbCredits": 0,
      "ProgrammeId": 0,
      "HorsAbsence": false,
      "LibelleExterne": "",
      "ReferenceExterne": ""
    }
  ]
}
```

:::

## Récupérer une référence ECTS avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceECTS/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferenceECTS/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "DepartementId": 0,
  "AACSBDisciplineId": 0,
  "AACSBType1Id": 0,
  "AACSBType2Id": 0,
  "NiveauEnseignementId": 0,
  "NiveauPublicId": 0,
  "LangueEnseignementId": 0,
  "NbCredits": 0,
  "ProgrammeId": 0,
  "HorsAbsence": false,
  "LibelleExterne": "",
  "ReferenceExterne": ""
}
```

:::

## Créer une référence ECTS

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceECTS \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DepartementId": 1234567,
  "AACSBDisciplineId": 1234567,
  "AACSBType1Id": 1234567,
  "AACSBType2Id": 1234567,
  "NiveauEnseignementId": 1234567,
  "NiveauPublicId": 1234567,
  "LangueEnseignementId": 1234567,
  "NbCredits": 0,
  "ProgrammeId": 1234567,
  "HorsAbsence": false,
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferenceECTS/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DepartementId": 1234567,
  "AACSBDisciplineId": 1234567,
  "AACSBType1Id": 1234567,
  "AACSBType2Id": 1234567,
  "NiveauEnseignementId": 1234567,
  "NiveauPublicId": 1234567,
  "LangueEnseignementId": 1234567,
  "NbCredits": 0,
  "ProgrammeId": 1234567,
  "HorsAbsence": false,
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}
```

:::

## Modifier une référence ECTS

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceECTS/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DepartementId": 1234567,
  "AACSBDisciplineId": 1234567,
  "AACSBType1Id": 1234567,
  "AACSBType2Id": 1234567,
  "NiveauEnseignementId": 1234567,
  "NiveauPublicId": 1234567,
  "LangueEnseignementId": 1234567,
  "NbCredits": 0,
  "ProgrammeId": 1234567,
  "HorsAbsence": false,
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferenceECTS/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DepartementId": 1234567,
  "AACSBDisciplineId": 1234567,
  "AACSBType1Id": 1234567,
  "AACSBType2Id": 1234567,
  "NiveauEnseignementId": 1234567,
  "NiveauPublicId": 1234567,
  "LangueEnseignementId": 1234567,
  "NbCredits": 0,
  "ProgrammeId": 1234567,
  "HorsAbsence": false,
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}
```

:::

## Supprimer une référence ECTS

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceECTS/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
