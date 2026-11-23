# Enseignant d’un cours

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Lister les enseignants des cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EnseignantCours \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EnseignantCours",
  "value": [
    {
      "Id": 1234567,
      "Nom": "",
      "Code": "",
      "EnseignantId": 0,
      "CoursId": 0,
      "Responsable": false,
      "NbGroupe": 0,
      "Intervenant": false,
      "CodesGroupes": ""
    }
  ]
}
```

:::

## Récupérer un enseignant d’un cours avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EnseignantCours/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EnseignantCours/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "EnseignantId": 0,
  "CoursId": 0,
  "Responsable": false,
  "NbGroupe": 0,
  "Intervenant": false,
  "CodesGroupes": ""
}
```

:::

## Créer un enseignant d’un cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EnseignantCours \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "CoursId": 1234567,
  "Responsable": false,
  "NbGroupe": 0,
  "Intervenant": false,
  "CodesGroupes": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EnseignantCours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "CoursId": 1234567,
  "Responsable": false,
  "NbGroupe": 0,
  "Intervenant": false,
  "CodesGroupes": "texte"
}
```

:::

## Modifier un enseignant d’un cours

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EnseignantCours/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "CoursId": 1234567,
  "Responsable": false,
  "NbGroupe": 0,
  "Intervenant": false,
  "CodesGroupes": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#EnseignantCours/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "EnseignantId": 1234567,
  "CoursId": 1234567,
  "Responsable": false,
  "NbGroupe": 0,
  "Intervenant": false,
  "CodesGroupes": "texte"
}
```

:::

## Supprimer un enseignant d’un cours

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/EnseignantCours/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
