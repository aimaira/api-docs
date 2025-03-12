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
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Note/$entity",
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