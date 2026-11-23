# Cours d’une séquence

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les cours des séquences

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceCours \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceCours",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "SequenceId": 0,
      "CoursId": 0,
      "Obligatoire": false,
      "Ponderation": 0,
      "Nbcredits": 0,
      "ModuleId": 0,
      "RegleCalculId": 0
    }
  ]
}
```

:::

## Récupérer un cours d’une séquence avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceCours/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceCours/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "SequenceId": 0,
  "CoursId": 0,
  "Obligatoire": false,
  "Ponderation": 0,
  "Nbcredits": 0,
  "ModuleId": 0,
  "RegleCalculId": 0
}
```

:::

## Créer un cours d’une séquence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceCours \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceId": 1234567,
  "CoursId": 1234567,
  "Obligatoire": false,
  "Ponderation": 0,
  "Nbcredits": 0,
  "ModuleId": 1234567,
  "RegleCalculId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceCours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceId": 1234567,
  "CoursId": 1234567,
  "Obligatoire": false,
  "Ponderation": 0,
  "Nbcredits": 0,
  "ModuleId": 1234567,
  "RegleCalculId": 1234567
}
```

:::

## Modifier un cours d’une séquence

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceCours/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceId": 1234567,
  "CoursId": 1234567,
  "Obligatoire": false,
  "Ponderation": 0,
  "Nbcredits": 0,
  "ModuleId": 1234567,
  "RegleCalculId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceCours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceId": 1234567,
  "CoursId": 1234567,
  "Obligatoire": false,
  "Ponderation": 0,
  "Nbcredits": 0,
  "ModuleId": 1234567,
  "RegleCalculId": 1234567
}
```

:::

## Supprimer un cours d’une séquence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceCours/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
