## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `emotion-js/emotion/packages/jest/test/react-enzyme.test.js`
- [Link](https://github.com/emotion-js/emotion/blob/HEAD/packages/jest/test/react-enzyme.test.js#L26-L28)
```js
    }
  },
  basic: {
    render() {
      const Greeting = ({ children }) => (
        <div css={{ backgroundColor: 'red' }}>{children}</div>
      )
      return <Greeting>hello</Greeting>
    }
  },
  styled: {
    render() {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `emotion-js/emotion/packages/jest/test/react-enzyme.test.js`
- [Link](https://github.com/emotion-js/emotion/blob/HEAD/packages/jest/test/react-enzyme.test.js#L52-L54)
```js
    }
  },
  'with styles on top level': {
    render() {
      const Greeting = ({ children, className }) => (
        <div className={className}>{children}</div>
      )
      return <Greeting css={{ backgroundColor: 'red' }}>Hello</Greeting>
    }
  },
  'with prop containing css element': {
    render() {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `emotion-js/emotion/packages/jest/test/react-enzyme.test.js`
- [Link](https://github.com/emotion-js/emotion/blob/HEAD/packages/jest/test/react-enzyme.test.js#L60-L64)
```js
    }
  },
  'with prop containing css element': {
    render() {
      const Greeting = ({ children, content }) => (
        <div>
          {content} {children}
        </div>
      )
      return (
        <Greeting content={<p css={{ backgroundColor: 'blue' }}>Hello</p>}>
          World!
        </Greeting>
      )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `emotion-js/emotion/packages/jest/test/react-enzyme.test.js`
- [Link](https://github.com/emotion-js/emotion/blob/HEAD/packages/jest/test/react-enzyme.test.js#L80-L84)
```js
    }
  },
  'with prop containing css element not at the top level': {
    render() {
      const Greeting = ({ children, content }) => (
        <div>
          {content} {children}
        </div>
      )

      return (
        <div>
          <Greeting
            content={
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `emotion-js/emotion/packages/jest/test/react-enzyme.test.js`
- [Link](https://github.com/emotion-js/emotion/blob/HEAD/packages/jest/test/react-enzyme.test.js#L103-L107)
```js
    }
  },
  'with prop containing css element with other props': {
    render() {
      const Greeting = ({ children, content }) => (
        <div>
          {content} {children}
        </div>
      )

      return (
        <Greeting
          content={
            <p id="something" css={{ backgroundColor: 'blue' }}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `emotion-js/emotion/packages/jest/test/react-enzyme.test.js`
- [Link](https://github.com/emotion-js/emotion/blob/HEAD/packages/jest/test/react-enzyme.test.js#L127-L131)
```js
    render() {
      const Thing = ({ content, children }) => {
        return children
      }
      const Greeting = ({ children, content }) => (
        <Thing content={<div css={{ color: 'hotpink' }} />}>
          {content} {children}
        </Thing>
      )

      return (
        <Greeting
          content={
            <p id="something" css={{ backgroundColor: 'blue' }}>
```
