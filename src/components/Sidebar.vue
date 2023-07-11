<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const isOverlay = ref(true);
const isFullheight = ref(true);
const isFullwidth = ref(false);
const isReduced = ref(false);
const right = ref(false);
const expandOnHover = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <section>
    <h2>Sidebar Demoo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-sidebar
      v-model:open="isOpen"
      variant="primary"
      :fullheight="isFullheight"
      :fullwidth="isFullwidth"
      :overlay="isOverlay"
      :right="right"
      :reduce="isReduced"
      :expand-on-hover="expandOnHover"
      mobile="fullwidth"
      @close="toggleSidebar()">
      <a class="btn-close" aria-label="Close" @click="toggleSidebar()" />
      <img
        width="80"
        src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
        alt="Lightweight UI components for Vue.js" />
      <h3>Example</h3>
    </o-sidebar>

    <o-field grouped>
      <o-switch v-model="isOverlay">Overlay</o-switch>
      <o-switch v-model="isFullheight">Fullheight</o-switch>
      <o-switch v-model="isFullwidth">Fullwidth</o-switch>
      <o-switch v-model="isReduced">Reduce</o-switch>
      <o-switch v-model="expandOnHover">Expand on hover</o-switch>
      <o-switch v-model="right">right</o-switch>
    </o-field>

    <o-button @click="toggleSidebar()">Show</o-button>
  </section>
</template>
