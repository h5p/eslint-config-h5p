import { FlatCompat } from '@eslint/eslintrc';
import baseRules from './src/rules/base.js';
import importRules from './src/rules/import.js';
import languageConfig from './src/configs/language.js';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'vendor/**',
      'public/**',
      'webpack.mix.js',
      'eslint.config.{js,mjs,cjs}',
      '.eslintrc.{js,cjs,json}',
      '**/*.config.{js,mjs,cjs}',
    ],
  },
  ...compat.extends('airbnb-base'),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
    languageOptions: languageConfig,
    rules: {
      ...baseRules,
      ...importRules,
    },
  },
];
