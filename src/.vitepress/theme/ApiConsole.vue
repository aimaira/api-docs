<script setup lang="ts">
// « Essayer l'API » : l'URL de l'API et les identifiants restent dans ce navigateur (localStorage) ; chaque exemple
// cURL de la documentation reçoit un bouton qui envoie la requête à cette API et affiche la réponse sous l'exemple.
import { nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import pagesConfig from '../../../reference/pages.json'
import { parseCurl, toCurl, type ParsedCurl } from './curl'

interface Config { url: string; user: string; password: string }

const STORAGE_KEY = 'aimaira-api-docs:essayer'
const DOC_BASE_URL = pagesConfig.baseUrl.replace(/\/+$/, '')

const route = useRoute()
const dialog = ref<HTMLDialogElement | null>(null)
const config = ref<Config | null>(null)
const form = ref<Config>({ url: '', user: '', password: '' })
const configured = () => !!config.value?.url && !!config.value?.user

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    config.value = raw ? JSON.parse(raw) : null
  } catch {
    config.value = null
  }
}

function open() {
  form.value = { url: '', user: '', password: '', ...config.value }
  dialog.value?.showModal()
}

function save() {
  const value = { url: form.value.url.trim().replace(/\/+$/, ''), user: form.value.user.trim(), password: form.value.password }
  config.value = value
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)) } catch { /* stockage indisponible : gardé pour la session */ }
  dialog.value?.close()
}

function forget() {
  config.value = null
  form.value = { url: '', user: '', password: '' }
  try { localStorage.removeItem(STORAGE_KEY) } catch { /* rien à effacer */ }
  dialog.value?.close()
}

// La requête de l'exemple, adressée à l'API configurée.
function target(example: ParsedCurl): ParsedCurl {
  return { ...example, url: config.value!.url + example.url.slice(DOC_BASE_URL.length) }
}

function element<K extends keyof HTMLElementTagNameMap>(tag: K, className: string, text?: string) {
  const node = document.createElement(tag)
  node.className = className
  if (text !== undefined) node.textContent = text
  return node
}

async function copy(text: string, button: HTMLButtonElement) {
  await navigator.clipboard.writeText(text)
  const label = button.textContent
  button.textContent = 'Copié'
  setTimeout(() => (button.textContent = label), 1500)
}

async function send(example: ParsedCurl, output: HTMLElement) {
  if (!configured()) return open()
  const request = target(example)
  const host = new URL(request.url).host
  if (request.method !== 'GET' && !confirm(`${request.method} ${request.url}\n\nCette requête modifie les données de ${host}. L’envoyer ?`)) return

  output.replaceChildren(element('p', 'essayer-statut', `Envoi de ${request.method} ${request.url}…`))
  output.hidden = false
  const started = performance.now()
  try {
    const response = await fetch(request.url, {
      method: request.method,
      headers: { ...request.headers, Accept: 'application/json', Authorization: `Basic ${btoa(unescape(encodeURIComponent(`${config.value!.user}:${config.value!.password}`)))}` },
      body: request.body,
    })
    const elapsed = Math.round(performance.now() - started)
    const text = await response.text()
    let shown = text
    try { shown = JSON.stringify(JSON.parse(text), null, 2) } catch { /* pas du JSON : affiché tel quel */ }
    const status = element('p', `essayer-statut ${response.ok ? 'ok' : 'erreur'}`, `${response.status} ${response.statusText} · ${elapsed} ms`)
    output.replaceChildren(status)
    if (shown) {
      const pre = element('pre', 'essayer-corps')
      pre.append(element('code', '', shown))
      output.append(pre)
    } else {
      output.append(element('p', 'essayer-note', 'Réponse vide.'))
    }
  } catch {
    // fetch n'échoue (sans réponse) que pour le réseau ou le CORS ; le navigateur ne dit pas lequel.
    const message = element('p', 'essayer-message',
      `Le navigateur n’a pas pu joindre ${host} : l’API est injoignable ou n’autorise pas les appels depuis ce site (CORS). `
      + 'Copiez la commande pour l’exécuter dans un terminal.')
    const button = element('button', 'essayer-bouton', 'Copier la commande cURL')
    button.type = 'button'
    button.addEventListener('click', () => copy(toCurl(request, config.value!.user, config.value!.password), button))
    output.replaceChildren(message, button)
  }
}

// Ajoute « Envoyer » sous chaque exemple cURL qui vise l'API documentée.
function enhance() {
  for (const block of document.querySelectorAll<HTMLElement>('.vp-doc div[class*="language-bash"]')) {
    const container = block.closest<HTMLElement>('.vp-code-group') ?? block
    if (container.dataset.essayer) continue
    const example = parseCurl(block.querySelector('pre code')?.textContent ?? '')
    if (!example || !example.url.startsWith(DOC_BASE_URL)) continue
    container.dataset.essayer = '1'

    const bar = element('div', 'essayer-barre')
    const button = element('button', 'essayer-bouton', example.method === 'GET' ? 'Envoyer' : `Envoyer (${example.method})`)
    button.type = 'button'
    const output = element('div', 'essayer-resultat')
    output.hidden = true
    button.addEventListener('click', () => send(example, output))
    bar.append(button)
    container.after(bar, output)
  }
}

onMounted(() => {
  load()
  enhance()
})
watch(() => route.path, () => nextTick(enhance))
</script>

<template>
  <button type="button" class="essayer-nav" :aria-label="configured() ? 'Essayer l’API (configurée)' : 'Essayer l’API'" @click="open">
    <span class="essayer-point" :class="{ actif: configured() }" aria-hidden="true" />
    <span class="essayer-long" aria-hidden="true">Essayer l’API</span>
    <span class="essayer-court" aria-hidden="true">API</span>
  </button>
  <Teleport to="body">
    <dialog ref="dialog" class="essayer-dialogue" @click.self="dialog?.close()">
      <form method="dialog" @submit.prevent="save">
        <h2>Essayer l’API</h2>
        <p>
          Les boutons « Envoyer » sous les exemples envoient la requête à votre API, avec ces identifiants.
          Ils restent dans ce navigateur (stockage local) et ne sont envoyés qu’à cette URL.
        </p>
        <label>
          URL de l’API
          <input v-model="form.url" type="url" required placeholder="https://monclientapi.aimaira.net/GraphV1" autocomplete="off" spellcheck="false">
        </label>
        <label>
          Utilisateur
          <input v-model="form.user" required placeholder="DOMAINE\utilisateur" autocomplete="off" spellcheck="false">
        </label>
        <label>
          Mot de passe
          <input v-model="form.password" type="password" autocomplete="off">
        </label>
        <p class="essayer-note">Les requêtes de création, de modification et de suppression agissent sur de vraies données : une confirmation est demandée avant chacune.</p>
        <div class="essayer-actions">
          <button type="button" class="essayer-bouton secondaire" @click="forget">Effacer</button>
          <button type="button" class="essayer-bouton secondaire" @click="dialog?.close()">Annuler</button>
          <button type="submit" class="essayer-bouton">Enregistrer</button>
        </div>
      </form>
    </dialog>
  </Teleport>
</template>

<style>
.essayer-nav {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 12px;
  padding: 0 12px;
  height: 32px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}
.essayer-nav:hover { border-color: var(--vp-c-brand-1); }
.essayer-court { display: none; }
@media (max-width: 639px) {
  .essayer-nav { margin-left: 4px; padding: 0 10px; }
  .essayer-long { display: none; }
  .essayer-court { display: inline; }
}
.essayer-point { width: 8px; height: 8px; border-radius: 50%; background: var(--vp-c-text-3); }
.essayer-point.actif { background: var(--vp-c-green-1, #18794e); }

.essayer-dialogue {
  width: min(480px, calc(100vw - 32px));
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.essayer-dialogue::backdrop { background: rgba(0, 0, 0, .5); }
.essayer-dialogue h2 { margin: 0 0 8px; font-size: 20px; font-weight: 600; }
.essayer-dialogue p { margin: 0 0 16px; font-size: 14px; line-height: 1.5; color: var(--vp-c-text-2); }
.essayer-dialogue label { display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; font-size: 14px; font-weight: 500; }
.essayer-dialogue input {
  padding: 8px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
}
.essayer-dialogue input:focus { outline: 2px solid var(--vp-c-brand-1); outline-offset: -1px; }
.essayer-actions { display: flex; justify-content: flex-end; gap: 8px; flex-wrap: wrap; }

.essayer-bouton {
  padding: 6px 14px;
  border-radius: 6px;
  background: var(--vp-c-brand-3);
  /* Le turquoise de la marque est clair dans les deux thèmes : texte foncé pour le contraste (≥ 4,5:1). */
  color: #1b1b1f;
  font-size: 13px;
  font-weight: 600;
}
.essayer-bouton:hover { background: var(--vp-c-brand-2); }
.essayer-bouton.secondaire { background: var(--vp-c-default-soft); color: var(--vp-c-text-1); font-weight: 500; }

.vp-doc .essayer-barre { display: flex; justify-content: flex-end; margin: -8px 0 16px; }
.vp-doc .essayer-resultat { margin: 0 0 16px; padding: 12px 16px; border-radius: 8px; background: var(--vp-c-bg-soft); }
.vp-doc .essayer-statut { margin: 0; font-family: var(--vp-font-family-mono); font-size: 13px; }
.vp-doc .essayer-statut.ok { color: var(--vp-c-green-1, #18794e); }
.vp-doc .essayer-statut.erreur { color: var(--vp-c-danger-1); }
.vp-doc .essayer-message { margin: 0; font-size: 14px; line-height: 1.5; color: var(--vp-c-danger-1); }
.vp-doc .essayer-message + .essayer-bouton { margin-top: 8px; }
.vp-doc .essayer-note { margin: 8px 0 0; font-size: 13px; color: var(--vp-c-text-2); }
.vp-doc .essayer-corps { margin: 8px 0 0; max-height: 420px; overflow: auto; font-size: 13px; line-height: 1.5; }
</style>
