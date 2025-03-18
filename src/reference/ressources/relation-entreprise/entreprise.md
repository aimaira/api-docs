# Entreprise

## Créer une entreprise

Il est possible de créer une entreprise sans fournir aucune donnée. Cela permet de remplir les informations 
ultérieurement.

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Entreprise
  --request POST
  --header 'Content-Type: application/json'
  --data '{}'
```

### Réponse

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Entreprise/$entity",
  "Id": 2410939,
  "Nom": "",
  "Code": "",
  "AdresseId": 0,
  "MailId": 0,
  "TelephoneId": 0,
  "CaisseRetraite": "",
  "CaissePrevoyance": "",
  "SIRET": "",
  "NAF": "",
  "TVAintracommunautaire": "",
  "ConventionCollective": "",
  "IDCC": "",
  "IsParticulierEmployeur": false,
  "NumUrssafParticulierEmployeur": "",
  "Effectif": "",
  "RefCompte": 0,
  "FormeJuridiqueId": 0,
  "TauxEntreprise": 0.0,
  "AutreInformation": "",
  "NumeroProjet": ""
}
```