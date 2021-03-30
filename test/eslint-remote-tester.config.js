'use strict';

const repositories = require('./repositories.json').slice(0, 500);

module.exports = {
  repositories,

  extensions: ['js', 'jsx', 'ts', 'tsx'],

  pathIgnorePattern: `(${[
    'node_modules',
    '\\/\\.', // Any file or directory starting with dot, e.g. ".git"
    '/dist/',
    '/build/',

    // Minified JS committed to remote
    'codesandbox-client/packages/app/static/js',
    'codesandbox-client/standalone-packages',
    'dockunit/platform/assets',
    'hyper/bin',
    'react-solitaire/lib/index\\.js',
    'babel\\.js',
    'chunk\\.js',
    'bundle\\.js',
    'react-dom\\.development\\.js',
    'vendor\\.min\\.js',
    '\\.min\\.js', // Any *.min.js
    '/public/',

    'Khan/perseus/lib',
    'glortho/react-keydown/example/public',
    'reach/reach-ui/packages/combobox/examples/cities\\.ts',
    'reach/reach-ui/website/src/components/cities\\.js',
    'reach/reach-ui/website/static/router/static',
    'Automattic/wp-calypso/client/components/phone-input/data\\.js',
    'test262-main\\.ts',
    'sample_vis\\.test\\.mocks\\.ts',
    'flow-typed'
  ].join('|')})`,

  concurrentTasks: 3,

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
    plugins: ['react']
  }
};
