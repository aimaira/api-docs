# Créer un nouveau dossier d’inscription

Si vous souhaitez importer les apprenants et leur dossier d’inscription depuis un outil externe à AIMAIRA qui ne
dispose pas d’une intégration native, vous pouvez utiliser l’API mise à votre disposition pour effectuer cet import.

## Créer un apprenant

### Ajouter les dépendances

#### Création de l’adresse e-mail

Dans **Manage**, seuls les apprenants dont l’adresse e-mail a été renseignée s’affichent dans le menu
**Inscription / Suivi des inscriptions**. Il est donc nécessaire de créer une nouvelle adresse e-mail avant de créer
l’apprenant à qui cette adresse appartient. Une fois l’e-mail créé, pensez à enregistrer l’id. Vous ne pourrez pas le
retrouver via l’API.

[Comment créer une adresse e-mail][creer-un-email]

#### Lister les civilités disponibles

Afin de créer un apprenant, il est nécessaire de disposer d’un `CiviliteId` qui correspond à l’id de la civilité
correspondant à l’apprenant à créer. Cela implique que les civilités soient configurées correctement dans **Manage**.

[Comment lister les civilités][lister-les-civilites]

### Ajouter un apprenant

Une fois le `MailId` et le `CiviliteId` récupérés, vous pouvez ajouter l’apprenant.

[Comment ajouter un apprenant][ajouter-un-apprenant]

## Récupérer les données nécessaires

### Lister les programmes

Avant de pouvoir créer une inscription, il faut préalablement connaître l’id du programme auquel inscrire l’apprenant.

[Comment lister les programmes][lister-les-programmes]

#### Lister les régimes de l’apprenant

Avant de pouvoir créer une inscription, il faut préalablement connaître le régime de l’apprenant à utiliser.

[Comment lister les régimes de l’apprenant][lister-les-regimes-de-l-apprenant]

#### Lister les voies d’entrées existantes

Avant de pouvoir créer une inscription, il faut préalablement connaître la voie d’entrée à utiliser.

[Comment lister les voies d’entrées][lister-les-voies-d-entrees]

#### Lister les états d’inscription existants

Avant de pouvoir créer une inscription, il faut préalablement connaître l’état d’inscription à utiliser.

[Comment lister les états d’inscription][lister-les-etats-d-inscription]

### Créer un dossier d’inscription

Maintenant que les différentes données nécessaires à la création d’une inscription ont été récupérées, vous pouvez créer
l’inscription.

[Comment créer un dossier d’inscription][creer-un-dossier-d-inscription]

## Inscrire un apprenant sur un parcours

### Récuperer le parcours lié à la voie d’entrée.

Lors de la récupération de la voie d’entrée, récupérez le `ParcoursId`. 

[Comment récupérer un parcours avec son id][recuperer-un-parcours-avec-son-id]

### Inscrire l’apprenant sur les périodes du parcours choisi

Enfin, il est nécessaire de lier les périodes du parcours à l’inscription.

[Comment lister les périodes d’un parcours][lister-les-periodes-d-un-parcours]  
[Comment lier une période à une inscription][lier-une-periode-a-une-inscription]

## Créer le compte client lié à l’inscription

[Comment créer un compte financier][creer-un-client]  
[Comment lier un compte financier à une inscription][lier-un-client-a-une-affaire]

[creer-un-email]: /reference/ressources/core/e-mail#creation-d-un-e-mail
[lister-les-civilites]: /reference/ressources/core/civilite#lister-les-civilites
[ajouter-un-apprenant]: /reference/ressources/inscription/apprenant#creation-d-un-apprenant
[lister-les-programmes]: /reference/ressources/core/programme#lister-les-programmes
[lister-les-regimes-de-l-apprenant]: /reference/ressources/inscription/regime-de-l-apprenant#lister-les-regimes-de-l-apprenant
[lister-les-voies-d-entrees]: /reference/ressources/inscription/voie-d-entree#listes-les-voies-d-entree
[lister-les-etats-d-inscription]: /reference/ressources/inscription/issue-etat-d-inscription#lister-les-issues-etats-d-inscription
[creer-un-dossier-d-inscription]: /reference/ressources/inscription/inscription#creation-d-un-dossier-d-inscription
[recuperer-un-parcours-avec-son-id]: /reference/ressources/inscription/parcours#recuperer-un-parcours-avec-son-id
[lister-les-periodes-d-un-parcours]: /reference/ressources/inscription/parcours#lister-les-periodes-du-parcours
[lier-une-periode-a-une-inscription]: /reference/ressources/inscription/inscription#lier-a-une-periode
[creer-un-client]: /reference/ressources/finance/client#creer-un-client
[lier-un-client-a-une-affaire]: /reference/ressources/finance/client#comment-lier-un-client-a-une-affaire