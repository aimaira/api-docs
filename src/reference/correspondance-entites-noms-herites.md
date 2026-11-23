# Correspondance des noms d’entités hérités

Le tableau ci-dessous liste les noms des entités tels qu’exposés par l’API et leurs correspondances avec les noms
hérités que l’on retrouve par exemple lors de la récupération du message envoyé par un webhook (`ObjectType`) ou dans
le type d’un [objet](/reference/ressources/core/object).

<!-- reference:start — section générée depuis le modèle de l'API publique (npm run reference), ne pas modifier à la main -->

| Univers | Nom de l’entité | Point de terminaison dans l’API | Nom hérité |
|---------|-----------------|---------------------------------|------------|
| Académie | [Balance enseignant](/reference/ressources/academie/balance-enseignant) | `/BalanceEnseignant` | `rh.TJ_BALANCE_ENSEIGNANT` |
| Académie | [Catégorie d’enseignant](/reference/ressources/academie/categorie-d-enseignant) | `/TypeEnseignant` | `academie.TR_TYPE_ENSEIGNANT` |
| Académie | [Catégorie d’un enseignant](/reference/ressources/academie/categorie-d-un-enseignant) | `/EnseignantType` | `academie.TJ_ENSEIGNANT_TYPE` |
| Académie | [Contrat d’enseignant](/reference/ressources/academie/contrat-d-enseignant) | `/Contrat` | `rh.T_CONTRAT` |
| Académie | [Employeur](/reference/ressources/academie/employeur) | `/Employeur` | `rh.T_EMPLOYEUR` |
| Académie | [Enseignant](/reference/ressources/academie/enseignant) | `/Enseignant` | `academie.T_ENSEIGNANT` |
| Académie | [Export de virements](/reference/ressources/academie/export-de-virements) | `/SessionExportVirement` | `rh.T_SESSION_EXP_VIREMENT` |
| Académie | [Ligne de contrat](/reference/ressources/academie/ligne-de-contrat) | `/LigneContrat` | `rh.T_LIGNE_CONTRAT` |
| Académie | [Type de prestation RH](/reference/ressources/academie/type-de-prestation-rh) | `/TypePrestationRH` | `rh.TR_TYPE_PRESTATION` |
| Académie | [Type de relation contractuelle](/reference/ressources/academie/type-de-relation-contractuelle) | `/TypeRelationContractuelle` | `rh.TR_TYPE_RELATION_CONTRACTUELLE` |
| Admission | [Agent](/reference/ressources/admission/agent) | `/Agent` | `recrutement.T_AGENT` |
| Admission | [Autre candidature](/reference/ressources/admission/autre-candidature) | `/AutreCandidature` | `recrutement.T_AUTRE_CANDIDATURE` |
| Admission | [Canal d’acquisition](/reference/ressources/admission/canal-acquisition) | `/CanalAcquisition` | `recrutement.TR_CANAL_ACQUISITION` |
| Admission | [Candidat](/reference/ressources/admission/candidat) | `/Candidat` | `recrutement.T_CANDIDAT` |
| Admission | [Cible](/reference/ressources/admission/cible) | `/Cible` | `recrutement.T_CIBLE` |
| Admission | [Cible d’une voie d’admission](/reference/ressources/admission/cible-d-une-voie-d-admission) | `/CibleSessionRecrutement` | `recrutement.TJ_CIBLE_SESSION_RECRUTEMENT` |
| Admission | [Créneau](/reference/ressources/admission/creneau) | `/Creneau` | `recrutement.T_CRENEAUX` |
| Admission | [Créneau d’une voie d’admission](/reference/ressources/admission/creneau-d-une-voie-d-admission) | `/CreneauSessionRecrutement` | `recrutement.TJ_CRENEAU_SESSION` |
| Admission | [Dossier de candidature](/reference/ressources/admission/dossier) | `/Dossier` | `recrutement.TJ_DOSSIER` |
| Admission | [État de candidature](/reference/ressources/admission/etat-de-candidature) | `/EtatCandidature` | `recrutement.TR_ETAT_CANDIDATURE` |
| Admission | [Évaluateur](/reference/ressources/admission/evaluateur) | `/Evaluateur` | `recrutement.T_EVALUATEUR` |
| Admission | [Expérience professionnelle](/reference/ressources/admission/experience-professionnelle) | `/ExperienceProfessionnelle` | `recrutement.T_EXPERIENCE` |
| Admission | [Niveau de langue](/reference/ressources/admission/niveau-de-langue) | `/NiveauLangue` | `recrutement.T_NIVEAU_LANGUE` |
| Admission | [Ouverture](/reference/ressources/admission/ouverture) | `/Ouverture` | `recrutement.T_OUVERTURE` |
| Admission | [Pays d’un agent](/reference/ressources/admission/pays-d-un-agent) | `/AgentPays` | `recrutement.TJ_AGENT_PAYS` |
| Admission | [Qualification](/reference/ressources/admission/qualification) | `/Qualification` | `recrutement.T_QUALIFICATION` |
| Admission | [Question ouverte](/reference/ressources/admission/question-ouverte) | `/QuestionOuverte` | `recrutement.T_QUESTION_OUVERTE` |
| Admission | [Référent](/reference/ressources/admission/referent) | `/Referent` | `recrutement.T_REFERENT` |
| Admission | [Réponse à une question ouverte](/reference/ressources/admission/reponse-a-une-question-ouverte) | `/Reponse` | `recrutement.T_REPONSE` |
| Admission | [Résultat de test](/reference/ressources/admission/resultat-de-test) | `/NiveauTest` | `recrutement.T_NIVEAU_TEST` |
| Admission | [Scolarité antérieure](/reference/ressources/admission/scolarite-anterieure) | `/Scolarite` | `recrutement.T_SCOLARITE` |
| Admission | [Session](/reference/ressources/admission/session) | `/Session` | `recrutement.TR_SESSION` |
| Admission | [Test](/reference/ressources/admission/test) | `/Test` | `recrutement.TR_TEST` |
| Admission | [Type d’emploi](/reference/ressources/admission/type-d-emploi) | `/TypeEmploi` | `recrutement.TR_TYPE_EMPLOI` |
| Admission | [Type de qualification](/reference/ressources/admission/type-de-qualification) | `/TypeQualification` | `recrutement.TR_TYPE_QUALIFICATION` |
| Admission | [Type de test](/reference/ressources/admission/type-de-test) | `/TypeTest` | `recrutement.TR_TYPE_EMPLOI` |
| Admission | [Voie d’admission](/reference/ressources/admission/voie-d-admission) | `/SessionRecrutement` | `recrutement.T_SESSION_RECRUTEMENT` |
| Core | [Adresse](/reference/ressources/core/adresse) | `/Adresse` | `myapp.T_ADRESSE` |
| Core | [Civilité](/reference/ressources/core/civilite) | `/Civilite` | `myapp.TR_CIVILITE` |
| Core | [Commentaire](/reference/ressources/core/commentaire) | `/Commentaire` | `myapp.T_COMMENTAIRE` |
| Core | [E-mail](/reference/ressources/core/e-mail) | `/Mail` | `myapp.T_MAIL` |
| Core | [Marque](/reference/ressources/core/marque) | `/Ecole` | `scolarite.TR_ECOLE` |
| Core | [Note](/reference/ressources/core/note) | `/Note` | `myapp.TS_NOTES` |
| Core | [Pays](/reference/ressources/core/pays) | `/Pays` | `myapp.TR_PAYS` |
| Core | [Période](/reference/ressources/core/periode) | `/Periode` | `myapp.TS_PERIODE` |
| Core | [Programme](/reference/ressources/core/programme) | `/Programme` | `scolarite.T_PROGRAMME` |
| Core | [Téléphone](/reference/ressources/core/telephone) | `/Telephone` | `myapp.T_TELEPHONE` |
| Finance | [Affaire](/reference/ressources/finance/affaire) | `/Affaire` | `gestion.T_AFFAIRE` |
| Finance | [Catégorie de prestation](/reference/ressources/finance/categorie-de-prestation) | `/CategoriePrestation` | `gestion.TR_CATEGORIE_PRESTATION` |
| Finance | [Client](/reference/ressources/finance/client) | `/Client` | `gestion.T_CLIENT` |
| Finance | [Compte analytique](/reference/ressources/finance/compte-analytique) | `/CompteAnalytique` | `gestion.TR_COMPTE_ANALYTIQUE` |
| Finance | [Compte bancaire](/reference/ressources/finance/compte-bancaire) | `/Banque` | `myapp.T_BANQUE` |
| Finance | [Compte comptable](/reference/ressources/finance/compte-comptable) | `/CompteComptable` | `gestion.gestion.TR_COMPTE_COMPTABLE` |
| Finance | [Détail de balance](/reference/ressources/finance/detail-de-balance) | `/DetailBalance` | `gestion.TR_DETAIL_BALANCE` |
| Finance | [Détail de prestation](/reference/ressources/finance/detail-de-prestation) | `/DetailPrestation` | `gestion.T_DETAIL_PRESTATION` |
| Finance | [Échéance](/reference/ressources/finance/echeance) | `/Echeance` | `gestion.T_ECHEANCE` |
| Finance | [Export comptable](/reference/ressources/finance/export-comptable) | `/SessionExportCompta` | `gestion.T_SESSION_EXP_COMPTA` |
| Finance | [Export de prélèvements](/reference/ressources/finance/export-de-prelevements) | `/SessionExportPrelevement` | `gestion.T_SESSION_EXP_PRELEVEMENT` |
| Finance | [Facture](/reference/ressources/finance/facture) | `/Facture` | `gestion.T_FACTURE` |
| Finance | [Lien entre un client et une affaire](/reference/ressources/finance/client-pour-affaire) | `/ClientPourAffaire` | `gestion.TJ_AFFAIRE_CLIENT` |
| Finance | [Ligne de balance client](/reference/ressources/finance/balance-client) | `/BalanceClient` | `gestion.TJ_BALANCE_CLIENT` |
| Finance | [Ligne de prélèvement](/reference/ressources/finance/ligne-de-prelevement) | `/LignePrelevement` | `gestion.TJ_LIGNE_PRELEVEMENT` |
| Finance | [Mandat SEPA](/reference/ressources/finance/mandat-sepa) | `/MandatSEPA` | `gestion.T_SEPA` |
| Finance | [Modalité de paiement](/reference/ressources/finance/modalite-de-paiement) | `/ModalitePaiement` | `gestion.T_MODALITES_PAIEMENT` |
| Finance | [Modalité de paiement d’une prestation](/reference/ressources/finance/modalite-de-paiement-d-une-prestation) | `/ModalitePourPrestation` | `gestion.TJ_MODALITE_PRESTATION` |
| Finance | [Nature du client](/reference/ressources/finance/nature-client) | `/NatureClient` | `gestion.TR_NATURE_CLIENT` |
| Finance | [Prestation](/reference/ressources/finance/prestation) | `/Prestation` | `gestion.T_PRESTATION` |
| Finance | [Prestation rattachée à une entité](/reference/ressources/finance/prestation-rattachee-a-une-entite) | `/PrestationReference` | `gestion.TJ_PRESTATION_REF` |
| Finance | [Type de paiement](/reference/ressources/finance/type-de-paiement) | `/TypePaiement` | `gestion.TR_TYPE_PAIEMENT` |
| Hérité | [Entité juridique](/reference/ressources/herite/entite-juridique) | `/EntiteJuridique` | `myapp.TS_ENTITE_JURIDIQUE` |
| Inscription | [Apprenant](/reference/ressources/inscription/apprenant) | `/Apprenant` | `scolarite.T_APPRENANT` |
| Inscription | [Carte étudiante](/reference/ressources/inscription/carte-etudiante) | `/Carte` | `myapp.T_CARTE` |
| Inscription | [Commande de cartes](/reference/ressources/inscription/commande-de-cartes) | `/CommandeCarte` | `myapp.T_COMMANDECARTE` |
| Inscription | [Démarche](/reference/ressources/inscription/demarche) | `/Demarche` | `scolarite.T_DEMARCHE` |
| Inscription | [Démarche de titre de séjour](/reference/ressources/inscription/demarche-de-titre-de-sejour) | `/DemarcheTitreSejour` | `scolarite.T_DEMARCHE_TITRE_SEJOUR` |
| Inscription | [Détail de titre de séjour](/reference/ressources/inscription/detail-de-titre-de-sejour) | `/DetailTitreSejour` | `scolarite.TR_DETAIL_TITRE_SEJOUR` |
| Inscription | [Domaine du diplôme](/reference/ressources/inscription/domaine-du-diplome) | `/DomaineDiplome` | `scolarite.TR_DOMAINE_DIPLOME` |
| Inscription | [État de démarche](/reference/ressources/inscription/etat-de-demarche) | `/EtatDemarche` | `scolarite.TR_ETAT_DEMARCHE` |
| Inscription | [État de titre de séjour](/reference/ressources/inscription/etat-de-titre-de-sejour) | `/EtatTitreSejour` | `scolarite.TR_ETAT_TITRE_SEJOUR` |
| Inscription | [Inscription](/reference/ressources/inscription/inscription) | `/Inscription` | `scolarite.TJ_INSCRIPTION` |
| Inscription | [Inscription à une période](/reference/ressources/inscription/inscription-a-une-periode) | `/InscriptionPeriode` | `scolarite.TJ_INSCRIPTION_PERIODE` |
| Inscription | [Issue - état d’inscription](/reference/ressources/inscription/issue-etat-d-inscription) | `/EtatInscription` | `scolarite.TR_ETAT_INSCRIPTION` |
| Inscription | [Liaison entre un programme et un régime](/reference/ressources/inscription/programme-regime) | `/ProgrammeRegime` | `scolarite.TJ_PROGRAMME_REGIME` |
| Inscription | [Ligne de commande de cartes](/reference/ressources/inscription/ligne-de-commande-de-cartes) | `/CommandeCarteLigne` | `myapp.T_COMMANDE_CARTE_LIGNE` |
| Inscription | [Modèle de carte ISIC](/reference/ressources/inscription/modele-de-carte-isic) | `/TemplateISIC` | `myapp.T_TEMPLATE_ISIC` |
| Inscription | [Niveau de langue initial](/reference/ressources/inscription/niveau-de-langue-initial) | `/NiveauLangueInitial` | `scolarite.T_NIVEAU_LANGUE` |
| Inscription | [Origine](/reference/ressources/inscription/origine) | `/Origine` | `scolarite.TR_ORIGINE` |
| Inscription | [Parcours](/reference/ressources/inscription/parcours) | `/Parcours` | `scolarite.T_PARCOURS` |
| Inscription | [Période d’un parcours](/reference/ressources/inscription/periode-d-un-parcours) | `/ParcoursPeriode` | `scolarite.TJ_PARCOURS_PERIODE` |
| Inscription | [Régime de l’apprenant](/reference/ressources/inscription/regime-de-l-apprenant) | `/RegimeInscription` | `scolarite.TR_REGIME_INSCRIPTION` |
| Inscription | [Séquence d’un parcours](/reference/ressources/inscription/sequence-d-un-parcours) | `/ParcoursSequence` | `scolarite.TJ_PARCOURS_SEQUENCE` |
| Inscription | [Spécialité](/reference/ressources/inscription/specialite) | `/Specialite` | `scolarite.T_SPECIALITE` |
| Inscription | [Tuteur](/reference/ressources/inscription/tuteur) | `/Tuteur` | `scolarite.T_TUTEUR` |
| Inscription | [Type d’avertissement](/reference/ressources/inscription/type-d-avertissement) | `/TypeAvertissement` | `scolarite.TR_TYPE_AVERTISSEMENT` |
| Inscription | [Type de certification](/reference/ressources/inscription/type-de-certification) | `/TypeCertification` | `scolarite.TR_TYPE_CERTIFICATION` |
| Inscription | [Type de démarche](/reference/ressources/inscription/type-de-demarche) | `/TypeDemarche` | `scolarite.TR_TYPE_DEMARCHE` |
| Inscription | [Type de recrutement](/reference/ressources/inscription/type-de-recrutement) | `/TypeRecrutement` | `scolarite.TR_TYPE_RECRUTEMENT` |
| Inscription | [Type de titre de séjour](/reference/ressources/inscription/type-de-titre-de-sejour) | `/TypeTitreSejour` | `scolarite.TR_TYPE_TITRE_SEJOUR` |
| Inscription | [Validité de carte](/reference/ressources/inscription/validite-de-carte) | `/ValiditeCarte` | `myapp.T_CARTE_VALIDITE` |
| Inscription | [Voie d’entrée ou de réinscription](/reference/ressources/inscription/voie-d-entree) | `/Recrutement` | `scolarite.T_RECRUTEMENT` |
| Pédagogie | [Avertissement](/reference/ressources/pedagogie/avertissement) | `/Avertissement` | `pedagogie.T_AVERTISSEMENT` |
| Pédagogie | [Cours](/reference/ressources/pedagogie/cours) | `/Cours` | `pedagogie.T_COURS` |
| Pédagogie | [Cours d’une séquence](/reference/ressources/pedagogie/cours-d-une-sequence) | `/SequenceCours` | `pedagogie.TJ_SEQUENCE_COURS` |
| Pédagogie | [Cours suivi en mobilité](/reference/ressources/pedagogie/cours-suivi-en-mobilite) | `/CoursOutgoing` | `international.TJ_INSCRIPTION_COURS_INT` |
| Pédagogie | [Cycle](/reference/ressources/pedagogie/cycle) | `/Cycle` | `pedagogie.TR_CYCLE` |
| Pédagogie | [Décision du jury](/reference/ressources/pedagogie/decision-du-jury) | `/DecisionJury` | `scolarite.TR_DECISION_JURY` |
| Pédagogie | [Département](/reference/ressources/pedagogie/departement) | `/Departement` | `pedagogie.T_DEPARTEMENT` |
| Pédagogie | [Enseignant d’un cours](/reference/ressources/pedagogie/enseignant-d-un-cours) | `/EnseignantCours` | `pedagogie.TJ_ENSEIGNANT_COURS` |
| Pédagogie | [Évaluation](/reference/ressources/pedagogie/evaluation) | `/Evaluation` | `pedagogie.T_EVALUATION` |
| Pédagogie | [Groupe](/reference/ressources/pedagogie/groupe) | `/Groupe` | `pedagogie.T_GROUPE` |
| Pédagogie | [Inscription à un cours](/reference/ressources/pedagogie/inscription-a-un-cours) | `/InscriptionCours` | `pedagogie.TJ_INSCRIPTION_COURS` |
| Pédagogie | [Inscription à un groupe](/reference/ressources/pedagogie/inscription-a-un-groupe) | `/InscriptionGroupe` | `pedagogie.TJ_INSCRIPTION_GROUPE` |
| Pédagogie | [Inscription à une séquence](/reference/ressources/pedagogie/inscription-a-une-sequence) | `/InscriptionSequence` | `pedagogie.TJ_INSCRIPTION_SEQUENCE` |
| Pédagogie | [Module](/reference/ressources/pedagogie/module) | `/Module` | `pedagogie.T_MODULE` |
| Pédagogie | [Motif d’absence](/reference/ressources/pedagogie/motif-d-absence) | `/Motif` | `planification.TR_MOTIF` |
| Pédagogie | [Partenaire](/reference/ressources/pedagogie/partenaire) | `/Partenaire` | `international.TR_PARTENAIRE` |
| Pédagogie | [Rattrapage](/reference/ressources/pedagogie/rattrapage) | `/Rattrapage` | `pedagogie.T_RATTRAPAGE` |
| Pédagogie | [Référence bibliographique](/reference/ressources/pedagogie/reference-bibliographique) | `/Bibliographie` | `pedagogie.T_BIBLIOGRAPHIE` |
| Pédagogie | [Référence ECTS](/reference/ressources/pedagogie/reference-ects) | `/ReferenceECTS` | `pedagogie.T_REFERENCE_ECTS` |
| Pédagogie | [Référent école](/reference/ressources/pedagogie/referent-ecole) | `/ReferentEcole` | `internship.T_REFERENT_ECOLE` |
| Pédagogie | [Séquence](/reference/ressources/pedagogie/sequence) | `/Sequence` | `pedagogie.T_SEQUENCE` |
| Pédagogie | [Séquence suivie en mobilité](/reference/ressources/pedagogie/sequence-suivie-en-mobilite) | `/SequenceOutgoing` | `international.T_OUTGOING` |
| Pédagogie | [Session de rattrapage](/reference/ressources/pedagogie/session-de-rattrapage) | `/SessionRattrapage` | `pedagogie.T_SESSION_RATTRAPAGE ` |
| Pédagogie | [Sous-séquence](/reference/ressources/pedagogie/sous-sequence) | `/SequenceSequence` | `pedagogie.TJ_SEQUENCE_SEQUENCE` |
| Pédagogie | [Structure de cours](/reference/ressources/pedagogie/structure-de-cours) | `/StructureCours` | `pedagogie.T_STRUCTURE_COURS` |
| Pédagogie | [Type de calcul](/reference/ressources/pedagogie/type-de-calcul) | `/TypeCalcul` | `pedagogie.TR_TYPE_CALCUL` |
| Pédagogie | [Type de séquence](/reference/ressources/pedagogie/type-de-sequence) | `/TypeSequence` | `pedagogie.TR_TYPE_SEQUENCE` |
| Planification | [Événement commun](/reference/ressources/planification/evenement-commun) | `/EvenementCommun` | `planification.T_EVENEMENT_COMMUN` |
| Planification | [Événement du calendrier](/reference/ressources/planification/evenement-du-calendrier) | `/Planification` | `planification.T_PLANIFICATION` |
| Planification | [Examen](/reference/ressources/planification/examen) | `/Examen` | `planification.T_EXAMEN` |
| Planification | [Groupe d’une séance](/reference/ressources/planification/groupe-d-une-seance) | `/SeanceGroupe` | `planification.TJ_SEANCE_GROUPE` |
| Planification | [Répétition](/reference/ressources/planification/repetition) | `/Repetition` | `planification.T_REPETITION` |
| Planification | [Réservation](/reference/ressources/planification/reservation) | `/Reservation` | `planification.T_RESERVATION` |
| Planification | [Ressource](/reference/ressources/planification/ressource) | `/Ressource` | `planification.T_RESSOURCE_EXTERNE` |
| Planification | [Ressource d’événement](/reference/ressources/planification/ressource-d-evenement) | `/PlanificationRessource` | `planification.TJ_PLANIFICATION_RESSOURCE` |
| Planification | [Séance](/reference/ressources/planification/seance) | `/Seance` | `planification.T_SEANCE_COURS` |
| Planification | [Travail à rendre](/reference/ressources/planification/travail-a-rendre) | `/Travaux` | `planification.T_TRAVAUX` |
| Planification | [Type d’événement du calendrier](/reference/ressources/planification/type-d-evenement) | `/TypePlanification` | `planification.TR_TYPE_PLANIFICATION` |
| Planification | [Type de ressource](/reference/ressources/planification/type-de-ressource) | `/TypeRessource` | `planification.TR_TYPE_RESSOURCE` |
| Référentiel | [Algorithme de code des affaires](/reference/ressources/referentiel/algorithme-de-code-des-affaires) | `/AlgoCodeAffaire` | `gestion.TR_ALGO_CODE_AFFAIRE` |
| Référentiel | [Algorithme de code des apprenants](/reference/ressources/referentiel/algorithme-de-code-des-apprenants) | `/AlgoCodeApprenant` | `scolarite.TR_ALGO_CODE_APPRENANT` |
| Référentiel | [Algorithme de code des clients](/reference/ressources/referentiel/algorithme-de-code-des-clients) | `/AlgoCodeClient` | `gestion.TR_ALGO_CODE_CLIENT` |
| Référentiel | [Algorithme de code des conventions](/reference/ressources/referentiel/algorithme-de-code-des-conventions) | `/AlgoCodeConvention` | `internship.TR_ALGO_CODE_CONVENTION` |
| Référentiel | [Algorithme de code des cours](/reference/ressources/referentiel/algorithme-de-code-des-cours) | `/AlgoCodeCours` | `pedagogie.TR_ALGO_CODE_COURS` |
| Référentiel | [Algorithme de code des dossiers de candidature](/reference/ressources/referentiel/algorithme-de-code-des-dossiers-de-candidature) | `/AlgoCodeRecrutement` | `recrutement.TR_ALGO_CODE_RECRUTEMENT` |
| Référentiel | [Algorithme de code des dossiers RH](/reference/ressources/referentiel/algorithme-de-code-des-dossiers-rh) | `/AlgoCodeDossier` | `rh.TR_ALGO_CODE_DOSSIER` |
| Référentiel | [Algorithme de code des enseignants](/reference/ressources/referentiel/algorithme-de-code-des-enseignants) | `/AlgoCodeEnseignant` | `academie.TR_ALGO_CODE_ENSEIGNANT` |
| Référentiel | [Algorithme de code des factures](/reference/ressources/referentiel/algorithme-de-code-des-factures) | `/AlgoCodeFacture` | `gestion.TR_ALGO_CODE_FACTURE` |
| Référentiel | [Algorithme de RUM](/reference/ressources/referentiel/algorithme-de-rum) | `/AlgoRUM` | `gestion.TR_ALGO_RUM` |
| Référentiel | [Baccalauréat](/reference/ressources/referentiel/baccalaureat) | `/Baccalaureat` | `scolarite.TR_BACCALAUREAT` |
| Référentiel | [Badgeuse](/reference/ressources/referentiel/badgeuse) | `/Terminal` | `tempo.T_TERMINAL` |
| Référentiel | [Bâtiment](/reference/ressources/referentiel/batiment) | `/Batiment` | `myapp.T_BATIMENT` |
| Référentiel | [Catégorie socioprofessionnelle](/reference/ressources/referentiel/categorie-socioprofessionnelle) | `/CSP` | `myapp.TR_CSP` |
| Référentiel | [Continent](/reference/ressources/referentiel/continent) | `/Continent` | `myapp.TR_CONTINENT` |
| Référentiel | [Dernier diplôme](/reference/ressources/referentiel/dernier-diplome) | `/DernierDiplome` | `scolarite.TR_DERNIER_DIPLOME` |
| Référentiel | [Diplôme préparé](/reference/ressources/referentiel/diplome-prepare) | `/DiplomePrepare` | `recrutement.T_DIPLOME_PREPA` |
| Référentiel | [Domaine](/reference/ressources/referentiel/domaine) | `/Domaine` | `recrutement.T_DOMAINE` |
| Référentiel | [Échelon de bourse](/reference/ressources/referentiel/echelon-de-bourse) | `/EchelonBourse` | `scolarite.TR_ECHELON_BOURSE` |
| Référentiel | [Établissement](/reference/ressources/referentiel/etablissement) | `/Etablissement` | `myapp.T_ETABLISSEMENT` |
| Référentiel | [Langue d’enseignement](/reference/ressources/referentiel/langue-d-enseignement) | `/LangueEnseignement` | `pedagogie.TR_LANGUE_ENSEIGNEMENT` |
| Référentiel | [Localisation d’une badgeuse](/reference/ressources/referentiel/localisation-d-une-badgeuse) | `/Localisation` | `tempo.T_LOCALISATION` |
| Référentiel | [Mention](/reference/ressources/referentiel/mention) | `/Mention` | `scolarite.TR_MENTION` |
| Référentiel | [Modalité de séance](/reference/ressources/referentiel/modalite-de-seance) | `/Modalite` | `planification.TR_MODALITE_SEANCE` |
| Référentiel | [Modèle de message](/reference/ressources/referentiel/modele-de-message) | `/TemplateMessage` | `structure.T_TEMPLATE_MESSAGE` |
| Référentiel | [Nature du tuteur](/reference/ressources/referentiel/nature-du-tuteur) | `/NatureTuteur` | `scolarite.TR_NATURE_TUTEUR` |
| Référentiel | [Niveau](/reference/ressources/referentiel/niveau) | `/Niveau` | `scolarite.TR_NIVEAU` |
| Référentiel | [Niveau d’enseignement](/reference/ressources/referentiel/niveau-d-enseignement) | `/NiveauEnseignement` | `pedagogie.TR_NIVEAU_ENSEIGNEMENT` |
| Référentiel | [Niveau du public](/reference/ressources/referentiel/niveau-du-public) | `/NiveauPublic` | `pedagogie.TR_NIVEAU_PUBLIC` |
| Référentiel | [Passage de badge](/reference/ressources/referentiel/passage-de-badge) | `/Evenement` | `tempo.T_EVENEMENT` |
| Référentiel | [Personnalisation de l’intranet](/reference/ressources/referentiel/personnalisation-de-l-intranet) | `/Personnalisation` | `intranet.T_PERSONNALISATION` |
| Référentiel | [Province](/reference/ressources/referentiel/province) | `/Province` | `myapp.TR_PROVINCE` |
| Référentiel | [Questionnaire](/reference/ressources/referentiel/questionnaire) | `/Survey` | `myapp.T_SURVEY_JS` |
| Référentiel | [Réponse à un questionnaire](/reference/ressources/referentiel/reponse-a-un-questionnaire) | `/ResponseSurvey` | `myapp.T_RESPONSE_SURVEY_JS` |
| Référentiel | [Site](/reference/ressources/referentiel/site) | `/Site` | `myapp.T_SITE` |
| Référentiel | [Situation précédente](/reference/ressources/referentiel/situation-precedente) | `/SituationPrecedente` | `scolarite.TR_SITUATION_PRECEDENTE` |
| Référentiel | [Spécialité du baccalauréat](/reference/ressources/referentiel/specialite-du-baccalaureat) | `/SpecialiteBaccalaureat` | `scolarite.TR_SPECIALITE_BACCALAUREAT` |
| Référentiel | [Type de contrat](/reference/ressources/referentiel/type-de-contrat) | `/TypeContrat` | `rh.TR_TYPE_CONTRAT` |
| Référentiel | [Type de prépa](/reference/ressources/referentiel/type-de-prepa) | `/TypePrepa` | `scolarite.TR_TYPE_PREPA` |
| Référentiel | [Type de référence bibliographique](/reference/ressources/referentiel/type-de-reference-bibliographique) | `/TypeReferenceBibliographique` | `pedagogie.TR_TYPE_REFERENCE` |
| Référentiel | [Type de salle](/reference/ressources/referentiel/type-de-salle) | `/TypeSalle` | `planification.TR_TYPE_SALLE` |
| Référentiel | [Type de séance](/reference/ressources/referentiel/type-de-seance) | `/TypeSeance` | `planification.TR_TYPE_SEANCE` |
| Référentiel | [Type de signature](/reference/ressources/referentiel/type-de-signature) | `/TypeSignature` | `signature.TR_TYPE_SIGNATURE` |
| Référentiel | [Type de travaux](/reference/ressources/referentiel/type-de-travaux) | `/TypeTravaux` | `planification.TR_TYPE_TRAVAUX` |
| Référentiel | [Université](/reference/ressources/referentiel/universite) | `/Universite` | `myapp.T_UNIVERSITE` |
| Relation entreprise | [Algorithme de code des comptes](/reference/ressources/relation-entreprise/algorithme-de-code-des-comptes) | `/AlgoCodeCompte` | `crm.TR_ALGO_CODE_COMPTE` |
| Relation entreprise | [Autre lieu de formation](/reference/ressources/relation-entreprise/autre-lieu-de-formation) | `/AutreLieuFormation` | `gestion.T_AUTRE_LIEU_FORMATION` |
| Relation entreprise | [Compte](/reference/ressources/relation-entreprise/compte) | `/Compte` | `crm.T_COMPTE` |
| Relation entreprise | [Contact](/reference/ressources/relation-entreprise/contact) | `/Contact` | `crm.T_CONTACT` |
| Relation entreprise | [Convention](/reference/ressources/relation-entreprise/convention) | `/Convention` | `internship.T_CONVENTION` |
| Relation entreprise | [Dernière classe fréquentée](/reference/ressources/relation-entreprise/derniere-classe-frequentee) | `/DerniereClasse` | `internship.TR_DERNIERE_CLASSE` |
| Relation entreprise | [Diplôme préparé en apprentissage](/reference/ressources/relation-entreprise/diplome-prepare-en-apprentissage) | `/DiplomeApprentissage` | `internship.TR_DIPLOME_APPRENTISSAGE` |
| Relation entreprise | [Échéance d’apprentissage d’une convention](/reference/ressources/relation-entreprise/echeance-d-apprentissage-d-une-convention) | `/EcheanceApprentissageConvention` | `internship.T_ECHEANCE_APPRENTISSAGE_CONVENTION` |
| Relation entreprise | [Échéance de convention](/reference/ressources/relation-entreprise/echeance-de-convention) | `/EcheanceConvention` | `internship.T_ECHEANCE_CONVENTION` |
| Relation entreprise | [Échéance de facturation](/reference/ressources/relation-entreprise/echeance-de-facturation) | `/EcheanceFacturation` | `internship.T_ECHEANCE_FACTURATION` |
| Relation entreprise | [Échéance de facturation d’apprentissage](/reference/ressources/relation-entreprise/echeance-de-facturation-d-apprentissage) | `/EcheanceFacturationApprentissage` | `internship.T_ECHEANCE_FACTURATION_APPRENTISSAGE` |
| Relation entreprise | [Échéancier de facturation](/reference/ressources/relation-entreprise/echeancier-de-facturation) | `/EcheancierFacturation` | `internship.T_ECHEANCIER_FACTURATION` |
| Relation entreprise | [Échéancier de facturation d’apprentissage](/reference/ressources/relation-entreprise/echeancier-de-facturation-d-apprentissage) | `/EcheancierFacturationApprentissage` | `internship.T_ECHEANCIER_FACTURATION_APPRENTISSAGE` |
| Relation entreprise | [Entreprise](/reference/ressources/relation-entreprise/entreprise) | `/Entreprise` | `myapp.T_ENTREPRISE` |
| Relation entreprise | [État de convention](/reference/ressources/relation-entreprise/etat-de-convention) | `/EtatConvention` | `internship.TR_ETAT_CONVENTION` |
| Relation entreprise | [Événement CRM](/reference/ressources/relation-entreprise/evenement-crm) | `/EvenementCRM` | `crm.T_EVENEMENT` |
| Relation entreprise | [Fonction exercée](/reference/ressources/relation-entreprise/fonction-exercee) | `/FonctionExerce` | `internship.TR_FONCTION_EXERCE` |
| Relation entreprise | [Forme juridique](/reference/ressources/relation-entreprise/forme-juridique) | `/FormeJuridique` | `myapp.TR_FORME_JURIDIQUE` |
| Relation entreprise | [Frais de formation](/reference/ressources/relation-entreprise/frais-de-formation) | `/DispositionFinanciere` | `internship.T_DISPOSITION_FINANCIERE` |
| Relation entreprise | [Mode contractuel](/reference/ressources/relation-entreprise/mode-contractuel) | `/ModeContractuel` | `internship.TR_MODE_CONTRACTUEL` |
| Relation entreprise | [Organisme financeur](/reference/ressources/relation-entreprise/organisme-financeur) | `/OPCA` | `myapp.TR_OPCA` |
| Relation entreprise | [Origine de contrat](/reference/ressources/relation-entreprise/origine-de-contrat) | `/OrigineContrat` | `internship.TR_ORIGINE_CONTRAT` |
| Relation entreprise | [Participation à un événement](/reference/ressources/relation-entreprise/participation-a-un-evenement) | `/ParticipationEvenement` | `crm.TJ_PARTICIPATION` |
| Relation entreprise | [Période de convention](/reference/ressources/relation-entreprise/periode-de-convention) | `/PeriodeConvention` | `internship.T_PERIODE` |
| Relation entreprise | [Période de facturation](/reference/ressources/relation-entreprise/periode-de-facturation) | `/PeriodeFacturation` | `internship.T_PERIODE_FACTURATION` |
| Relation entreprise | [Professionnel](/reference/ressources/relation-entreprise/professionnel) | `/Professionnel` | `internship.T_PROFESSIONNEL` |
| Relation entreprise | [Provenance de l’offre](/reference/ressources/relation-entreprise/provenance-de-l-offre) | `/ProvenanceOffre` | `internship.TR_PROVENANCE_OFFRE` |
| Relation entreprise | [Rémunération de l’apprenant](/reference/ressources/relation-entreprise/remuneration) | `/Remuneration` | `internship.TR_REMUNERATION` |
| Relation entreprise | [Rythme d’apprentissage](/reference/ressources/relation-entreprise/rythme-d-apprentissage) | `/RythmeApprentissage` | `internship.TR_RYTHME_APP` |
| Relation entreprise | [Situation avant le contrat d’apprentissage](/reference/ressources/relation-entreprise/situation-avant-le-contrat-d-apprentissage) | `/SituationAvantContratApprentissage` | `internship.TR_SITUATION_AVANT_CONTRAT_APP` |
| Relation entreprise | [Type d’événement CRM](/reference/ressources/relation-entreprise/type-d-evenement-crm) | `/TypeEvenementCRM` | `crm.TR_TYPE_EVENEMENT` |
| Relation entreprise | [Type de contrat d’apprentissage](/reference/ressources/relation-entreprise/type-de-contrat-d-apprentissage) | `/TypeContratApprentissage` | `internship.TR_TYPE_CONTRAT_APP` |
| Relation entreprise | [Type de convention](/reference/ressources/relation-entreprise/type-de-convention) | `/TypeConvention` | `internship.TR_TYPE_CONVENTION` |
| Relation entreprise | [Type de convention d’un programme](/reference/ressources/relation-entreprise/type-de-convention-d-un-programme) | `/ProgrammeTypeConvention` | `internship.TJ_ETAT_PRG_TYC` |
| Relation entreprise | [Type de dérogation](/reference/ressources/relation-entreprise/type-de-derogation) | `/TypeDerogation` | `internship.TR_TYPE_DEROGATION` |

<!-- reference:end -->
