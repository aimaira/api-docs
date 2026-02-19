# Commentaire

L’entité `Commentaire` contient une référence à un objet, sur lequel est stocké ce commentaire

## Récupérer les commentaire d'une référence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Commentaire?$filter=Reference eq 52136478 \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
"@odata.context": "http://localhost:31766/$metadata#Commentaire/$entity",
"value": [
    {
        
        "Id": 12564789,
        "Nom": "NOM",
        "Code": "CODE",
        "Date": "2025-01-018T08:00:00.000+01:00",
        "Auteur": "mail@adresse.fr",
        "Texte": "Corps du commentaire",
        "Reference": 52136478
    },
    {
        
        "Id": 146987452,
        "Nom": "NOM",
        "Code": "CODE",
        "Date": "2025-01-018T08:00:00.000+01:00",
        "Auteur": "mail@adresse.fr",
        "Texte": "Corps du commentaire",
        "Reference": 52136478
    },
]
```

:::