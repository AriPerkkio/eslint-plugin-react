## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `untra/naiveasync/src/routes/index.tsx`
- [Link](https://github.com/untra/naiveasync/blob/HEAD/src/routes/index.tsx#L19-L23)
```tsx
  <Switch>
    <Route path="/test" component={test} onEnter={reload} />
    <Route exact path="/" component={home} />
    <Route
      component={() => (
        <div className="wrapper">
          <h1>{"404 Not found"}</h1>{" "}
        </div>
      )}
    />
    </Switch>
  </HashRouter>
);

```
