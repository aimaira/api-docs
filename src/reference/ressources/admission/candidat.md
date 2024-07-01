# Candidat

L’entité `Candidat` représente un individu qui souhaite s’inscrire à un ou plusieurs programmes.

## Numéro de candidat

Le numéro de candidat est un identifiant séquentiel qui identifie de manière unique un candidat. Il est généralement de
la forme `C00000`. Il est possible de choisir la façon de générer cet identifiant depuis **Manage**,
**Référentiel / Système / Campus / Code Système / Candidat**.

Cet identifiant est généré automatiquement lors de la création d’un nouveau candidat.

## Lister les candidats

Seuls les candidats qui disposent d’un [Dossier][dossier] complet sont listés sur ce point de terminaison.

## Rechercher un candidat par e-mail

Il est parfois nécessaire de retrouver un candidat avec son e-mail. Pour ce faire, il est possible d’utiliser la requête
OData ci-dessous :

```bash [cURL]
curl --location 'https://myapi.aimaira.net/GraphV1/Candidat?%24expand=Mail&%24filter=Mail%2FAdresse%20eq%20%27adresse.email%40test.fr%27' \
	-u 'nomdutilisateur:motdepasse'
```

## Création d’un Candidat

Avant de créer un candidat, il faut créer son [E-mail][e-mail].

Une fois l’e-mail créé, il est nécessaire de passer au minimum le `Nom`, le `Login`, les `Prenoms` et le `MailId` pour
créer un candidat.

Un [Individu][individu] est automatiquement créé si aucun `IndividuId` n’est passé lors de la création du candidat.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Candidat \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Candidat/$entity",
  "Nom": "Dupont",
  "Login": "jean.dupont@ecole.fr",
  "Prenoms": "Jean",
  "MailId": 2253448
}' \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Candidat/$entity",
  "Id": 2253433,
  "Nom": "Dupont",
  "Code": "",
  "Login": "jean.dupont@ecole.fr",
  "Prenoms": "Jean",
  "NomUsage": "",
  "PrenomUsage": "",
  "Prenom2": "",
  "Prenom3": "",
  "NomJeuneFille": "",
  "Fonction": "",
  "VilleNaissance": "",
  "DepartementNaissance": "",
  "CodeCommuneNaissance": "",
  "CiviliteId": 0,
  "AdresseId": 0,
  "MailId": 2253448,
  "TelephoneId": 0,
  "MobileId": 0,
  "Nationalite1Id": 0,
  "Nationalite2Id": 0,
  "PaysNaissanceId": 0,
  "DateNaissance": null,
  "GenreMale": false,
  "Handicap": false,
  "RefSysteme": "",
  "AutoriseCRM": false,
  "HasChosenRGPD": false,
  "HasChosenMarketing": false,
  "Numero": "C00001",
  "Password": "",
  "Tuteur1Id": 0,
  "IndividuId": 2253432,
  "Tuteur2Id": 0,
  "CanalAcquisitionId": 0,
  "ResidencePaysId": 0,
  "ResidenceProvinceId": 0
}
```

:::

Une fois le candidat créé, il est nécessaire de créer le [Dossier][dossier] lié à ce candidat afin de permettre de
le lister depuis l’API et de l’afficher dans Manage.

[dossier]: /reference/ressources/admission/dossier
[e-mail]: /reference/ressources/core/e-mail
[individu]: /reference/ressources/core/individu
[programme]: docs/api/reference/ressources/core/programme
[voie-d-admission]: /reference/ressources/admission/voie-d-admission