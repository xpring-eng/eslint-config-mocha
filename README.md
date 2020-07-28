# `@xpring-eng/eslint-config-mocha`

[![npm version](https://img.shields.io/npm/v/@xpring-eng/eslint-config-mocha.svg)](https://www.npmjs.com/package/@xpring-eng/eslint-config-mocha)
[![Downloads/month](https://img.shields.io/npm/dm/@xpring-eng/eslint-config-mocha.svg)](http://www.npmtrends.com/@xpring-eng/eslint-config-mocha)

A  linting configuration for enforcing best practices using the Mocha test library (with Chai).

### Installation

First, install the needed development dependencies:

```sh
# Ensure ESLint is installed
npm install --save-dev eslint
# Install plugins used by @xpring-eng/eslint-config-mocha
npm install --save-dev eslint-plugin-mocha @fintechstudios/eslint-plugin-chai-as-promised

# Install the Xpring ESLint Mocha config
npm install --save-dev @xpring-eng/eslint-config-mocha
```

### Usage

Then, configure your ESLint to use the Xpring configuration. An example ESLint configuration is provided below:

```js
module.exports = {
  root: true,

  // Make ESLint compatible with TypeScript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Enable linting rules with type information from our tsconfig
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],

    // Allow the use of imports / ES modules
    sourceType: 'module',

    ecmaFeatures: {
      // Enable global strict mode
      impliedStrict: true,
    },
  },

  // Specify global variables that are predefined
  env: {
    node: true, // Enable node global variables & Node.js scoping
    es2020: true, // Add all ECMAScript 2020 globals and automatically set the ecmaVersion parser option to ES2020
  },

  plugins: [],
  // extends: ['@xpring-eng/eslint-config-mocha'],
  extends: ['@xpring-eng/eslint-config-mocha', '@xpring-eng/eslint-config-base'],
  rules: {},
  overrides: [],
}
```
