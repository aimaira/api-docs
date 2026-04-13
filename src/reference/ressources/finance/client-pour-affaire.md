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