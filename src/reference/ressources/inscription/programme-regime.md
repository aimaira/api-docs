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
  "@odata.context": "http://localhost:31766/$metadata#ProgrammeRegime/$entity",
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
