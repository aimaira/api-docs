# Facture

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une facture avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Facture/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Facture/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Date": null,
  "DateTermine": null,
  "Montant": 0,
  "ExportComptaON": false,
  "Numero": "",
  "NomClient": "",
  "ClientId": 0,
  "AffaireId": 0,
  "Commentaire": "",
  "ModalitePaiementId": 0,
  "TypePaiementId": 0,
  "OperationId": 0,
  "LibelleOperation": ""
}
```

:::

## Supprimer une facture

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Facture/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
