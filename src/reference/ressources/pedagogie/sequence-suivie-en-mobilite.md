# Séquence suivie en mobilité

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une séquence suivie en mobilité avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceOutgoing/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceOutgoing/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "InscriptionSequenceId": 0,
  "PartenaireId": 0,
  "LearningAgreement": false,
  "Valide": false,
  "ResultatObtenu": false
}
```

:::

## Créer une séquence suivie en mobilité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceOutgoing \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionSequenceId": 1234567,
  "PartenaireId": 1234567,
  "LearningAgreement": false,
  "Valide": false,
  "ResultatObtenu": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceOutgoing/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionSequenceId": 1234567,
  "PartenaireId": 1234567,
  "LearningAgreement": false,
  "Valide": false,
  "ResultatObtenu": false
}
```

:::

## Modifier une séquence suivie en mobilité

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceOutgoing/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionSequenceId": 1234567,
  "PartenaireId": 1234567,
  "LearningAgreement": false,
  "Valide": false,
  "ResultatObtenu": false
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SequenceOutgoing/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "InscriptionSequenceId": 1234567,
  "PartenaireId": 1234567,
  "LearningAgreement": false,
  "Valide": false,
  "ResultatObtenu": false
}
```

:::

## Supprimer une séquence suivie en mobilité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SequenceOutgoing/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
