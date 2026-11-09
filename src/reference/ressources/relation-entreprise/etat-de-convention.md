# État de convention

## Lister les états de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatConvention \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EtatConvention",
  "value": [
    {
      "Id": 334217,
      "Nom": "En cours de saisie",
      "Code": "SAISIE",
      "Ordre": 10,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 334218,
      "Nom": "Validé apprenant",
      "Code": "APPRENANT",
      "Ordre": 20,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 334219,
      "Nom": "Validé école",
      "Code": "DOCUSIGN",
      "Ordre": 30,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 334220,
      "Nom": "Validé entreprise",
      "Code": "ENTR",
      "Ordre": 40,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 334221,
      "Nom": "Rupture",
      "Code": "RUPTURE",
      "Ordre": 60,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 2215087,
      "Nom": "Complet",
      "Code": "COMPLET",
      "Ordre": 50,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 2222187,
      "Nom": "Signé",
      "Code": "SIGNEDOCUSIGN",
      "Ordre": 70,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 2222196,
      "Nom": "En cours de saisie",
      "Code": "SAISIE",
      "Ordre": 10,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 2222197,
      "Nom": "Validé apprenant",
      "Code": "APPRENANT",
      "Ordre": 20,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 2222198,
      "Nom": "Validé école",
      "Code": "DOCUSIGN",
      "Ordre": 30,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 2222199,
      "Nom": "Validé entreprise",
      "Code": "ENTR",
      "Ordre": 40,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 2222200,
      "Nom": "Rupture",
      "Code": "RUPTURE",
      "Ordre": 60,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 2222201,
      "Nom": "Complet",
      "Code": "COMPLET",
      "Ordre": 50,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    },
    {
      "Id": 2222202,
      "Nom": "Signé",
      "Code": "SIGNEDOCUSIGN",
      "Ordre": 70,
      "MailUserId": 0,
      "MailInformationId": 0,
      "AfficheSuiviTransmission": false,
      "EnvoiCfadock": false,
      "ProgrammeTypeConventionId": 0
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un état de convention avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatConvention/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EtatConvention/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Ordre": 0,
  "MailUserId": 0,
  "MailInformationId": 0,
  "AfficheSuiviTransmission": false,
  "EnvoiCfadock": false,
  "ProgrammeTypeConventionId": 0,
  "EtatEcheancierApprentissageInitialId": 0
}
```

:::

## Créer un état de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatConvention \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Ordre": 0,
  "MailUserId": 1234567,
  "MailInformationId": 1234567,
  "AfficheSuiviTransmission": false,
  "EnvoiCfadock": false,
  "ProgrammeTypeConventionId": 1234567,
  "EtatEcheancierApprentissageInitialId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EtatConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Ordre": 0,
  "MailUserId": 1234567,
  "MailInformationId": 1234567,
  "AfficheSuiviTransmission": false,
  "EnvoiCfadock": false,
  "ProgrammeTypeConventionId": 1234567,
  "EtatEcheancierApprentissageInitialId": 1234567
}
```

:::

## Modifier un état de convention

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatConvention/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Ordre": 0,
  "MailUserId": 1234567,
  "MailInformationId": 1234567,
  "AfficheSuiviTransmission": false,
  "EnvoiCfadock": false,
  "ProgrammeTypeConventionId": 1234567,
  "EtatEcheancierApprentissageInitialId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EtatConvention/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Ordre": 0,
  "MailUserId": 1234567,
  "MailInformationId": 1234567,
  "AfficheSuiviTransmission": false,
  "EnvoiCfadock": false,
  "ProgrammeTypeConventionId": 1234567,
  "EtatEcheancierApprentissageInitialId": 1234567
}
```

:::

## Supprimer un état de convention

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatConvention/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
