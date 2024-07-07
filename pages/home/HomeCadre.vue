<template>
  <div
    class="theme-border-b w-11/12 h-[600px] pt-20 md:w-9/12 m-auto text-left"
  >
    <NCarousel
      data-aos="fade-up-left"
      draggable
      effect="fade"
      :show-arrow="true"
      :show-dots="false"
      :interval="3000"
    >
      <div v-for="item in carouselItems" :key="item.title">
        <NSpace class="my-4 md:my-6 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-[#e7a349] animate-bounce"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 9.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"
            />
          </svg>
          <h2 class="font-bold text-2xl">
            {{ item.title }}
          </h2>
        </NSpace>

        <div class="h-60 text-slate-400 text-lg overflow-y-auto pr-2">
          {{ item.description }}
        </div>

        <div class="mt-4">
          <div
            v-for="(member, index) in item.members"
            :key="index"
            class="flex items-center mb-2"
          >
            <NAvatar round size="small" :src="member.avatar" class="mr-2" />
            <span>{{ member.name }} ({{ member.position }})</span>
          </div>
        </div>
      </div>
      <template #arrow="{ prev, next }">
        <div class="custom-arrow">
          <button
            data-aos="fade-right"
            type="button"
            class="custom-arrow--left"
            @click="prev"
          >
            <n-icon>-</n-icon>
          </button>
          <button
            data-aos="fade-left"
            type="button"
            class="custom-arrow--right"
            @click="next"
          >
            <n-icon>+</n-icon>
          </button>
        </div>
      </template>
    </NCarousel>
  </div>
</template>

<script setup lang="ts">
const carouselItems = [
  {
    title: '会长',
    description:
      'This is the first slide.This is the first slide.This is the first slide.This is the first slide.This is the first slide.',
    members: [
      {
        name: '张三',
        position: '会长',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      }
    ]
  },
  {
    title: '技术部',
    description: 'This is the second slide.',
    members: [
      {
        name: '李四',
        position: '部长',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      },
      {
        name: '王五',
        position: '副部长',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      }
    ]
  },
  {
    title: '外联部',
    description: 'This is the third slide.',
    members: [
      {
        name: '李四',
        position: '部长',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      },
      {
        name: '王五',
        position: '副部长',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      }
    ]
  },
  {
    title: '宣策部',
    description: 'This is the third slide.',
    members: [
      {
        name: '李四',
        position: '部长',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      },
      {
        name: '王五',
        position: '副部长',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      }
    ]
  },
  {
    title: '秘书部',
    description: 'This is the third slide.',
    members: [
      {
        name: '李四',
        position: '部长',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      },
      {
        name: '王五',
        position: '副部长',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      }
    ]
  }
];
</script>

<style>
.custom-arrow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 25px;
  width: 100%;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}
</style>
