<template>
  <div class="min-h-screen">
    <ClientOnly>
      <HomeCover />
      <HomeIntro />
      <HomeCadre />
      <NMessageProvider>
        <HomeJoinUs />
      </NMessageProvider>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import HomeCover from './HomeCover.vue';
import HomeIntro from './HomeIntro.vue';
import HomeCadre from './HomeCadre.vue';
import HomeJoinUs from './HomeJoinUs.vue';
</script>
