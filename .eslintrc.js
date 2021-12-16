module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module'
  },
  rules: {
    'vue/singleline-html-element-content-newline': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ]
  }
}
