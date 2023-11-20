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
  "@odata.context": "http://localhost:31766/$metadata#EtatCandidature",
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