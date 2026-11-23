# Passage

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un passage avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Passage/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Passage/$entity",
  "CandidatId": 0,
  "OrganisationEpreuveId": 0,
  "OrganisationEpreuveOralId": 0,
  "SalleId": 0,
  "SalleMJId": 0,
  "SalleEntretienId": 0,
  "Place": 0,
  "HoraireMJ": null,
  "HoraireEntretien": null,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer un passage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Passage \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "CandidatId": 1234567,
  "OrganisationEpreuveId": 1234567,
  "OrganisationEpreuveOralId": 1234567,
  "SalleId": 1234567,
  "SalleMJId": 1234567,
  "SalleEntretienId": 1234567,
  "Place": 0,
  "HoraireMJ": {},
  "HoraireEntretien": {},
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Passage/$entity",
  "CandidatId": 1234567,
  "OrganisationEpreuveId": 1234567,
  "OrganisationEpreuveOralId": 1234567,
  "SalleId": 1234567,
  "SalleMJId": 1234567,
  "SalleEntretienId": 1234567,
  "Place": 0,
  "HoraireMJ": {},
  "HoraireEntretien": {},
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier un passage

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Passage/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "CandidatId": 1234567,
  "OrganisationEpreuveId": 1234567,
  "OrganisationEpreuveOralId": 1234567,
  "SalleId": 1234567,
  "SalleMJId": 1234567,
  "SalleEntretienId": 1234567,
  "Place": 0,
  "HoraireMJ": {},
  "HoraireEntretien": {},
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Passage/$entity",
  "CandidatId": 1234567,
  "OrganisationEpreuveId": 1234567,
  "OrganisationEpreuveOralId": 1234567,
  "SalleId": 1234567,
  "SalleMJId": 1234567,
  "SalleEntretienId": 1234567,
  "Place": 0,
  "HoraireMJ": {},
  "HoraireEntretien": {},
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer un passage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Passage/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
