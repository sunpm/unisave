<script setup lang="ts">
interface Props {
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'sunpm',
})

console.log('setup 打印 name 参数', props.name)

onReady(() => {
  console.log('onReady 打印 name 参数', props.name)
})
watch(() => props.name, () => {
  console.log('watch 打印 name 参数', props.name)
})
watchEffect(() => {
  console.log('watchEffect 打印 name 参数', props.name)
})
onUpdated(() => {
  console.log('onUpdated 打印 name 参数', props.name)
})
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
