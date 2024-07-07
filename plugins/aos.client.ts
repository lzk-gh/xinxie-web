import AOS from 'aos';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(
    AOS.init({
      duration: 1500,
      easing: 'ease-out-quart'
    })
  );
});
