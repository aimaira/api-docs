# Liaison entre un programme et le régime de l’apprenant

L’entité `ProgrammeRegime` représente la liaison entre un `Programme` et un `RegimeInscription`. Elle porte également
la liaison vers la société de facturation et le taux de TVA associé au programme.

## Lister les `ProgrammeRegime`

Il n’est pas possible de lister les `ProgrammeRegime` directement. Il est nécessaire de passer l’identifiant d’un
programme.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ProgrammeRegime?$filter=ProgrammeId eq 1234567
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ProgrammeRegime",
  "value": [
    {
      "Id": 2215052,
      "Nom": "FC hors contrat pro",
      "Code": "",
      "EntiteJuridiqueId": 2215046,
      "ProgrammeId": 1234567,
      "RegimeInscriptionId": 56647,
      "TauxTVA": 0.2
    },
    {
      "Id": 2215050,
      "Nom": "Contrat pro",
      "Code": "",
      "EntiteJuridiqueId": 2215046,
      "ProgrammeId": 1234567,
      "RegimeInscriptionId": 56648,
      "TauxTVA": 0.2
    }
  ]
}
```

:::

## Récupérer un `ProgrammeRegime` avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ProgrammeRegime/2215052
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ProgrammeRegime",
  "Id": 2215052,
  "Nom": "FC hors contrat pro",
  "Code": "",
  "EntiteJuridiqueId": 2215046,
  "ProgrammeId": 1234567,
  "RegimeInscriptionId": 56647,
  "TauxTVA": 0.2
}
```

:::

## Créer un `ProgrammeRegime`

### Données obligatoires

- `Nom`
- `EntiteJuridiqueId`, l’identifiant de la société de facturation cible
- `ProgrammeId`
- `RegimeInscriptionId`
- `TauxTVA`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ProgrammeRegime \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Apprenti sans contrat",
  "EntiteJuridiqueId": 2215046,
  "ProgrammeId": 1234567,
  "RegimeInscriptionId": 12345678,
  "TauxTVA": 0.1
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ProgrammeRegime/$entity",
  "Id": 19387047,
  "Nom": "Apprenti sans contrat",
  "Code": "",
  "EntiteJuridiqueId": 2215046,
  "ProgrammeId": 1234567,
  "RegimeInscriptionId": 12345678,
  "TauxTVA": 0.1
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Modifier une liaison entre un programme et un régime

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ProgrammeRegime/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "EntiteJuridiqueId": 1234567,
  "ProgrammeId": 1234567,
  "RegimeInscriptionId": 1234567,
  "TauxTVA": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ProgrammeRegime/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "",
  "EntiteJuridiqueId": 1234567,
  "ProgrammeId": 1234567,
  "RegimeInscriptionId": 1234567,
  "TauxTVA": 0
}
```

:::

## Supprimer une liaison entre un programme et un régime

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ProgrammeRegime/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
