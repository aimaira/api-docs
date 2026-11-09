# Programme

## Lister les programmes

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Programme \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Programme(Parametres())",
  "value": [
    {
      "Id": 2215158,
      "Nom": "PGE",
      "Code": "PGE",
      "EntiteJuridiqueId": 2215156,
      "EtablissementId": 0,
      "EcoleId": 2215157,
      "diplomeViseEJ20Id": 0,
      "diplomeViseFA13Id": 2214615,
      "IntitulePrecisDiplomeCERFA": "Programme Grande Ecole",
      "CodeDroit": "PGE",
      "CodeAnalytique": "",
      "Extension": "",
      "Marque": "Ecole",
      "Campus": "Campus",
      "SC": "",
      "AgeMin": 0,
      "AgeMax": 100,
      "NbAnnee": 3,
      "LibelleExterne": "Programme Grande Ecole",
      "TemplateUserId": 0,
      "NiveauViseLibelleExterne": "Niveau 7",
      "LibelleRNCP": "Programme Grande Ecole",
      "EnqueteSISE": true,
      "EnqueteCTI": false,
      "EnqueteSISEDiplom": "00X00000",
      "EnqueteSISECompos": "",
      "CodeRNCP": "00000",
      "Parametres": [
        {
          "Id": 0,
          "Code": "DIPLOM",
          "Valeur": ""
        },
        {
          "Id": 0,
          "Code": "COMPOS",
          "Valeur": ""
        }
      ]
    }
  ]
}
```

:::

## Créer un programme

### Champs particuliers

#### `Marque` et `Campus`

Ces deux champs sont historiques et ne sont plus utilisés. Le rattachement se fait par les champs relationnels
`EcoleId` et `EntiteJuridiqueId`.

- [Marque][marque]
- [Campus][campus]

#### `Parametres`

Les champs personnalisés du programme se lisent avec `GET /Programme/{id}/Parametres`. À la création comme à la
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
- `Code`
- `EntiteJuridiqueId` *(voir [Campus][campus])*
- `CodeDroit`

Fortement recommandées, sans être rejetées si elles sont absentes :

- `EcoleId` *(voir [Marque][marque])*
- `CodeAnalytique`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Programme \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "Nom": "Mon programme",
    "Code": "MON_PROGRAMME",
    "EntiteJuridiqueId": 2215156,
    "EcoleId": 2215157,
    "CodeDroit": "MON_PROGRAMME",
    "CodeAnalytique": "MON_PROGRAMME"
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Programme/$entity",
  "Id": 2253499,
  "Nom": "Mon programme",
  "Code": "MON_PROGRAMME",
  "EntiteJuridiqueId": 2215156,
  "EtablissementId": 0,
  "EcoleId": 2215157,
  "diplomeViseEJ20Id": 0,
  "diplomeViseFA13Id": 0,
  "IntitulePrecisDiplomeCERFA": "",
  "CodeDroit": "MON_PROGRAMME",
  "CodeAnalytique": "MON_PROGRAMME",
  "Extension": "",
  "Marque": "",
  "Campus": null,
  "SC": "",
  "AgeMin": 0,
  "AgeMax": 0,
  "NbAnnee": 0,
  "LibelleExterne": "",
  "TemplateUserId": 0,
  "NiveauViseLibelleExterne": "",
  "LibelleRNCP": "",
  "EnqueteSISE": false,
  "EnqueteCTI": false,
  "EnqueteSISEDiplom": "",
  "EnqueteSISECompos": "",
  "CodeRNCP": null
}
```

:::

[campus]: /reference/ressources/core/campus
[marque]: /reference/ressources/core/marque

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un programme avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Programme/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Programme/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EntiteJuridiqueId": 0,
  "EtablissementId": 0,
  "EcoleId": 0,
  "diplomeViseEJ20Id": 0,
  "diplomeViseFA13Id": 0,
  "IntitulePrecisDiplomeCERFA": "",
  "CodeDroit": "",
  "CodeAnalytique": "",
  "Extension": "",
  "Marque": "",
  "Campus": "",
  "SC": "",
  "AgeMin": 0,
  "AgeMax": 0,
  "NbAnnee": 0,
  "LibelleExterne": "",
  "TemplateUserId": 0,
  "NiveauViseLibelleExterne": "",
  "LibelleRNCP": "",
  "EnqueteSISE": false,
  "EnqueteCTI": false,
  "EnqueteSISEDiplom": "",
  "EnqueteSISECompos": "",
  "CodeRNCP": "",
  "CodeDiplome": "",
  "DureeFormation": 0,
  "NbHeureFormationDistancielle": 0,
  "QualificationViseeProfessionnalisationId": 0,
  "SpecialiteProfessionnalisationId": 0
}
```

:::

## Modifier un programme

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Programme/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "EcoleId": 1234567,
  "CodeDroit": "texte",
  "CodeAnalytique": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Programme/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EntiteJuridiqueId": 1234567,
  "EtablissementId": 0,
  "EcoleId": 1234567,
  "diplomeViseEJ20Id": 0,
  "diplomeViseFA13Id": 0,
  "IntitulePrecisDiplomeCERFA": "",
  "CodeDroit": "texte",
  "CodeAnalytique": "texte",
  "Extension": "",
  "Marque": "",
  "Campus": "",
  "SC": "",
  "AgeMin": 0,
  "AgeMax": 0,
  "NbAnnee": 0,
  "LibelleExterne": "",
  "TemplateUserId": 0,
  "NiveauViseLibelleExterne": "",
  "LibelleRNCP": "",
  "EnqueteSISE": false,
  "EnqueteCTI": false,
  "EnqueteSISEDiplom": "",
  "EnqueteSISECompos": "",
  "CodeRNCP": "",
  "CodeDiplome": "",
  "DureeFormation": 0,
  "NbHeureFormationDistancielle": 0,
  "QualificationViseeProfessionnalisationId": 0,
  "SpecialiteProfessionnalisationId": 0
}
```

:::

## Supprimer un programme

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Programme/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
