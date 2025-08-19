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
  "@odata.context": "http://localhost:31766/$metadata#ReferenceExterne",
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