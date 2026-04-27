# Directory

## Afficher les informations d’un dossier à partir d’un chemin

### Obtenir le `FileSystemShareName`

Chaque dossier est lié à un système de fichiers. Le nom de ce partage de fichier est disponible dans l’entité `Instance`
et récupérable via un appel au [point d’entrée Instance][instance].

### Récupérer un dossier de l’arborescence

`FilePath` correspond à un dossier dans l’arborescence disponible dans l’interface d’administration (par exemple 
A00001).

::: warning Note

Si l’option de requête `$filter=path eq ...` n’est pas spécifiée, ce point d’entrée retourne systématiquement une liste
vide.

:::

::: code-group

```bash [cURL]
curl 'https://myapi.aimaira.net/GraphV1/Directory?$filter=path eq {FileSystemShareName}\{FilePath}'  \
  -u 'nomdutilisateur:motdepasse'
```

### Dossier racine

Le dossier racine est récupérable en passant uniquement le `FileSystemShareName` comme suit.

::: code-group

```bash [cURL]
curl 'https://myapi.aimaira.net/GraphV1/Directory?$filter=path eq {FileSystemShareName}'  \
  -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Directory",
  "value": [
    {
      "Streamid": "4ad48217-bd62-43bb-82ac-91187c7994ef",
      "Name": "moncampus",
      "Creation_time": "2015-07-15T00:00:00+02:00",
      "Update_time": null,
      "Delete_time": null,
      "Last_access_time": null,
      "Isdirectory": true,
      "File_extension": "",
      "Path": "moncampus",
      "Size": 0,
      "stream": "",
      "Id": 2
    }
  ]
}
```

:::

## Créer un dossier

Il est parfois nécessaire de créer un dossier de l’arborescence s’il n’existe pas encore.
La propriété `Streamid` correspond à l’id du dossier parent. 

Si ce dossier doit être à la racine, le `Streamid` correspond au dossier racine.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Directory  \
  --request POST \
  --data '{
  "Nom": "A00001",
  "Streamid": "4ad48217-bd62-43bb-82ac-91187c7994ef"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Edm.Guid",
    "value": "60ab4e78-ff61-4e90-a230-b91346ad17b7"
}
```

:::

`value` correspond à l’id du dossier créé.

## Lister les dossiers et fichiers d’un dossier

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Directory/e41f31cf-faaa-4afe-a12f-5ec61cc5beaa \
  -u 'nomdutilisateur:motdepasse'
```

### Réponse

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Directory",
  "value": [
    {
      "Streamid": "d967ef6f-0b68-42a6-8c30-3f95101e141d",
      "Name": "A00550.jpg",
      "Creation_time": "2026-02-16T17:34:16.14Z",
      "Update_time": "2026-02-16T17:34:16.14Z",
      "Delete_time": null,
      "Last_access_time": "2026-02-16T17:34:16.14Z",
      "Isdirectory": false,
      "File_extension": ".jpg",
      "Path": null,
      "Size": 0,
      "stream": "",
      "Id": 133018
    },
    {
      "Streamid": "213de897-28cd-4471-bcd7-e0dea2cbc5d4",
      "Name": "DossierA",
      "Creation_time": "2026-02-16T17:34:16.2433333Z",
      "Update_time": "2026-02-16T17:34:16.2433333Z",
      "Delete_time": null,
      "Last_access_time": "2026-02-16T17:34:16.2433333Z",
      "Isdirectory": true,
      "File_extension": "",
      "Path": null,
      "Size": 0,
      "stream": "",
      "Id": 133019
    }
  ]
}
```

[instance]: /reference/ressources/core/instance