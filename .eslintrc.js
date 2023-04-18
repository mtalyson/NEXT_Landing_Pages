module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@next/next/no-img-element': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
  },
};
