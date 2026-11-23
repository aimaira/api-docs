import Mermaid from './mermaid-plugin';
import Attrs from 'markdown-it-attrs';
import { defineConfig, MarkdownOptions } from 'vitepress'
import sidebar from './nav'
import commentaires from './commentaires-plugin'
import { fileURLToPath } from 'node:url'

const markdownOptions: MarkdownOptions = {
    async config(md) {
        md.use(Attrs);

        await Mermaid(md);
    },
    lineNumbers: true,
    theme: {
        light: 'solarized-light',
        dark: 'dracula-soft',
    },
}

export default defineConfig({
    base: '/api-docs/',
    lang: 'fr-FR',
    title: 'API Documentation',
    description: 'La documentation de l’API publique d’AIMAIRA',
    lastUpdated: true,
    cleanUrls: true,
    markdown: markdownOptions,
    ignoreDeadLinks: true,
    vite: {
        plugins: [commentaires(fileURLToPath(new URL('../../commentaires.json', import.meta.url)))],
    },
    themeConfig: {
        search: {
            provider: 'local',
        },
        logo: '/img/logo.svg',
        outline: {
            label: 'Sur cette page',
            level: [2, 4],
        },
        lastUpdated: {
            text: 'Dernière modification le ',
            formatOptions: {
                dateStyle: 'full',
            },
        },
        sidebar: sidebar,
        docFooter: {
            prev: 'Page précédente',
            next: 'Page suivante',
        },
        footer: {
            message: '<a href="/api-docs/notes-de-version">Notes de version</a>',
            copyright: 'Copyright © 2022 – 2023 AIMAIRA',
        }
    }
})
