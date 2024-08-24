<script setup>
import TheHeader from './views/TheHeader.vue';
import { defineAsyncComponent } from 'vue';

const TheFooter = defineAsyncComponent({
  loader: () => import('./views/TheFooter.vue')
});

</script>

<template>
  <TheHeader />

  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>