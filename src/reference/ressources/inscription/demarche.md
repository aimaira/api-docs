# Démarche

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une démarche avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Demarche/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Demarche/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ApprenantId": 0,
  "TypeDemarcheId": 0,
  "EtatDemarcheId": 0,
  "Date": null,
  "DateValidation": null,
  "Debut": null,
  "Fin": null,
  "Fichier": "00000000-0000-0000-0000-000000000000",
  "TypeFichier": "",
  "RefId": 0
}
```

:::

## Créer une démarche

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Demarche \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "TypeDemarcheId": 1234567,
  "EtatDemarcheId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DateValidation": "2026-09-01T00:00:00+02:00",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Fichier": "00000000-0000-0000-0000-000000000000",
  "TypeFichier": "texte",
  "RefId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Demarche/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "TypeDemarcheId": 1234567,
  "EtatDemarcheId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DateValidation": "2026-09-01T00:00:00+02:00",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Fichier": "00000000-0000-0000-0000-000000000000",
  "TypeFichier": "texte",
  "RefId": 1234567
}
```

:::

## Modifier une démarche

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Demarche/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "TypeDemarcheId": 1234567,
  "EtatDemarcheId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DateValidation": "2026-09-01T00:00:00+02:00",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Fichier": "00000000-0000-0000-0000-000000000000",
  "TypeFichier": "texte",
  "RefId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Demarche/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ApprenantId": 1234567,
  "TypeDemarcheId": 1234567,
  "EtatDemarcheId": 1234567,
  "Date": "2026-09-01T00:00:00+02:00",
  "DateValidation": "2026-09-01T00:00:00+02:00",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Fichier": "00000000-0000-0000-0000-000000000000",
  "TypeFichier": "texte",
  "RefId": 1234567
}
```

:::

## Supprimer une démarche

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Demarche/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
