# Mise en place d’un webhook

![Webhooks](/img/webhooks.svg){.center}

AIMAIRA dispose de webhooks configurables sur chacune des entités modifiables depuis l’interface d’administration 
et qui seront déclenchés sur chaque création, modification ou suppression, et ce, depuis n’importe quelle interface 
(API, Intranet, Interface d’administration).

Pour mettre en place un webhook, il vous suffit de nous fournir une URL sur laquelle votre service écoute en HTTPS. Vous
pouvez également nous fournir la liste des types d’entités qui déclencheront le webhook *(voir [Référence][reference])*.
Enfin, vous pouvez nous fournir un bref descriptif de votre webhook qui sera renvoyé avec le message.

::: warning Note

Au moment de la rédaction de cette documentation, il n’est pas possible pour un utilisateur d’AIMAIRA de mettre en place
un webhook par lui-même.

:::

Votre service doit retourner un code HTTP de succès ([2XX][http-codes]). En cas d’erreur, les messages pourront être 
renvoyés à votre service ultérieurement. Les messages ne sont pas dédoublonnés ou agrégés de notre côté : toute 
modification donne lieu à une requête sur votre service. Il est donc impératif qu'il soit dimensionné pour recevoir un 
volume de trafic adapté.

## Contenu des messages

Les messages envoyés à votre service sont au format JSON et conforme au JSON Schema suivant :

::: code-group

```json [JSON Schema]
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://aimaira.fr/webhooks.message.schema.json",
  "title": "Webhook Message",
  "description": "Un message émis vers une URL de webhook lors d’un événement",
  "type": "object",
  "properties": {
    "CustomerName": {
        "description": "Le nom de votre instance AIMAIRA",
        "type": "string"
    },
    "Date": {
        "description": "La date à laquelle l’événement a été déclenché",
        "type": "date"
    },
    "Hash": {
        "description": "Une somme de contrôle qui permet de vérifier l’intégrité du message",
        "type": "string"
    },
    "ObjectId": {
        "description": "L’identifiant unique de l’objet modifié",
        "type": "integer"
    },
    "ObjectType": {
        "description": "Le type de l’objet modifié. Pour des raisons historiques, ce champ contient le nom de la table contenant la donnée modifiée",
        "type": "string"
    },
    "TriggerName": {
        "description": "Le nom de votre webhook tel que vous nous l’avez fourni",
        "type": "string"
    }
  }
}
```

:::

Les messages ne contiennent pas la donnée modifiée. Afin de récupérer les propriétés de l’objet concerné, il vous faudra
faire une requête via l’API.

## Vérification du type de modification

Afin de vérifier le type de modification à l’origine de l’appel au webhook, il peut être nécessaire de récupérer les
métadonnées liées à l’entitée modifiée.

Pour ce faire, il est nécessaire d’appeler [le point d’entrée Object][endpoint-object] avec l’identifiant de l’entité.

## Authentification lors du déclenchement du webhook

Afin de permettre l’envoi de messages sur des URL qui nécessitent une authentification, il est possible d’utiliser la
norme d’authentification OAuth. Seul le flux d’authentification Client Credential est supporté.

### Informations nécessaires à l’obtention d’un jeton d’accès

Pour permettre à AIMAIRA d’appeler votre URL, il est nécessaire de fournir en plus de l’URL de votre service, l’URL à
appeler pour générer un jeton d’accès. Pour authentifier cet appel, vous devez également nous fournir un `client_id` et 
un `client_secret`.

Le point d’entrée retournant le jeton d’accès doit répondre avec un message au format JSON contenant a minima une clé
`access_token` comme suit :

```json
{
  "access_token": "VGVzdEFjY2Vzc1Rva2VuMDEyMzQ1Njc4OTAxMjM0NTY3ODk="
}
```

Avant d’appeler l’URL lors du déclenchement du webhook, AIMAIRA génèrera un jeton d’accès, puis utilisera ce jeton lors
de l’envoi du message JSON envoyé via le webhook.

## Vérification de l’intégrité du message JSON

Afin de vous permettre de vérifier que le message n’a pas été corrompu ou modifié lors de sa transmission,
vous pouvez valider le contenu en recalculant une somme de contrôle et en la comparant avec celle contenue dans le
message.

### Exemple

Compte tenu du message suivant envoyé lors du déclenchement du webhook

::: code-group

```json [JSON]
{
  "CustomerName": "CONTOSO",
  "Date": "2023-12-04T12:19:03.5885615+01:00",
  "Hash": "UH6lnG50Dmk3jJ8uMvqedQ==",
  "ObjectId": 2273857,
  "ObjectType": "recrutement.T_SESSION_RECRUTEMENT",
  "TriggerName": "Webhook"
}
```

:::

L’entrée `Hash` est générée côté serveur selon l’algorithme suivant :

On concatène les entrées du message dans l’ordre suivant

::: code-group

```csharp [C#]
$"{TriggerName}{ObjectId}{ObjectType}{Date}{TriggerName}{CustomerName}"
```

:::

On récupère les octets de la chaîne de caractères selon la table ASCII

::: code-group

```csharp [C#]
Encoding.ASCII.GetBytes(value);
```

:::

On calcule la somme de contrôle du résultat en utilisant l’algorithme MD5

::: code-group

```csharp [C#]
MD5.HashData(encodedValue);
```

:::

Enfin, on encode la somme de contrôle en base64

::: code-group

```csharp [C#]
Convert.ToBase64String(hash);
```

:::

Il suffit de comparer la somme de contrôle ainsi produite avec celle du message pour vérifier son intégrité.

## Lister les webhooks configurés

Il est possible de lister les webhooks configurés en utilisant la requête suivante :

::: code-group

```bash [cURL]
curl https://myapi.aimaira.net/GraphV1/Webhook \
	-u 'nomdutilisateur:motdepasse'
```

:::

### Réponse

::: code-group

```json [JSON]
{
  "@odata.context": "https://myapi.aimaira.net/GraphV1/$metadata#Webhook/$entity",
  "value": [
        {
            "Id": 9,
            "Code": "WH_CODE",
            "Nom": "Mon webhook",
            "Actif": true,
            "Url": "...",
            "Configuration": "{ \"Entites\": [ \"recrutement.T_CANDIDAT\" ] }",
            "AuthType": 2,
            "AuthClientId": "...",
            "AuthTokenEndpoint": "..."
        }
    ]
}
```

:::

| Paramètre         | Description                                                                                                                                            |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Code              | Code unique représentant le webhook                                                                                                                    |
| Nom               | Nom descriptif pour le webhook                                                                                                                         |
| Url               | URL à appeler lors du déclenchement du webhook                                                                                                         |
| Configuration     | Objet JSON représentant la liste d'entités pour lesquelles déclencher le webhook (voir [ce paragraphe][noms-herites] de la documentation de référence) |
| AuthType          | Le type d'authenfication à utiliser lors de l'appel au webhook <br/>*(None = 0, Basic = 1, OAuthClientCredentials = 2)*                                |
| AuthClientId      | L'identifiant à utiliser pour l'authentification                                                                                                       |
| AuthTokenEndpoint | L'endpoint d'authentification à utiliser pour l'authentification OAuth <br/>(utilisé uniquement si AuthType = 2)                                       |

[reference]: /reference/
[http-codes]: https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP#2xx_-_Succès
[noms-herites]: /reference/#correspondance-des-noms-d-entites-herites
[endpoint-object]: /reference/ressources/core/object