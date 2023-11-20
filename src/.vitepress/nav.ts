const nav = [
    {
        text: 'Créer votre intégration',
        items: [
            {
                text: 'Prise en main de l’API',
                link: '/creer-votre-integration/prise-en-main-de-l-api',
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
                        text: 'Créer une inscription',
                        link: '/reference/cas-d-usage/creer-un-nouveau-dossier-d-inscription',
                    }
                ],
            }
        ],
    },
];

export default nav;