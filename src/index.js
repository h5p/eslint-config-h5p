import baseRules from './rules/base';
import languageConfig from './configs/language';

const config = {
  files: ['**/*.js', '**/*.jsx'],
  languageOptions: languageConfig,
  rules: baseRules,
  extends: ['airbnb'],
};

export default config;
