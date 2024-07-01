# Récupérer les données financières du dossier de candidature

Certaines données financières sont affichées sur le tableau de données _Admission ⟩ Suivi des candidatures_ dans 
l’interface d'administration. 

Ces données sont calculées à la volée. Elles ne sont pas mises à disposition via l’API publique d'AIMAIRA.

Pour calculer ces informations, il vous faudra :

- Récupérer l’`AffaireId` du `Dossier` pour lequel vous souhaitez calculer les informations financières
- Lister les lignes de balance client liées à l’`AffaireId`
- Faire la somme des montants des balances, cela correspond à la colonne **Paiement reçu**
- Utiliser le type de paiement de la ligne de balance la plus récente qui correspond à la colonne **Type de paiement**
- Utiliser la ligne de balance avec la date la plus récente pour récupérer la donnée de la colonne **Date de paiement**

## Récupération de l’`AffaireId` du `Dossier`

[Comment lister les dossiers de candidature][lister-les-dossiers-de-candidature]

## Liste des lignes de balance client liées à l’`AffaireId`

[Comment lister les lignes de balance client du dossier de candidature][lister-les-lignes-de-balance-client-du-dossiers-de-candidature]

[lister-les-dossiers-de-candidature]: /reference/ressources/admission/dossier#lister-les-dossiers
[lister-les-lignes-de-balance-client-du-dossiers-de-candidature]: /reference/ressources/finance/balance-client#lister-les-balances-client-d-une-affaire