const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')

module.exports = uni(
  {
    overrides: {
      uni: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      },
    },
    ignores: [
      'pages.json',
      'manifest.json',
      '*.nvue',
      'dist',
    ],
  },
  unocss.configs.flat,
  {
    rules: {
      'no-debugger': require('node:process').env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-console': 'off',
      'vue/multiline-html-element-content-newline': ['warn', {
        ignores: ['pre', 'textarea', 'text'],
      }],
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off', // 未使用的变量显示警告
      'vue/prop-name-casing': 'off',
      'no-async-promise-executor': 'off', // 允许 promise 参数回调中使用 async-await
    },
  },
)
