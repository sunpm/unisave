import { presetUni } from '@uni-helper/unocss-preset-uni'
import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-green-800 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    // 由 Iconify 提供支持的纯 CSS 图标解决方案
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetUni({
      attributify: {
        prefixedOnly: true,
        // 组件库的属性命名和 unocss 冲突，添加前缀，see: https://github.com/uni-helper/unocss-preset-uni#attributify
        prefix: 'us-',
      },
    }),
  ],
})
