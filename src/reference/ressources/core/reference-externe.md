# Référence externe

Certaines entités peuvent porter des références externes, afin de les lier à des référentiels externes.

## Lister la référence externe par identifiant d’entité

Afin de trouver la référence externe utilisée sur une entité, il suffit de passer l’identifiant de celle-ci.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceExterne?$filter=IdObjet eq 4524020 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse


::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferenceExterne",
  "value": [
    {
      "Id": 4524021,
      "Nom": "",
      "Code": "",
      "DateMAJ": "2025-05-18T00:46:56.53+02:00",
      "Reference": "REF_EXTERNE_12345",
      "Type": "pedagogie.T_SEQUENCE",
      "IdObjet": 4524020,
      "CRC": ""
    }
  ]
}
```

:::

## Lister toutes les références externes par type d’entité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceExterne?$filter=Type eq 'pedagogie.T_SEQUENCE' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse


::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferenceExterne",
  "value": [
    {
      "Id": 9394394,
      "Nom": "",
      "Code": "",
      "DateMAJ": null,
      "Reference": "REFERENCE_SEQUENCE_1",
      "Type": "pedagogie.T_SEQUENCE",
      "IdObjet": 2215821,
      "CRC": ""
    },
    {
      "Id": 4223517,
      "Nom": "",
      "Code": "",
      "DateMAJ": null,
      "Reference": "REFERENCE_SEQUENCE_2",
      "Type": "pedagogie.T_SEQUENCE",
      "IdObjet": 4223516,
      "CRC": ""
    },
    {
      "Id": 4223519,
      "Nom": "",
      "Code": "",
      "DateMAJ": null,
      "Reference": "REFERENCE_SEQUENCE_3",
      "Type": "pedagogie.T_SEQUENCE",
      "IdObjet": 4223518,
      "CRC": ""
    }
  ]
}
```

:::

## Ajouter une référence externe à une entité

Afin de lier une valeur externe à une entité, il est possible d’ajouter une référence externe pour celle-ci.
Une entité ne peut porter qu’une seule référence externe. Pour certaines entités, les références externes ne sont pas 
affichées dans l’interface d’administration et sont accessibles uniquement depuis l’API.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceExterne \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Reference": "09bb611f-b088-f011-b4cc-6045bddd270d",
  "Type": "recrutement.T_AGENT",
  "IdObjet": 2214939
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferenceExterne/$entity",
  "Id": 20790960,
  "Nom": "",
  "Code": "",
  "DateMAJ": null,
  "Reference": "09bb611f-b088-f011-b4cc-6045bddd270d",
  "Type": "recrutement.T_AGENT",
  "IdObjet": 2214939,
  "CRC": ""
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une référence externe avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceExterne/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferenceExterne/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "DateMAJ": null,
  "Reference": "",
  "Type": "",
  "IdObjet": 0,
  "CRC": ""
}
```

:::

## Modifier une référence externe

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceExterne/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DateMAJ": "2026-09-01T00:00:00+02:00",
  "Reference": "texte",
  "Type": "texte",
  "IdObjet": 0,
  "CRC": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferenceExterne/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DateMAJ": "2026-09-01T00:00:00+02:00",
  "Reference": "texte",
  "Type": "texte",
  "IdObjet": 0,
  "CRC": "texte"
}
```

:::

## Supprimer une référence externe

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferenceExterne/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
