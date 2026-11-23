# Rattrapage

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un rattrapage avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Rattrapage/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Rattrapage/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "InscriptionCoursId": 0,
  "SessionRattrapageId": 0,
  "Note": 0,
  "Date": null
}
```

:::

## Créer un rattrapage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Rattrapage \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionCoursId": 1234567,
  "SessionRattrapageId": 1234567,
  "Note": 0,
  "Date": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Rattrapage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionCoursId": 1234567,
  "SessionRattrapageId": 1234567,
  "Note": 0,
  "Date": "2026-09-01T00:00:00+02:00"
}
```

:::

## Modifier un rattrapage

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Rattrapage/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionCoursId": 1234567,
  "SessionRattrapageId": 1234567,
  "Note": 0,
  "Date": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Rattrapage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionCoursId": 1234567,
  "SessionRattrapageId": 1234567,
  "Note": 0,
  "Date": "2026-09-01T00:00:00+02:00"
}
```

:::

## Supprimer un rattrapage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Rattrapage/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
