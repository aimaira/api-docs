# Modèle d’utilisateur

Un modèle d’utilisateur est une configuration créée depuis l’interface d’administration que l’on peut appliquer à un
utilisateur pour configurer ses permissions et ses autorisations.

## Lister les modèles d’utilisateur

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/UserTemplate \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://graphskolae.aimaira.net/GraphV1/$metadata#UserTemplate",
  "value": [
    {
      "Id": 1,
      "Nom": "ALL ADMIN",
      "TypeAuthentification": "Standalone",
      "Profils": [],
      "Permissions": [
        "EnvoiMail",
        "Vision360",
        "OData"
      ],
      "Menus": [
        "Rechercher",
        "Candidat",
        "SuiviDossier"
      ],
      "Departements": [],
      "Marques": [
        2215112,
        2215530,
        2215531
      ],
      "Campus": [],
      "SocietesFacturation": [
        2215467,
        2215556
      ],
      "Programmes": []
    },
    ...
  ]
}
```

:::