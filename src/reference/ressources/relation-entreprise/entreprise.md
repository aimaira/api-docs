# Entreprise

## Récupérer une entreprise avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Entreprise/2410939 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Entreprise/$entity",
  "Id": 2410939,
  "Nom": "Entreprise 1",
  "Code": "",
  "AdresseId": 2410941,
  "MailId": 2410942,
  "TelephoneId": 2410943,
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

:::

## Créer une entreprise

Il est possible de créer une entreprise sans fournir aucune donnée. Cela permet de remplir les informations 
ultérieurement.

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Entreprise \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{}' \
  -u 'nomdutilisateur:motdepasse'
```
  
Il est également possible de créer une entreprise en renseignant directement les données liées. Pour cela, il faut au
préalable créer les données nécessaires.

[Créer une adresse][creer-une-adresse]  
[Créer une adresse e-mail][creer-une-adresse-email]  
[Créer un numéro de téléphone][creer-un-numero-de-telephone]  

Une fois en possession des identifiants, vous pouvez créer l’entreprise.  


```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Entreprise
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Entreprise 1", 
  "AdresseId": 2410941,
  "MailId": 2410942,
  "TelephoneId": 2410943
}'
```

### Réponse

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Entreprise/$entity",
  "Id": 2410939,
  "Nom": "",
  "Code": "",
  "AdresseId": 2410941,
  "MailId": 2410942,
  "TelephoneId": 2410943,
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

[creer-une-adresse]: /reference/ressources/core/adresse#creer-une-adresse
[creer-une-adresse-email]: /reference/ressources/core/e-mail#creer-un-e-mail
[creer-un-numero-de-telephone]: /reference/ressources/core/telephone#creer-un-telephone

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Modifier une entreprise

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Entreprise/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "CaisseRetraite": "texte",
  "CaissePrevoyance": "texte",
  "SIRET": "texte",
  "NAF": "texte",
  "TVAintracommunautaire": "texte",
  "ConventionCollective": "texte",
  "IDCC": "texte",
  "IsParticulierEmployeur": false,
  "NumUrssafParticulierEmployeur": "texte",
  "Effectif": "texte",
  "RefCompte": 0,
  "FormeJuridiqueId": 1234567,
  "TauxEntreprise": 0,
  "AutreInformation": "texte",
  "NumeroProjet": "texte",
  "CodeAdressage": "texte",
  "TypeEmployeurId": 1234567,
  "SpecifiqueEmployeurId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Entreprise/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "CaisseRetraite": "texte",
  "CaissePrevoyance": "texte",
  "SIRET": "texte",
  "NAF": "texte",
  "TVAintracommunautaire": "texte",
  "ConventionCollective": "texte",
  "IDCC": "texte",
  "IsParticulierEmployeur": false,
  "NumUrssafParticulierEmployeur": "texte",
  "Effectif": "texte",
  "RefCompte": 0,
  "FormeJuridiqueId": 1234567,
  "TauxEntreprise": 0,
  "AutreInformation": "texte",
  "NumeroProjet": "texte",
  "CodeAdressage": "texte",
  "TypeEmployeurId": 1234567,
  "SpecifiqueEmployeurId": 1234567
}
```

:::

<!-- graphv1:end -->
