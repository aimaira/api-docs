# Échéancier de facturation d’apprentissage

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les échéanciers de facturation d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheancierFacturationApprentissage \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheancierFacturationApprentissage",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ProgrammeId": 0,
      "EntiteFacturationId": 0,
      "MontantTotal": 0,
      "MontantFraisPedagogique": 0,
      "MontantPoe": 0,
      "MontantFraisAnnexe": 0
    }
  ]
}
```

:::

## Récupérer un échéancier de facturation d’apprentissage avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheancierFacturationApprentissage/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheancierFacturationApprentissage/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ProgrammeId": 0,
  "EntiteFacturationId": 0,
  "MontantTotal": 0,
  "MontantFraisPedagogique": 0,
  "MontantPoe": 0,
  "MontantFraisAnnexe": 0
}
```

:::

## Créer un échéancier de facturation d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheancierFacturationApprentissage \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "EntiteFacturationId": 1234567,
  "MontantTotal": 0,
  "MontantFraisPedagogique": 0,
  "MontantPoe": 0,
  "MontantFraisAnnexe": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheancierFacturationApprentissage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "EntiteFacturationId": 1234567,
  "MontantTotal": 0,
  "MontantFraisPedagogique": 0,
  "MontantPoe": 0,
  "MontantFraisAnnexe": 0
}
```

:::

## Modifier un échéancier de facturation d’apprentissage

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheancierFacturationApprentissage/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "EntiteFacturationId": 1234567,
  "MontantTotal": 0,
  "MontantFraisPedagogique": 0,
  "MontantPoe": 0,
  "MontantFraisAnnexe": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheancierFacturationApprentissage/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "EntiteFacturationId": 1234567,
  "MontantTotal": 0,
  "MontantFraisPedagogique": 0,
  "MontantPoe": 0,
  "MontantFraisAnnexe": 0
}
```

:::

## Supprimer un échéancier de facturation d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheancierFacturationApprentissage/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
