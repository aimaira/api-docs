# Voie d’entrée

Pour s’afficher dans l’API, une voie d’entrée doit disposer d’une référence externe.

## Lister les voies d’entrées

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Recrutement
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Recrutement",
  "value": [
    {
      "Id": 2215184,
      "Nom": "23-26 Voie d’entrée",
      "Code": "",
      "ProgrammeId": 2215158,
      "ParcoursId": 2215168,
      "TypeRecrutementId": 0,
      "EtablissementId": 0,
      "TemplateIsic": 0,
      "Racine": "",
      "LibelleExterne": "Inscription Rentrée 2023",
      "PayePar": "",
      "CodesPieces": "NOTES/",
      "CodesPiecesOptionnelles": "RQTH/",
      "Debut": "2023-04-01T00:00:00+02:00",
      "Fin": "2023-12-01T00:00:00+01:00",
      "Rentree": "2023-10-02T00:00:00+02:00",
      "Accompte": 0.0,
      "Payant": false,
      "Reinscription": false,
      "Passage": false,
      "Diplomant": true,
      "EntiteJuridiqueId": null,
      "DebutFormation": null,
      "FinFormation": null,
      "EnqueteSISE": false,
      "EnqueteCTI": false,
      "EnqueteSISEDiplom": "",
      "EnqueteSISECompos": "",
      "ReferenceExterneId": 2253450,
      "Parametres": [
        {
          "Code": "templatePreInscription"
        },
        {
          "Code": "templateIdentifiant"
        },
        {
          "Code": "templateComplet"
        },
        {
          "Code": "templateConfirmation"
        },
        {
          "Code": "nomContact"
        },
        {
          "Code": "telephoneContact"
        },
        {
          "Code": "mailContact"
        },
        {
          "Code": "templateAcompte"
        },
        {
          "Code": "ouvertAlternance"
        }
      ]
    }
  ]
}
```

:::

## Créer une voie d’entrée

### Champs particuliers

#### `CodesPieces` et `CodesPiecesOptionnelles`

Ces deux champs listent les pièces justificatives demandées au candidat, respectivement obligatoires et facultatives.

Les valeurs attendues sont les **codes** des types de pièce, et non leurs identifiants. Ils sont séparés par le
caractère `/`, par exemple `NOTES/CV/`. Un code inconnu est ignoré silencieusement : la pièce correspondante n’est
alors pas demandée au candidat.

#### `Parametres`

Les champs personnalisés de la voie d’entrée se lisent avec `GET /Recrutement/{id}/Parametres`. À la création comme à la
modification, chaque champ envoyé est identifié par son `Code` :

- un code existant prend la nouvelle valeur, un code inconnu est ajouté ;
- les codes absents de la requête sont conservés ;
- une liste vide (`"Parametres": []`) supprime tous les champs personnalisés ;
- sans la propriété `Parametres`, les champs personnalisés ne changent pas.

```json
"Parametres": [
  { "Code": "CODE_DU_CHAMP", "Valeur": "Nouvelle valeur" }
]
```

### Données obligatoires

- `Nom`
- `ProgrammeId` *(voir [Programme][programme])*
- `Debut`
- `Fin`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Recrutement \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  "Nom": "Ma nouvelle voie d’entrée",
  "ProgrammeId": 2215158,
  "Debut": "2023-04-01T00:00:00+02:00",
  "Fin": "2023-12-01T00:00:00+01:00",
  "ParcoursId": 2215168,
  "LibelleExterne": "Inscription Rentrée 2023",
  "Rentree": "2023-10-02T00:00:00+02:00",
  "Diplomant": true,
  "CodesPieces": "NOTES/",
  "CodesPiecesOptionnelles": "RQTH/"
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

[programme]: /reference/ressources/core/programme

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une voie d’entrée ou de réinscription avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Recrutement/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Recrutement/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ProgrammeId": 0,
  "ParcoursId": 0,
  "TypeRecrutementId": 0,
  "EtablissementId": 0,
  "TemplateIsic": 0,
  "Racine": "",
  "LibelleExterne": "",
  "LibelleExterneEn": "",
  "PayePar": "",
  "CodesPieces": "",
  "CodesPiecesOptionnelles": "",
  "Debut": null,
  "Fin": null,
  "Rentree": null,
  "Accompte": 0,
  "Payant": false,
  "Reinscription": false,
  "Passage": false,
  "Diplomant": false,
  "EntiteJuridiqueId": 0,
  "DebutFormation": null,
  "FinFormation": null,
  "EnqueteSISE": false,
  "EnqueteCTI": false,
  "EnqueteSISEDiplom": "",
  "EnqueteSISECompos": "",
  "CodeAnalytique": "",
  "ReferenceExterneId": 0,
  "AutreInformation": ""
}
```

:::

## Modifier une voie d’entrée ou de réinscription

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Recrutement/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "ProgrammeId": 1234567,
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Recrutement/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "",
  "ProgrammeId": 1234567,
  "ParcoursId": 0,
  "TypeRecrutementId": 0,
  "EtablissementId": 0,
  "TemplateIsic": 0,
  "Racine": "",
  "LibelleExterne": "",
  "LibelleExterneEn": "",
  "PayePar": "",
  "CodesPieces": "",
  "CodesPiecesOptionnelles": "",
  "Debut": "2026-09-01T00:00:00+02:00",
  "Fin": "2026-09-01T00:00:00+02:00",
  "Rentree": null,
  "Accompte": 0,
  "Payant": false,
  "Reinscription": false,
  "Passage": false,
  "Diplomant": false,
  "EntiteJuridiqueId": 0,
  "DebutFormation": null,
  "FinFormation": null,
  "EnqueteSISE": false,
  "EnqueteCTI": false,
  "EnqueteSISEDiplom": "",
  "EnqueteSISECompos": "",
  "CodeAnalytique": "",
  "ReferenceExterneId": 0,
  "AutreInformation": ""
}
```

:::

## Supprimer une voie d’entrée ou de réinscription

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Recrutement/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
