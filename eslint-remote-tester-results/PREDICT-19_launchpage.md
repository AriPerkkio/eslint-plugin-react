## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `PREDICT-19/launchpage/src/App.js`
- [Link](https://github.com/PREDICT-19/launchpage/blob/HEAD/src/App.js#L27-L31)
```js

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;
```
