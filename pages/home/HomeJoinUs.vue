<template>
  <div class="py-6 w-11/12 md:w-9/12 m-auto">
    <RegionTitle :align="'text-center'">
      <template #tag-title>JOIN US</template>
      <template #title>
        <div
          class="short-name text-lg md:text-3xl leading-relaxed font-bold my-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
        >
          Let's make something awesome together!
        </div>
      </template>
    </RegionTitle>

    <NForm ref="formRef" :model="model" class="space-y-4" size="large">
      <NGrid :cols="1" :x-gap="24" :y-gap="8" responsive="screen">
        <NGridItem
          :span="24"
          md:span="12"
          v-for="item in formItems"
          :key="item.key"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <NFormItem :label="item.label" :path="item.key">
            <NInput
              v-if="item.type === 'input'"
              type="text"
              class="py-1"
              v-model:value="model[item.key]"
            />
            <NSelect
              v-if="item.key === 'gender'"
              v-model:value="model[item.key]"
              :options="genderOptions"
            />
            <NInput
              v-if="item.type === 'textarea'"
              type="textarea"
              v-model:value="model[item.key]"
              :maxlength="100"
            />
          </NFormItem>
        </NGridItem>
      </NGrid>

      <NButton round size="large" type="primary" @click="handleSubmit">
        提交
      </NButton>
    </NForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const formItems = [
  { label: '学号', key: 'studentId', type: 'input' },
  { label: '姓名', key: 'name', type: 'input' },
  { label: '性别', key: 'gender', type: 'select' },
  { label: '邮箱', key: 'email', type: 'input' },
  { label: '意向部门', key: 'grade', type: 'input' },
  { label: '专业', key: 'major', type: 'input' },
  { label: '自我介绍', key: 'introduction', type: 'textarea' }
];

const genderOptions = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' }
];

const model = reactive({});

function handleSubmit() {
  console.log('hello');
}
</script>
