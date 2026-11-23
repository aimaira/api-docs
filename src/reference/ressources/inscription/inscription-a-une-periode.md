# Inscription à une période

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les inscriptions aux périodes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionPeriode \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionPeriode",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "InscriptionId": 0,
      "DecisionJuryId": 0,
      "PeriodeId": 0,
      "RegimeInscriptionId": 0,
      "DateInscriptionMutuelle": null,
      "EchelonBourseId": 0,
      "MutuelleId": 0,
      "Issue": "",
      "MotifExonerationMutuelle": "",
      "Boursier": false,
      "AttestationBourse": false,
      "AttestationExonerationSS": false,
      "Cesure": false,
      "Redoublant": false,
      "AnneeScolaire": 0,
      "DateEnvoiCertificat": null,
      "DateEnvoiBulletin": null,
      "DateFinResponsabiliteCivile": null,
      "EtatInscriptionId": 0,
      "RecrutementId": 0,
      "SpecialiteId": 0,
      "DateReinscription": null,
      "LibellePeriode": "",
      "Debut": null,
      "Fin": null,
      "DisplayLibellePeriode": "",
      "LibellePeriodeSpecifique": "",
      "CVEC": "",
      "CVECnomrenseigne": "",
      "CVECNumeroINE": "",
      "ModalitePaiementId": 0,
      "TypePaiementAcompteId": 0,
      "TypePaiementId": 0,
      "AlternanceSouhaitee": false,
      "FraisValider": false,
      "Acompte": 0,
      "DatePremiereConnexionReinscriptionIntranet": null,
      "LastRecrutementId": 0
    }
  ]
}
```

:::

## Récupérer une inscription à une période avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionPeriode/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionPeriode/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "InscriptionId": 0,
  "DecisionJuryId": 0,
  "PeriodeId": 0,
  "RegimeInscriptionId": 0,
  "DateInscriptionMutuelle": null,
  "EchelonBourseId": 0,
  "MutuelleId": 0,
  "Issue": "",
  "MotifExonerationMutuelle": "",
  "Boursier": false,
  "AttestationBourse": false,
  "AttestationExonerationSS": false,
  "Cesure": false,
  "Redoublant": false,
  "AnneeScolaire": 0,
  "DateEnvoiCertificat": null,
  "DateEnvoiBulletin": null,
  "DateFinResponsabiliteCivile": null,
  "EtatInscriptionId": 0,
  "RecrutementId": 0,
  "SpecialiteId": 0,
  "DateReinscription": null,
  "LibellePeriode": "",
  "Debut": null,
  "Fin": null,
  "DisplayLibellePeriode": "",
  "LibellePeriodeSpecifique": "",
  "CVEC": "",
  "CVECnomrenseigne": "",
  "CVECNumeroINE": "",
  "ModalitePaiementId": 0,
  "TypePaiementAcompteId": 0,
  "TypePaiementId": 0,
  "AlternanceSouhaitee": false,
  "FraisValider": false,
  "Acompte": 0,
  "DatePremiereConnexionReinscriptionIntranet": null,
  "LastRecrutementId": 0
}
```

:::

## Créer une inscription à une période

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionPeriode \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionId": 1234567,
  "DecisionJuryId": 1234567,
  "PeriodeId": 1234567,
  "RegimeInscriptionId": 1234567,
  "DateInscriptionMutuelle": "2026-09-01T00:00:00+02:00",
  "EchelonBourseId": 1234567,
  "MutuelleId": 1234567,
  "Issue": "texte",
  "MotifExonerationMutuelle": "texte",
  "Boursier": false,
  "AttestationBourse": false,
  "AttestationExonerationSS": false,
  "Cesure": false,
  "Redoublant": false,
  "AnneeScolaire": 0,
  "DateEnvoiCertificat": "2026-09-01T00:00:00+02:00",
  "DateEnvoiBulletin": "2026-09-01T00:00:00+02:00",
  "DateFinResponsabiliteCivile": "2026-09-01T00:00:00+02:00",
  "EtatInscriptionId": 1234567,
  "RecrutementId": 1234567,
  "SpecialiteId": 1234567,
  "DateReinscription": "2026-09-01T00:00:00+02:00",
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "DisplayLibellePeriode": "texte",
  "LibellePeriodeSpecifique": "texte",
  "CVEC": "texte",
  "CVECnomrenseigne": "texte",
  "CVECNumeroINE": "texte",
  "ModalitePaiementId": 1234567,
  "TypePaiementAcompteId": 1234567,
  "TypePaiementId": 1234567,
  "AlternanceSouhaitee": false,
  "FraisValider": false,
  "Acompte": 0,
  "DatePremiereConnexionReinscriptionIntranet": "2026-09-01T00:00:00+02:00",
  "LastRecrutementId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionPeriode/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionId": 1234567,
  "DecisionJuryId": 1234567,
  "PeriodeId": 1234567,
  "RegimeInscriptionId": 1234567,
  "DateInscriptionMutuelle": "2026-09-01T00:00:00+02:00",
  "EchelonBourseId": 1234567,
  "MutuelleId": 1234567,
  "Issue": "texte",
  "MotifExonerationMutuelle": "texte",
  "Boursier": false,
  "AttestationBourse": false,
  "AttestationExonerationSS": false,
  "Cesure": false,
  "Redoublant": false,
  "AnneeScolaire": 0,
  "DateEnvoiCertificat": "2026-09-01T00:00:00+02:00",
  "DateEnvoiBulletin": "2026-09-01T00:00:00+02:00",
  "DateFinResponsabiliteCivile": "2026-09-01T00:00:00+02:00",
  "EtatInscriptionId": 1234567,
  "RecrutementId": 1234567,
  "SpecialiteId": 1234567,
  "DateReinscription": "2026-09-01T00:00:00+02:00",
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "DisplayLibellePeriode": "texte",
  "LibellePeriodeSpecifique": "texte",
  "CVEC": "texte",
  "CVECnomrenseigne": "texte",
  "CVECNumeroINE": "texte",
  "ModalitePaiementId": 1234567,
  "TypePaiementAcompteId": 1234567,
  "TypePaiementId": 1234567,
  "AlternanceSouhaitee": false,
  "FraisValider": false,
  "Acompte": 0,
  "DatePremiereConnexionReinscriptionIntranet": "2026-09-01T00:00:00+02:00",
  "LastRecrutementId": 1234567
}
```

:::

## Modifier une inscription à une période

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionPeriode/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionId": 1234567,
  "DecisionJuryId": 1234567,
  "PeriodeId": 1234567,
  "RegimeInscriptionId": 1234567,
  "DateInscriptionMutuelle": "2026-09-01T00:00:00+02:00",
  "EchelonBourseId": 1234567,
  "MutuelleId": 1234567,
  "Issue": "texte",
  "MotifExonerationMutuelle": "texte",
  "Boursier": false,
  "AttestationBourse": false,
  "AttestationExonerationSS": false,
  "Cesure": false,
  "Redoublant": false,
  "AnneeScolaire": 0,
  "DateEnvoiCertificat": "2026-09-01T00:00:00+02:00",
  "DateEnvoiBulletin": "2026-09-01T00:00:00+02:00",
  "DateFinResponsabiliteCivile": "2026-09-01T00:00:00+02:00",
  "EtatInscriptionId": 1234567,
  "RecrutementId": 1234567,
  "SpecialiteId": 1234567,
  "DateReinscription": "2026-09-01T00:00:00+02:00",
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "DisplayLibellePeriode": "texte",
  "LibellePeriodeSpecifique": "texte",
  "CVEC": "texte",
  "CVECnomrenseigne": "texte",
  "CVECNumeroINE": "texte",
  "ModalitePaiementId": 1234567,
  "TypePaiementAcompteId": 1234567,
  "TypePaiementId": 1234567,
  "AlternanceSouhaitee": false,
  "FraisValider": false,
  "Acompte": 0,
  "DatePremiereConnexionReinscriptionIntranet": "2026-09-01T00:00:00+02:00",
  "LastRecrutementId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#InscriptionPeriode/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionId": 1234567,
  "DecisionJuryId": 1234567,
  "PeriodeId": 1234567,
  "RegimeInscriptionId": 1234567,
  "DateInscriptionMutuelle": "2026-09-01T00:00:00+02:00",
  "EchelonBourseId": 1234567,
  "MutuelleId": 1234567,
  "Issue": "texte",
  "MotifExonerationMutuelle": "texte",
  "Boursier": false,
  "AttestationBourse": false,
  "AttestationExonerationSS": false,
  "Cesure": false,
  "Redoublant": false,
  "AnneeScolaire": 0,
  "DateEnvoiCertificat": "2026-09-01T00:00:00+02:00",
  "DateEnvoiBulletin": "2026-09-01T00:00:00+02:00",
  "DateFinResponsabiliteCivile": "2026-09-01T00:00:00+02:00",
  "EtatInscriptionId": 1234567,
  "RecrutementId": 1234567,
  "SpecialiteId": 1234567,
  "DateReinscription": "2026-09-01T00:00:00+02:00",
  "LibellePeriode": "texte",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "DisplayLibellePeriode": "texte",
  "LibellePeriodeSpecifique": "texte",
  "CVEC": "texte",
  "CVECnomrenseigne": "texte",
  "CVECNumeroINE": "texte",
  "ModalitePaiementId": 1234567,
  "TypePaiementAcompteId": 1234567,
  "TypePaiementId": 1234567,
  "AlternanceSouhaitee": false,
  "FraisValider": false,
  "Acompte": 0,
  "DatePremiereConnexionReinscriptionIntranet": "2026-09-01T00:00:00+02:00",
  "LastRecrutementId": 1234567
}
```

:::

## Supprimer une inscription à une période

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/InscriptionPeriode/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
