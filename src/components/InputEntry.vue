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
  <div>
    <div>
      <up-input
        v-model="name"
        placeholder="What's your name?"
        border="surround" input-align="center" bg="transparent"
        outline="none active:none" p="x-4 y-2" m="t-5" w="250px"
        confirm-type="go"
        @confirm="go"
      />
    </div>
    <div flex="~ justify-center" m-3>
      <u-button
        text="GO" h="!7" w="!15" type="success" text-sm :disabled="!name"
        @click="go"
      />
    </div>
  </div>
</template>
