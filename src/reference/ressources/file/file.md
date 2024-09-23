# File

## Créer un fichier

Cette entité représente un fichier lié à une autre entité et disponible dans l’onglet Fichier de l’interface 
d’administration.

La valeur du champ `StreamId` correspond au `Streamid` dossier et le champ `stream` correspond contenu du fichier encodé
en base64.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/File  \
  --request POST \
  --data '{
  "Streamid": "5c4d60ce-7ab2-4ddd-8d89-2c956b012d4a",
  "Name": "A00005.jpg",
  "File_extension": ".jpg",
  "stream": "NjIxNiA6IA0KIC0gTW....................0aW9ubmFpcmUNCg=="
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#File/$entity",
  "Streamid": "1eaf9480-8680-4370-be16-6ce4d67b79fc",
  "Name": "A00005.jpg",
  "Creation_time": "2024-05-21T10:17:57.3766667Z",
  "Update_time": "2024-05-21T10:17:57.3766667Z",
  "Delete_time": null,
  "Last_access_time": "2024-05-21T10:17:57.3766667Z",
  "Isdirectory": false,
  "File_extension": ".jpg",
  "Size": 3178,
  "stream": "NjIxNiA6IA0KIC0gTW....................0aW9ubmFpcmUNCg==",
  "Id": 32
}
```

:::

