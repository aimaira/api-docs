# E-mail

## Créer un e-mail

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Mail \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Mail",
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

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un e-mail avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Mail/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Mail/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Adresse": "",
  "IsDuplicate": false
}
```

:::

## Modifier un e-mail

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Mail/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Adresse": "texte",
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
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Adresse": "texte",
  "IsDuplicate": false
}
```

:::

## Supprimer un e-mail

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Mail/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
