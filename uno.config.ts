import { defineConfig, presetIcons } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    // 由 Iconify 提供支持的纯 CSS 图标解决方案
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetUni(),
  ],
})
