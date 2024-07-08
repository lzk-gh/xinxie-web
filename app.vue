<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NConfigProvider, darkTheme } from 'naive-ui';

const globalStore = useGlobalStore();
const isDark = computed(() => globalStore.isDark);
</script>

<style>
/**/
</style>
