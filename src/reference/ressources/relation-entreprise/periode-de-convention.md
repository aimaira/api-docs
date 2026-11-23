# Période de convention

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les périodes de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PeriodeConvention \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PeriodeConvention",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ConventionId": 0,
      "AdresseId": 0,
      "TempsTravailHebdomadaire": 0,
      "DateDebut": null,
      "DateFin": null,
      "NoteId": 0,
      "NomEtablissement": "",
      "SiretEtablissement": ""
    }
  ]
}
```

:::

## Récupérer une période de convention avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PeriodeConvention/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PeriodeConvention/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ConventionId": 0,
  "AdresseId": 0,
  "TempsTravailHebdomadaire": 0,
  "DateDebut": null,
  "DateFin": null,
  "NoteId": 0,
  "NomEtablissement": "",
  "SiretEtablissement": ""
}
```

:::

## Créer une période de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PeriodeConvention \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "AdresseId": 1234567,
  "TempsTravailHebdomadaire": 0,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "NomEtablissement": "texte",
  "SiretEtablissement": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PeriodeConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "AdresseId": 1234567,
  "TempsTravailHebdomadaire": 0,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "NomEtablissement": "texte",
  "SiretEtablissement": "texte"
}
```

:::

## Modifier une période de convention

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PeriodeConvention/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "AdresseId": 1234567,
  "TempsTravailHebdomadaire": 0,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "NomEtablissement": "texte",
  "SiretEtablissement": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#PeriodeConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "AdresseId": 1234567,
  "TempsTravailHebdomadaire": 0,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "NoteId": 1234567,
  "NomEtablissement": "texte",
  "SiretEtablissement": "texte"
}
```

:::

## Supprimer une période de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/PeriodeConvention/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
