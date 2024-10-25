module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-config-recess-order',
    '@stylistic/stylelint-config',
  ],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    '@stylistic/max-line-length': null,
    'scss/at-extend-no-missing-placeholder': null,
    'no-empty-source': null,
    'selector-type-no-unknown': null,
    'custom-property-pattern': null,
    'no-descending-specificity': null,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'scss/no-global-function-names': null,
    'selector-class-pattern': null,
  },
  allowEmptyInput: true,
  ignoreFiles: [
    'node_modules/**/*',
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
    'dist/**/*',
    'LICENSE',
  ],
}
