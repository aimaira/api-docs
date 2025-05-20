# Instance

L’entité `Instance` regroupe les informations relatives à la configuration de l’instance d’AIMAIRA.

## Récupérer les informations de l’instance

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Instance \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "http://localhost:31766/$metadata#Instance/$entity",
  "Id": 74,
  "Nom": "MONINSTANCE",
  "FileSystemShareName": "instance"
}
```

:::