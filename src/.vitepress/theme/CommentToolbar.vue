<script setup lang="ts">
// Barre de relecture, en mode dev seulement : on pointe un élément de la page et on laisse un commentaire,
// enregistré dans commentaires.json par le serveur de dev (voir .vitepress/commentaires-plugin.ts).
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

interface Commentaire {
  id: string
  page: string
  section: string
  selecteur: string
  extrait: string
  texte: string
}

const API = '/__commentaires'
const route = useRoute()
const commentaires = ref<Commentaire[]>([])
const pointage = ref(false)
const survol = ref<DOMRect | null>(null)
const cible = ref<Element | null>(null)
const texte = ref('')
const liste = ref(false)
const reperes = ref<{ id: string; numero: number; top: number; left: number }[]>([])
const saisie = ref<HTMLTextAreaElement | null>(null)

const page = computed(() => route.path)
const dePage = computed(() => commentaires.value.filter(c => c.page === page.value))

async function charger() {
  commentaires.value = await fetch(API).then(r => r.json()).catch(() => [])
  await placerReperes()
}

// Chemin CSS stable depuis le contenu de la page (ou le corps du document).
function selecteur(element: Element): string {
  const parties: string[] = []
  let courant: Element | null = element
  while (courant && courant !== document.body) {
    if (courant.id) {
      parties.unshift(`#${CSS.escape(courant.id)}`)
      break
    }
    const parent = courant.parentElement
    const memes = parent ? [...parent.children].filter(e => e.tagName === courant!.tagName) : []
    parties.unshift(memes.length > 1 ? `${courant.tagName.toLowerCase()}:nth-of-type(${memes.indexOf(courant) + 1})` : courant.tagName.toLowerCase())
    courant = parent
  }
  return parties.join(' > ')
}

// Titre le plus proche au-dessus de l'élément, pour situer le commentaire en le lisant.
function section(element: Element): string {
  const titres = [...document.querySelectorAll('.vp-doc h1, .vp-doc h2, .vp-doc h3, .vp-doc h4')]
  const avant = titres.filter(t => t === element || t.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING)
  return avant.at(-1)?.textContent?.replace(/[​\s]+/g, ' ').trim() ?? ''
}

const dansLaBarre = (element: EventTarget | null) => element instanceof Element && !!element.closest('.relecture')

function survoler(event: PointerEvent) {
  if (!pointage.value || dansLaBarre(event.target)) return (survol.value = null)
  survol.value = (event.target as Element).getBoundingClientRect()
}

function choisir(event: MouseEvent) {
  if (!pointage.value || dansLaBarre(event.target)) return
  event.preventDefault()
  event.stopPropagation()
  cible.value = event.target as Element
  survol.value = cible.value.getBoundingClientRect()
  pointage.value = false
  nextTick(() => saisie.value?.focus())
}

async function envoyer() {
  if (!cible.value || !texte.value.trim()) return
  await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      page: page.value,
      section: section(cible.value),
      selecteur: selecteur(cible.value),
      extrait: cible.value.textContent?.replace(/\s+/g, ' ').trim() ?? '',
      texte: texte.value,
    }),
  })
  annuler()
  await charger()
}

function annuler() {
  cible.value = null
  survol.value = null
  texte.value = ''
}

async function supprimer(id: string) {
  await fetch(`${API}/${encodeURIComponent(id)}`, { method: 'DELETE' })
  await charger()
}

async function placerReperes() {
  await nextTick()
  reperes.value = dePage.value.flatMap((c, index) => {
    const element = c.selecteur ? document.querySelector(c.selecteur) : null
    if (!element) return []
    const rect = element.getBoundingClientRect()
    return [{ id: c.id, numero: index + 1, top: rect.top + window.scrollY, left: rect.right + window.scrollX }]
  })
}

function montrer(c: Commentaire) {
  document.querySelector(c.selecteur)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function clavier(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    pointage.value = false
    annuler()
  }
}

watch(page, () => {
  annuler()
  setTimeout(placerReperes, 300)
})
watch(pointage, actif => document.documentElement.classList.toggle('relecture-pointage', actif))

onMounted(() => {
  charger()
  document.addEventListener('pointermove', survoler, true)
  document.addEventListener('click', choisir, true)
  document.addEventListener('keydown', clavier)
  window.addEventListener('resize', placerReperes)
})
onBeforeUnmount(() => {
  document.removeEventListener('pointermove', survoler, true)
  document.removeEventListener('click', choisir, true)
  document.removeEventListener('keydown', clavier)
  window.removeEventListener('resize', placerReperes)
})
</script>

<template>
  <div class="relecture">
    <div
      v-if="survol && (pointage || cible)"
      class="cadre"
      :style="{ top: `${survol.top}px`, left: `${survol.left}px`, width: `${survol.width}px`, height: `${survol.height}px` }"
    />

    <button
      v-for="r in reperes"
      :key="r.id"
      class="repere"
      :style="{ top: `${r.top}px`, left: `${r.left}px` }"
      :title="dePage[r.numero - 1]?.texte"
      @click="liste = true"
    >{{ r.numero }}</button>

    <form v-if="cible" class="saisie" @submit.prevent="envoyer">
      <p class="contexte">{{ section(cible) || page }}</p>
      <textarea ref="saisie" v-model="texte" rows="3" placeholder="Votre commentaire" @keydown.meta.enter="envoyer" @keydown.ctrl.enter="envoyer" />
      <div class="actions">
        <button type="button" @click="annuler">Annuler</button>
        <button type="submit" class="principal" :disabled="!texte.trim()">Envoyer</button>
      </div>
    </form>

    <div v-if="liste" class="liste">
      <p v-if="!dePage.length" class="vide">Aucun commentaire sur cette page.</p>
      <ol>
        <li v-for="c in dePage" :key="c.id">
          <button class="lien" @click="montrer(c)">{{ c.section || 'Page' }}</button>
          <p>{{ c.texte }}</p>
          <button class="supprimer" @click="supprimer(c.id)">Supprimer</button>
        </li>
      </ol>
    </div>

    <div class="barre">
      <button :class="{ actif: pointage }" @click="pointage = !pointage; annuler()">
        {{ pointage ? 'Choisissez un élément…' : 'Commenter' }}
      </button>
      <button @click="liste = !liste">{{ dePage.length }} sur cette page</button>
    </div>
  </div>
</template>

<style scoped>
.relecture {
  font-family: var(--vp-font-family-base);
  font-size: 14px;
}

.barre {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  gap: 4px;
  padding: 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
}

button {
  min-height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.barre button:hover,
.actions button:hover {
  background: var(--vp-c-default-soft);
}

.barre button.actif,
button.principal {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

button:disabled {
  opacity: 0.5;
  cursor: default;
}

.cadre {
  position: fixed;
  z-index: 90;
  pointer-events: none;
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--vp-c-brand-1) 10%, transparent);
}

.repere {
  position: absolute;
  z-index: 80;
  min-height: 0;
  width: 22px;
  height: 22px;
  padding: 0;
  margin: -11px 0 0 -11px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  font-size: 12px;
  font-weight: 600;
}

.saisie,
.liste {
  position: fixed;
  bottom: 72px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: min(420px, calc(100vw - 32px));
  max-height: 50vh;
  overflow: auto;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
}

.contexte,
.vide {
  margin: 0 0 8px;
  color: var(--vp-c-text-2);
}

textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  font-family: inherit;
  font-size: 16px;
  resize: vertical;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}

ol {
  margin: 0;
  padding-left: 20px;
}

li + li {
  margin-top: 12px;
}

li p {
  margin: 4px 0;
}

.lien {
  min-height: 0;
  padding: 0;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.supprimer {
  min-height: 0;
  padding: 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
}
</style>

<style>
.relecture-pointage,
.relecture-pointage * {
  cursor: crosshair !important;
}
</style>
