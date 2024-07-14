<template>
  <header
    :class="{
      'fixed-header': isHeaderFixed
    }"
    class="header w-full flex items-center h-16 lg:h-20"
  >
    <div class="flex items-center justify-between w-11/12 lg:w-9/12 m-auto">
      <NuxtLink class="text-xl" to="/">信息科技协会</NuxtLink>
      <nav class="flex items-center hidden lg:block">
        <ul class="flex space-x-10">
          <li>
            <NuxtLink class="text-base nav-link" to="/home">首页</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-base nav-link" to="/internal">
              内部专用
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-base nav-link" to="/contact">
              联系我们
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex space-x-2">
        <div
          class="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer"
          @click="handleThemeToggle"
        >
          <svg
            v-if="!isDark"
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

        <NuxtLink
          class="nav-link text-base text-slate-600 w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer"
          to="/ai"
        >
          AI
        </NuxtLink>

        <div>
          <a
            href="https://github.com/lzk-gh/xinxie-web"
            target="_blank"
            class="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="fill-gray-800 w-5 h-5"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.105 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.097 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
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
      <NDrawer
        v-model:show="globalStore.isCollapse"
        height="93%"
        placement="bottom"
      >
        <NDrawerContent>
          <div
            class="header-nav-dialog absolute top-0 left-0 w-full h-full dark:bg-gray-700 z-50 transition-all duration-300 ease-in-out transform"
            :class="{
              'translate-x-0': globalStore.isCollapse,
              '-translate-x-full': !globalStore.isCollapse
            }"
          >
            <nav class="h-full">
              <ul
                class="flex flex-col h-full items-center justify-center space-y-8"
              >
                <li>
                  <NuxtLink
                    to="/home"
                    class="text-xl nav-link font-medium hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    首页
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/internal"
                    class="text-xl nav-link font-medium hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    内部专用
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/contact"
                    class="text-xl nav-link font-medium hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    联系我们
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </NDrawerContent>
      </NDrawer>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import { useTheme } from '../composables/useTheme';

const triggerHeight = 1;

const { switchDark } = useTheme();
const globalStore = useGlobalStore();
const router = useRouter();

const isHeaderFixed = ref(false);

watch(
  () => router.currentRoute.value,
  () => {
    globalStore.isCollapse = false;
  }
);

const isDark = computed(() => globalStore.isDark);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  isHeaderFixed.value = window.scrollY > triggerHeight;
}

function handleThemeToggle() {
  switchDark();
}

function handleShowNavClick() {
  globalStore.isCollapse = !globalStore.isCollapse;
}
</script>

<style scoped>
.header {
  z-index: 1000;
  will-change: transform;
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

.nav-link.router-link-active {
  color: #e7a349;
}
</style>
