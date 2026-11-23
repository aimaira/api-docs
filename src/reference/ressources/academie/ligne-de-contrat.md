# Ligne de contrat

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une ligne de contrat avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LigneContrat/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#LigneContrat/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ContratId": 0,
  "CoursId": 0,
  "Quantite": 0,
  "TauxUnitaire": 0,
  "EquivalentHoraire": 0
}
```

:::

## Créer une ligne de contrat

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LigneContrat \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ContratId": 1234567,
  "CoursId": 1234567,
  "Quantite": 0,
  "TauxUnitaire": 0,
  "EquivalentHoraire": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#LigneContrat/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ContratId": 1234567,
  "CoursId": 1234567,
  "Quantite": 0,
  "TauxUnitaire": 0,
  "EquivalentHoraire": 0
}
```

:::

## Modifier une ligne de contrat

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LigneContrat/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ContratId": 1234567,
  "CoursId": 1234567,
  "Quantite": 0,
  "TauxUnitaire": 0,
  "EquivalentHoraire": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#LigneContrat/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ContratId": 1234567,
  "CoursId": 1234567,
  "Quantite": 0,
  "TauxUnitaire": 0,
  "EquivalentHoraire": 0
}
```

:::

## Supprimer une ligne de contrat

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/LigneContrat/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
