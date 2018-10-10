// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'react'
  ],
  // add your custom rules here
  rules: {
    "no-console": 1,
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "no-new": 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
