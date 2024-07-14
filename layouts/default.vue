<template>
  <div class="body">
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
}

main {
  flex: 1;
}
</style>
