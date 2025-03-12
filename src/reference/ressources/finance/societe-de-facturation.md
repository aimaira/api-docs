# Société de facturation

Historiquement, AIMAIRA disposait d’une notion d’[entité juridique][entite-juridique] qui pouvait représenter tantôt
un [campus][campus] tantôt une société de facturation. Ces notions ont été séparées en deux entités distinctes qui 
doivent maintenant être utilisées indépendamment.

::: warning Note

Cette séparation des entités n’est implémentée que partiellement sur la version actuelle de l’API d’AIMAIRA.

:::

## Récupérer les données d'un Campus avec son id

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Campus/1234567 \
  --request GET \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Campus/$entity",
  "Id": 1234567,
  "Code": "CAMPUS_1",
  "Nom": "Mon campus",
  "Adresse": {
    "Voie": "10 rue Henri Barbusse",
    "CodePostal": "57000",
    "Ville": "Mulhouse",
    "Pays": null
  }
}
```

:::

## Lister tous les Campus

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Campus \
  --request GET \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Campus/$entity",
  "value": [
    {
      "Id": 1234567,
      "Code": "CAMPUS_1",
      "Nom": "Mon campus",
      "Adresse": {
        "Voie": "10 rue Henri Barbusse",
        "CodePostal": "57000",
        "Ville": "Mulhouse",
        "Pays": null
      }
    },
    {
      "Id": 1234569,
      "Code": "CAMPUS_2",
      "Nom": "Mon deuxième campus",
      "Adresse": {
        "Voie": "6 rue Linus Carl Pauling",
        "CodePostal": "76000",
        "Ville": "Rouen",
        "Pays": null
      }
    }
  ]
}
```

:::

[entite-juridique]: /reference/ressources/herite/entite-juridique
[societe-de-facturation]: /reference/ressources/finance/societe-de-facturation

[entite-juridique]: /reference/ressources/herite/entite-juridique
[campus]: /reference/ressources/core/campus