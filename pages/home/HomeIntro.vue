<template>
  <div class="home-intro w-11/12 py-20 md:w-9/12 m-auto text-center lg:text-left">
    <RegionTitle>
      <template #tag-title>AIT</template>
      <template #title>社团概括</template>
    </RegionTitle>
    <p
      data-aos="fade-up"
      ref="text1"
      class="text-xl font-bold my-10 md:text-justify"
    ></p>
    <p
      data-aos="fade-up"
      data-aos-delay="500"
      ref="text2"
      class="text-lg md:text-justify"
    ></p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const text1 = ref(null);
const text2 = ref(null);

function typeText(element, text, delay, callback = () => {}) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      callback();
    }
  }, delay);
}

onMounted(() => {
  typeText(
    text1.value,
    "I'm Biogi - a self though & self learned designer based in USA. I started as a financial planner & social media marketer, but now I do mix of everything from Product Design, Photography, Web Design & Graphic Design.",
    20,
    () => {
      typeText(
        text2.value,
        'Award-winning design director and design expert with 6 years of experience in design and management. I am a mom to a beautiful 2 y.o. daughter who already loves attending business meetings with me. Also, a big part of my life is Netrix - a design creator behind this blog, artistic aesthetics into her healthy meals and making her recipes into artwork. She has always nurtured an interest in healthy eating and loves creating meals that are good for her body while being creative with simple ingredients. The creator behind this blog, enjoys incorporating her and making her recipes into artwork. She has always nurtured an interest in healthy eating and loves creating meals.',
        10
      );
    }
  );
});
</script>

<style scoped>
.home-intro {
  border-bottom: 1px solid var(--theme-border-color);
}
</style>
