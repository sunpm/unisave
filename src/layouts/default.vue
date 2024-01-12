<template>
  <div
    class="app"
  >
    <main
      p="x-4 y-10"
      text="center"
      color="gray-700 dark:gray-200"
    >
      <slot />
      <Footer />
      <div mx-auto mt-4 text-center text-sm opacity-50>
        [Default Layout]
      </div>
    </main>
  </div>
</template>
