## Rule: react/no-reference-type-as-default-prop
- Message: `cssProps has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `reactjs/reactjs.org/src/components/ButtonLink/ButtonLink.js`
- [Link](https://github.com/reactjs/reactjs.org/blob/HEAD/src/components/ButtonLink/ButtonLink.js#L11-L11)
```js
import {Link} from 'gatsby';
import React from 'react';
import {colors, media} from 'theme';

const ArrowSvg = ({cssProps = {}}) => (
  <svg
    css={cssProps}
    height="12"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 4.53657 8.69699">
```

## Rule: react/no-reference-type-as-default-prop
- Message: `cssProps has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `reactjs/reactjs.org/src/templates/components/MetaTitle/index.js`
- [Link](https://github.com/reactjs/reactjs.org/blob/HEAD/src/templates/components/MetaTitle/index.js#L10-L10)
```js

import React from 'react';
import {colors} from 'theme';

const MetaTitle = ({children, title, cssProps = {}, onDark = false}) => (
  <div
    css={{
      color: onDark ? colors.subtleOnDark : colors.subtle,
      fontSize: 14,
      fontWeight: 700,
```
