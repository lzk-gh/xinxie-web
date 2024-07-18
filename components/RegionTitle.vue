<template>
  <div class="font-semibold" :class="align">
    <h3
      data-aos-easing="ease-out"
      data-aos="fade-up"
      data-aos-duration="1000"
      class="obvious-text-color text-xl"
    >
      <slot name="tag-title" />
    </h3>
    <div
      data-aos="fade-down"
      data-aos-easing="ease-out"
      data-aos-duration="800"
      class="text-3xl font-semibold"
    >
      <slot name="title" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  align?: 'text-center' | 'text-left' | 'text-right';
}>();
</script>
