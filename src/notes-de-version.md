---
sidebar: false
aside: false
outline: false
lastUpdated: false
prev: false
next: false
---

# Notes de version

## 2026

### Novembre

- Les champs personnalisés (`Parametres`) du [programme](/reference/ressources/core/programme), de la
  [voie d’entrée](/reference/ressources/inscription/voie-d-entree) et de la
  [voie d’admission](/reference/ressources/admission/voie-d-admission) sont documentés en écriture : chaque champ est
  mis à jour par son code, les autres sont conservés.
- Les exemples de création et de modification d’un [apprenant](/reference/ressources/inscription/apprenant) utilisent
  la ressource `Apprenant`. Les exemples des pages [Convention](/reference/ressources/relation-entreprise/convention)
  et [Séquence](/reference/ressources/pedagogie/sequence) sont corrigés.

### Octobre

- La référence des ressources est désormais générée à partir de l’API et mise à jour automatiquement quand l’API
  évolue. Chaque page présente toutes les opérations disponibles (lister, récupérer, créer, modifier, supprimer), avec
  un exemple de requête et de réponse et la liste des données obligatoires à la création.
- Le [tableau de correspondance des noms hérités](/reference/correspondance-entites-noms-herites) couvre maintenant
  plus de 200 entités et se met à jour automatiquement. Le nom hérité du dossier de candidature est corrigé :
  `recrutement.TJ_DOSSIER`.
- Les pages emploient le nom métier des entités, par exemple e-mail ou voie d’entrée ou de réinscription. Le nom
  technique, quand il est utile, est écrit en police à chasse fixe : `Mail`, `Recrutement`.
- Les exemples de requête des pages [Mandat SEPA](/reference/ressources/finance/mandat-sepa),
  [Événement du calendrier](/reference/ressources/planification/evenement-du-calendrier) et
  [Professionnel](/reference/ressources/relation-entreprise/professionnel) sont corrigés.

### Septembre

- Les données obligatoires et facultatives sont précisées pour le [programme](/reference/ressources/core/programme), la
  [voie d’admission](/reference/ressources/admission/voie-d-admission) et la
  [voie d’entrée](/reference/ressources/inscription/voie-d-entree).

### Août

- Création d’un [enseignant](/reference/ressources/academie/enseignant).

### Avril

- Liste des fichiers et dossiers contenus dans un [dossier](/reference/ressources/file/directory).
- Récupération de l’identifiant d’une [affaire](/reference/ressources/finance/affaire).

### Mars

- Échéances de [convention](/reference/ressources/relation-entreprise/convention) et
  [échéancier de facturation](/reference/ressources/relation-entreprise/echeancier-de-facturation).

### Février

- Liste des [commentaires](/reference/ressources/core/commentaire) d’une entité.

### Janvier

- Liste des catégories d’un [enseignant](/reference/ressources/academie/enseignant).
- Le chemin pour lister les périodes d’une [inscription](/reference/ressources/inscription/inscription) est corrigé.

## 2025

### Décembre

- La marque fait partie des données obligatoires à la création d’un [programme](/reference/ressources/core/programme).

### Novembre

- La documentation de l’admission est révisée et la ressource [Agent](/reference/ressources/admission/agent) est
  ajoutée.

### Octobre

- Date de conclusion d’une [convention](/reference/ressources/relation-entreprise/convention).
- Types de [ressources d’événement](/reference/ressources/planification/ressource-d-evenement).
- [Récupérer les notes d’un apprenant](/reference/cas-d-usage/recuperer-les-notes-d-un-apprenant).

### Septembre

- Création d’une [référence externe](/reference/ressources/core/reference-externe).
- Périodes d’une [inscription](/reference/ressources/core/periode).

### Août

- [Références externes](/reference/ressources/core/reference-externe).
- Liaisons entre un [programme et un régime](/reference/ressources/inscription/programme-regime).
- Création d’un [mandat SEPA](/reference/ressources/finance/mandat-sepa).
- Précisions sur les champs du [dossier de candidature](/reference/ressources/admission/dossier) et du
  [candidat](/reference/ressources/admission/candidat).
- Correction de la gestion des autorisations d’un [utilisateur](/reference/ressources/core/utilisateur).

### Juillet

- L’algorithme de hachage du mot de passe change à la
  [création d’un utilisateur](/reference/cas-d-usage/creer-un-nouvel-utilisateur).
- [Autres lieux de formation](/reference/ressources/relation-entreprise/autre-lieu-de-formation) et
  [modèles d’utilisateur](/reference/ressources/referentiel/modele-utilisateur).
- Ajout d’un utilisateur à un [apprenant](/reference/ressources/inscription/apprenant).

### Juin

- Informations financières du contrat lié à une [convention](/reference/ressources/relation-entreprise/convention).

### Mai

- [Origine](/reference/ressources/inscription/origine) d’une inscription.
- [Tuteur](/reference/ressources/inscription/tuteur), aussi appelé représentant légal.
- Création d’un [client](/reference/ressources/finance/client) révisée, avec le rôle du code.
- Précisions sur la récupération des [fichiers](/reference/ressources/file/file).

### Avril

- Lecture et ajout des permissions d’un [utilisateur](/reference/ressources/core/utilisateur).

### Mars

- [Création d’une convention](/reference/cas-d-usage/creer-une-nouvelle-convention), avec ses données annexes et
  l’entreprise.
- Champs personnalisés.
- Création d’un client sur une [inscription](/reference/ressources/inscription/inscription).

### Février

- Recherche des [e-mails](/reference/ressources/core/e-mail) à partir d’une adresse.

## 2024

### Décembre

- Point d’entrée [`Object`](/reference/ressources/core/object) et précisions sur la modification d’une entité.

### Novembre

- [Création d’un utilisateur](/reference/cas-d-usage/creer-un-nouvel-utilisateur).

### Septembre

- Points d’entrée des [fichiers](/reference/ressources/file/file).

### Juillet

- Données financières du dossier de candidature et encarts sur les différences avec Sélection.

### Avril

- Récupération des [candidats](/reference/ressources/admission/candidat) à partir de leur e-mail.

### Février

- Création d’un [programme](/reference/ressources/core/programme).

### Janvier

- [Mise en place d’un webhook](/creer-votre-integration/mise-en-place-d-un-webhook).
- Lien entre les [événements du calendrier](/reference/ressources/planification/evenement-du-calendrier) et les
  [ressources d’événement](/reference/ressources/planification/ressource-d-evenement).

## 2023

### Novembre

- Première version de la documentation de l’API.
