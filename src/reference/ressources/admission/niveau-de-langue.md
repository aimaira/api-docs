# Niveau de langue

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer un niveau de langue avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauLangue/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauLangue/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "DossierId": 0,
  "LangueEnseignementId": 0,
  "NiveauEcrit": "",
  "NiveauOral": "",
  "Langue": ""
}
```

:::

## Créer un niveau de langue

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauLangue \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "LangueEnseignementId": 1234567,
  "NiveauEcrit": "texte",
  "NiveauOral": "texte",
  "Langue": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauLangue/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "LangueEnseignementId": 1234567,
  "NiveauEcrit": "texte",
  "NiveauOral": "texte",
  "Langue": "texte"
}
```

:::

## Modifier un niveau de langue

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauLangue/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "LangueEnseignementId": 1234567,
  "NiveauEcrit": "texte",
  "NiveauOral": "texte",
  "Langue": "texte"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#NiveauLangue/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "DossierId": 1234567,
  "LangueEnseignementId": 1234567,
  "NiveauEcrit": "texte",
  "NiveauOral": "texte",
  "Langue": "texte"
}
```

:::

## Supprimer un niveau de langue

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/NiveauLangue/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
