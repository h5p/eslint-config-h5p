import globals from 'globals';

const languageConfig = {
  globals: {
    ...globals.browser,
    ...globals.jquery,
    H5P: 'readonly',
    H5PIntegration: 'readonly',
    H5PEditor: 'readonly',
    stripePK: 'readonly',
    domReady: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
};

export default languageConfig;
