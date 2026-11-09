<script setup lang="ts">
import { useRoute, withBase } from 'vitepress'

const route = useRoute()
</script>

<!-- Le pied de page de VitePress est masqué dès qu'il y a un menu latéral : ce lien prend le relais sous chaque page. -->
<template>
  <p v-if="!route.path.endsWith('/notes-de-version')" class="release-notes-link">
    <a :href="withBase('/notes-de-version')">Notes de version</a>
  </p>
</template>

<style scoped>
.release-notes-link {
  margin-top: 48px;
  text-align: right;
  font-size: 12px;
}

.release-notes-link a {
  color: var(--vp-c-text-3);
  text-decoration: none;
}

.release-notes-link a:hover {
  color: var(--vp-c-brand-1);
}
</style>
