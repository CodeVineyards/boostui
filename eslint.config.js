const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignores: ['node_modules', 'dist'], // Ensure 'src' is not ignored here
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    'no-use-before-define': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'boostui/widgets',
            message:
              'Avoid deep imports, use one-level imports from boostui/widgets.',
          },
          {
            name: 'boostui/layout',
            message:
              'Avoid deep imports, use one-level imports from boostui/layout.',
          },
          {
            name: 'boostui/theme',
            message:
              'Avoid deep imports, use one-level imports from boostui/theme.',
          },
          {
            name: 'boostui/ecomm',
            message:
              'Avoid deep imports, use one-level imports from boostui/ecomm.',
          },
          {
            name: 'boostui/blog',
            message:
              'Avoid deep imports, use one-level imports from boostui/blog.',
          },
        ],
        patterns: ['boostui/*/*/*'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-console': 'off',
      },
    },
  ],
})
