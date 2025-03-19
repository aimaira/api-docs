# Téléphone

## Créer un téléphone

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Telephone \
  --request POST \
  --data '{  
  "Numero": "0601020304",
  "IsMobile": true
}'
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Telephone/$entity",
  "Id": 2410943,
  "Nom": "",
  "Code": "",
  "Numero": "0601020304",
  "IsMobile": true
}
```

:::