# E-mail

## Création d’un e-mail

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Mail \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Mail/$entity",
  "Adresse": "jean.dupont@ecole.fr",
  "IsDuplicate": false
}' \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Mail/$entity",
  "Id": 2253448,
  "Nom": "",
  "Code": "",
  "Adresse": "jean.dupont@ecole.fr",
  "IsDuplicate": false
}
```

:::
