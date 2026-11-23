# Cours suivi en mobilité

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un cours suivi en mobilité avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CoursOutgoing/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CoursOutgoing/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "SequenceOutgoingId": 0,
  "Valide": false,
  "CreditObtenu": 0,
  "Credit": 0,
  "Note": ""
}
```

:::

## Créer un cours suivi en mobilité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CoursOutgoing \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceOutgoingId": 1234567,
  "Valide": false,
  "CreditObtenu": 0,
  "Credit": 0,
  "Note": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CoursOutgoing/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceOutgoingId": 1234567,
  "Valide": false,
  "CreditObtenu": 0,
  "Credit": 0,
  "Note": "texte"
}
```

:::

## Modifier un cours suivi en mobilité

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CoursOutgoing/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceOutgoingId": 1234567,
  "Valide": false,
  "CreditObtenu": 0,
  "Credit": 0,
  "Note": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CoursOutgoing/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "SequenceOutgoingId": 1234567,
  "Valide": false,
  "CreditObtenu": 0,
  "Credit": 0,
  "Note": "texte"
}
```

:::

## Supprimer un cours suivi en mobilité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CoursOutgoing/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
