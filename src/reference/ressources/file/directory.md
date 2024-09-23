# Directory

## Afficher les informations d’un dossier à partir d’un chemin

### Obtenir le `FileSystemRoot`

Chaque dossier est lié à une racine de système de fichiers. Cette information est disponible dans l’entité `Campus` et
récupérable via un appel au [point d’entrée Campus][campus].

### Récupérer un dossier de l’arborescence

`FilePath` correspond à un dossier dans l’arborescence disponible dans l’interface d’administration (par exemple 
A00001).

::: warning Note

Si l’option de requête `$filter=path eq ...` n’est pas spécifiée, ce point d’entrée retourne systématiquement une liste
vide.

:::

::: code-group

```bash [cURL]
curl 'https://myapi.aimaira.net/GraphV1/Directory?$filter=path eq {FileSystemRoot}\{FilePath}'  \
  -u 'nomdutilisateur:motdepasse'
```

### Dossier racine

Le dossier racine est récupérable en passant uniquement le `FileSystemRoot` comme suit.

::: code-group

```bash [cURL]
curl 'https://myapi.aimaira.net/GraphV1/Directory?$filter=path eq {FileSystemRoot}'  \
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

[campus]: /reference/ressources/core/campus#afficher-les-donnees-d-un-campus