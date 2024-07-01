# Balance client

## Lister les balances client

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceClient \
  --request GET \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#BalanceClient",
  "value": [
    {
      "Id": 1234567,
      "Nom": "Chèque bancaire",
      "Code": null,
      "Montant": 6000.0,
      "MontantHT": 6000.0,
      "TauxTVA": 0.0,
      "Date": "2024-06-01T00:00:00+02:00",
      "CreditON": true,
      "PaiementON": true,
      "RejetON": false,
      "ODON": false,
      "OperationId": null,
      "LibelleOperation": null,
      "EnNotrePossessionON": false,
      "Compte": "1234567",
      "CodeAnalytique": null,
      "ReferenceTransaction": null,
      "Detail": null,
      "ClientId": 1234567,
      "AffaireId": 1234567,
      "SessionExportPrelevementId": null,
      "SessionExportComptaId": null,
      "FactureId": null,
      "MailId": null,
      "MandatSEPAId": null,
      "TypePaiementId": 2215922,
      "CategoriePrestationId": null,
      "PrestationId": null,
      "LibellePeriode": "2023/2024",
      "RefBalanceLiee": null,
      "ModalitePourPrestationId": null,
      "PeriodeId": 1326,
      "Debut": null,
      "Fin": null,
      "Relance1": null,
      "Relance2": null,
      "Relance3": null,
      "ReferenceDossier": null,
      "NoteDetailId": null
    }
  ]
}

```

:::

## Lister les balances client d’une affaire

::: warning Note

L’URL de la requête ci-dessous n'est pas encodée pour en faciliter la lecture. Avant de faire l’appel via cURL ou tout
autre outil, n’oubliez pas d'encoder correctement les caractères de l’URL.

Par exemple, l'URL de la requête ci-dessous une fois encodée est `https://myapi.aimaira.net/GraphV1/BalanceClient?%24filter%3DAffaireId%20eq%20123456%20and%20CreditON%20eq%20true%26%24orderby%3DDate%20desc`

:::

Il est possible d’utiliser les instructions `$filter` et `$orderby` du protocole OData pour récupérer uniquement les
lignes de balances clients liées à une affaire pour faire les calculs liées aux données financières du dossier de
candidature.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceClient?$filter=AffaireId eq 123456 and CreditON eq true&$orderby=Date desc \
  --request GET \
  -u 'nomdutilisateur:motdepasse'
```

:::