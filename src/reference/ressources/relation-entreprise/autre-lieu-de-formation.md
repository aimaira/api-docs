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
  "@odata.context": "http://localhost:31766/$metadata#AutreLieuFormation",
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