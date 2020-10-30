# Prevent usage of referential-type variables as default param in functional component (react/no-reference-type-as-default-prop)

Warns if in a functional component, a referential type value (such as array/object literal) is used as default prop, to prevent potential un-necessary re-renders, and performance regressions.

## Rule Details

Certain values (like arrays, objects, functions, etc) are compared by reference instead of by value. This means that, for example, whilst two empty arrays represent the same value - to the JS engine they are distinct and inequal as they represent references to different things in memory.

When using object destructuring syntax you can set the default value for a given property if it does not exist. If you set the default value to one of the values that is compared by reference, it will mean that each time the destructure is executed the JS engine will create a new, non-equal value in the destructured variable.

In the  context of a React functional component's props argument this means that each render the property has a new, distinct value. When this value is passed to a hook as a dependency or passed into a child component as a property react will see this as a new value - meaning that a hook will be re-evaluated, or a memoized component will rerender.

This obviously destroys any performance benefits you get from memoisation. Additionally in certain circumstances this can cause infinite rerender loops, which can often be hard to debug.

It's worth noting that primitive literal values (`string`, `number`, `boolean`, `null`, and `undefined`) are compared by value - meaning these are safe to use as inlined default destructured property values.

To fix the violations, the easiest way is to use a referencing variable instead of using the literal values, e.g:

```
const emptyArray = [];

function Component({
  items = emptyArray,
}) {}
```

Examples of ***invalid*** code for this rule:

```jsx
function Component({
  items = [],
}) {}

const Component = ({
  items = {},
}) => {}

const Component = ({
  items = () => {},
}) => {}
```

Examples of ***valid*** code for this rule:

```jsx
const emptyArray = [];

function Component({
  items = emptyArray,
}) {}

const emptyObject = {};
const Component = ({
  items = emptyObject,
}) => {}

const noopFunc = () => {};
const Component = ({
  items = noopFunc,
}) => {}

// primitive literals are all compared by value, so are safe to be inlined
function Component({
  num = 3,
  str = 'foo',
  bool = true,
}) {}
```
