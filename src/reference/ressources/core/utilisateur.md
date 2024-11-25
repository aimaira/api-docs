# Utilisateur

## Chiffrement du mot de passe

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

## Création d’un utilisateur

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/User \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
    "@odata.context": "https://graphskolae.aimaira.net/GraphV1/$metadata#User/$entity",
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

[creation-nouvel-utilisateur]: "/reference/cas-d-usage/creer-un-nouvel-utilisateur"