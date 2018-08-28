module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-optional-chaining',
    '@babel/syntax-dynamic-import',
    'babel-plugin-styled-components',
    '@babel/transform-arrow-functions',
    '@babel/transform-runtime',
  ],
};
