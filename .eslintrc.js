module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true
  },
  extends: ['plugin:vue/vue3-strongly-recommended', '@vue/standard'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
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
