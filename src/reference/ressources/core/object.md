# Object

## Récuperer les métadonnées d’une entité

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Object/74 \
	-u 'nomdutilisateur:motdepasse'
```

- `Actif` indique si l’objet est supprimé ou non et fait double emploi avec `DateSuppression`
- `DateCreation` contient la date de création de l’entité 
- `DateModification` contient la date de dernière modification de l’entité
- `DateSuppression` contient la date de suppression de l’entité
- `Type` contient le type hérité de l’entité (voir le [tableau de correspondance][correspondance])

:::

### Réponse

```JSON
{
    "@odata.context": "https://graphskolae.aimaira.net/GraphV1/$metadata#Object/$entity",
    "Id": 74,
    "Nom": "",
    "Code": "",
    "DateCreation": "2018-02-01T16:15:12.053+01:00",
    "DateModification": "2023-01-23T16:18:41.117+01:00",
    "DateSuppression": null,
    "Actif": true,
    "Type": "myapp.TS_ENTITE_JURIDIQUE"
}
```

[correspondance]: /reference/correspondance-entites-noms-herites
