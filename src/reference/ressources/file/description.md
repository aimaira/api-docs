# Description

## Créer une description

- `Streamid` correspond à l’id du fichier qui vient d’être créé.
- `Contexte` correspond au code de l’entité liée (apprenant, candidat, convention...)
- `Regroupement` correspond au code du type de pièce consultable depuis l’interface d'administration 
   Référentiel / Paramètres / Type de pièce.
- `DossierCible` correspond au chemin où déposer le fichier, conformément à l’arborescence consultable depuis 
   l’interface d’administration.

Pour changer le statut de validation du fichier, il faut également transmettre les champs suivants :

- `DateValidation` qui correspond à la date à laquelle le document a été validé
- `Statut` qui doit être égal à 1
- `Valideur` qui doit contenir le nom de la personne ou du système qui a validé le document

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Description  \
  --request POST \
  --data '{
  "Streamid": "4ad48217-bd62-43bb-82ac-91187c7994ef",
  "Contexte": "A00001",
  "Regroupement": "PHOTO",
  "DossierCible": "\\\\moncampus\\A00001"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
    "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Description/$entity",
    "Streamid": "4ad48217-bd62-43bb-82ac-91187c7994ef",
    "DateCreation": "2024-09-24T14:30:18.213+02:00",
    "DateValidation": "2024-09-24T14:30:18.213+02:00",
    "Contexte": "A00001",
    "Regroupement": "PHOTO",
    "DossierTemp": "",
    "DossierCible": "\\\\moncampus\\A00001",
    "Statut": 0,
    "Valideur": ""
}
```

:::