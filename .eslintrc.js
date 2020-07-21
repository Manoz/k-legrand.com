module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    // 'eslint:recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['import', 'prettier', 'react'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'object-curly-newline': 0,
    'no-new': 0,
    'no-underscore-dangle': 0,
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      version: '16.0',
    },
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
}
