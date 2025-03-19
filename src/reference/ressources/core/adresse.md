# Adresse

## Créer une adresse

Avant de pouvoir créer votre adresse, il vous faudra l’identifiant du pays référencé.

[Lister les pays][lister-les-pays]

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Adresse \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  "Adresse1": "10 rue Pierre Gilles de Gennes",
  "Adresse2": "Bâtiment Odeon",
  "Adresse3": "",
  "Adresse4": "",
  "CodePostal": "76230",
  "Ville": "Quincampoix",
  "Cedex": "",
  "PaysId": 1155,
}' \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Adresse/$entity",
  "Id": 2410941,
  "Nom": "",
  "Code": "",
  "Adresse1": "10 rue Pierre Gilles de Gennes",
  "Adresse2": "Bâtiment Odeon",
  "Adresse3": "",
  "Adresse4": "",
  "CodePostal": "76230",
  "Ville": "Quincampoix",
  "Cedex": "",
  "PaysId": 1155,
  "DatePeremption": null
}
```

[lister-les-pays]: /reference/ressources/core/pays