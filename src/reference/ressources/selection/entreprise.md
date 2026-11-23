# Entreprise

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une entreprise avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Entreprise/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Entreprise/$entity",
  "MailId": 0,
  "AdresseId": 0,
  "TelephoneId": 0,
  "SIRET": "",
  "NAF": "",
  "TVAintracommunautaire": "",
  "ConventionCollective": "",
  "IDCC": "",
  "Effectif": 0,
  "RefCompte": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une entreprise

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Entreprise \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "MailId": 1234567,
  "AdresseId": 1234567,
  "TelephoneId": 1234567,
  "SIRET": "texte",
  "NAF": "texte",
  "TVAintracommunautaire": "texte",
  "ConventionCollective": "texte",
  "IDCC": "texte",
  "Effectif": 0,
  "RefCompte": 0,
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Entreprise/$entity",
  "MailId": 1234567,
  "AdresseId": 1234567,
  "TelephoneId": 1234567,
  "SIRET": "texte",
  "NAF": "texte",
  "TVAintracommunautaire": "texte",
  "ConventionCollective": "texte",
  "IDCC": "texte",
  "Effectif": 0,
  "RefCompte": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une entreprise

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Entreprise/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "MailId": 1234567,
  "AdresseId": 1234567,
  "TelephoneId": 1234567,
  "SIRET": "texte",
  "NAF": "texte",
  "TVAintracommunautaire": "texte",
  "ConventionCollective": "texte",
  "IDCC": "texte",
  "Effectif": 0,
  "RefCompte": 0,
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#Entreprise/$entity",
  "MailId": 1234567,
  "AdresseId": 1234567,
  "TelephoneId": 1234567,
  "SIRET": "texte",
  "NAF": "texte",
  "TVAintracommunautaire": "texte",
  "ConventionCollective": "texte",
  "IDCC": "texte",
  "Effectif": 0,
  "RefCompte": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une entreprise

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/Entreprise/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
