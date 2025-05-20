# Récupérer la photo d’un apprenant

Afin de récupérer la photo chargée pour le profil d’un apprenant, il faut avant toute chose retrouver le dossier
correspondant à l’onglet Document accessible depuis l’interface d’administration.

## Récupérer le dossier parent de l’apprenant

Le chemin du dossier correspond au nom du partage de fichier suivi du code de l’apprenant.
Par exemple `instance\A00001`.

[Comment récuperer un dossier par son chemin][recuperer-un-dossier]

## Récupérer le contenu du fichier de la photo de profil

En listant les fichiers du dossier comme indiqué ci-dessus, vous retrouverez le fichier correspondant à la photo de 
profil qui correspond à ce format `A00001.jpg`.

[Récupérer le contenu d’un fichier][recuperer-un-fichier]

[recuperer-un-dossier]: /reference/ressources/file/directory#afficher-les-informations-d-un-dossier-a-partir-d-un-chemin
[recuperer-un-fichier]: /reference/ressources/file/file#recuperer-un-fichier-avec-son-identifiant