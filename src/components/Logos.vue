<template>
  <div inline-flex cursor-default text-2xl font-300>
    <div flex flex-col>
      <image inline-block h-10 w-10 src="/static/logo.png" />
    </div>
    <div
      text="3xl gray4"
      m="x-4 y-auto"
      i-carbon-add transform transition-all-500 hover:rotate-135
    />
    <div flex flex-col>
      <span i-carbon-campsite h-10 w-10 />
    </div>
  </div>
  <p my-2>
    <a icon-btn href="https://github.com/sunpm/vitesse-uniapp-vue3" target="_blank">vitesse-uniapp-vue3</a>
  </p>
  <p>
    <em text-sm italic op75>个人觉得有用的 uniapp + vue3 + ts + unocss + vite 组合模版（主观拉满）</em>
  </p>
</template>
