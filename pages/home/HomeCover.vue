<template>
  <div class="home-cover">
    <img
      data-aos="fade-up"
      data-aos-duration="1000"
      class="home-cover-img"
      src="/assets/images/1719942786299.png"
      alt=""
    />

    <div
      data-aos="fade-left"
      data-aos-duration="500"
      class="text-center absolute top-10 lg:right-40 lg:text-left"
    >
      <p class="text-5xl font-bold leading-tight">
        <span class="block">Hello,We'are</span>
        <span class="short-name">ITA</span>
      </p>
      <h3 class="text-2xl font-bold leading-tight">
        The Information Technology Association
      </h3>
      <p class="text-xl leading-normal">
        <span>Welcome to our website!</span>
        <span class="wave">👋</span>
      </p>
    </div>

    <div
      class="home-cover-info hidden lg:block"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <p>
        本社团自
        <span class="short-name">16</span>
        届创建、主网站、软件开发，
      </p>
      <p>拥有丰富的学习资源。</p>
    </div>
  </div>
</template>

<style scoped>
.home-cover {
  position: relative;
  height: calc(100vh - 60px);
  border-bottom: 1px solid var(--theme-border-color);
}

.home-cover-img {
  position: absolute;
  bottom: 0;
  width: 900px;
  filter: drop-shadow(0 2px 16px #505050);
}

.short-name {
  font-size: 100px;
  font-weight: 700;
  color: #33373f;
  background: linear-gradient(90deg, #e16a50 0, #ffdb59 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
}

@keyframes hue {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.wave {
  display: inline-block;
  font-size: 36px;
  transform-origin: 70% 70%;
  animation-name: wave-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.home-cover-info {
  position: absolute;
  bottom: 80px;
  right: 200px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid var(--theme-border-color);
}
</style>
