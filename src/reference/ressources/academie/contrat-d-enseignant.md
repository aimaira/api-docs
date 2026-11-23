# Contrat d’enseignant

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un contrat d’enseignant avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Contrat/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Contrat/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EnseignantId": 0,
  "TypeContratId": 0,
  "EtatContratId": 0,
  "DateDebut": null,
  "DateFin": null,
  "Date": null,
  "DateSignature": null,
  "DateEnvoi": null,
  "DateDPAE": null,
  "CommentaireId": 0,
  "TauxHoraire": 0,
  "Avenant": false,
  "EntiteJuridiqueId": 0,
  "EmployeurId": 0,
  "CodesPieces": "",
  "NomEntreprise": "",
  "IdContratOrigine": 0,
  "Campus": "",
  "DateDebutInitial": null,
  "DateFinInitial": null
}
```

:::

## Créer un contrat d’enseignant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Contrat \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "TypeContratId": 1234567,
  "EtatContratId": 1234567,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "Date": "2026-09-01T00:00:00+02:00",
  "DateSignature": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "DateDPAE": "2026-09-01T00:00:00+02:00",
  "CommentaireId": 1234567,
  "TauxHoraire": 0,
  "Avenant": false,
  "EntiteJuridiqueId": 1234567,
  "EmployeurId": 1234567,
  "CodesPieces": "texte",
  "NomEntreprise": "texte",
  "IdContratOrigine": 0,
  "Campus": "texte",
  "DateDebutInitial": "2026-09-01T00:00:00+02:00",
  "DateFinInitial": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Contrat/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "TypeContratId": 1234567,
  "EtatContratId": 1234567,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "Date": "2026-09-01T00:00:00+02:00",
  "DateSignature": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "DateDPAE": "2026-09-01T00:00:00+02:00",
  "CommentaireId": 1234567,
  "TauxHoraire": 0,
  "Avenant": false,
  "EntiteJuridiqueId": 1234567,
  "EmployeurId": 1234567,
  "CodesPieces": "texte",
  "NomEntreprise": "texte",
  "IdContratOrigine": 0,
  "Campus": "texte",
  "DateDebutInitial": "2026-09-01T00:00:00+02:00",
  "DateFinInitial": "2026-09-01T00:00:00+02:00"
}
```

:::

## Modifier un contrat d’enseignant

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Contrat/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "TypeContratId": 1234567,
  "EtatContratId": 1234567,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "Date": "2026-09-01T00:00:00+02:00",
  "DateSignature": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "DateDPAE": "2026-09-01T00:00:00+02:00",
  "CommentaireId": 1234567,
  "TauxHoraire": 0,
  "Avenant": false,
  "EntiteJuridiqueId": 1234567,
  "EmployeurId": 1234567,
  "CodesPieces": "texte",
  "NomEntreprise": "texte",
  "IdContratOrigine": 0,
  "Campus": "texte",
  "DateDebutInitial": "2026-09-01T00:00:00+02:00",
  "DateFinInitial": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Contrat/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "TypeContratId": 1234567,
  "EtatContratId": 1234567,
  "DateDebut": "2026-09-01T00:00:00+02:00",
  "DateFin": "2026-09-01T00:00:00+02:00",
  "Date": "2026-09-01T00:00:00+02:00",
  "DateSignature": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "DateDPAE": "2026-09-01T00:00:00+02:00",
  "CommentaireId": 1234567,
  "TauxHoraire": 0,
  "Avenant": false,
  "EntiteJuridiqueId": 1234567,
  "EmployeurId": 1234567,
  "CodesPieces": "texte",
  "NomEntreprise": "texte",
  "IdContratOrigine": 0,
  "Campus": "texte",
  "DateDebutInitial": "2026-09-01T00:00:00+02:00",
  "DateFinInitial": "2026-09-01T00:00:00+02:00"
}
```

:::

## Supprimer un contrat d’enseignant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Contrat/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
