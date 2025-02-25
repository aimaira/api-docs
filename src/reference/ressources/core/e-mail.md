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

## Rechercher un e-mail existant

Cet endpoint retourne la liste des e-mails correspondants à l’adresse passée en paramètre.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Mail?$filter=Adresse eq 'mon.adresse@email.fr' \
    --header 'Content-Type: application/json' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "http://localhost:31766/$metadata#Mail",
  "value": [
    {
      "Id": 12345678,
      "Nom": "",
      "Code": "",
      "Adresse": "mon.adresse@email.fr",
      "IsDuplicate": false
    }
  ]
}
```

:::