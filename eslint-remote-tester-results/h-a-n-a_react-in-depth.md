## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `h-a-n-a/react-in-depth/packages/react/src/__tests__/createReactClassIntegration-test.js`
- [Link](https://github.com/h-a-n-a/react-in-depth/blob/HEAD/packages/react/src/__tests__/createReactClassIntegration-test.js#L483-L485)
```js

  it('warns if getSnapshotBeforeUpdate is static', () => {
    const Foo = createReactClass({
      statics: {
        getSnapshotBeforeUpdate: function() {
          return null;
        },
      },
      render() {
        return <div />;
      },
    });
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `h-a-n-a/react-in-depth/packages/react/src/__tests__/createReactClassIntegration-test.js`
- [Link](https://github.com/h-a-n-a/react-in-depth/blob/HEAD/packages/react/src/__tests__/createReactClassIntegration-test.js#L503-L505)
```js

  it('should warn if state is not properly initialized before getDerivedStateFromProps', () => {
    const Component = createReactClass({
      statics: {
        getDerivedStateFromProps: function() {
          return null;
        },
      },
      render: function() {
        return null;
      },
    });
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `h-a-n-a/react-in-depth/packages/react/src/__tests__/createReactClassIntegration-test.js`
- [Link](https://github.com/h-a-n-a/react-in-depth/blob/HEAD/packages/react/src/__tests__/createReactClassIntegration-test.js#L527-L529)
```js

  it('should not invoke deprecated lifecycles (cWM/cWRP/cWU) if new static gDSFP is present', () => {
    const Component = createReactClass({
      statics: {
        getDerivedStateFromProps: function() {
          return null;
        },
      },
      componentWillMount: function() {
        throw Error('unexpected');
      },
      componentWillReceiveProps: function() {
```
