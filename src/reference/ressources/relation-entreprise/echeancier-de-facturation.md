# Échéancier de facturation

Un échéancier peut être de deux natures différentes en fonction du type de contrat auquel on souhaite le rattacher.

## Échéancier de facturation de contrat professionnel

### Récupérer un échéancier de facturation avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheancierFacturation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheancierFacturation/$entity",
  "Id": 1234567,
  "Nom": "Échéancier de facturation",
  "Code": "",
  "ProgrammeId": 1234568,
  "EntiteFacturationId": 123
}
```

:::

### Lister les échéances de l’échéancier de facturation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturation?$filter=EcheancierId eq 1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceFacturation",
  "value": [
    {
      "Id": 0,
      "Nom": "",
      "Code": "",
      "EcheancierId": 0,
      "NbHeureTheorique": 0.0,
      "NbHeureReelle": 0.0,
      "Date": null,
      "NoteId": 0,
      "Compte": "",
      "CodeAnalytique": "",
      "Libelle": "",
      "LibelleExterne": "",
      "CategoriePrestationId": 0,
      "PeriodeNom": null
    }
  ]
}
```
:::

### Échéancier de facturation de contrat d’apprentissage

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheancierFacturationApprentissage/1234566 \
  -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheancierFacturationApprentissage/$entity",
  "Id": 1234566,
  "Nom": "Échéancier de facturation",
  "Code": "",
  "ProgrammeId": 1234,
  "EntiteFacturationId": 125,
  "MontantTotal": 0.0,
  "MontantFraisPedagogique": 0.0,
  "MontantFraisAnnexe": 0.0
}
```

:::

### Lister les échéances de l’échéancier de facturation

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EcheanceFacturationApprentissage?$filter=EcheancierId eq 1234566 \
  -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EcheanceFacturationApprentissage",
  "value": [
    {
      "Id": 987654321,
      "Nom": "",
      "Code": "",
      "EcheancierId": 1234566,
      "Libelle": "Frais pédagogiques",
      "Pourcentage": 100.0,
      "Montant": 0.0,
      "Date": "2999-09-01T02:00:00+02:00",
      "Compte": "7068110",
      "CodeAnalytique": "",
      "LibelleExterne": "Frais pédagogiques",
      "CategoriePrestationId": 12385258,
      "PeriodeNom": "2025/2026",
      "IsEntreprise": false
    },
    {
      "Id": 987654322,
      "Nom": "",
      "Code": "",
      "EcheancierId": 1234566,
      "Libelle": "Frais de premier équipement",
      "Pourcentage": null,
      "Montant": 0.0,
      "Date": "2999-09-01T02:00:00+02:00",
      "Compte": "7418000",
      "CodeAnalytique": "",
      "LibelleExterne": "Frais de premier équipement",
      "CategoriePrestationId": 12385260,
      "PeriodeNom": "2025/2026",
      "IsEntreprise": false
    },
    {
      "Id": 987654323,
      "Nom": "",
      "Code": "",
      "EcheancierId": 1234566,
      "Libelle": "Frais de mobilité",
      "Pourcentage": null,
      "Montant": 0.0,
      "Date": "2999-09-01T02:00:00+02:00",
      "Compte": "7068112",
      "CodeAnalytique": "",
      "LibelleExterne": "Frais de mobilité",
      "CategoriePrestationId": 12385259,
      "PeriodeNom": "2025/2026",
      "IsEntreprise": false
    }
  ]
}
```
:::