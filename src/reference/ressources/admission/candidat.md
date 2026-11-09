# Candidat

::: tip Sélection

Si vous souhaitez créer, modifier, consulter ou supprimer des candidats de **Sélection**, veillez à utiliser les points
d’entrée préfixés par `/selection`.

**Exemple :** `/GraphV1/Candidat` devient `/GraphV1/selection/Candidat`

> Bien qu’une attention particulière soit apportée à ce que la façon d’utiliser ces points d’entrée différents soit la 
plus proche possible, il subsiste des différences d’usage. Dans ce cas, des encarts comme celui-ci décrivent les
spécificités de **Sélection**.

:::

L’entité `Candidat` représente un individu qui souhaite s’inscrire à un ou plusieurs programmes.

## Numéro de candidat

Le numéro de candidat est un identifiant séquentiel qui identifie de manière unique un candidat. Il est généralement de
la forme `C00000`. Il est possible de choisir la façon de générer cet identifiant depuis **Manage**,
**Référentiel / Système / Campus / Code Système / Candidat**.

Cet identifiant est généré automatiquement lors de la création d’un nouveau candidat.

## Lister les candidats

Seuls les candidats qui disposent d’un [dossier de candidature][dossier] complet sont listés sur ce point de terminaison.

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

::: tip Sélection

Lors de la création d’un candidat dans le contexte de **Sélection**, utilisez la propriété `NomUsage` à la place de la
propriété `Nom` et renseignez la propriété `Numero` pour permettre la création.

:::

Un `Individu` est automatiquement créé si aucun `IndividuId` n’est passé lors de la création du candidat.

### Champs particuliers

#### `CanalAcquisitionId`

Le canal d’acquisition correspond à la provenance du candidat, telle que définie dans l’interface d’administration, dans
l’univers Référentiel / Paramètre / Admission / Canal d’acquisition.

Voir [Canal d’acquisition du candidat][canal-acquisition]

#### `RefSysteme`

Ce champ contient l’identifiant de l’utilisateur lié au candidat. Pour définir les identifiants du compte lié au 
candidat, il vous faudra au préalable [créer un utilisateur][creer-utilisateur], récupérer son identifiant et le passer
dans ce champ.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Candidat \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
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

Une fois le candidat créé, il est nécessaire de créer le [dossier de candidature][dossier] lié à ce candidat afin de permettre de
le lister depuis l’API et de l’afficher dans Manage.

[dossier]: /reference/ressources/admission/dossier
[e-mail]: /reference/ressources/core/e-mail
[programme]: docs/api/reference/ressources/core/programme
[voie-d-admission]: /reference/ressources/admission/voie-d-admission
[canal-acquisition]: /reference/ressources/admission/canal-acquisition
[creer-utilisateur]: /reference/ressources/core/utilisateur

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

## Récupérer un candidat avec son identifiant

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Candidat/1234567 \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Candidat/$entity",
  "Id": 1234567,
  "Nom": "",
  "Code": "",
  "Login": "",
  "Prenoms": "",
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
  "MailId": 0,
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
  "TiersTemps": false,
  "TiersTempsPrecision": "",
  "Numero": "",
  "Password": "",
  "Tuteur1Id": 0,
  "IndividuId": 0,
  "Tuteur2Id": 0,
  "CanalAcquisitionId": 0,
  "ResidencePaysId": 0,
  "ResidenceProvinceId": 0
}
```

:::

## Modifier un candidat

Comme pour toute autre mise à jour de données, [cette mise en garde](/creer-votre-integration/prise-en-main-de-l-api#mise-a-jour-des-donnees) s’applique.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Candidat/1234567 \
  --request PUT \
  --header 'Content-Type: application/json' \
  --data '{
  "Nom": "Nom",
  "Code": "CODE",
  "Login": "texte",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
  "Prenom2": "texte",
  "Prenom3": "texte",
  "NomJeuneFille": "texte",
  "Fonction": "texte",
  "VilleNaissance": "texte",
  "DepartementNaissance": "texte",
  "CodeCommuneNaissance": "texte",
  "CiviliteId": 1234567,
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "MobileId": 1234567,
  "Nationalite1Id": 1234567,
  "Nationalite2Id": 1234567,
  "PaysNaissanceId": 1234567,
  "DateNaissance": "2026-09-01T00:00:00+02:00",
  "GenreMale": false,
  "Handicap": false,
  "RefSysteme": "texte",
  "AutoriseCRM": false,
  "HasChosenRGPD": false,
  "HasChosenMarketing": false,
  "TiersTemps": false,
  "TiersTempsPrecision": "texte",
  "Numero": "texte",
  "Password": "texte",
  "Tuteur1Id": 1234567,
  "IndividuId": 1234567,
  "Tuteur2Id": 1234567,
  "CanalAcquisitionId": 1234567,
  "ResidencePaysId": 1234567,
  "ResidenceProvinceId": 1234567
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Candidat/$entity",
  "Id": 1234567,
  "Nom": "Nom",
  "Code": "CODE",
  "Login": "texte",
  "Prenoms": "texte",
  "NomUsage": "texte",
  "PrenomUsage": "texte",
  "Prenom2": "texte",
  "Prenom3": "texte",
  "NomJeuneFille": "texte",
  "Fonction": "texte",
  "VilleNaissance": "texte",
  "DepartementNaissance": "texte",
  "CodeCommuneNaissance": "texte",
  "CiviliteId": 1234567,
  "AdresseId": 1234567,
  "MailId": 1234567,
  "TelephoneId": 1234567,
  "MobileId": 1234567,
  "Nationalite1Id": 1234567,
  "Nationalite2Id": 1234567,
  "PaysNaissanceId": 1234567,
  "DateNaissance": "2026-09-01T00:00:00+02:00",
  "GenreMale": false,
  "Handicap": false,
  "RefSysteme": "texte",
  "AutoriseCRM": false,
  "HasChosenRGPD": false,
  "HasChosenMarketing": false,
  "TiersTemps": false,
  "TiersTempsPrecision": "texte",
  "Numero": "texte",
  "Password": "texte",
  "Tuteur1Id": 1234567,
  "IndividuId": 1234567,
  "Tuteur2Id": 1234567,
  "CanalAcquisitionId": 1234567,
  "ResidencePaysId": 1234567,
  "ResidenceProvinceId": 1234567
}
```

:::

## Supprimer un candidat

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Candidat/1234567 \
  --request DELETE \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

La réponse est vide (code HTTP 204).

<!-- graphv1:end -->
