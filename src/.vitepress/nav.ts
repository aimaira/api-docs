const nav = [
    {
        text: 'Créer votre intégration',
        items: [
            {
                text: 'Prise en main de l’API',
                link: '/creer-votre-integration/prise-en-main-de-l-api',
            },
            {
                text: 'Mise en place d’un webhook',
                link: '/creer-votre-integration/mise-en-place-d-un-webhook',
            },
        ],
    },
    {
        collapsed: true,
        text: 'Référence',
        link: '/reference/',
        items: [
            {
                collapsed: true,
                text: 'Ressources',
                items: [
                    {
                        collapsed: true,
                        text: 'Core',
                        items: [
                            {
                                text: 'Campus',
                                link: '/reference/ressources/core/campus',
                            },
                            {
                                text: 'Civilité',
                                link: '/reference/ressources/core/civilite',
                            },
                            {
                                text: 'E-mail',
                                link: '/reference/ressources/core/e-mail',
                            },
                            {
                                text: 'Note',
                                link: '/reference/ressources/core/note',
                            },
                            {
                                text: 'Période',
                                link: '/reference/ressources/core/periode',
                            },
                            {
                                text: 'Programme',
                                link: '/reference/ressources/core/programme',
                            },
                            {
                                text: 'Utilisateur',
                                link: '/reference/ressources/core/utilisateur',
                            },
                        ],
                    },
                    {
                        collapsed: true,
                        text: 'File',
                        items: [
                            {
                                text: 'Description',
                                link: '/reference/ressources/file/description'
                            },
                            {
                                text: 'Directory',
                                link: '/reference/ressources/file/directory'
                            },
                            {
                                text: 'File',
                                link: '/reference/ressources/file/file'
                            },
                        ],
                    },
                    {
                        collapsed: true,
                        text: 'Admission',
                        items: [
                            {
                                text: 'Candidat',
                                link: '/reference/ressources/admission/candidat',
                            },
                            {
                                text: 'Dossier',
                                link: '/reference/ressources/admission/dossier',
                            },
                            {
                                text: 'État de candidature',
                                link: '/reference/ressources/admission/etat-de-candidature',
                            },
                            {
                                text: 'Voie d’admission',
                                link: '/reference/ressources/admission/voie-d-admission',
                            },
                        ],
                    },
                    {
                        collapsed: true,
                        text: 'Inscription',
                        items: [
                            {
                                text: 'Apprenant',
                                link: '/reference/ressources/inscription/apprenant',
                            },
                            {
                                text: 'Inscription',
                                link: '/reference/ressources/inscription/inscription',
                            },
                            {
                                text: 'Issue / État d’inscription',
                                link: '/reference/ressources/inscription/issue-etat-d-inscription',
                            },
                            {
                                text: 'Parcours',
                                link: '/reference/ressources/inscription/parcours',
                            },
                            {
                                text: 'Régime de l’apprenant',
                                link: '/reference/ressources/inscription/regime-de-l-apprenant',
                            },
                            {
                                text: 'Voie d’entrée',
                                link: '/reference/ressources/inscription/voie-d-entree',
                            },
                        ],
                    },
                    {
                        collapsed: true,
                        text: 'Finance',
                        items: [
                            {
                                text: 'Affaire',
                                link: '/reference/ressources/finance/affaire',
                            },
                            {
                                text: 'Lignes de balance client',
                                link: '/reference/ressources/finance/balance-client',
                            },
                            {
                                text: 'Client',
                                link: '/reference/ressources/finance/client',
                            },
                            {
                                text: 'Nature du client',
                                link: '/reference/ressources/finance/nature-client',
                            },
                            {
                                text: 'Société de facturation',
                                link: '/reference/ressources/finance/societe-de-facturation',
                            }
                        ],
                    },
                    {
                        collapsed: true,
                        text: 'Pédagogie',
                        items: [
                            {
                                text: 'Séquence',
                                link: '/reference/ressources/pedagogie/sequence',
                            }
                        ],
                    },
                    {
                        collapsed: true,
                        text: 'Planification',
                        items: [
                            {
                                text: 'Événement du calendrier',
                                link: '/reference/ressources/planification/evenement-du-calendrier',
                            },
                            {
                                text: 'Ressource d’événement',
                                link: '/reference/ressources/planification/ressource-d-evenement',
                            },
                            {
                                text: 'Type d’événement',
                                link: '/reference/ressources/planification/type-d-evenement',
                            },
                        ],
                    },
                    {
                        collapsed: true,
                        text: 'Relation entreprise',
                        items: [
                            {
                                text: 'Convention',
                                link: '/reference/ressources/relation-entreprise/convention',
                            },
                            {
                                text: 'État de convention',
                                link: '/reference/ressources/relation-entreprise/etat-de-convention',
                            },
                            {
                                text: 'Type de convention',
                                link: '/reference/ressources/relation-entreprise/type-de-convention',
                            }
                        ],
                    }
                ],
            },
            {
                collapsed: true,
                text: 'Cas d’usage',
                items: [
                    {
                        text: 'Créer un utilisateur',
                        link: '/reference/cas-d-usage/creer-un-nouvel-utilisateur',
                    },
                    {
                        text: 'Téléverser un document',
                        link: '/reference/cas-d-usage/televerser-un-document',
                    },
                    {
                        collapsed: true,
                        text: 'Admission',
                        items: [
                            {
                                text: 'Créer une candidature',
                                link: '/reference/cas-d-usage/creer-un-nouveau-dossier-de-candidature',
                            },
                            {
                                text: 'Récupérer les données financières du dossier de candidature',
                                link: '/reference/cas-d-usage/recuperer-les-donnees-financieres-du-dossier-de-candidature',
                            },
                        ],
                    },
                    {
                        collapsed: true,
                        text: 'Inscription',
                        items: [
                            {
                                text: 'Créer une inscription',
                                link: '/reference/cas-d-usage/creer-un-nouveau-dossier-d-inscription',
                            },
                        ],
                    },
                    {
                        collapsed: true,
                        text: 'Planification',
                        items: [
                            {
                                text: 'Modifier un événement du calendrier',
                                link: '/reference/cas-d-usage/modifier-un-evenement-du-calendrier',
                            },
                        ],
                    },
                    {
                        collapsed: true,
                        text: 'Relation entreprise',
                        items: [
                            {
                                text: 'Créer une nouvelle convention',
                                link: '/reference/cas-d-usage/creer-une-nouvelle-convention',
                            },
                        ],
                    },
                ],
            }
        ],
    },
];

export default nav;