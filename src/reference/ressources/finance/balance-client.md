# Balance client

## Lister les lignes de balance d’un client

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceClient \
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

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une ligne de balance client avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceClient/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#BalanceClient/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Montant": 0,
  "MontantHT": 0,
  "TauxTVA": 0,
  "Date": null,
  "CreditON": false,
  "PaiementON": false,
  "RejetON": false,
  "ODON": false,
  "OperationId": 0,
  "LibelleOperation": "",
  "EnNotrePossessionON": false,
  "Compte": "",
  "CodeAnalytique": "",
  "ReferenceTransaction": "",
  "Detail": "",
  "ClientId": 0,
  "AffaireId": 0,
  "SessionExportPrelevementId": 0,
  "SessionExportComptaId": 0,
  "FactureId": 0,
  "MailId": 0,
  "MandatSEPAId": 0,
  "TypePaiementId": 0,
  "CategoriePrestationId": 0,
  "PrestationId": 0,
  "LibellePeriode": "",
  "RefBalanceLiee": 0,
  "ModalitePourPrestationId": 0,
  "PeriodeId": 0,
  "Debut": null,
  "Fin": null,
  "Relance1": null,
  "Relance2": null,
  "Relance3": null,
  "ReferenceDossier": "",
  "NoteDetailId": 0
}
```

:::

## Créer une ligne de balance client

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceClient \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Montant": 0,
  "MontantHT": 0,
  "TauxTVA": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "PaiementON": false,
  "RejetON": false,
  "ODON": false,
  "OperationId": 1234567,
  "LibelleOperation": "texte",
  "EnNotrePossessionON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "ReferenceTransaction": "texte",
  "Detail": "texte",
  "ClientId": 1234567,
  "AffaireId": 1234567,
  "SessionExportPrelevementId": 1234567,
  "SessionExportComptaId": 1234567,
  "FactureId": 1234567,
  "MailId": 1234567,
  "MandatSEPAId": 1234567,
  "TypePaiementId": 1234567,
  "CategoriePrestationId": 1234567,
  "PrestationId": 1234567,
  "LibellePeriode": "texte",
  "RefBalanceLiee": 0,
  "ModalitePourPrestationId": 1234567,
  "PeriodeId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Relance1": "2026-09-01T00:00:00+02:00",
  "Relance2": "2026-09-01T00:00:00+02:00",
  "Relance3": "2026-09-01T00:00:00+02:00",
  "ReferenceDossier": "texte",
  "NoteDetailId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#BalanceClient/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Montant": 0,
  "MontantHT": 0,
  "TauxTVA": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "PaiementON": false,
  "RejetON": false,
  "ODON": false,
  "OperationId": 1234567,
  "LibelleOperation": "texte",
  "EnNotrePossessionON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "ReferenceTransaction": "texte",
  "Detail": "texte",
  "ClientId": 1234567,
  "AffaireId": 1234567,
  "SessionExportPrelevementId": 1234567,
  "SessionExportComptaId": 1234567,
  "FactureId": 1234567,
  "MailId": 1234567,
  "MandatSEPAId": 1234567,
  "TypePaiementId": 1234567,
  "CategoriePrestationId": 1234567,
  "PrestationId": 1234567,
  "LibellePeriode": "texte",
  "RefBalanceLiee": 0,
  "ModalitePourPrestationId": 1234567,
  "PeriodeId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Relance1": "2026-09-01T00:00:00+02:00",
  "Relance2": "2026-09-01T00:00:00+02:00",
  "Relance3": "2026-09-01T00:00:00+02:00",
  "ReferenceDossier": "texte",
  "NoteDetailId": 1234567
}
```

:::

## Modifier une ligne de balance client

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceClient/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Montant": 0,
  "MontantHT": 0,
  "TauxTVA": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "PaiementON": false,
  "RejetON": false,
  "ODON": false,
  "OperationId": 1234567,
  "LibelleOperation": "texte",
  "EnNotrePossessionON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "ReferenceTransaction": "texte",
  "Detail": "texte",
  "ClientId": 1234567,
  "AffaireId": 1234567,
  "SessionExportPrelevementId": 1234567,
  "SessionExportComptaId": 1234567,
  "FactureId": 1234567,
  "MailId": 1234567,
  "MandatSEPAId": 1234567,
  "TypePaiementId": 1234567,
  "CategoriePrestationId": 1234567,
  "PrestationId": 1234567,
  "LibellePeriode": "texte",
  "RefBalanceLiee": 0,
  "ModalitePourPrestationId": 1234567,
  "PeriodeId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Relance1": "2026-09-01T00:00:00+02:00",
  "Relance2": "2026-09-01T00:00:00+02:00",
  "Relance3": "2026-09-01T00:00:00+02:00",
  "ReferenceDossier": "texte",
  "NoteDetailId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#BalanceClient/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Montant": 0,
  "MontantHT": 0,
  "TauxTVA": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "PaiementON": false,
  "RejetON": false,
  "ODON": false,
  "OperationId": 1234567,
  "LibelleOperation": "texte",
  "EnNotrePossessionON": false,
  "Compte": "texte",
  "CodeAnalytique": "texte",
  "ReferenceTransaction": "texte",
  "Detail": "texte",
  "ClientId": 1234567,
  "AffaireId": 1234567,
  "SessionExportPrelevementId": 1234567,
  "SessionExportComptaId": 1234567,
  "FactureId": 1234567,
  "MailId": 1234567,
  "MandatSEPAId": 1234567,
  "TypePaiementId": 1234567,
  "CategoriePrestationId": 1234567,
  "PrestationId": 1234567,
  "LibellePeriode": "texte",
  "RefBalanceLiee": 0,
  "ModalitePourPrestationId": 1234567,
  "PeriodeId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Relance1": "2026-09-01T00:00:00+02:00",
  "Relance2": "2026-09-01T00:00:00+02:00",
  "Relance3": "2026-09-01T00:00:00+02:00",
  "ReferenceDossier": "texte",
  "NoteDetailId": 1234567
}
```

:::

## Supprimer une ligne de balance client

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceClient/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
