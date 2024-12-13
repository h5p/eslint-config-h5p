import { FlatCompat } from '@eslint/eslintrc';
import baseRules from './src/rules/base.js';
import languageConfig from './src/configs/language.js';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

const airbnbConfig = compat.extends('airbnb-base')[0];

export default {
  ...airbnbConfig,
  files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
  languageOptions: languageConfig,
  rules: baseRules,
};
