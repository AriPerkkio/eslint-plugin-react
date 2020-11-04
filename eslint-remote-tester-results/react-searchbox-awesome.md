## Rule: react/no-reference-type-as-default-prop
- Message: `data has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `axmz/react-searchbox-awesome/src/components/Search.jsx`
- [Link](https://github.com/axmz/react-searchbox-awesome/blob/HEAD/src/components/Search.jsx#L23-L23)
```jsx
  overflow: "hidden"
}

const Search = ({
  data = [],
  mapping = { title: "title" },
  style = defaultStyle,
  activeStyle = { backgroundColor: "pink" },
  placeholder = "Search...",
  shortcuts: shortcuts = false,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `mapping has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `axmz/react-searchbox-awesome/src/components/Search.jsx`
- [Link](https://github.com/axmz/react-searchbox-awesome/blob/HEAD/src/components/Search.jsx#L24-L24)
```jsx
}

const Search = ({
  data = [],
  mapping = { title: "title" },
  style = defaultStyle,
  activeStyle = { backgroundColor: "pink" },
  placeholder = "Search...",
  shortcuts: shortcuts = false,
  onEnter = (() => { }),
```

## Rule: react/no-reference-type-as-default-prop
- Message: `activeStyle has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `axmz/react-searchbox-awesome/src/components/Search.jsx`
- [Link](https://github.com/axmz/react-searchbox-awesome/blob/HEAD/src/components/Search.jsx#L26-L26)
```jsx
const Search = ({
  data = [],
  mapping = { title: "title" },
  style = defaultStyle,
  activeStyle = { backgroundColor: "pink" },
  placeholder = "Search...",
  shortcuts: shortcuts = false,
  onEnter = (() => { }),
  onInput = (() => { }),
  onClick = (() => { }),
```

## Rule: react/no-reference-type-as-default-prop
- Message: `onEnter has a/an arrow function as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of arrow function.`
- Path: `axmz/react-searchbox-awesome/src/components/Search.jsx`
- [Link](https://github.com/axmz/react-searchbox-awesome/blob/HEAD/src/components/Search.jsx#L29-L29)
```jsx
  style = defaultStyle,
  activeStyle = { backgroundColor: "pink" },
  placeholder = "Search...",
  shortcuts: shortcuts = false,
  onEnter = (() => { }),
  onInput = (() => { }),
  onClick = (() => { }),
  onEsc = (() => { }),
}) => {
  const inputRef = useRef();
```

## Rule: react/no-reference-type-as-default-prop
- Message: `onInput has a/an arrow function as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of arrow function.`
- Path: `axmz/react-searchbox-awesome/src/components/Search.jsx`
- [Link](https://github.com/axmz/react-searchbox-awesome/blob/HEAD/src/components/Search.jsx#L30-L30)
```jsx
  activeStyle = { backgroundColor: "pink" },
  placeholder = "Search...",
  shortcuts: shortcuts = false,
  onEnter = (() => { }),
  onInput = (() => { }),
  onClick = (() => { }),
  onEsc = (() => { }),
}) => {
  const inputRef = useRef();
  const appRef = useRef();
```

## Rule: react/no-reference-type-as-default-prop
- Message: `onClick has a/an arrow function as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of arrow function.`
- Path: `axmz/react-searchbox-awesome/src/components/Search.jsx`
- [Link](https://github.com/axmz/react-searchbox-awesome/blob/HEAD/src/components/Search.jsx#L31-L31)
```jsx
  placeholder = "Search...",
  shortcuts: shortcuts = false,
  onEnter = (() => { }),
  onInput = (() => { }),
  onClick = (() => { }),
  onEsc = (() => { }),
}) => {
  const inputRef = useRef();
  const appRef = useRef();
  const [tabIndex, setTabIndex] = useState(1);
```

## Rule: react/no-reference-type-as-default-prop
- Message: `onEsc has a/an arrow function as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of arrow function.`
- Path: `axmz/react-searchbox-awesome/src/components/Search.jsx`
- [Link](https://github.com/axmz/react-searchbox-awesome/blob/HEAD/src/components/Search.jsx#L32-L32)
```jsx
  shortcuts: shortcuts = false,
  onEnter = (() => { }),
  onInput = (() => { }),
  onClick = (() => { }),
  onEsc = (() => { }),
}) => {
  const inputRef = useRef();
  const appRef = useRef();
  const [tabIndex, setTabIndex] = useState(1);
  const [inputColor, setInputColor] = useState({})
```
