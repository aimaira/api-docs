# Lien entre un `Client` et une `Affaire`

`ClientPourAffaire` est l’entité qui représente la relation entre un `Client` et une `Affaire`.

Afin d’indiquer qu’un `Client` est le répondant financier pour une `Affaire`, il faut utiliser le champ `Principal`.

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
