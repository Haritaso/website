'use strict';

const OFF = 0;

module.exports = {
  env: { browser: true },
  extends: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  }
};