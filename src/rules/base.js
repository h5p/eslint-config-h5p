const baseRules = {
  'valid-jsdoc': 'off',
  semi: ['error', 'always'],
  indent: ['error', 2, { SwitchCase: 1 }],
  'brace-style': ['error', 'stroustrup'],
  'keyword-spacing': ['error', { after: true }],
  'comma-spacing': ['error', { before: false, after: true }],
  'space-before-blocks': 'error',
  'space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],
  'no-extra-boolean-cast': 'off',
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-restricted-globals': ['error', 'event'],
  'no-underscore-dangle': 'off',
  'no-use-before-define': ['error', { variables: false }],
  'react/prop-types': 0,
};

export default baseRules;
