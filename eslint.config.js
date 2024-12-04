const { defineConfig } = require('eslint-define-config')
const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const prettierPlugin = require('eslint-plugin-prettier')
const tsParser = require('@typescript-eslint/parser')

module.exports = defineConfig(
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    env: {
      jest: true,
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },

    ignores: ['node_modules', 'dist', 'eslint.config.js', 'babel.config.js'], // Ensure 'src' is not ignored here
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
      // Possible Errors
      'no-unexpected-multiline': 'error',
      'no-empty': 'warn',
      'no-extra-semi': 'error',
      'no-undef': 'error',
      'no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],
      'no-redeclare': 'error',

      // Best Practices
      eqeqeq: ['error', 'always'],

      // Variables
      'no-delete-var': 'error',

      // Node.js and CommonJS
      'no-new-require': 'error',

      // Stylistic Issues
      'no-array-constructor': 'warn',

      // ECMAScript 6
      'no-var': 'error',

      // Custom rules for JSX
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/prop-types': 'off',

      // React specific rules from plugin:react/recommended (manually added)
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',

      // Console logging restrictions
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // TypeScript specific rules
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, classes: true, variables: true },
      ],
      'no-use-before-define': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Restricting certain import patterns
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

      // TypeScript explicit function return types
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: ['babel.config.js'], // specific config for Babel config file
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script', // Node.js script not module
    },
    env: {
      node: true, // apply Node.js environment
    },
    rules: {
      // Node.js specific rules or overrides
    },
  }
)
