## Rule: react/no-reference-type-as-default-prop
- Message: `style has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `Khan/perseus/src/components/inline-icon.jsx`
- [Link](https://github.com/Khan/perseus/blob/HEAD/src/components/inline-icon.jsx#L29-L29)
```jsx
 *
 */
const React = require("react");

const InlineIcon = ({path, width, height, style = {}, title}) =>
    <svg
        role="img"
        aria-hidden={!title}
        style={{verticalAlign: "middle", ...style}}
        width={`${width / height}em`}
```
