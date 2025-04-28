<script setup lang="ts">
import { useRouter } from '@uni-helper/uni-use'

defineProps<{ name: string }>()

const { back } = useRouter()
</script>

<template>
  <view>
    <view class="i-carbon-pedestrian inline-block animate-shake-x animate-duration-5000 text-4xl" />
    <h3 us-text-2xl us-font-500>
      Hi,
    </h3>
    <view us-text-xl>
      {{ name }}!
    </view>
    <Counter />

    <view us-my-4>
      <u-button
        text="Back" us-h="!7" us-w="!15" type="success" us-text-sm
        @click="back()"
      />
    </view>
  </view>
</template>

<route lang="yaml">
layout: 'home'
</route>
