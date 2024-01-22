import DefaultTheme from 'vitepress/theme'
import './aimaira.css'
//@ts-ignore
import Mermaid from './Mermaid.vue';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Mermaid', Mermaid);
  },
}
