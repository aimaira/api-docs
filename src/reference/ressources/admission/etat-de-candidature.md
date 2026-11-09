# Etat de candidature

## Lister les états de candidature

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatCandidature \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EtatCandidature",
  "value": [
    {
      "Id": 119058,
      "Nom": "Créé",
      "Code": "CRE",
      "LibelleExterne": "Créé",
      "ReferenceExterne": ""
    },
    {
      "Id": 119059,
      "Nom": "Finalisé",
      "Code": "FIN",
      "LibelleExterne": "Finalisé",
      "ReferenceExterne": ""
    },
    {
      "Id": 2214748,
      "Nom": "Débuté",
      "Code": "DEB",
      "LibelleExterne": "Débuté",
      "ReferenceExterne": ""
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un état de candidature avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatCandidature/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EtatCandidature/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "LibelleExterne": "",
  "ReferenceExterne": ""
}
```

:::

## Créer un état de candidature

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatCandidature \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EtatCandidature/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}
```

:::

## Modifier un état de candidature

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatCandidature/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EtatCandidature/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "LibelleExterne": "texte",
  "ReferenceExterne": "texte"
}
```

:::

## Supprimer un état de candidature

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EtatCandidature/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
