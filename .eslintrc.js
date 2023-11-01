module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'universe/native',
    'prettier',
  ],
  plugins: ['react', 'react-native'],
  rules: {
    'prettier/prettier': 0,
    'import/order': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': { allowExistingDirectories: true },
    },
  },
}
