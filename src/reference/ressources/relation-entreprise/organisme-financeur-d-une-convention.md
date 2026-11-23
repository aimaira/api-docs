# Organisme financeur d’une convention

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les organismes financeurs des conventions

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ConventionOrganismeFinanceur \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ConventionOrganismeFinanceur",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ConventionId": 0,
      "OrganismeFinanceurId": 0,
      "OrganismeFinanceurFacturationId": 0,
      "NumeroDossier": "",
      "NumeroDECA": "",
      "NumeroInterne": "",
      "StatutCFADOCK": "",
      "StatutTransmission": "",
      "DateEnvoiCFADOCK": null,
      "DateTransmissionHorsCFADOCK": null,
      "CodeAdherent": "",
      "DateReception": null,
      "DateEnvoi": null,
      "TypePriseCharge": "Entreprise",
      "TauxHoraire": 0,
      "EcheancierEntrepriseId": 0,
      "GestionnaireDossierId": 0,
      "AutreContactId": 0,
      "DernierCertificatEnvoye": false,
      "EtatEcheancierApprentissageOpcoId": 0
    }
  ]
}
```

:::

## Récupérer un organisme financeur d’une convention avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ConventionOrganismeFinanceur/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ConventionOrganismeFinanceur/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ConventionId": 0,
  "OrganismeFinanceurId": 0,
  "OrganismeFinanceurFacturationId": 0,
  "NumeroDossier": "",
  "NumeroDECA": "",
  "NumeroInterne": "",
  "StatutCFADOCK": "",
  "StatutTransmission": "",
  "DateEnvoiCFADOCK": null,
  "DateTransmissionHorsCFADOCK": null,
  "CodeAdherent": "",
  "DateReception": null,
  "DateEnvoi": null,
  "TypePriseCharge": "Entreprise",
  "TauxHoraire": 0,
  "EcheancierEntrepriseId": 0,
  "GestionnaireDossierId": 0,
  "AutreContactId": 0,
  "DernierCertificatEnvoye": false,
  "EtatEcheancierApprentissageOpcoId": 0
}
```

:::

## Créer un organisme financeur d’une convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ConventionOrganismeFinanceur \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "OrganismeFinanceurId": 1234567,
  "OrganismeFinanceurFacturationId": 1234567,
  "NumeroDossier": "texte",
  "NumeroDECA": "texte",
  "NumeroInterne": "texte",
  "StatutCFADOCK": "texte",
  "StatutTransmission": "texte",
  "DateEnvoiCFADOCK": "2026-09-01T00:00:00+02:00",
  "DateTransmissionHorsCFADOCK": "2026-09-01T00:00:00+02:00",
  "CodeAdherent": "texte",
  "DateReception": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "TypePriseCharge": "Entreprise",
  "TauxHoraire": 0,
  "EcheancierEntrepriseId": 1234567,
  "GestionnaireDossierId": 1234567,
  "AutreContactId": 1234567,
  "DernierCertificatEnvoye": false,
  "EtatEcheancierApprentissageOpcoId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ConventionOrganismeFinanceur/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "OrganismeFinanceurId": 1234567,
  "OrganismeFinanceurFacturationId": 1234567,
  "NumeroDossier": "texte",
  "NumeroDECA": "texte",
  "NumeroInterne": "texte",
  "StatutCFADOCK": "texte",
  "StatutTransmission": "texte",
  "DateEnvoiCFADOCK": "2026-09-01T00:00:00+02:00",
  "DateTransmissionHorsCFADOCK": "2026-09-01T00:00:00+02:00",
  "CodeAdherent": "texte",
  "DateReception": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "TypePriseCharge": "Entreprise",
  "TauxHoraire": 0,
  "EcheancierEntrepriseId": 1234567,
  "GestionnaireDossierId": 1234567,
  "AutreContactId": 1234567,
  "DernierCertificatEnvoye": false,
  "EtatEcheancierApprentissageOpcoId": 1234567
}
```

:::

## Modifier un organisme financeur d’une convention

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ConventionOrganismeFinanceur/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "OrganismeFinanceurId": 1234567,
  "OrganismeFinanceurFacturationId": 1234567,
  "NumeroDossier": "texte",
  "NumeroDECA": "texte",
  "NumeroInterne": "texte",
  "StatutCFADOCK": "texte",
  "StatutTransmission": "texte",
  "DateEnvoiCFADOCK": "2026-09-01T00:00:00+02:00",
  "DateTransmissionHorsCFADOCK": "2026-09-01T00:00:00+02:00",
  "CodeAdherent": "texte",
  "DateReception": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "TypePriseCharge": "Entreprise",
  "TauxHoraire": 0,
  "EcheancierEntrepriseId": 1234567,
  "GestionnaireDossierId": 1234567,
  "AutreContactId": 1234567,
  "DernierCertificatEnvoye": false,
  "EtatEcheancierApprentissageOpcoId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ConventionOrganismeFinanceur/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ConventionId": 1234567,
  "OrganismeFinanceurId": 1234567,
  "OrganismeFinanceurFacturationId": 1234567,
  "NumeroDossier": "texte",
  "NumeroDECA": "texte",
  "NumeroInterne": "texte",
  "StatutCFADOCK": "texte",
  "StatutTransmission": "texte",
  "DateEnvoiCFADOCK": "2026-09-01T00:00:00+02:00",
  "DateTransmissionHorsCFADOCK": "2026-09-01T00:00:00+02:00",
  "CodeAdherent": "texte",
  "DateReception": "2026-09-01T00:00:00+02:00",
  "DateEnvoi": "2026-09-01T00:00:00+02:00",
  "TypePriseCharge": "Entreprise",
  "TauxHoraire": 0,
  "EcheancierEntrepriseId": 1234567,
  "GestionnaireDossierId": 1234567,
  "AutreContactId": 1234567,
  "DernierCertificatEnvoye": false,
  "EtatEcheancierApprentissageOpcoId": 1234567
}
```

:::

<!-- reference:end -->
