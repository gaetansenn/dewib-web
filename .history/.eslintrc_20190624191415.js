'use strict'

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    // https://github.com/nuxt/eslint-config/
    '@nuxtjs',
    // 'prettier',
    // 'prettier/vue'
  ],
  plugins: [
    // 'nuxt'
  ],
  // add your custom rules here
  rules: {
    // Vue rules
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md
    'vue/max-attributes-per-line': 0,
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/singleline-html-element-content-newline.md
    'vue/singleline-html-element-content-newline': 0,
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/multiline-html-element-content-newline.md
    'vue/multiline-html-element-content-newline': 0,
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-spacing.md
    'vue/html-closing-bracket-spacing': 0,
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-v-html.md
    'vue/no-v-html': 0,
    'vue/order-in-components': ['warning', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'asyncData',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    // ESLint rules
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'space-before-function-paren': [
      2,
      {
        'anonymous': 'always',
        'named': 'always'
      }
    ],
    'space-before-blocks': [
      2,
      {
        'functions': 'always',
        'keywords': 'always',
        'classes': 'always'
      }
    ],
    'keyword-spacing': [
      2,
      {
        'before': true,
        'after': true
      }
    ]
  },
  globals: {
    $nuxt: true
  },
}
