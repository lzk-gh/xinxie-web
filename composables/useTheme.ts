interface ThemeHook {
  switchDark: () => void;
}

/**
 * 全局主题 hook
 * @returns {ThemeHook} 包含初始化主题和切换主题方法的对象
 */
export const useTheme = (): { switchDark: () => void } => {
  const globalStore = useGlobalStore();
  const { isDark } = storeToRefs(globalStore);
  const bodyClass = ref(isDark.value ? 'dark' : '');

  // 只在服务端渲染时设置 class
  useHead({
    bodyAttrs: {
      class: bodyClass.value
    }
  });

  onMounted(() => {
    document.body.classList.toggle('dark', isDark.value);

    watch(isDark, newIsDark => {
      document.body.classList.toggle('dark', newIsDark);
    });
  });

  /**
   * 切换暗黑模式
   */
  const switchDark = () => {
    globalStore.setGlobalState('isDark', !isDark.value);
  };

  return { switchDark };
};
