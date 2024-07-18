<template>
  <div class="body flex flex-col min-h-screen overflow-hidden">
    <Header />
    <main class="flex flex-1">
      <slot />
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>
