'use strict';

const repositories = require('./smoke-test-repositories.json');

module.exports = {
  repositories,

  extensions: ['js', 'jsx', 'ts', 'tsx'],

  /** Empty array since we are only interested in linter crashes */
  rulesUnderTesting: [],

  pathIgnorePattern: `(${[
    'node_modules',
    '\\/\\.', // Any file or directory starting with dot, e.g. '.git'
    '/dist/',
    '/build/',
    '/public/',
    'babel\\.js',
    'vendor\\.js',
    'vendors\\.js',
    'chunk\\.js',
    'bundle\\.js',
    'react-dom\\.development\\.js',
    '\\.min\\.js',
    'flow-typed'
  ].join('|')})`,

  concurrentTasks: 3,

  /** Optional boolean flag used to enable caching of cloned repositories. For CIs it's ideal to disable caching. Defauls to true. */
  cache: false,

  eslintrc: {
    root: true,
    env: {
      es6: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    settings: {
      react: {
        version: '16.13.1'
      }
    },
    extends: ['plugin:react/all']
  }
};
