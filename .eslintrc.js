module.exports = {
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jasmine/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig-lint.json']
  },
  plugins: ['@typescript-eslint', 'jasmine'],
  rules: {
    // Possible Errors
    'no-await-in-loop': 'error',
    'no-extra-semi': 'off', // let Prettier handle formatting
    'require-atomic-updates': 'error',

    // Best Practices
    'array-callback-return': 'error',
    'class-methods-use-this': 'error',
    'default-param-last': 'error',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'max-classes-per-file': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {ignore: [1], ignoreArrayIndexes: true}],
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': ['error', {terms: ['todo', 'fixme', 'refactor']}],
    'prefer-named-capture-group': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    radix: 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    yoda: ['error', 'never', {exceptRange: true}],

    // Variables
    'no-restricted-globals': ['error', 'event', 'fdescribe', 'fit'],
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-use-before-define': ['error', {functions: false}],

    // Nodes.js and CommonJS
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': ['error', {allowCall: true}],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-sync': 'error',

    // ECMAScript 6
    'arrow-parens': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',

    // TypeScript
    '@typescript-eslint/no-use-before-define': ['error', {functions: false}]
  }
};
