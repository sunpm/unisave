<script setup lang="ts">
const { inc, dec } = useCountStore()
const { count } = storeToRefs(useCountStore())
</script>

<template>
  <div us-my-4>
    <div us-mb1 us-text-gray:80>
      下面数据已通过 pinia 存储并持久化，不信请刷新
    </div>
    <div us-flex="~ items-center">
      <u-button us-h="!6" us-w="!12" type="success" text="-" @click="dec" />
      {{ count }}
      <u-button us-h="!6" us-w="!12" type="success" text="+" @click="inc" />
    </div>
  </div>
</template>
