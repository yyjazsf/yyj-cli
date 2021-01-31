module.exports = {
  root: true,
  env: {
    node: true,
    browser: 1,
    jasmine: true,
  },
  plugins: [
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  globals: {},
  rules: {
    'no-console': 0,
    'no-use-before-define': 0,
  },
};
