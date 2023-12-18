<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCountStore } from '@/store'

const title = ref('Hello')

const { count } = storeToRefs(useCountStore())
const { inc, dec } = useCountStore()
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">
        {{ title }}
      </text>
    </view>
    下列蓝色链接点击跳转到相应依赖的页面测试兼容性
    <view>
      <navigator url="/pages/uview-plus/index">
        uview-plus
      </navigator>
    </view>
    <view>
      <navigator url="/pages/unocss/index">
        unocss
      </navigator>
    </view>
    <up-input
      v-model.number="count"
      placeholder="请输入内容"
      border="surround"
      type="number"
    />
    <u-button text="+" @click="inc" />
    <u-button text="-" @click="dec" />
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50rpx;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

navigator {
  color: cornflowerblue;
}
</style>
