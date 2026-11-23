# Spécialité

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les spécialités

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Specialite \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Specialite",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "ProgrammeId": 0,
      "LibelleExterne": "",
      "CodeAnalytique": "",
      "ReferenceExterne": ""
    }
  ]
}
```

:::

## Récupérer une spécialité avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Specialite/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Specialite/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "ProgrammeId": 0,
  "LibelleExterne": "",
  "CodeAnalytique": "",
  "ReferenceExterne": ""
}
```

:::

## Créer une spécialité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Specialite \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "LibelleExterne": "texte",
  "CodeAnalytique": "texte",
  "ReferenceExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Specialite/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "LibelleExterne": "texte",
  "CodeAnalytique": "texte",
  "ReferenceExterne": "texte"
}
```

:::

## Modifier une spécialité

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Specialite/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "LibelleExterne": "texte",
  "CodeAnalytique": "texte",
  "ReferenceExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Specialite/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "ProgrammeId": 1234567,
  "LibelleExterne": "texte",
  "CodeAnalytique": "texte",
  "ReferenceExterne": "texte"
}
```

:::

## Supprimer une spécialité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Specialite/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
