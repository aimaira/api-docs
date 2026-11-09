# Note

L’entité `Note` contient du texte qui peut être lié à une autre entité.

## Créer une note

### Données obligatoires

- `NoteText`, le contenu textuel de la note

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Note \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "NoteText": "Mon texte"
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Note/$entity",
  "Id": "16751724",
  "Nom": "",
  "Code": "",
  "NoteText": "Mon texte"
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer une note avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Note/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Note/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NoteText": ""
}
```

:::

## Modifier une note

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Note/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "NoteText": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Note/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "NoteText": "texte"
}
```

:::

## Supprimer une note

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Note/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
