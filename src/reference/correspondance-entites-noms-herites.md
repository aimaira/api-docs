# Correspondance des noms d’entités hérités

Le tableau ci-dessous liste les noms des entités tels qu’exposés par l’API et leurs correspondances avec les noms
hérités que l’on retrouve par exemple lors de la récupération du message envoyé par un webhook (`ObjectType`) ou dans
le type d’un [objet](/reference/ressources/core/object).

<!-- graphv1:start — section générée depuis le modèle de GraphV1 (npm run graphv1), ne pas modifier à la main -->

| Univers | Nom de l’entité | Point de terminaison dans l’API | Nom hérité |
|---------|-----------------|---------------------------------|------------|
| Académie | `AlgoCodeEnseignant` | `/AlgoCodeEnseignant` | `academie.TR_ALGO_CODE_ENSEIGNANT` |
| Académie | [Enseignant](/reference/ressources/academie/enseignant) | `/Enseignant` | `academie.T_ENSEIGNANT` |
| Académie | `EnseignantType` | `/EnseignantType` | `academie.TJ_ENSEIGNANT_TYPE` |
| Académie | `TypeEnseignant` | `/TypeEnseignant` | `academie.TR_TYPE_ENSEIGNANT` |
| Admission | [Agent](/reference/ressources/admission/agent) | `/Agent` | `recrutement.T_AGENT` |
| Admission | `AgentPays` | `/AgentPays` | `recrutement.TJ_AGENT_PAYS` |
| Admission | `AlgoCodeRecrutement` | `/AlgoCodeRecrutement` | `recrutement.TR_ALGO_CODE_RECRUTEMENT` |
| Admission | `AutreCandidature` | `/AutreCandidature` | `recrutement.T_AUTRE_CANDIDATURE` |
| Admission | [Canal d’acquisition](/reference/ressources/admission/canal-acquisition) | `/CanalAcquisition` | `recrutement.TR_CANAL_ACQUISITION` |
| Admission | [Candidat](/reference/ressources/admission/candidat) | `/Candidat` | `recrutement.T_CANDIDAT` |
| Admission | `Cible` | `/Cible` | `recrutement.T_CIBLE` |
| Admission | `CibleSessionRecrutement` | `/CibleSessionRecrutement` | `recrutement.TJ_CIBLE_SESSION_RECRUTEMENT` |
| Admission | `Creneau` | `/Creneau` | `recrutement.T_CRENEAUX` |
| Admission | `CreneauSessionRecrutement` | `/CreneauSessionRecrutement` | `recrutement.TJ_CRENEAU_SESSION` |
| Admission | `DiplomePrepare` | `/DiplomePrepare` | `recrutement.T_DIPLOME_PREPA` |
| Admission | `Domaine` | `/Domaine` | `recrutement.T_DOMAINE` |
| Admission | [Dossier de candidature](/reference/ressources/admission/dossier) | `/Dossier` | `recrutement.TJ_DOSSIER` |
| Admission | [État de candidature](/reference/ressources/admission/etat-de-candidature) | `/EtatCandidature` | `recrutement.TR_ETAT_CANDIDATURE` |
| Admission | `Evaluateur` | `/Evaluateur` | `recrutement.T_EVALUATEUR` |
| Admission | `ExperienceProfessionnelle` | `/ExperienceProfessionnelle` | `recrutement.T_EXPERIENCE` |
| Admission | `NiveauLangue` | `/NiveauLangue` | `recrutement.T_NIVEAU_LANGUE` |
| Admission | `NiveauTest` | `/NiveauTest` | `recrutement.T_NIVEAU_TEST` |
| Admission | `Ouverture` | `/Ouverture` | `recrutement.T_OUVERTURE` |
| Admission | `Qualification` | `/Qualification` | `recrutement.T_QUALIFICATION` |
| Admission | `QuestionOuverte` | `/QuestionOuverte` | `recrutement.T_QUESTION_OUVERTE` |
| Admission | `Referent` | `/Referent` | `recrutement.T_REFERENT` |
| Admission | `Reponse` | `/Reponse` | `recrutement.T_REPONSE` |
| Admission | `Scolarite` | `/Scolarite` | `recrutement.T_SCOLARITE` |
| Admission | `Session` | `/Session` | `recrutement.TR_SESSION` |
| Admission | `Test` | `/Test` | `recrutement.TR_TEST` |
| Admission | `TypeEmploi` | `/TypeEmploi` | `recrutement.TR_TYPE_EMPLOI` |
| Admission | `TypeQualification` | `/TypeQualification` | `recrutement.TR_TYPE_QUALIFICATION` |
| Admission | `TypeTest` | `/TypeTest` | `recrutement.TR_TYPE_EMPLOI` |
| Admission | [Voie d’admission](/reference/ressources/admission/voie-d-admission) | `/SessionRecrutement` | `recrutement.T_SESSION_RECRUTEMENT` |
| Core | [Adresse](/reference/ressources/core/adresse) | `/Adresse` | `myapp.T_ADRESSE` |
| Core | `Banque` | `/Banque` | `myapp.T_BANQUE` |
| Core | `Batiment` | `/Batiment` | `myapp.T_BATIMENT` |
| Core | `Carte` | `/Carte` | `myapp.T_CARTE` |
| Core | [Civilité](/reference/ressources/core/civilite) | `/Civilite` | `myapp.TR_CIVILITE` |
| Core | `CommandeCarte` | `/CommandeCarte` | `myapp.T_COMMANDECARTE` |
| Core | `CommandeCarteLigne` | `/CommandeCarteLigne` | `myapp.T_COMMANDE_CARTE_LIGNE` |
| Core | [Commentaire](/reference/ressources/core/commentaire) | `/Commentaire` | `myapp.T_COMMENTAIRE` |
| Core | `Continent` | `/Continent` | `myapp.TR_CONTINENT` |
| Core | `CSP` | `/CSP` | `myapp.TR_CSP` |
| Core | [E-mail](/reference/ressources/core/e-mail) | `/Mail` | `myapp.T_MAIL` |
| Core | `Etablissement` | `/Etablissement` | `myapp.T_ETABLISSEMENT` |
| Core | `FormeJuridique` | `/FormeJuridique` | `myapp.TR_FORME_JURIDIQUE` |
| Core | [Marque](/reference/ressources/core/marque) | `/Ecole` | `scolarite.TR_ECOLE` |
| Core | [Note](/reference/ressources/core/note) | `/Note` | `myapp.TS_NOTES` |
| Core | [Pays](/reference/ressources/core/pays) | `/Pays` | `myapp.TR_PAYS` |
| Core | [Période](/reference/ressources/core/periode) | `/Periode` | `myapp.TS_PERIODE` |
| Core | [Programme](/reference/ressources/core/programme) | `/Programme` | `scolarite.T_PROGRAMME` |
| Core | `Province` | `/Province` | `myapp.TR_PROVINCE` |
| Core | `ResponseSurvey` | `/ResponseSurvey` | `myapp.T_RESPONSE_SURVEY_JS` |
| Core | `Site` | `/Site` | `myapp.T_SITE` |
| Core | `Survey` | `/Survey` | `myapp.T_SURVEY_JS` |
| Core | [Téléphone](/reference/ressources/core/telephone) | `/Telephone` | `myapp.T_TELEPHONE` |
| Core | `TemplateISIC` | `/TemplateISIC` | `myapp.T_TEMPLATE_ISIC` |
| Core | `TemplateMessage` | `/TemplateMessage` | `structure.T_TEMPLATE_MESSAGE` |
| Core | `Universite` | `/Universite` | `myapp.T_UNIVERSITE` |
| Core | `ValiditeCarte` | `/ValiditeCarte` | `myapp.T_CARTE_VALIDITE` |
| CRM | `AlgoCodeCompte` | `/AlgoCodeCompte` | `crm.TR_ALGO_CODE_COMPTE` |
| CRM | `Compte` | `/Compte` | `crm.T_COMPTE` |
| CRM | `Contact` | `/Contact` | `crm.T_CONTACT` |
| CRM | `EvenementCRM` | `/EvenementCRM` | `crm.T_EVENEMENT` |
| CRM | `ParticipationEvenement` | `/ParticipationEvenement` | `crm.TJ_PARTICIPATION` |
| CRM | `TypeEvenementCRM` | `/TypeEvenementCRM` | `crm.TR_TYPE_EVENEMENT` |
| Finance | [Affaire](/reference/ressources/finance/affaire) | `/Affaire` | `gestion.T_AFFAIRE` |
| Finance | `AlgoCodeAffaire` | `/AlgoCodeAffaire` | `gestion.TR_ALGO_CODE_AFFAIRE` |
| Finance | `AlgoCodeClient` | `/AlgoCodeClient` | `gestion.TR_ALGO_CODE_CLIENT` |
| Finance | `AlgoCodeFacture` | `/AlgoCodeFacture` | `gestion.TR_ALGO_CODE_FACTURE` |
| Finance | `AlgoRUM` | `/AlgoRUM` | `gestion.TR_ALGO_RUM` |
| Finance | `CategoriePrestation` | `/CategoriePrestation` | `gestion.TR_CATEGORIE_PRESTATION` |
| Finance | [Client](/reference/ressources/finance/client) | `/Client` | `gestion.T_CLIENT` |
| Finance | `CompteAnalytique` | `/CompteAnalytique` | `gestion.TR_COMPTE_ANALYTIQUE` |
| Finance | `CompteComptable` | `/CompteComptable` | `gestion.gestion.TR_COMPTE_COMPTABLE` |
| Finance | `DetailBalance` | `/DetailBalance` | `gestion.TR_DETAIL_BALANCE` |
| Finance | `DetailPrestation` | `/DetailPrestation` | `gestion.T_DETAIL_PRESTATION` |
| Finance | `Echeance` | `/Echeance` | `gestion.T_ECHEANCE` |
| Finance | `Facture` | `/Facture` | `gestion.T_FACTURE` |
| Finance | [Lien entre un client et une affaire](/reference/ressources/finance/client-pour-affaire) | `/ClientPourAffaire` | `gestion.TJ_AFFAIRE_CLIENT` |
| Finance | [Ligne de balance client](/reference/ressources/finance/balance-client) | `/BalanceClient` | `gestion.TJ_BALANCE_CLIENT` |
| Finance | `LignePrelevement` | `/LignePrelevement` | `gestion.TJ_LIGNE_PRELEVEMENT` |
| Finance | [Mandat SEPA](/reference/ressources/finance/mandat-sepa) | `/MandatSEPA` | `gestion.T_SEPA` |
| Finance | `ModalitePaiement` | `/ModalitePaiement` | `gestion.T_MODALITES_PAIEMENT` |
| Finance | `ModalitePourPrestation` | `/ModalitePourPrestation` | `gestion.TJ_MODALITE_PRESTATION` |
| Finance | [Nature du client](/reference/ressources/finance/nature-client) | `/NatureClient` | `gestion.TR_NATURE_CLIENT` |
| Finance | `Prestation` | `/Prestation` | `gestion.T_PRESTATION` |
| Finance | `PrestationReference` | `/PrestationReference` | `gestion.TJ_PRESTATION_REF` |
| Finance | `SessionExportCompta` | `/SessionExportCompta` | `gestion.T_SESSION_EXP_COMPTA` |
| Finance | `SessionExportPrelevement` | `/SessionExportPrelevement` | `gestion.T_SESSION_EXP_PRELEVEMENT` |
| Finance | `TypePaiement` | `/TypePaiement` | `gestion.TR_TYPE_PAIEMENT` |
| Hérité | [Entité juridique](/reference/ressources/herite/entite-juridique) | `/EntiteJuridique` | `myapp.TS_ENTITE_JURIDIQUE` |
| Inscription | `AlgoCodeApprenant` | `/AlgoCodeApprenant` | `scolarite.TR_ALGO_CODE_APPRENANT` |
| Inscription | [Apprenant](/reference/ressources/inscription/apprenant) | `/Apprenant` | `scolarite.T_APPRENANT` |
| Inscription | `Baccalaureat` | `/Baccalaureat` | `scolarite.TR_BACCALAUREAT` |
| Inscription | `DecisionJury` | `/DecisionJury` | `scolarite.TR_DECISION_JURY` |
| Inscription | `Demarche` | `/Demarche` | `scolarite.T_DEMARCHE` |
| Inscription | `DemarcheTitreSejour` | `/DemarcheTitreSejour` | `scolarite.T_DEMARCHE_TITRE_SEJOUR` |
| Inscription | `DernierDiplome` | `/DernierDiplome` | `scolarite.TR_DERNIER_DIPLOME` |
| Inscription | `DetailTitreSejour` | `/DetailTitreSejour` | `scolarite.TR_DETAIL_TITRE_SEJOUR` |
| Inscription | `DomaineDiplome` | `/DomaineDiplome` | `scolarite.TR_DOMAINE_DIPLOME` |
| Inscription | `EchelonBourse` | `/EchelonBourse` | `scolarite.TR_ECHELON_BOURSE` |
| Inscription | `EtatDemarche` | `/EtatDemarche` | `scolarite.TR_ETAT_DEMARCHE` |
| Inscription | `EtatTitreSejour` | `/EtatTitreSejour` | `scolarite.TR_ETAT_TITRE_SEJOUR` |
| Inscription | [Inscription](/reference/ressources/inscription/inscription) | `/Inscription` | `scolarite.TJ_INSCRIPTION` |
| Inscription | `InscriptionPeriode` | `/InscriptionPeriode` | `scolarite.TJ_INSCRIPTION_PERIODE` |
| Inscription | [Issue - état d’inscription](/reference/ressources/inscription/issue-etat-d-inscription) | `/EtatInscription` | `scolarite.TR_ETAT_INSCRIPTION` |
| Inscription | [Liaison entre un programme et un régime](/reference/ressources/inscription/programme-regime) | `/ProgrammeRegime` | `scolarite.TJ_PROGRAMME_REGIME` |
| Inscription | `Mention` | `/Mention` | `scolarite.TR_MENTION` |
| Inscription | `NatureTuteur` | `/NatureTuteur` | `scolarite.TR_NATURE_TUTEUR` |
| Inscription | `Niveau` | `/Niveau` | `scolarite.TR_NIVEAU` |
| Inscription | `NiveauLangueInitial` | `/NiveauLangueInitial` | `scolarite.T_NIVEAU_LANGUE` |
| Inscription | [Origine](/reference/ressources/inscription/origine) | `/Origine` | `scolarite.TR_ORIGINE` |
| Inscription | [Parcours](/reference/ressources/inscription/parcours) | `/Parcours` | `scolarite.T_PARCOURS` |
| Inscription | `ParcoursPeriode` | `/ParcoursPeriode` | `scolarite.TJ_PARCOURS_PERIODE` |
| Inscription | `ParcoursSequence` | `/ParcoursSequence` | `scolarite.TJ_PARCOURS_SEQUENCE` |
| Inscription | [Régime de l’apprenant](/reference/ressources/inscription/regime-de-l-apprenant) | `/RegimeInscription` | `scolarite.TR_REGIME_INSCRIPTION` |
| Inscription | `SituationPrecedente` | `/SituationPrecedente` | `scolarite.TR_SITUATION_PRECEDENTE` |
| Inscription | `Specialite` | `/Specialite` | `scolarite.T_SPECIALITE` |
| Inscription | `SpecialiteBaccalaureat` | `/SpecialiteBaccalaureat` | `scolarite.TR_SPECIALITE_BACCALAUREAT` |
| Inscription | [Tuteur](/reference/ressources/inscription/tuteur) | `/Tuteur` | `scolarite.T_TUTEUR` |
| Inscription | `TypeAvertissement` | `/TypeAvertissement` | `scolarite.TR_TYPE_AVERTISSEMENT` |
| Inscription | `TypeCertification` | `/TypeCertification` | `scolarite.TR_TYPE_CERTIFICATION` |
| Inscription | `TypeDemarche` | `/TypeDemarche` | `scolarite.TR_TYPE_DEMARCHE` |
| Inscription | `TypePrepa` | `/TypePrepa` | `scolarite.TR_TYPE_PREPA` |
| Inscription | `TypeRecrutement` | `/TypeRecrutement` | `scolarite.TR_TYPE_RECRUTEMENT` |
| Inscription | `TypeTitreSejour` | `/TypeTitreSejour` | `scolarite.TR_TYPE_TITRE_SEJOUR` |
| Inscription | [Voie d’entrée ou de réinscription](/reference/ressources/inscription/voie-d-entree) | `/Recrutement` | `scolarite.T_RECRUTEMENT` |
| International | `CoursOutgoing` | `/CoursOutgoing` | `international.TJ_INSCRIPTION_COURS_INT` |
| International | `Partenaire` | `/Partenaire` | `international.TR_PARTENAIRE` |
| International | `SequenceOutgoing` | `/SequenceOutgoing` | `international.T_OUTGOING` |
| Intranet | `Personnalisation` | `/Personnalisation` | `intranet.T_PERSONNALISATION` |
| Pédagogie | `AlgoCodeCours` | `/AlgoCodeCours` | `pedagogie.TR_ALGO_CODE_COURS` |
| Pédagogie | `Avertissement` | `/Avertissement` | `pedagogie.T_AVERTISSEMENT` |
| Pédagogie | `Bibliographie` | `/Bibliographie` | `pedagogie.T_BIBLIOGRAPHIE` |
| Pédagogie | [Cours](/reference/ressources/pedagogie/cours) | `/Cours` | `pedagogie.T_COURS` |
| Pédagogie | `Cycle` | `/Cycle` | `pedagogie.TR_CYCLE` |
| Pédagogie | [Département](/reference/ressources/pedagogie/departement) | `/Departement` | `pedagogie.T_DEPARTEMENT` |
| Pédagogie | `EnseignantCours` | `/EnseignantCours` | `pedagogie.TJ_ENSEIGNANT_COURS` |
| Pédagogie | [Évaluation](/reference/ressources/pedagogie/evaluation) | `/Evaluation` | `pedagogie.T_EVALUATION` |
| Pédagogie | `Groupe` | `/Groupe` | `pedagogie.T_GROUPE` |
| Pédagogie | `InscriptionCours` | `/InscriptionCours` | `pedagogie.TJ_INSCRIPTION_COURS` |
| Pédagogie | `InscriptionGroupe` | `/InscriptionGroupe` | `pedagogie.TJ_INSCRIPTION_GROUPE` |
| Pédagogie | `InscriptionSequence` | `/InscriptionSequence` | `pedagogie.TJ_INSCRIPTION_SEQUENCE` |
| Pédagogie | `LangueEnseignement` | `/LangueEnseignement` | `pedagogie.TR_LANGUE_ENSEIGNEMENT` |
| Pédagogie | `Module` | `/Module` | `pedagogie.T_MODULE` |
| Pédagogie | `NiveauEnseignement` | `/NiveauEnseignement` | `pedagogie.TR_NIVEAU_ENSEIGNEMENT` |
| Pédagogie | `NiveauPublic` | `/NiveauPublic` | `pedagogie.TR_NIVEAU_PUBLIC` |
| Pédagogie | `Rattrapage` | `/Rattrapage` | `pedagogie.T_RATTRAPAGE` |
| Pédagogie | `ReferenceECTS` | `/ReferenceECTS` | `pedagogie.T_REFERENCE_ECTS` |
| Pédagogie | [Séquence](/reference/ressources/pedagogie/sequence) | `/Sequence` | `pedagogie.T_SEQUENCE` |
| Pédagogie | `SequenceCours` | `/SequenceCours` | `pedagogie.TJ_SEQUENCE_COURS` |
| Pédagogie | `SequenceSequence` | `/SequenceSequence` | `pedagogie.TJ_SEQUENCE_SEQUENCE` |
| Pédagogie | `SessionRattrapage` | `/SessionRattrapage` | `pedagogie.T_SESSION_RATTRAPAGE ` |
| Pédagogie | `StructureCours` | `/StructureCours` | `pedagogie.T_STRUCTURE_COURS` |
| Pédagogie | [Type de séquence](/reference/ressources/pedagogie/type-de-sequence) | `/TypeSequence` | `pedagogie.TR_TYPE_SEQUENCE` |
| Pédagogie | `TypeCalcul` | `/TypeCalcul` | `pedagogie.TR_TYPE_CALCUL` |
| Pédagogie | `TypeReferenceBibliographique` | `/TypeReferenceBibliographique` | `pedagogie.TR_TYPE_REFERENCE` |
| Planification | [Événement du calendrier](/reference/ressources/planification/evenement-du-calendrier) | `/Planification` | `planification.T_PLANIFICATION` |
| Planification | `EvenementCommun` | `/EvenementCommun` | `planification.T_EVENEMENT_COMMUN` |
| Planification | `Examen` | `/Examen` | `planification.T_EXAMEN` |
| Planification | `Modalite` | `/Modalite` | `planification.TR_MODALITE_SEANCE` |
| Planification | `Motif` | `/Motif` | `planification.TR_MOTIF` |
| Planification | `Repetition` | `/Repetition` | `planification.T_REPETITION` |
| Planification | `Reservation` | `/Reservation` | `planification.T_RESERVATION` |
| Planification | `Ressource` | `/Ressource` | `planification.T_RESSOURCE_EXTERNE` |
| Planification | [Ressource d’événement](/reference/ressources/planification/ressource-d-evenement) | `/PlanificationRessource` | `planification.TJ_PLANIFICATION_RESSOURCE` |
| Planification | `Seance` | `/Seance` | `planification.T_SEANCE_COURS` |
| Planification | `SeanceGroupe` | `/SeanceGroupe` | `planification.TJ_SEANCE_GROUPE` |
| Planification | `Travaux` | `/Travaux` | `planification.T_TRAVAUX` |
| Planification | [Type d’événement du calendrier](/reference/ressources/planification/type-d-evenement) | `/TypePlanification` | `planification.TR_TYPE_PLANIFICATION` |
| Planification | `TypeRessource` | `/TypeRessource` | `planification.TR_TYPE_RESSOURCE` |
| Planification | `TypeSalle` | `/TypeSalle` | `planification.TR_TYPE_SALLE` |
| Planification | `TypeSeance` | `/TypeSeance` | `planification.TR_TYPE_SEANCE` |
| Planification | `TypeTravaux` | `/TypeTravaux` | `planification.TR_TYPE_TRAVAUX` |
| Relation entreprise | `AlgoCodeConvention` | `/AlgoCodeConvention` | `internship.TR_ALGO_CODE_CONVENTION` |
| Relation entreprise | [Autre lieu de formation](/reference/ressources/relation-entreprise/autre-lieu-de-formation) | `/AutreLieuFormation` | `gestion.T_AUTRE_LIEU_FORMATION` |
| Relation entreprise | [Convention](/reference/ressources/relation-entreprise/convention) | `/Convention` | `internship.T_CONVENTION` |
| Relation entreprise | `DerniereClasse` | `/DerniereClasse` | `internship.TR_DERNIERE_CLASSE` |
| Relation entreprise | `DiplomeApprentissage` | `/DiplomeApprentissage` | `internship.TR_DIPLOME_APPRENTISSAGE` |
| Relation entreprise | `EcheanceApprentissageConvention` | `/EcheanceApprentissageConvention` | `internship.T_ECHEANCE_APPRENTISSAGE_CONVENTION` |
| Relation entreprise | `EcheanceConvention` | `/EcheanceConvention` | `internship.T_ECHEANCE_CONVENTION` |
| Relation entreprise | `EcheanceFacturation` | `/EcheanceFacturation` | `internship.T_ECHEANCE_FACTURATION` |
| Relation entreprise | `EcheanceFacturationApprentissage` | `/EcheanceFacturationApprentissage` | `internship.T_ECHEANCE_FACTURATION_APPRENTISSAGE` |
| Relation entreprise | [Échéancier de facturation](/reference/ressources/relation-entreprise/echeancier-de-facturation) | `/EcheancierFacturation` | `internship.T_ECHEANCIER_FACTURATION` |
| Relation entreprise | `EcheancierFacturationApprentissage` | `/EcheancierFacturationApprentissage` | `internship.T_ECHEANCIER_FACTURATION_APPRENTISSAGE` |
| Relation entreprise | [Entreprise](/reference/ressources/relation-entreprise/entreprise) | `/Entreprise` | `myapp.T_ENTREPRISE` |
| Relation entreprise | [État de convention](/reference/ressources/relation-entreprise/etat-de-convention) | `/EtatConvention` | `internship.TR_ETAT_CONVENTION` |
| Relation entreprise | `FonctionExerce` | `/FonctionExerce` | `internship.TR_FONCTION_EXERCE` |
| Relation entreprise | [Frais de formation](/reference/ressources/relation-entreprise/frais-de-formation) | `/DispositionFinanciere` | `internship.T_DISPOSITION_FINANCIERE` |
| Relation entreprise | `ModeContractuel` | `/ModeContractuel` | `internship.TR_MODE_CONTRACTUEL` |
| Relation entreprise | [Organisme financeur](/reference/ressources/relation-entreprise/organisme-financeur) | `/OPCA` | `myapp.TR_OPCA` |
| Relation entreprise | `OrigineContrat` | `/OrigineContrat` | `internship.TR_ORIGINE_CONTRAT` |
| Relation entreprise | `PeriodeConvention` | `/PeriodeConvention` | `internship.T_PERIODE` |
| Relation entreprise | `PeriodeFacturation` | `/PeriodeFacturation` | `internship.T_PERIODE_FACTURATION` |
| Relation entreprise | [Professionnel](/reference/ressources/relation-entreprise/professionnel) | `/Professionnel` | `internship.T_PROFESSIONNEL` |
| Relation entreprise | `ProgrammeTypeConvention` | `/ProgrammeTypeConvention` | `internship.TJ_ETAT_PRG_TYC` |
| Relation entreprise | `ProvenanceOffre` | `/ProvenanceOffre` | `internship.TR_PROVENANCE_OFFRE` |
| Relation entreprise | `ReferentEcole` | `/ReferentEcole` | `internship.T_REFERENT_ECOLE` |
| Relation entreprise | [Rémunération de l’apprenant](/reference/ressources/relation-entreprise/remuneration) | `/Remuneration` | `internship.TR_REMUNERATION` |
| Relation entreprise | `RythmeApprentissage` | `/RythmeApprentissage` | `internship.TR_RYTHME_APP` |
| Relation entreprise | `SituationAvantContratApprentissage` | `/SituationAvantContratApprentissage` | `internship.TR_SITUATION_AVANT_CONTRAT_APP` |
| Relation entreprise | [Type de convention](/reference/ressources/relation-entreprise/type-de-convention) | `/TypeConvention` | `internship.TR_TYPE_CONVENTION` |
| Relation entreprise | `TypeContratApprentissage` | `/TypeContratApprentissage` | `internship.TR_TYPE_CONTRAT_APP` |
| Relation entreprise | `TypeDerogation` | `/TypeDerogation` | `internship.TR_TYPE_DEROGATION` |
| Ressources humaines | `AlgoCodeDossier` | `/AlgoCodeDossier` | `rh.TR_ALGO_CODE_DOSSIER` |
| Ressources humaines | `BalanceEnseignant` | `/BalanceEnseignant` | `rh.TJ_BALANCE_ENSEIGNANT` |
| Ressources humaines | `Contrat` | `/Contrat` | `rh.T_CONTRAT` |
| Ressources humaines | `Employeur` | `/Employeur` | `rh.T_EMPLOYEUR` |
| Ressources humaines | `LigneContrat` | `/LigneContrat` | `rh.T_LIGNE_CONTRAT` |
| Ressources humaines | `SessionExportVirement` | `/SessionExportVirement` | `rh.T_SESSION_EXP_VIREMENT` |
| Ressources humaines | `TypeContrat` | `/TypeContrat` | `rh.TR_TYPE_CONTRAT` |
| Ressources humaines | `TypePrestationRH` | `/TypePrestationRH` | `rh.TR_TYPE_PRESTATION` |
| Ressources humaines | `TypeRelationContractuelle` | `/TypeRelationContractuelle` | `rh.TR_TYPE_RELATION_CONTRACTUELLE` |
| Signature | `TypeSignature` | `/TypeSignature` | `signature.TR_TYPE_SIGNATURE` |
| Tempo | `Evenement` | `/Evenement` | `tempo.T_EVENEMENT` |
| Tempo | `Localisation` | `/Localisation` | `tempo.T_LOCALISATION` |
| Tempo | `Terminal` | `/Terminal` | `tempo.T_TERMINAL` |

<!-- graphv1:end -->
