import { FlatCompat } from '@eslint/eslintrc';
import baseRules from './src/rules/base.js';
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
    ],
  },
  ...compat.extends('airbnb-base'),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
    languageOptions: languageConfig,
    rules: {
      ...baseRules,
      'import/extensions': ['error', 'ignorePackages', { js: 'always', jsx: 'always' }],
    },
  },
];
