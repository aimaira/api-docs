import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

export interface Commentaire {
    id: string
    date: string
    page: string
    section: string
    selecteur: string
    extrait: string
    texte: string
}

// Serveur de dev uniquement : les commentaires laissés avec la barre de relecture (theme/CommentToolbar.vue)
// sont enregistrés dans commentaires.json, à la racine du dépôt (ignoré par git).
export default function commentaires(fichier: string): Plugin {
    const lire = (): Commentaire[] => (fs.existsSync(fichier) ? JSON.parse(fs.readFileSync(fichier, 'utf8')) : [])
    const ecrire = (liste: Commentaire[]) => fs.writeFileSync(fichier, JSON.stringify(liste, null, 2) + '\n')

    return {
        name: 'commentaires-de-relecture',
        apply: 'serve',
        configureServer(server) {
            server.middlewares.use('/__commentaires', (req, res) => {
                const envoyer = (statut: number, corps?: unknown) => {
                    res.statusCode = statut
                    res.setHeader('Content-Type', 'application/json')
                    res.end(corps === undefined ? '' : JSON.stringify(corps))
                }
                const id = decodeURIComponent((req.url ?? '/').replace(/^\/|\?.*$/g, ''))

                if (req.method === 'GET') return envoyer(200, lire())
                if (req.method === 'DELETE' && id) return envoyer(204, ecrire(lire().filter(c => c.id !== id)))
                if (req.method !== 'POST') return envoyer(405)

                let corps = ''
                req.on('data', morceau => (corps += morceau))
                req.on('end', () => {
                    const { page, section, selecteur, extrait, texte } = JSON.parse(corps || '{}')
                    if (!texte?.trim()) return envoyer(400)
                    const commentaire: Commentaire = {
                        id: Date.now().toString(36),
                        date: new Date().toISOString(),
                        page: String(page ?? ''),
                        section: String(section ?? ''),
                        selecteur: String(selecteur ?? ''),
                        extrait: String(extrait ?? '').slice(0, 300),
                        texte: String(texte).trim(),
                    }
                    ecrire([...lire(), commentaire])
                    envoyer(201, commentaire)
                })
            })
        },
    }
}
