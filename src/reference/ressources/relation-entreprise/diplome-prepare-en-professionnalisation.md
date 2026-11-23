# Diplôme préparé en professionnalisation

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les diplômes préparés en professionnalisation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomeProfessionnalisation \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomeProfessionnalisation",
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

## Récupérer un diplôme préparé en professionnalisation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomeProfessionnalisation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomeProfessionnalisation/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NomExterne": ""
}
```

:::

## Créer un diplôme préparé en professionnalisation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomeProfessionnalisation \
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomeProfessionnalisation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomExterne": "texte"
}
```

:::

## Modifier un diplôme préparé en professionnalisation

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomeProfessionnalisation/1234567 \
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
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#DiplomeProfessionnalisation/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "NomExterne": "texte"
}
```

:::

## Supprimer un diplôme préparé en professionnalisation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/DiplomeProfessionnalisation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
