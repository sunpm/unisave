<script setup lang="ts">
interface Props {
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'sunpm',
})

console.log(props.name) // 路由没有参数，打印则是 undefined
</script>

<template>
  <view flex="~ col items-center justify-center" p-50px>
    <h2>
      路由 props name：{{ name }}
    </h2>
  </view>
</template>

<route lang="yaml" type="home">
style:
  navigationBarTitleText: 首页
</route>
