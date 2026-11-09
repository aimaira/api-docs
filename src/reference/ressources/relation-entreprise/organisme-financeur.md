# Organisme financeur

Tantôt appelé OPCA (Organismes Paritaires Collecteurs Agréés), tantôt appelé OPCO (OPérateurs de COmpétences) dans
AIMAIRA pour des raisons historiques, l’entité appelée organisme financeur représentent le financeur d’une formation, en
relation avec une convention.

## Lister les organismes financeurs

::: code-group

```bash [cURL]
curl 'https://myapi.aimaira.net/GraphV1/OPCA' \
  -u 'nomdutilisateur:motdepasse'
```

:::

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#OPCA",
  "value": [
    {
      "Id": 2214763,
      "Nom": "AFDAS",
      "Code": "OFP1",
      "EntiteJuridiqueId": 74,
      "RefClient": 2214756,
      "AdresseId": 0,
      "EntrepriseId": null,
      "CommentaireId": 0,
      "ContactId": null,
      "NouvelleReference": 0,
      "LibelleExterne": "AFDAS",
      "ClefCFADock": "",
      "CFADockdossier": false,
      "CFADockfacture": false,
      "FA13v10": false
    },
    {
      "Id": 2214779,
      "Nom": "AKTO",
      "Code": "OFP2",
      "EntiteJuridiqueId": 74,
      "RefClient": 2214772,
      "AdresseId": 0,
      "EntrepriseId": null,
      "CommentaireId": 0,
      "ContactId": null,
      "NouvelleReference": 0,
      "LibelleExterne": "AKTO - OPCO DES ENTREPRISES ET DES SALARIÉS À FORTE INTENSITÉ DE MAIN-D’ŒUVRE",
      "ClefCFADock": "",
      "CFADockdossier": false,
      "CFADockfacture": false,
      "FA13v10": false
    },
    {
      "Id": 2214795,
      "Nom": "ATLAS",
      "Code": "OFP3",
      "EntiteJuridiqueId": 74,
      "RefClient": 2214788,
      "AdresseId": 0,
      "EntrepriseId": null,
      "CommentaireId": 0,
      "ContactId": null,
      "NouvelleReference": 0,
      "LibelleExterne": "ATLAS",
      "ClefCFADock": "",
      "CFADockdossier": false,
      "CFADockfacture": false,
      "FA13v10": false
    },
    ...
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un organisme financeur avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/OPCA/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#OPCA/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "RefClient": 0,
  "AdresseId": 0,
  "EntrepriseId": 0,
  "CommentaireId": 0,
  "ContactId": 0,
  "NouvelleReference": 0,
  "LibelleExterne": "",
  "ClefCFADock": "",
  "CleAuthentification_DateFinValidite": null,
  "CFADockdossier": false,
  "CFADockfacture": false,
  "FA13v10": false,
  "CodeAdressage": ""
}
```

:::

## Créer un organisme financeur

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/OPCA \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "RefClient": 0,
  "AdresseId": 1234567,
  "EntrepriseId": 1234567,
  "CommentaireId": 1234567,
  "ContactId": 1234567,
  "NouvelleReference": 0,
  "LibelleExterne": "texte",
  "ClefCFADock": "texte",
  "CleAuthentification_DateFinValidite": "2026-09-01T00:00:00+02:00",
  "CFADockdossier": false,
  "CFADockfacture": false,
  "FA13v10": false,
  "CodeAdressage": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#OPCA/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "RefClient": 0,
  "AdresseId": 1234567,
  "EntrepriseId": 1234567,
  "CommentaireId": 1234567,
  "ContactId": 1234567,
  "NouvelleReference": 0,
  "LibelleExterne": "texte",
  "ClefCFADock": "texte",
  "CleAuthentification_DateFinValidite": "2026-09-01T00:00:00+02:00",
  "CFADockdossier": false,
  "CFADockfacture": false,
  "FA13v10": false,
  "CodeAdressage": "texte"
}
```

:::

## Modifier un organisme financeur

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/OPCA/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "RefClient": 0,
  "AdresseId": 1234567,
  "EntrepriseId": 1234567,
  "CommentaireId": 1234567,
  "ContactId": 1234567,
  "NouvelleReference": 0,
  "LibelleExterne": "texte",
  "ClefCFADock": "texte",
  "CleAuthentification_DateFinValidite": "2026-09-01T00:00:00+02:00",
  "CFADockdossier": false,
  "CFADockfacture": false,
  "FA13v10": false,
  "CodeAdressage": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#OPCA/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "RefClient": 0,
  "AdresseId": 1234567,
  "EntrepriseId": 1234567,
  "CommentaireId": 1234567,
  "ContactId": 1234567,
  "NouvelleReference": 0,
  "LibelleExterne": "texte",
  "ClefCFADock": "texte",
  "CleAuthentification_DateFinValidite": "2026-09-01T00:00:00+02:00",
  "CFADockdossier": false,
  "CFADockfacture": false,
  "FA13v10": false,
  "CodeAdressage": "texte"
}
```

:::

## Supprimer un organisme financeur

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/OPCA/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
