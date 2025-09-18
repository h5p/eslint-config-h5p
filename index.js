import eslintConfig from './eslint.config.mjs';

// Current dependants do not use flat config format, so merge configs for compatibility
const mergeConfigs = (configs) => configs.reduce((acc, config) => ({
  ignores: [
    ...(acc.ignores || []),
    ...(config.ignores || []),
  ],
  files: config.files || acc.files,
  languageOptions: {
    ...acc.languageOptions,
    ...config.languageOptions,
  },
  plugins: {
    ...acc.plugins,
    ...config.plugins,
  },
  rules: {
    ...acc.rules,
    ...config.rules,
  },
}), {});

export default mergeConfigs(eslintConfig);
