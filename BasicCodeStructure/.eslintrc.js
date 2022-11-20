module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'off',
        indent: ['error', 2, { ignoredNodes: ['tab'], 'SwitchCase': 1 }],
        'react-hooks/exhaustive-deps': 'off',
        eqeqeq: ['error', 'smart'],
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
