# Prise en main de l’API

Lancez-vous rapidement grâce à nos SDK, clés API et outils d’intégration.

## Configuration et intégration

### Démarrer avec l’API AIMAIRA

Chaque appel à l’API doit être authentifié à l’aide d’un couple identifiant / mot de passe passé via l’en-tête 
`Authorization` au format Basic Auth (Voir [Authentification](#authentification)).

Lors de la création de votre instance d’AIMAIRA, nous créons deux instances de l’API sur deux environnements distinct : 
pré-production et production. Ils disposent chacun d’une URL différente.

Des identifiants ont été générés pour chacun de ces environnements.

Avant de commencer, assurez-vous de bien disposer d’URL et des identifiants pour chacun de ces environnements.

## Authentification

L’API AIMAIRA utilise des identifiants spécifiques afin d’authentifier les requêtes. Ces identifiants disposent de rôles
étendus, assurez-vous de les traiter comme des informations sensibles. Ne les partagez pas sur des dépôts de code,
du code côté-client ou d’autres endroits où vous ne pouvez pas garantir la sécurité des informations.

Il existe deux moyens de s’authentifier auprès de l’API :

- HTTP Basic Auth
- Utilisation d’une clé d’API

### HTTP Basic Auth

Afin de s’authentifier auprès de l’API en utilisant **HTTP Basic Auth**, les identifiants sont construits de la façon 
suivante :

- L’identifiant de l’utilisateur et le mot de passe sont combinés avec deux points `:`
  (`aladdin:sesameOuvreToi`).
- Cette chaîne de caractères est ensuite encodée en base64
  (`YWxhZGRpbjpzZXNhbWVPdXZyZVRvaQ==`).

Enfin les identifiants sont passés par le moyen de l’en-tête `Authorization` et le type d’authentification `Basic` comme
suit :

```
Authorization: Basic YWxhZGRpbjpzZXNhbWVPdXZyZVRvaQ==
```

Vos appels à l’API doivent impérativement utiliser le protocole HTTPS. Les appels effectués en utilisant le protocole 
HTTP ou sans utiliser l’authentification échoueront.

#### Exemple d’utilisation de cURL

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Candidat \
    -u nomdutilisateur:motdepasse
```

:::

### Clé d’API

Il est également possible d’utiliser une clé d’API si elle vous a été fournie.

Il n’y a pas de traitement particulier à faire au préalable. La clé d’API peut être utilisée telle quelle. Pour vous 
authentifier, il faut la passer dans l’en-tête `X-ApiKey`.

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Candidat \
    -h "X-ApiKey=apikey"
```

:::

## OData

L’API AIMAIRA implémente le protocole [OData][odata] (Open Data Protocol) : une norme qui défini un ensemble de bonnes 
pratiques pour concevoir et consommer des API REST.

Chaque type de ressources dispose d’adresses spécifiques à laquelle une requête peut être envoyée pour interagir avec 
les données contenues dans AIMAIRA. On appelle ces URLs « points de terminaison » ou « endpoints ».

```
https://myapi.aimaira.net/GraphV1/Candidat/1234/Dossiers?$top=10&$orderby=Code
\_______________________________/\_____________________/ \___________________/
                |                           |                      |
        URL racine de l’API       Chemin d’une ressource   Options de requête
```

Une URL Odata est composées de trois parties :

- **L’URL racine.** Quand une requête GET est envoyée à cette URL, elle retourne un document qui liste les ressources 
  disponibles via cette API.
- **Chemin d’une ressource.** D’après REST, une ressource est un objet qui est accessible via le protocole HTTP en 
  utilisant les verbes standards GET, POST, PUT, PATCH et DELETE. Une ressource peut faire référence à un objet unique, 
  ou à une liste d’objets de mêmes types.
- **Options de requête.** Les options de requêtes sont des paramètres normalisés qui peuvent être passés aux points de
  terminaison de l’API afin de retourner un sous-ensemble de données.

## Options de requêtes

### Filtres

L’option `$filter` permet de filtrer une liste de ressources. L’expression spécifiée avec l’option `$filter` est 
exécutée sur chaque ressource dans la liste. Seules les ressources pour lesquelles cette expression est vraie sont 
retournées dans la réponse.

#### Exemples

- Tous les Candidats avec un Nom égal à ’Dupont’ : `https://myapi.aimaira.net/GraphV1/Candidat?$filter=Nom eq ’Dupont’`

### Réponses détaillées

L’option `$expand` spécifie quelles ressources associées doivent être intégrées avec les ressources retournées par la 
requête.

#### Exemples

- Détailler la propriété `Adresse` d’un `Candidat` : `https://myapi.aimaira.net/GraphV1/Candidat?$expand=Adresse`

Pour découvrir d’autres options de requêtes, consultez [la documentation en ligne de Microsoft][odata-query-options] à 
ce sujet.

[odata]: https://learn.microsoft.com/fr-fr/odata/
[odata-query-options]: https://learn.microsoft.com/fr-fr/odata/concepts/queryoptions-overview