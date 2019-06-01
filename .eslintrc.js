const OFF = 0;

module.exports = {
  env: { browser: true },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': OFF
  }
};
