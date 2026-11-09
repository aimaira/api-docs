# Autre lieu de formation

## Lister les autres lieux de formation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AutreLieuFormation
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AutreLieuFormation",
  "value": [
    {
      "Id": 15647949,
      "Nom": "",
      "Code": "CFQISX",
      "AdresseId": 15647950,
      "PaysId": 1155,
      "Libelle": "CFQ Issy Les Moulineaux",
      "Siret": "401 325 832 00079",
      "Uai": "0922139A"
    },
    {
      "Id": 15647951,
      "Nom": "",
      "Code": "CFQBOT",
      "AdresseId": 15647952,
      "PaysId": 1155,
      "Libelle": "CFQ Boulogne Billancourt",
      "Siret": "401 325 832 00103",
      "Uai": "0923022K"
    },
    ...
  ]
}
```

:::

## Créer un autre lieu de formation

Avant de pouvoir créer un autre lieu de formation, il vous faudra d’abord [créer l’adresse][creer-adresse] et 
[récupérer l’identifiant du pays souhaité][recuperer-pays].

### Données obligatoires

- `Code`, un code unique identifiant l’autre lieu de formation
- `AdresseId`
- `PaysId`
- `Libelle`
- `Siret`, le SIRET de l’autre lieu de formation
- `Uai`, le numéro UAI (Unité Administrative Immatriculée) est composé de 7 chiffres et 1 lettre.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AutreLieuFormation \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
  "Code": "CODE_LF_1",
  "AdresseId": 123456,
  "PaysId": 1155,
  "Libelle": "CFQ Boulogne Billancourt",
  "Siret": "401 325 832 00103",
  "Uai": "0923022K"
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
```

:::

[creer-adresse]: /reference/ressources/core/adresse
[recuperer-pays]: /reference/ressources/core/pays

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un autre lieu de formation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AutreLieuFormation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AutreLieuFormation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "AdresseId": 0,
  "PaysId": 0,
  "Libelle": "",
  "LibelleExterne": "",
  "Siret": "",
  "Uai": "",
  "Mail": "",
  "Telephone": ""
}
```

:::

## Modifier un autre lieu de formation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AutreLieuFormation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Code": "CODE",
  "AdresseId": 1234567,
  "PaysId": 1234567,
  "Libelle": "texte",
  "Siret": "texte",
  "Uai": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#AutreLieuFormation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "CODE",
  "AdresseId": 1234567,
  "PaysId": 1234567,
  "Libelle": "texte",
  "LibelleExterne": "",
  "Siret": "texte",
  "Uai": "texte",
  "Mail": "",
  "Telephone": ""
}
```

:::

## Supprimer un autre lieu de formation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/AutreLieuFormation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
