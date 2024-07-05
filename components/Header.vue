<template>
  <header
    :class="{
      'fixed-header': isHeaderFixed
    }"
    class="header w-full flex items-center h-16 lg:h-20"
  >
    <div class="flex items-center justify-between w-9/12 m-auto">
      <NuxtLink class="text-xl" to="/">信息科技协会</NuxtLink>
      <nav class="flex items-center hidden lg:block">
        <ul class="flex space-x-10">
          <li>
            <NuxtLink to="/home">首页</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/internal">内部专用</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/joinUs">加入我们</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">联系我们</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex space-x-6">
        <div
          class="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer"
          @click="handleThemeToggle"
        >
          <svg
            v-if="!isThemeSun"
            class="w-5 h-5 transform transition-transform duration-300 hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#475569"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 12 12"
              to="360 12 12"
              dur="2s"
              repeatCount="indefinite"
            />
          </svg>
          <svg
            v-else
            class="w-5 h-5 transform transition-transform duration-300 hover:scale-110"
            viewBox="0 0 24 24"
            fill="#475569"
            stroke="#475569"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            <animate
              attributeName="r"
              values="5;6;5"
              dur="1s"
              repeatCount="indefinite"
            />
          </svg>
        </div>
        <button class="lg:hidden" @click="handleShowNavClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <teleport to="body">
        <div
          class="header-nav-dialog absolute left-0 w-full h-full dark:bg-gray-700 z-50 transition-all duration-300 ease-in-out transform"
          :class="{
            'translate-x-0': isShowNav,
            '-translate-x-full': !isShowNav
          }"
        >
          <nav class="h-full px-4 py-8">
            <ul
              class="flex flex-col h-full items-center justify-center space-y-8"
            >
              <li>
                <NuxtLink
                  to="/home"
                  class="text-xl font-medium hover:text-gray-600 dark:hover:text-gray-300"
                >
                  首页
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/internal"
                  class="text-xl font-medium hover:text-gray-600 dark:hover:text-gray-300"
                >
                  内部专用
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/joinUs"
                  class="text-xl font-medium hover:text-gray-600 dark:hover:text-gray-300"
                >
                  加入我们
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-xl font-medium hover:text-gray-600 dark:hover:text-gray-300"
                >
                  联系我们
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </teleport>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useTheme } from '../composables/useTheme';

const triggerHeight = 1;
const { switchDark } = useTheme();

const isHeaderFixed = ref(false);
const isThemeSun = ref(false);
const isShowNav = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  isHeaderFixed.value = window.scrollY > triggerHeight;
}

function handleThemeToggle(e: MouseEvent) {
  console.log('handleThemeToggle', e);
  switchDark();
  isThemeSun.value = !isThemeSun.value;
}

function handleShowNavClick() {
  isShowNav.value = !isShowNav.value;

  // 切换页面滚动锁定
  document.body.style.overflow = isShowNav.value ? 'hidden' : 'auto';
}
</script>

<style scoped>
.header {
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  will-change: transform;
  z-index: 1000;
  background-color: var(--theme-header-bg-color);
  transition: background-color 0.8s ease;
}

.fixed-header {
  position: fixed;
  top: 0;
  animation: slideDown 0.5s ease-in-out forwards;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.header-nav-dialog {
  color: var(--theme-text-color);
  background-color: var(--theme-main-bg-color);
}
</style>
