# Utilisateur

## Chiffrer un mot de passe

Avant toute création d’utilisateur, veillez à bien chiffrer le mot de passe en utilisant la clé publique comme indiqué
[ici][creation-nouvel-utilisateur].

Il vous faudra ensuite encoder cette chaîne chiffrée en base64 avant de le transmettre à l’API.

::: warning Note

Le mot de passe n’est nécessaire que dans le cas d’une authentification `Standalone`.

:::

## `ProfilUser`

Via l’API seuls deux `ProfilUser` sont utilisables lors de la création ou modification :

- 4, désactivé
- 2, utilisateur

Les autres profils sont accessibles en lecture uniquement (il n’est pas possible de définir ces profils pour un 
utilisateur depuis l’API) :

- -1, non renseigné
- 0, supprimé
- 1, administrateur
- 3, invité

## `TypeAuthentification`

Le type d’authentification dépend de l’usage et de la nature de l’utilisateur. Voici les options disponibles :

- `None`, désactivé
- `Standalone`, la base d’utilisateurs intégrée au logiciel
- `Azure`, Microsoft Entra ID
- `ActiveDirectionOnPremise`, ActiveDirectory
- `LDAP`
- `CAS`

## Créer un utilisateur

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/User \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "Nom": "DUPONT",
    "Login": "michel.dupont@monecole.fr",
    "Password": "g0nZymaAyTSR5p2AuGAeNeNio5lDg0sWpSNLSlHmOmoBbmmne6/dxAkzzYBKBwMWvqKPuxpfYuBNyiUdZCL9SWPsKJfDUh4Ll18e/pev9j0EyjUpGvLvRpY90fbvQ9bFWiC8QVmIAreHiIjFxBEIg4bJlEwl9P3Gb5tbFiIHNnw=",
    "Prenom": "Michel",
    "Mail": "michel.dupont@monecole.fr",
    "ProfilUser": 2,
    "TypeAuthentification": "Standalone"
}' \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://graphskolae.aimaira.net/GraphV1/$metadata#User/$entity",
  "Id": 1234,
  "Nom": "DUPONT",
  "Code": null,
  "Login": "michel.dupont@monecole.fr",
  "Password": null,
  "Prenom": "Michel",
  "Mail": "michel.dupont@monecole.fr",
  "DateCreation": "2024-11-25T15:40:00+02:00",
  "DateModification": "2024-11-25T15:40:00+02:00",
  "DateSuppression": "0001-01-01T00:00:00Z",
  "ProfilUser": 2,
  "Actif": true,
  "TypeAuthentification": "Standalone"
}
```

:::

## Lister les permissions d’un utilisateur

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/User/37/Permissions
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Collection(Edm.Int64)",
  "value": [
    1234567,
    2215530,
    2215158,
    3280313,
    1234569
  ]
}
```

:::

## Ajouter des permissions à un utilisateur

Il est possible de rajouter des permissions à un utilisateur, en passant les identifiants des entités auxquelles il doit
avoir accès.

Il est possible d’ajouter des droits sur les entités suivantes :

- [Campus][campus]
- [Département][departement]
- [Marque][marque]
- [Programme][programme]
- [Société de facturation][societe-de-facturation]

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/User/37/AddPermissions \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "ids": [
    1234567,
    2215530,
    2215158,
    3280313,
    1234569
  ]
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Collection(Edm.Int64)",
  "value": [
    1234567,
    2215530,
    2215158,
    3280313,
    1234569
  ]
}
```

:::

## Appliquer un modèle à un utilisateur

Appliquer un modèle à un utilisateur permet de réinitialiser les permissions d’un utilisateur sur la base de celles
définies dans le modèle. La réponse contient les identifiants des entités auxquelles l’utilisateur peut accéder.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/User/1234567/ApplyTemplate \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{
  "templateId": 1
}' \
  -u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Collection(Edm.Int64)",
  "value": [
    2215039,
    2221358,
    2221359,
    2221360,
    2215594,
    2215593,
    2215044,
    2215043,
    2215040,
    2215038
  ]
}
```

:::

[creation-nouvel-utilisateur]: "/reference/cas-d-usage/creer-un-nouvel-utilisateur"
[campus]: /reference/ressources/core/campus#lister-les-campus
[departement]: /reference/ressources/pedagogie/departement#lister-les-departements
[marque]: /reference/ressources/core/marque#lister-les-marques
[programme]: /reference/ressources/core/programme#lister-les-programmes
[societe-de-facturation]: /reference/ressources/finance/societe-de-facturation#lister-les-societes-de-facturation
