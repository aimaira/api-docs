# Commentaire

L’entité `Commentaire` contient une référence à un objet, sur lequel est stocké ce commentaire

Une référence peut être l'ID d'un objet de type:

* Adresse
* Affaire
* Ligne de balance client
* Candidat
* Candidature
* Convention
* DemarcheTitreSejour
* Entité juridique
* Entreprise
* Evaluateur
* Facture
* Individu
* Inscription
* LAN
* E-mail
* Professionnel
* ResponseSurvey
* Telephone

## Récupérer les commentaires d'une référence

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Commentaire?$filter=Reference eq 52136478 \
    -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Commentaire/$entity",
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
    }
  ]
}
```

:::

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un commentaire avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Commentaire/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Commentaire/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Date": null,
  "Auteur": "",
  "Texte": "",
  "Reference": 0
}
```

:::

## Créer un commentaire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Commentaire \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Date": "2026-09-01T00:00:00+02:00",
  "Auteur": "texte",
  "Texte": "texte",
  "Reference": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Commentaire/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Date": "2026-09-01T00:00:00+02:00",
  "Auteur": "texte",
  "Texte": "texte",
  "Reference": 0
}
```

:::

## Modifier un commentaire

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Commentaire/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Date": "2026-09-01T00:00:00+02:00",
  "Auteur": "texte",
  "Texte": "texte",
  "Reference": 0
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Commentaire/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Date": "2026-09-01T00:00:00+02:00",
  "Auteur": "texte",
  "Texte": "texte",
  "Reference": 0
}
```

:::

## Supprimer un commentaire

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Commentaire/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
