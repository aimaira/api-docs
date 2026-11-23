# Expérience professionnelle

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une expérience professionnelle avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ExperienceProfessionnelle/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ExperienceProfessionnelle/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "DossierId": 0,
  "Debut": null,
  "Fin": null,
  "Position": "",
  "Entreprise": "",
  "MissionsId": 0,
  "TypeEmploiId": 0,
  "PaysId": 0,
  "Mois": 0,
  "Internationale": false
}
```

:::

## Créer une expérience professionnelle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ExperienceProfessionnelle \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Position": "texte",
  "Entreprise": "texte",
  "MissionsId": 1234567,
  "TypeEmploiId": 1234567,
  "PaysId": 1234567,
  "Mois": 0,
  "Internationale": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ExperienceProfessionnelle/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Position": "texte",
  "Entreprise": "texte",
  "MissionsId": 1234567,
  "TypeEmploiId": 1234567,
  "PaysId": 1234567,
  "Mois": 0,
  "Internationale": false
}
```

:::

## Modifier une expérience professionnelle

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ExperienceProfessionnelle/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Position": "texte",
  "Entreprise": "texte",
  "MissionsId": 1234567,
  "TypeEmploiId": 1234567,
  "PaysId": 1234567,
  "Mois": 0,
  "Internationale": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ExperienceProfessionnelle/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Position": "texte",
  "Entreprise": "texte",
  "MissionsId": 1234567,
  "TypeEmploiId": 1234567,
  "PaysId": 1234567,
  "Mois": 0,
  "Internationale": false
}
```

:::

## Supprimer une expérience professionnelle

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ExperienceProfessionnelle/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
