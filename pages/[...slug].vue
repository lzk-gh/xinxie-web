<template>
  <div class="not-found unselectable-text">
    <svg xmlns="http://www.w3.org/2000/svg" height="200" width="400">
      <text x="23%" y="50%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="128" fill="#6A1B9A" style="text-shadow: 8px 8px #888;" class="bounce">4</text>
      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="128" fill="#6A1B9A" style="text-shadow: 8px 8px #888;" class="swing">0</text>
      <text x="77%" y="50%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="128" fill="#6A1B9A" style="text-shadow: 8px 8px #888;" class="rotate">4</text>
      <text x="30%" y="20%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="24" fill="#333" opacity="0.8" class="tada">信</text>
      <text x="60%" y="20%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="24" fill="#333" opacity="0.8" class="jello">息</text>
      <text x="10%" y="80%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="24" fill="#333" opacity="0.8" class="shake">科</text>
      <text x="40%" y="80%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="24" fill="#333" opacity="0.8" class="flash">技</text>
      <text x="70%" y="80%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="24" fill="#333" opacity="0.8" class="wobble">协</text>
      <text x="90%" y="80%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="24" fill="#333" opacity="0.8" class="bounce">会</text>
    </svg>

    <button class="goto-home" @click="$router.back()">返回</button>
  </div>
</template>

<style scoped>
.not-found {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.goto-home {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #6A1B9A;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@keyframes bounce {
  20%, 60% {
    transform: translateY(-20px);
  }
  40%, 80% {
    transform: translateY(0);
  }
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes swing {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.swing {
  animation: swing 2s infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 2s infinite;
}
</style>

