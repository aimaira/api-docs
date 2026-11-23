# Scolarité antérieure

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une scolarité antérieure avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Scolarite/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Scolarite/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "DossierId": 0,
  "Debut": null,
  "Fin": null,
  "Diplome": "",
  "Etablissement": "",
  "CibleMarche": false,
  "EtablissementPartenaire": false,
  "AdresseId": 0,
  "DiplomeON": false,
  "CodeUai": "",
  "DomaineId": 0,
  "DiplomePrepareId": 0,
  "ResultatAcademiqueId": 0,
  "ScolariteSecondaire": false,
  "DateObtentionDiplome": null,
  "CanCandidate": false,
  "Subject": "",
  "EtablissementRang": 0,
  "CGE": false,
  "ComplementaryRank": 0
}
```

:::

## Créer une scolarité antérieure

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Scolarite \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Diplome": "texte",
  "Etablissement": "texte",
  "CibleMarche": false,
  "EtablissementPartenaire": false,
  "AdresseId": 1234567,
  "DiplomeON": false,
  "CodeUai": "texte",
  "DomaineId": 1234567,
  "DiplomePrepareId": 1234567,
  "ResultatAcademiqueId": 1234567,
  "ScolariteSecondaire": false,
  "DateObtentionDiplome": "2026-09-01T00:00:00+02:00",
  "CanCandidate": false,
  "Subject": "texte",
  "EtablissementRang": 0,
  "CGE": false,
  "ComplementaryRank": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Scolarite/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Diplome": "texte",
  "Etablissement": "texte",
  "CibleMarche": false,
  "EtablissementPartenaire": false,
  "AdresseId": 1234567,
  "DiplomeON": false,
  "CodeUai": "texte",
  "DomaineId": 1234567,
  "DiplomePrepareId": 1234567,
  "ResultatAcademiqueId": 1234567,
  "ScolariteSecondaire": false,
  "DateObtentionDiplome": "2026-09-01T00:00:00+02:00",
  "CanCandidate": false,
  "Subject": "texte",
  "EtablissementRang": 0,
  "CGE": false,
  "ComplementaryRank": 0
}
```

:::

## Modifier une scolarité antérieure

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Scolarite/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Diplome": "texte",
  "Etablissement": "texte",
  "CibleMarche": false,
  "EtablissementPartenaire": false,
  "AdresseId": 1234567,
  "DiplomeON": false,
  "CodeUai": "texte",
  "DomaineId": 1234567,
  "DiplomePrepareId": 1234567,
  "ResultatAcademiqueId": 1234567,
  "ScolariteSecondaire": false,
  "DateObtentionDiplome": "2026-09-01T00:00:00+02:00",
  "CanCandidate": false,
  "Subject": "texte",
  "EtablissementRang": 0,
  "CGE": false,
  "ComplementaryRank": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Scolarite/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Diplome": "texte",
  "Etablissement": "texte",
  "CibleMarche": false,
  "EtablissementPartenaire": false,
  "AdresseId": 1234567,
  "DiplomeON": false,
  "CodeUai": "texte",
  "DomaineId": 1234567,
  "DiplomePrepareId": 1234567,
  "ResultatAcademiqueId": 1234567,
  "ScolariteSecondaire": false,
  "DateObtentionDiplome": "2026-09-01T00:00:00+02:00",
  "CanCandidate": false,
  "Subject": "texte",
  "EtablissementRang": 0,
  "CGE": false,
  "ComplementaryRank": 0
}
```

:::

## Supprimer une scolarité antérieure

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Scolarite/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
