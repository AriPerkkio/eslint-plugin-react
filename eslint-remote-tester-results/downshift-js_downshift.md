## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-menu-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-menu-props.js#L14-L18)
```js

test('using a composite component and calling getMenuProps without a refKey results in an error', () => {
  const MyComponent = () => (
    <Downshift
      children={({getMenuProps}) => (
        <div>
          <Menu {...getMenuProps()} />
        </div>
      )}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls[1][0]).toMatchSnapshot()
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-menu-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-menu-props.js#L28-L35)
```js

test('not applying the ref prop results in an error', () => {
  const MyComponent = () => (
    <Downshift
      children={({getMenuProps}) => {
        getMenuProps()
        return (
          <div>
            <ul />
          </div>
        )
      }}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls[0][0]).toMatchSnapshot()
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-menu-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-menu-props.js#L45-L49)
```js

test('renders fine when rendering a composite component and applying getMenuProps properly', () => {
  const MyComponent = () => (
    <Downshift
      children={({getMenuProps}) => (
        <div>
          <Menu {...getMenuProps({refKey: 'innerRef'})} />
        </div>
      )}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-menu-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-menu-props.js#L59-L63)
```js

test('using a composite component and calling getMenuProps without a refKey does not result in an error if suppressRefError is true', () => {
  const MyComponent = () => (
    <Downshift
      children={({getMenuProps}) => (
        <div>
          <Menu {...getMenuProps({}, {suppressRefError: true})} />
        </div>
      )}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-menu-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-menu-props.js#L73-L77)
```js

test('returning a DOM element and calling getMenuProps with a refKey does not result in an error if suppressRefError is true', () => {
  const MyComponent = () => (
    <Downshift
      children={({getMenuProps}) => (
        <div>
          <ul {...getMenuProps({refKey: 'blah'}, {suppressRefError: true})} />
        </div>
      )}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(1)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-menu-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-menu-props.js#L87-L94)
```js

test('not applying the ref prop results in an error does not result in an error if suppressRefError is true', () => {
  const MyComponent = () => (
    <Downshift
      children={({getMenuProps}) => {
        getMenuProps({}, {suppressRefError: true})
        return (
          <div>
            <ul />
          </div>
        )
      }}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-menu-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-menu-props.js#L104-L110)
```js

test('renders fine when rendering a composite component and applying getMenuProps properly even if suppressRefError is true', () => {
  const MyComponent = () => (
    <Downshift
      children={({getMenuProps}) => (
        <div>
          <Menu
            {...getMenuProps({refKey: 'innerRef'}, {suppressRefError: true})}
          />
        </div>
      )}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-menu-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-menu-props.js#L123-L133)
```js

  const MyComponent = () => {
    return (
      <Downshift
        children={({getMenuProps}) => (
          <div>
            <RefMenu
              {...getMenuProps({
                ref: e => {
                  ref.current = e
                },
              })}
            />
          </div>
        )}
      />
    )
  }

  render(<MyComponent />)
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L32-L32)
```js
  expect(render(<MyComponent />).container).toBeEmptyDOMElement()
})

test('returning a composite component without calling getRootProps results in an error', () => {
  const MyComponent = () => <Downshift children={() => <MyDiv />} />
  expect(() => render(<MyComponent />)).toThrowErrorMatchingSnapshot()
})

test('returning a composite component and calling getRootProps without a refKey results in an error', () => {
  const MyComponent = () => (
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L38-L38)
```js
})

test('returning a composite component and calling getRootProps without a refKey results in an error', () => {
  const MyComponent = () => (
    <Downshift children={({getRootProps}) => <MyDiv {...getRootProps()} />} />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls[0][0]).toMatchSnapshot()
})

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L47-L47)
```js

test('returning a DOM element and calling getRootProps with a refKey results in an error', () => {
  const MyComponent = () => (
    <Downshift
      children={({getRootProps}) => <div {...getRootProps({refKey: 'blah'})} />}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls[0][0]).toMatchSnapshot()
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L57-L60)
```js

test('not applying the ref prop results in an error', () => {
  const MyComponent = () => (
    <Downshift
      children={({getRootProps}) => {
        const {onClick} = getRootProps()
        return <div onClick={onClick} />
      }}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls[0][0]).toMatchSnapshot()
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L70-L72)
```js

test('renders fine when rendering a composite component and applying getRootProps properly', () => {
  const MyComponent = () => (
    <Downshift
      children={({getRootProps}) => (
        <MyDiv {...getRootProps({refKey: 'innerRef'})} />
      )}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L82-L84)
```js

test('returning a composite component and calling getRootProps without a refKey does not result in an error if suppressRefError is true', () => {
  const MyComponent = () => (
    <Downshift
      children={({getRootProps}) => (
        <MyDiv {...getRootProps({}, {suppressRefError: true})} />
      )}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L94-L96)
```js

test('returning a DOM element and calling getRootProps with a refKey does not result in an error if suppressRefError is true', () => {
  const MyComponent = () => (
    <Downshift
      children={({getRootProps}) => (
        <div {...getRootProps({refKey: 'blah'}, {suppressRefError: true})} />
      )}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L106-L109)
```js

test('not applying the ref prop results in an error does not result in an error if suppressRefError is true', () => {
  const MyComponent = () => (
    <Downshift
      children={({getRootProps}) => {
        const {onClick} = getRootProps({}, {suppressRefError: true})
        return <div onClick={onClick} />
      }}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L119-L123)
```js

test('renders fine when rendering a composite component and applying getRootProps properly even if suppressRefError is true', () => {
  const MyComponent = () => (
    <Downshift
      children={({getRootProps}) => (
        <MyDiv
          {...getRootProps({refKey: 'innerRef'}, {suppressRefError: true})}
        />
      )}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L134-L134)
```js
test('renders fine when rendering a composite component and suppressRefError prop is true', () => {
  const MyComponent = () => (
    <Downshift
      suppressRefError
      children={({getRootProps}) => <MyDiv {...getRootProps()} />}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L144-L146)
```js

test('renders fine when rendering a composite component that uses refs forwarding', () => {
  const MyComponent = () => (
    <Downshift
      children={({getRootProps}) => (
        <MyDivWithForwardedRef {...getRootProps()} />
      )}
    />
  )
  render(<MyComponent />)
  expect(console.error.mock.calls).toHaveLength(0)
})
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyComponent" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `downshift-js/downshift/src/__tests__/downshift.get-root-props.js`
- [Link](https://github.com/downshift-js/downshift/blob/HEAD/src/__tests__/downshift.get-root-props.js#L158-L166)
```js
  const ref = {current: null}

  const MyComponent = () => (
    <Downshift
      children={({getRootProps}) => (
        <MyDivWithForwardedRef
          {...getRootProps({
            ref: e => {
              ref.current = e
            },
          })}
        />
      )}
    />
  )

  render(<MyComponent />)
  expect(ref.current).not.toBeNull()
```
