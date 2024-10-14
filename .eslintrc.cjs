/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', '@vitest'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@vitest/legacy-all',
  ],
  rules: {
    // Custom
    semi: ['error', 'never'],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@vitest/prefer-expect-assertions': 'off',
    '@vitest/require-hook': 'off',
    '@vitest/no-standalone-expect': 'off',
    '@vitest/consistent-test-it': [
      'error',
      {
        fn: 'test',
        withinDescribe: 'test',
      },
    ],

    // T3 defaults
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',

    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: { attributes: false },
      },
    ],
  },
}

module.exports = config
