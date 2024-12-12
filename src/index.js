import { baseRules } from './rules/base.js';
import { languageConfig } from './configs/language.js';

const config = {
  files: ['**/*.js', '**/*.jsx'],
  languageOptions: languageConfig,
  rules: baseRules,
  extends: ['airbnb']
};

export default config;