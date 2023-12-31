module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next', 'eslint-config-airbnb-base', 'airbnb/rules/react', 'airbnb-typescript', 'plugin:prettier/recommended', 'prettier', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  ignorePatterns: ['*.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['tsx'] }],
    'react/function-component-definition': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/no-this-in-sfc': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
    'import/no-relative-packages': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prefer-destructuring': 'off',
    'react/require-default-props': 'off',
  },
};
