<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'sunpm',
  },
})
console.log(props.name)
</script>

<template>
  <view flex="~ col items-center justify-center" p-50px>
    <h2>
      路由 props name：{{ name }}
    </h2>
  </view>
</template>

<route lang="yaml">
layout: 'home'
</route>
