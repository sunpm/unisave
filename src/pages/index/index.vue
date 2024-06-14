<script setup lang="ts">
import { usePageScroll } from '@uni-helper/uni-use'

console.log(usePageScroll)
</script>

<template>
  <view flex="~ col items-center justify-center" p-50px>
    <Logos />
    <InputEntry />
  </view>
</template>

<route lang="yaml" type="home">
style:
  navigationBarTitleText: 首页
</route>
