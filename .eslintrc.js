module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // remove jsdoc comments
    'require-jsdoc': 0,
    semi: ['error', 'never'],
  },
}
