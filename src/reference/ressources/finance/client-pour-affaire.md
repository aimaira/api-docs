# Lien entre un `Client` et une `Affaire`

`ClientPourAffaire` est l’entité qui représente la relation entre un `Client` et une `Affaire`.

Afin d’indiquer qu’un `Client` est le répondant financier pour une `Affaire`, il faut utiliser le champ `Principal`.

## Récupérer l’identifiant de l’affaire

Afin de créer un `ClientPourAffaire`, il vous faudra un `AffaireId` et un `ClientId`.

Dans la plupart des cas, l’`AffaireId` sera récupéré depuis une [`Inscription`][inscription] ou un [`Dossier`][dossier].
Ces deux entités portent un champ `AffaireId` avec la valeur nécessaire. 

## Créer un `ClientPourAffaire`

### Données obligatoires

- `AffaireId`
- `ClientId`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ClientPourAffaire \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "AffaireId": 1234567,
    "ClientId": 7654321,
    "Principal": true
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ClientPourAffaire/$entity",
  "Id": 1234568,
  "Nom": "",
  "Code": "",
  "AffaireId": 1234567,
  "ClientId": 7654321,
  "Principal": true,
  "Contentieux": false,
  "HorsReleve": false,
  "SituationParticuliere": false,
  "Solde": null,
  "TauxTVA": 0.0,
  "NotePourFactureId": 0,
  "ApprenantId": 0,
  "EntiteJuridiqueId": null,
  "Relance": false
}
```

:::

[inscription]: /reference/ressources/inscription/inscription
[dossier]: /reference/ressources/admission/dossier

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Lister les liens entre un client et une affaire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ClientPourAffaire \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ClientPourAffaire",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "AffaireId": 0,
      "ClientId": 0,
      "Principal": false,
      "Contentieux": false,
      "HorsReleve": false,
      "SituationParticuliere": false,
      "Solde": 0,
      "TauxTVA": 0,
      "NotePourFactureId": 0,
      "ApprenantId": 0,
      "EntiteJuridiqueId": 0,
      "Relance": false
    }
  ]
}
```

:::

## Récupérer un lien entre un client et une affaire avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ClientPourAffaire/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ClientPourAffaire/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "AffaireId": 0,
  "ClientId": 0,
  "Principal": false,
  "Contentieux": false,
  "HorsReleve": false,
  "SituationParticuliere": false,
  "Solde": 0,
  "TauxTVA": 0,
  "NotePourFactureId": 0,
  "ApprenantId": 0,
  "EntiteJuridiqueId": 0,
  "Relance": false
}
```

:::

## Modifier un lien entre un client et une affaire

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ClientPourAffaire/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "AffaireId": 1234567,
  "ClientId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ClientPourAffaire/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "AffaireId": 1234567,
  "ClientId": 1234567,
  "Principal": false,
  "Contentieux": false,
  "HorsReleve": false,
  "SituationParticuliere": false,
  "Solde": 0,
  "TauxTVA": 0,
  "NotePourFactureId": 0,
  "ApprenantId": 0,
  "EntiteJuridiqueId": 0,
  "Relance": false
}
```

:::

## Supprimer un lien entre un client et une affaire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ClientPourAffaire/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
