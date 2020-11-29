module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    semi: 0,
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': 'off', // disable default
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off', // disable default
    '@typescript-eslint/no-explicit-any': 'error',
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase'],
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
    {
      // allow explicit any in these files and missing return type
      files: [
        'state.ts',
        'getters.ts',
        'repository.ts',
        '*.repository.ts',
        'test/**/*',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': ['off'],
      },
    },
  ],
}
