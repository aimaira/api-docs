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
                                text: 'Période',
                                link: '/reference/ressources/core/periode',
                            },
                            {
                                text: 'Programme',
                                link: '/reference/ressources/core/programme',
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
                                text: 'Lignes de balance client',
                                link: '/reference/ressources/finance/balance-client',
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
                ],
            },
            {
                collapsed: true,
                text: 'Cas d’usage',
                items: [
                    {
                        text: 'Créer une candidature',
                        link: '/reference/cas-d-usage/creer-un-nouveau-dossier-de-candidature',
                    },
                    {
                        text: 'Récupérer les données financières du dossier de candidature',
                        link: '/reference/cas-d-usage/recuperer-les-donnees-financieres-du-dossier-de-candidature',
                    },
                    {
                        text: 'Créer une inscription',
                        link: '/reference/cas-d-usage/creer-un-nouveau-dossier-d-inscription',
                    },
                    {
                        text: 'Modifier un événement du calendrier',
                        link: '/reference/cas-d-usage/modifier-un-evenement-du-calendrier',
                    },
                    { 
                        text: 'Téléverser un document',
                        link: '/reference/cas-d-usage/televerser-un-document',
                    }
                ],
            }
        ],
    },
];

export default nav;