/**
 * @fileoverview Prevent usage of referential-type variables as default param in functional component
 * @author Chang Yan
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-reference-type-as-default-prop');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({parserOptions});
const MESSAGE_ID = 'forbiddenTypeDefaultParam';

ruleTester.run('no-reference-type-as-default-prop', rule, {
  valid: [
    `
      function Foo({
        bar = emptyFunction,
      }) {}
  `,
    `
    function Foo({
      bar = emptyFunction,
      ...rest
    }) {}
  `,
    `
    function Foo({
      bar = 1,
      baz = 'hello',
    }) {}
  `,
    `
    function Foo(props) {}
  `,
    `
    function Foo(props) {}

    Foo.defaultProps = {
      bar: () => {}
    }
  `,
    `
    const Foo = () => {};
  `,
    `
    const Foo = ({bar = 1}) => {};
  `
  ],
  invalid: [
    {
      code: `
          function Foo({
            a = {},
            b = ['one', 'two'],
            c = /regex/i,
            d = () => {},
            e = function() {},
            f = class {},
            g = new Thing(),
            h = <Thing />,
          }) {}
        `,
      errors: [
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'a',
            forbiddenType: 'object literal'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'b',
            forbiddenType: 'array literal'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'c',
            forbiddenType: 'regex literal'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'd',
            forbiddenType: 'arrow function'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'e',
            forbiddenType: 'function expression'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'f',
            forbiddenType: 'class expression'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'g',
            forbiddenType: 'construction expression'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'h',
            forbiddenType: 'JSX element'
          }
        }
      ]
    },
    {
      code: `
          const Foo = ({
            a = {},
            b = ['one', 'two'],
            c = /regex/i,
            d = () => {},
            e = function() {},
            f = class {},
            g = new Thing(),
            h = <Thing />,
          }) => {}
        `,
      errors: [
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'a',
            forbiddenType: 'object literal'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'b',
            forbiddenType: 'array literal'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'c',
            forbiddenType: 'regex literal'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'd',
            forbiddenType: 'arrow function'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'e',
            forbiddenType: 'function expression'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'f',
            forbiddenType: 'class expression'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'g',
            forbiddenType: 'construction expression'
          }
        },
        {
          messageId: MESSAGE_ID,
          data: {
            propName: 'h',
            forbiddenType: 'JSX element'
          }
        }
      ]
    }
  ]
});
