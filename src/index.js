import { FlatCompat } from '@eslint/eslintrc';
import baseRules from './rules/base.js';
import languageConfig from './configs/language.js';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends('airbnb-base'),
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: languageConfig,
    rules: {
      ...baseRules,
    },
  },
];
