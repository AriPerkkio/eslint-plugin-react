## Rule: react/no-reference-type-as-default-prop
- Message: `style has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `gaearon/overreacted.io/src/components/Panel.js`
- [Link](https://github.com/gaearon/overreacted.io/blob/HEAD/src/components/Panel.js#L3-L3)
```js
import React from 'react';

function Panel({ children, style = {} }) {
  return (
    <p
      style={{
        fontSize: '0.9em',
        border: '1px solid var(--hr)',
```
