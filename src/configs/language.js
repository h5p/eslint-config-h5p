import globals from 'globals';

export const languageConfig = {
  globals: {
    ...globals.browser,
    ...globals.jquery,
    H5P: 'readonly',
    H5PIntegration: 'readonly',
    H5PEditor: 'readonly',
    stripePK: 'readonly',
    domReady: 'readonly'
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  }
};