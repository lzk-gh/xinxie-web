import AOS from 'aos';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(
    AOS.init({
      disable: false, // 是否禁用 AOS (可接受值: 'phone', 'tablet', 'mobile', boolean, expression, function)
      startEvent: 'DOMContentLoaded', // AOS 初始化事件
      initClassName: 'aos-init', // 初始化后添加的类名
      animatedClassName: 'aos-animate', // 动画过程中添加的类名
      useClassNames: false, // 是否将 `data-aos` 属性值作为类名添加
      disableMutationObserver: false, // 是否禁用 MutationObserver (高级)
      debounceDelay: 50, // 窗口大小调整时的去抖延迟 (高级)
      throttleDelay: 99, // 页面滚动时的节流延迟 (高级)

      // 以下选项可以通过 `data-aos-*` 属性覆盖
      duration: 1500, // 动画持续时间 (毫秒)
      easing: 'ease-out-quart', // 动画缓动函数
      offset: 120, // 触发动画的偏移量 (px)
      delay: 0, // 动画延迟 (毫秒)
      once: false, // 动画是否只播放一次
      mirror: false, // 元素滚动出视窗时是否反向播放动画
      anchorPlacement: 'top-bottom' // 动画触发点位置
    })
  );
});
