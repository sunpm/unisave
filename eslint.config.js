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
      'src/**/*.js',
    ],
  },
  unocss.configs.flat,
  {
    rules: {
      'no-debugger': require('node:process').env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-console': require('node:process').env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-unused-vars': 'warn', // 未使用的变量显示警告
      'no-async-promise-executor': 'off', // 允许 promise 参数回调中使用 async-await
    },
  },
)
