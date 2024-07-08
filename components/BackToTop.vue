<template>
  <div
    v-if="showScrollTop"
    data-aos="fade-up"
    class="fixed bottom-16 right-4 cursor-pointer"
    @click="handleScroll"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-8 h-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const showScrollTop = ref(false);

onMounted(() => {
  window.addEventListener('scroll', listenerScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', listenerScroll);
});

function listenerScroll() {
  showScrollTop.value = window.scrollY > 0;
}

function handleScroll() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>
