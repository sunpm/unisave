<script setup lang="ts">
import { useNavigation } from '@/composables'

const { navigateToHi } = useNavigation()
const name = ref('')
function go() {
  if (name.value) {
    navigateToHi({
      name: encodeURIComponent(name.value),
    })
  }
}
</script>

<template>
  <view>
    <view>
      <up-input
        v-model="name"
        placeholder="What's your name?"
        border="surround" input-align="center" us-bg="transparent"
        us-outline="none active:none" us-p="x-4 y-2" us-m="t-5" us-w="250px"
        confirm-type="go"
        @confirm="go"
      />
    </view>
    <view us-flex="~ justify-center" us-m-3>
      <u-button
        text="GO" us-h="!7" us-w="!15" type="success" us-text-sm :disabled="!name"
        @click="go"
      />
    </view>
  </view>
</template>
