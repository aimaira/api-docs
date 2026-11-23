# Type de contrat de professionnalisation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les types de contrat de professionnalisation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeContratProfessionnalisation \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeContratProfessionnalisation",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "NomExterne": ""
    }
  ]
}
```

:::

## Récupérer un type de contrat de professionnalisation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeContratProfessionnalisation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeContratProfessionnalisation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NomExterne": ""
}
```

:::

## Créer un type de contrat de professionnalisation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeContratProfessionnalisation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NomExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeContratProfessionnalisation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomExterne": "texte"
}
```

:::

## Modifier un type de contrat de professionnalisation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeContratProfessionnalisation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "NomExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#TypeContratProfessionnalisation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomExterne": "texte"
}
```

:::

## Supprimer un type de contrat de professionnalisation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/TypeContratProfessionnalisation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
