# Société de facturation

Historiquement, AIMAIRA disposait d’une notion d’[entité juridique][entite-juridique] qui pouvait représenter tantôt
un [campus][campus] tantôt une société de facturation. Ces notions ont été séparées en deux entités distinctes qui 
doivent maintenant être utilisées indépendamment.

::: warning Note

Cette séparation des entités n’est implémentée que partiellement sur la version actuelle de l’API d’AIMAIRA.

:::

## Récupérer les données d’une société de facturation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SocieteFacturation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SocieteFacturation/$entity",
  "Id": 1234567,
  "Code": "SOC_FACTU_1",
  "Nom": "Ma société de facturation"
}
```

:::

## Lister toutes les sociétés de facturation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/SocieteFacturation \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#SocieteFacturation/$entity",
  "value": [
    {
      "Id": 1234567,
      "Code": "SOC_FACTU_1",
      "Nom": "Ma société de facturation"
    },
    {
      "Id": 1234569,
      "Code": "SOC_FACTU_2",
      "Nom": "Ma deuxième société de facturation"
    }
  ]
}
```

:::

[entite-juridique]: /reference/ressources/herite/entite-juridique
[societe-de-facturation]: /reference/ressources/finance/societe-de-facturation

[entite-juridique]: /reference/ressources/herite/entite-juridique
[campus]: /reference/ressources/core/campus