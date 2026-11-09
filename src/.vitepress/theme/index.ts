import { defineAsyncComponent, h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './aimaira.css'
//@ts-ignore
import Mermaid from './Mermaid.vue';
//@ts-ignore
import ReleaseNotesLink from './ReleaseNotesLink.vue';
// Barre de relecture : serveur de dev seulement, absente du site publié.
//@ts-ignore
const CommentToolbar = import.meta.env.DEV ? defineAsyncComponent(() => import('./CommentToolbar.vue')) : null;
export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(ReleaseNotesLink),
      'layout-bottom': () => (CommentToolbar ? h(CommentToolbar) : null),
    })
  },
  enhanceApp({ app }) {
    app.component('Mermaid', Mermaid);
  },
}
