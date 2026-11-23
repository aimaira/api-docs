# Balance enseignant

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une balance enseignant avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceEnseignant/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#BalanceEnseignant/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Quantite": 0,
  "MontantUnitaire": 0,
  "MontantUnitaireHT": 0,
  "TauxTVA": 0,
  "Montant": 0,
  "MontantCredit": 0,
  "MontantDebit": 0,
  "MontantTVA": 0,
  "Date": null,
  "CreditON": false,
  "PaiementON": false,
  "RejetON": false,
  "OperationId": 0,
  "libelleOperation": "",
  "EchuON": false,
  "Compte": "",
  "CompteC": "",
  "CompteD": "",
  "CodeAnalytique": "",
  "Detail": "",
  "EnseignantId": 0,
  "SessionExportVirementId": 0,
  "SessionExportComptaId": 0,
  "Facture": "",
  "MailId": 0,
  "MandatSEPAId": 0,
  "TypePaiementId": 0,
  "TypePrestationRHId": 0,
  "EstGele": false,
  "RefBalanceLiee": 0,
  "PeriodeId": 0
}
```

:::

## Créer une balance enseignant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceEnseignant \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Quantite": 0,
  "MontantUnitaire": 0,
  "MontantUnitaireHT": 0,
  "TauxTVA": 0,
  "Montant": 0,
  "MontantCredit": 0,
  "MontantDebit": 0,
  "MontantTVA": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "PaiementON": false,
  "RejetON": false,
  "OperationId": 1234567,
  "libelleOperation": "texte",
  "EchuON": false,
  "Compte": "texte",
  "CompteC": "texte",
  "CompteD": "texte",
  "CodeAnalytique": "texte",
  "Detail": "texte",
  "EnseignantId": 1234567,
  "SessionExportVirementId": 1234567,
  "SessionExportComptaId": 1234567,
  "Facture": "texte",
  "MailId": 1234567,
  "MandatSEPAId": 1234567,
  "TypePaiementId": 1234567,
  "TypePrestationRHId": 1234567,
  "EstGele": false,
  "RefBalanceLiee": 0,
  "PeriodeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#BalanceEnseignant/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Quantite": 0,
  "MontantUnitaire": 0,
  "MontantUnitaireHT": 0,
  "TauxTVA": 0,
  "Montant": 0,
  "MontantCredit": 0,
  "MontantDebit": 0,
  "MontantTVA": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "PaiementON": false,
  "RejetON": false,
  "OperationId": 1234567,
  "libelleOperation": "texte",
  "EchuON": false,
  "Compte": "texte",
  "CompteC": "texte",
  "CompteD": "texte",
  "CodeAnalytique": "texte",
  "Detail": "texte",
  "EnseignantId": 1234567,
  "SessionExportVirementId": 1234567,
  "SessionExportComptaId": 1234567,
  "Facture": "texte",
  "MailId": 1234567,
  "MandatSEPAId": 1234567,
  "TypePaiementId": 1234567,
  "TypePrestationRHId": 1234567,
  "EstGele": false,
  "RefBalanceLiee": 0,
  "PeriodeId": 1234567
}
```

:::

## Modifier une balance enseignant

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceEnseignant/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Quantite": 0,
  "MontantUnitaire": 0,
  "MontantUnitaireHT": 0,
  "TauxTVA": 0,
  "Montant": 0,
  "MontantCredit": 0,
  "MontantDebit": 0,
  "MontantTVA": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "PaiementON": false,
  "RejetON": false,
  "OperationId": 1234567,
  "libelleOperation": "texte",
  "EchuON": false,
  "Compte": "texte",
  "CompteC": "texte",
  "CompteD": "texte",
  "CodeAnalytique": "texte",
  "Detail": "texte",
  "EnseignantId": 1234567,
  "SessionExportVirementId": 1234567,
  "SessionExportComptaId": 1234567,
  "Facture": "texte",
  "MailId": 1234567,
  "MandatSEPAId": 1234567,
  "TypePaiementId": 1234567,
  "TypePrestationRHId": 1234567,
  "EstGele": false,
  "RefBalanceLiee": 0,
  "PeriodeId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#BalanceEnseignant/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Quantite": 0,
  "MontantUnitaire": 0,
  "MontantUnitaireHT": 0,
  "TauxTVA": 0,
  "Montant": 0,
  "MontantCredit": 0,
  "MontantDebit": 0,
  "MontantTVA": 0,
  "Date": "2026-09-01T00:00:00+02:00",
  "CreditON": false,
  "PaiementON": false,
  "RejetON": false,
  "OperationId": 1234567,
  "libelleOperation": "texte",
  "EchuON": false,
  "Compte": "texte",
  "CompteC": "texte",
  "CompteD": "texte",
  "CodeAnalytique": "texte",
  "Detail": "texte",
  "EnseignantId": 1234567,
  "SessionExportVirementId": 1234567,
  "SessionExportComptaId": 1234567,
  "Facture": "texte",
  "MailId": 1234567,
  "MandatSEPAId": 1234567,
  "TypePaiementId": 1234567,
  "TypePrestationRHId": 1234567,
  "EstGele": false,
  "RefBalanceLiee": 0,
  "PeriodeId": 1234567
}
```

:::

## Supprimer une balance enseignant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BalanceEnseignant/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
