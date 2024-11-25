# Référence

L’API d’AIMAIRA est organisée autour des concepts de REST. Notre API possède des URLs normalisées et orientées 
ressources, accepte des corps de requêtes `form-encoded`, retourne des réponses encodées au format JSON et utilise des 
codes de réponse HTTP, des mécanismes d’authentification et des verbes HTTP standard.

## Univers

Les ressources mises à disposition par l’API AIMAIRA sont listées dans la présente documentation de référence. 
Elles sont organisées par univers, en respectant le menu de navigation présent dans Manage.

L’univers `Core` est un univers virtuel qui contient toutes les ressources transverses à plusieurs Univers.

### Core

- [Campus](/reference/ressources/core/campus)
- [Civilité](/reference/ressources/core/civilite)
- [E-mail](/reference/ressources/core/e-mail)
- [Période](/reference/ressources/core/periode)
- [Programme](/reference/ressources/core/programme)
- [Utilisateur](/reference/ressources/core/utilisateur)

### File

- [Description](/reference/ressources/file/description)
- [Directory](/reference/ressources/file/directory)
- [File](/reference/ressources/file/file)

### Admission

- [Candidat](/reference/ressources/admission/candidat)
- [Dossier](/reference/ressources/admission/dossier)
- [État de candidature](/reference/ressources/admission/etat-de-candidature)
- [Voie d’admission](/reference/ressources/admission/voie-d-admission)

### Inscription

- [Apprenant](/reference/ressources/inscription/apprenant)
- [Inscription](/reference/ressources/inscription/inscription)
- [Issue / État d’inscription](/reference/ressources/inscription/issue-etat-d-inscription)
- [Parcours](/reference/ressources/inscription/parcours)
- [Régime de l’apprenant](/reference/ressources/inscription/regime-de-l-apprenant)
- [Voie d’entrée](/reference/ressources/inscription/voie-d-entree)

### Planification

- [Événement du calendrier](/reference/ressources/planification/evenement-du-calendrier)
- [Ressource d’événement](/reference/ressources/planification/ressource-d-evenement)
- [Type d’événement](/reference/ressources/planification/type-d-evenement)

## Correspondance des noms d’entités hérités

À plusieurs occasions lors de l’interfaçage avec le logiciel, il vous sera nécessaire de pouvoir faire correspondre le
nom hérité de l’entité, de la forme `univers.T_NOM_ENTITE` avec le point de terminaison correspondant dans l’API.

Une [page de la présente documentation](/reference/correspondance-entites-noms-herites) liste les correspondances afin 
de vous faciliter cette tâche.

## Cas d’usage

### Global

- [Créer un nouvel utilisateur](/reference/cas-d-usage/creer-un-nouvel-utilisateur) 
- [Téléverser un document](/reference/cas-d-usage/televerser-un-document)

### Admission

- [Créer un nouveau dossier de candidature](/reference/cas-d-usage/creer-un-nouveau-dossier-de-candidature)
- [Récupérer les données financières du dossier de candidature](/reference/cas-d-usage/recuperer-les-donnees-financieres-du-dossier-de-candidature)

### Inscription

- [Créer un nouveau dossier d’inscription](/reference/cas-d-usage/creer-un-nouveau-dossier-d-inscription)

### Planification

- [Modifier un événement du calendrier](/reference/cas-d-usage/modifier-un-evenement-du-calendrier)