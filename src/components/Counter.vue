<script setup lang="ts">
const { inc, dec } = useCountStore()
const { count } = storeToRefs(useCountStore())
</script>

<template>
  <div my-4>
    <div mb1 text-gray:80>
      下面数据已通过 pinia 存储并持久化，不信请刷新
    </div>
    <div flex="~ items-center">
      <u-button h="!6" w="!12" type="success" text="-" @click="dec" />
      {{ count }}
      <u-button h="!6" w="!12" type="success" text="+" @click="inc" />
    </div>
  </div>
</template>
