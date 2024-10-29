module.exports = {
  root: true, // Ensures this is the root config file
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true, // Adds Jest support
  },
  parser: '@typescript-eslint/parser', // TypeScript parser for ESLint
  parserOptions: {
    ecmaVersion: 2020, // Latest ECMAScript version
    sourceType: 'module', // Allows imports
    ecmaFeatures: {
      jsx: true, // Allows JSX parsing
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended', // Basic ESLint recommendations
    'plugin:react/recommended', // React-specific linting
    'plugin:@typescript-eslint/recommended', // TypeScript-specific linting
    'plugin:prettier/recommended', // Prettier integration
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error', // Ensures Prettier formatting is enforced
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // Only allow JSX in .tsx files
    'react/prop-types': 'off', // Disable prop-types since you’re using TypeScript
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Allow console warnings and errors
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    'no-use-before-define': 'off', // Let TypeScript handle this rule
    'react-hooks/rules-of-hooks': 'error', // Enforces React hook rules
    'react-hooks/exhaustive-deps': 'warn', // Warns about missing dependencies in useEffect
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@mui/material',
            message:
              'Avoid deep imports, use one-level imports from @mui/material.',
          },
          {
            name: '@mui/lab',
            message: 'Avoid deep imports, use one-level imports from @mui/lab.',
          },
        ],
        patterns: ['@mui/*/*/*'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Don't force return type in every function
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'], // Specific rules for test files
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off', // For better test syntax
        '@typescript-eslint/no-unused-vars': 'off',
        'no-console': 'off', // Allow console in tests
      },
    },
  ],
}
