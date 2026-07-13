# Créer un référentiel de compétences opérationnel de A à Z

Un **référentiel de compétences opérationnel** (RCO) est composé de **blocs de compétence**, eux-mêmes composés de
**compétences**. Il peut être rattaché à un ou plusieurs **programmes** et à une ou plusieurs **périodes**.

Contrairement à l’interface AIMAIRA, l’API publique **ne duplique pas automatiquement** les blocs et compétences d’un
RNCP à la création du référentiel : vous gardez la maîtrise complète de son contenu. La construction se fait donc en
plusieurs étapes :

1. [Créer le référentiel (entête)](#_1-creer-le-referentiel)
2. [Affecter des programmes et des périodes](#_2-affecter-des-programmes-et-des-periodes)
3. [Ajouter les blocs de compétence](#_3-ajouter-les-blocs-de-competence)
4. [Ajouter les compétences](#_4-ajouter-les-competences)
5. [Vérifier l’arborescence complète](#_5-verifier-l-arborescence-complete)

::: info

Toutes les écritures (`POST`, `PUT`, `DELETE`) nécessitent un utilisateur disposant du rôle d’écriture. L’authentification
se fait en Basic Auth *(voir [Prise en main de l’API][prise-en-main])*.

:::

## 1. Créer le référentiel

Le point d’entrée `ReferentielCompetenceOperationnel` crée uniquement l’**entête** du référentiel. Même si vous
renseignez un `RncpId`, aucun bloc ni aucune compétence n’est créé automatiquement.

### Données obligatoires

- `Code` *(lettres majuscules, chiffres, `_` ou `-`, 50 caractères maximum, unique)*
- `Libelle`

Les champs `RncpId`, `Actif`, `LibelleEn`, `LibelleExterne` et `LibelleExterneEn` sont facultatifs.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferentielCompetenceOperationnel \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "Code": "RCO_MARKETING",
    "Libelle": "Référentiel opérationnel Marketing",
    "LibelleEn": "Operational Marketing referential",
    "LibelleExterne": "Marketing",
    "LibelleExterneEn": "Marketing",
    "RncpId": 37006,
    "Actif": true
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

Conservez l’`Id` renvoyé : il identifie le référentiel pour toutes les étapes suivantes.

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferentielCompetenceOperationnel/$entity",
  "Id": 2260001,
  "Code": "RCO_MARKETING",
  "Libelle": "Référentiel opérationnel Marketing",
  "LibelleEn": "Operational Marketing referential",
  "LibelleExterne": "Marketing",
  "LibelleExterneEn": "Marketing",
  "RncpId": 37006,
  "Actif": true,
  "ProgrammesIds": [],
  "PeriodesIds": []
}
```

:::

## 2. Affecter des programmes et des périodes

L’affectation aux programmes et aux périodes est **différée** : elle se fait après la création, via des points d’entrée
dédiés. Chaque affectation crée un lien indépendant que vous pouvez lister ou retirer.

### Affecter un programme

Récupérez au préalable l’identifiant du programme souhaité *(voir [Lister les programmes][lister-programmes])*, puis
créez le lien.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferentielProgramme \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "ReferentielId": 2260001,
    "ProgrammeId": 2215158
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

#### Réponse

L’`Id` renvoyé est celui du **lien** (et non du programme) ; il est nécessaire pour retirer l’affectation.

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferentielProgramme/$entity",
  "Id": 2260010,
  "ReferentielId": 2260001,
  "ProgrammeId": 2215158
}
```

:::

### Affecter une période

Le fonctionnement est identique avec le point d’entrée `ReferentielPeriode`
*(voir [Lister les périodes][lister-periodes])*.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferentielPeriode \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "ReferentielId": 2260001,
    "PeriodeId": 2210044
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Lister les affectations d’un référentiel

Les listes doivent être **filtrées** par référentiel : sans filtre, elles renvoient une liste vide.

::: code-group

```bash [Programmes]
curl 'https://myapi.aimaira.net/GraphV1/ReferentielProgramme?$filter=ReferentielId eq 2260001' \
    -u 'nomdutilisateur:motdepasse'
```

```bash [Périodes]
curl 'https://myapi.aimaira.net/GraphV1/ReferentielPeriode?$filter=ReferentielId eq 2260001' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Retirer une affectation

Utilisez l’`Id` du lien obtenu à la création (ou via les listes ci-dessus).

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/ReferentielProgramme(2260010) \
    --request DELETE \
    -u 'nomdutilisateur:motdepasse'
```

:::

## 3. Ajouter les blocs de compétence

Chaque bloc est rattaché au référentiel via `ReferentielId`. Le champ `OriginId` correspond au **bloc RNCP d’origine** :
il permet de tracer la provenance RNCP du bloc (par opposition à un bloc issu d’un référentiel personnalisé). Le `Code`
et les libellés sont libres.

### Données obligatoires

- `ReferentielId` *(identifiant du référentiel créé à l’étape 1)*
- `OriginId` *(identifiant du bloc RNCP d’origine)*
- `Code`
- `Libelle`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/BlocCompetenceOperationnel \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "ReferentielId": 2260001,
    "OriginId": 45001,
    "Code": "BLOC_01",
    "Libelle": "Concevoir une stratégie marketing",
    "LibelleEn": "Design a marketing strategy",
    "LibelleExterne": "Stratégie marketing",
    "LibelleExterneEn": "Marketing strategy"
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

Conservez l’`Id` du bloc : il servira de parent lors de la création des compétences.

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#BlocCompetenceOperationnel/$entity",
  "Id": 2260020,
  "Code": "BLOC_01",
  "Libelle": "Concevoir une stratégie marketing",
  "LibelleEn": "Design a marketing strategy",
  "LibelleExterne": "Stratégie marketing",
  "LibelleExterneEn": "Marketing strategy"
}
```

:::

Répétez l’opération pour chaque bloc du référentiel.

## 4. Ajouter les compétences

Chaque compétence est rattachée à un **bloc** via `BlocId` (l’`Id` du bloc obtenu à l’étape 3). Comme pour les blocs,
`OriginId` correspond à la **compétence RNCP d’origine**.

### Données obligatoires

- `BlocId` *(identifiant du bloc parent)*
- `OriginId` *(identifiant de la compétence RNCP d’origine)*
- `Code`
- `Libelle`

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/CompetenceOperationnel \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "BlocId": 2260020,
    "OriginId": 55001,
    "Code": "COMP_01",
    "Libelle": "Analyser un marché",
    "LibelleEn": "Analyse a market",
    "LibelleExterne": "Analyse de marché",
    "LibelleExterneEn": "Market analysis"
}' \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#CompetenceOperationnel/$entity",
  "Id": 2260030,
  "Code": "COMP_01",
  "Libelle": "Analyser un marché",
  "LibelleEn": "Analyse a market",
  "LibelleExterne": "Analyse de marché",
  "LibelleExterneEn": "Market analysis"
}
```

:::

Répétez l’opération pour chaque compétence de chaque bloc.

## 5. Vérifier l’arborescence complète

Vous pouvez récupérer le référentiel complet, avec ses blocs et leurs compétences, en une seule requête grâce à
`$expand`.

::: code-group

```bash [cURL]
curl 'https://myapi.aimaira.net/GraphV1/ReferentielCompetenceOperationnel(2260001)?$expand=Blocs($expand=Competences)' \
    -u 'nomdutilisateur:motdepasse'
```

:::

::: tip

L’`$expand` ne renvoie l’arborescence que sur la récupération d’un référentiel **par son identifiant**. Sur la liste
complète (`GET /ReferentielCompetenceOperationnel`), les blocs ne sont pas renseignés.

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#ReferentielCompetenceOperationnel(Blocs(Competences()))/$entity",
  "Id": 2260001,
  "Code": "RCO_MARKETING",
  "Libelle": "Référentiel opérationnel Marketing",
  "RncpId": 37006,
  "Actif": true,
  "ProgrammesIds": [2215158],
  "PeriodesIds": [2210044],
  "Blocs": [
    {
      "Id": 2260020,
      "Code": "BLOC_01",
      "Libelle": "Concevoir une stratégie marketing",
      "Competences": [
        {
          "Id": 2260030,
          "Code": "COMP_01",
          "Libelle": "Analyser un marché"
        }
      ]
    }
  ]
}
```

:::

[prise-en-main]: /creer-votre-integration/prise-en-main-de-l-api
[lister-programmes]: /reference/ressources/core/programme#lister-les-programmes
[lister-periodes]: /reference/ressources/core/periode#lister-les-periodes
