# Épreuve d’une journée d’épreuves

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

## Récupérer une épreuve d’une journée d’épreuves avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveOrganisation/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#EpreuveOrganisation/$entity",
  "EpreuveId": 0,
  "OrganisationId": 0,
  "Debut": null,
  "Fin": null,
  "NbJuryTypeUn": 0,
  "NbJuryTypeDeux": 0,
  "NbJuryTypeTrois": 0,
  "NbJuryEnregistreTypeUn": 0,
  "NbJuryEnregistreTypeDeux": 0,
  "NbJuryEnregistreTypeTrois": 0,
  "NbrMaximumCandidats": 0,
  "NbrCandidatsEnregistres": 0,
  "Id": 1234567,
  "Nom": "",
  "Code": ""
}
```

:::

## Créer une épreuve d’une journée d’épreuves

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveOrganisation \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveId": 1234567,
  "OrganisationId": 1234567,
  "Debut": {},
  "Fin": {},
  "NbJuryTypeUn": 0,
  "NbJuryTypeDeux": 0,
  "NbJuryTypeTrois": 0,
  "NbJuryEnregistreTypeUn": 0,
  "NbJuryEnregistreTypeDeux": 0,
  "NbJuryEnregistreTypeTrois": 0,
  "NbrMaximumCandidats": 0,
  "NbrCandidatsEnregistres": 0,
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#EpreuveOrganisation/$entity",
  "EpreuveId": 1234567,
  "OrganisationId": 1234567,
  "Debut": {},
  "Fin": {},
  "NbJuryTypeUn": 0,
  "NbJuryTypeDeux": 0,
  "NbJuryTypeTrois": 0,
  "NbJuryEnregistreTypeUn": 0,
  "NbJuryEnregistreTypeDeux": 0,
  "NbJuryEnregistreTypeTrois": 0,
  "NbrMaximumCandidats": 0,
  "NbrCandidatsEnregistres": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Modifier une épreuve d’une journée d’épreuves

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveOrganisation/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "EpreuveId": 1234567,
  "OrganisationId": 1234567,
  "Debut": {},
  "Fin": {},
  "NbJuryTypeUn": 0,
  "NbJuryTypeDeux": 0,
  "NbJuryTypeTrois": 0,
  "NbJuryEnregistreTypeUn": 0,
  "NbJuryEnregistreTypeDeux": 0,
  "NbJuryEnregistreTypeTrois": 0,
  "NbrMaximumCandidats": 0,
  "NbrCandidatsEnregistres": 0,
  "Nom": "Nom",
  "Code": "CODE"
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/selection/$metadata#EpreuveOrganisation/$entity",
  "EpreuveId": 1234567,
  "OrganisationId": 1234567,
  "Debut": {},
  "Fin": {},
  "NbJuryTypeUn": 0,
  "NbJuryTypeDeux": 0,
  "NbJuryTypeTrois": 0,
  "NbJuryEnregistreTypeUn": 0,
  "NbJuryEnregistreTypeDeux": 0,
  "NbJuryEnregistreTypeTrois": 0,
  "NbrMaximumCandidats": 0,
  "NbrCandidatsEnregistres": 0,
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE"
}
```

:::

## Supprimer une épreuve d’une journée d’épreuves

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/selection/EpreuveOrganisation/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- reference:end -->
