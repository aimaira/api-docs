# Appliquer un échéancier de facturation à une convention

## Récupérer un échéancier existant

### Depuis une séquence

Les séquences de [type][type-de-sequence] "période en entreprise" peuvent porter un échéancier de facturation sur les propriétés
`EcheancierFacturationApprentissageId` et `EcheancierFacturationProId` de la [séquence][sequence], en fonction de la 
nature de la convention.

## Récupérer les échéances d’un échéancier

Une fois l’échéancier récupéré, il faut lister ses échéances avant de les recréer dans la convention.

[Récupérer les échéances][recuperer-echeances]

## Lister les échéances de la convention

Afin de vérifier l’état des échéances de la convention, il faut les lister. Cela permet de savoir quelles échéances sont
déjà appliquées à la convention.

[Lister les échéances][lister-echeances]

## Ajouter une échéance à la convention

Pour chaque échéance de l’échéancier de facturation, il faut créer l’échéance de la convention correspondante.

[Créer une échéance][creer-echeance]

[type-de-sequence]: /reference/ressources/pedagogie/type-de-sequence
[sequence]: /reference/ressources/pedagogie/sequence#recuperer-une-sequence-avec-son-identifiant
[recuperer-echeances]: /reference/ressources/relation-entreprise/echeancier-de-facturation
[lister-echeances]: /reference/ressources/relation-entreprise/convention#echeances-de-la-convention
[creer-echeance]: /reference/ressources/relation-entreprise/convention#echeances-de-la-convention