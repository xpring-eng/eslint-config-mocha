module.exports = {
  parserOptions: {
    sourceType: 'module', // Allow the use of imports / ES modules
    ecmaFeatures: {
      impliedStrict: true, // Enable global strict mode
    },
  },

  // Specify global variables that are predefined
  env: {
    node: true, // Enable node global variables & Node.js scoping
    es2020: true, // Add all ECMAScript 2020 globals and automatically set the ecmaVersion parser option to ES2020
  },

  extends: [
    './rules/mocha',
    './rules/chai-as-promised',
  ].map(require.resolve),
  rules: {},

  reportUnusedDisableDirectives: true,
}
