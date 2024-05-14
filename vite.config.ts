/// <reference types="vitest" />
import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import AutoImport from 'unplugin-auto-import/vite'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd())
  const { VITE_BASE_API, VITE_HTTP_URL } = viteEnv

  return {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    server: {
      proxy: {
        // 请求代理
        [VITE_BASE_API]: {
          target: VITE_HTTP_URL,
          secure: false,
          changeOrigin: true,
          rewrite: path => path.replace(VITE_BASE_API, VITE_BASE_API), // 不可以省略rewrite
        },
      },
    },
    plugins: [
    /**
     * unocss
     * @see https://github.com/antfu/unocss
     * see unocss.config.ts for config
     */
      UnoCSS(),
      UniPages(),
      /**
       * unplugin-auto-import 按需 import
       * @see https://github.com/antfu/unplugin-auto-import
       */
      AutoImport({
        imports: [
          'vue',
          'pinia',
          'uni-app',
        ],
        dts: true,
        dirs: [
          './src/composables',
          './src/stores',
        ],
        vueTemplate: true,
      }),
      /**
       * vite-plugin-uni-layouts
       * @see https://github.com/uni-helper/vite-plugin-uni-layouts
       */
      UniLayouts(),
      /**
       * unplugin-vue-components 按需引入组件
       * 注意：需注册至 uni 之前，否则不会生效
       * @see https://github.com/antfu/vite-plugin-components
       */
      Components({
        dts: 'src/components.d.ts',
      }),
      /**
       * 使用 TypeScript 编写 uni-app 的 manifest.json。
       * @see https://github.com/uni-helper/vite-plugin-uni-manifest
       */
      UniManifest(),
      uni(),
    ],
    /**
     * Vitest
     * @see https://github.com/vitest-dev/vitest
     */
    test: {
      environment: 'jsdom',
      setupFiles: [resolve(__dirname, './test/setupTests.ts')],
    },
  }
})
