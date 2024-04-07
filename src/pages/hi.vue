<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <div>
    <div i-carbon-pedestrian inline-block animate-shake-x animate-duration-5000 text-4xl />
    <h3 text-2xl font-500>
      Hi,
    </h3>
    <div text-xl>
      {{ name }}!
    </div>
    <Counter />

    <div my-4>
      <u-button
        text="Back" h="!7" w="!15" type="success" text-sm
        @click="router.push('/')"
      />
    </div>
  </div>
</template>

<route lang="yaml">
layout: 'home'
</route>
