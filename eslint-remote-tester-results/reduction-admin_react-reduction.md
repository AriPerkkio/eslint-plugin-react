## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `reduction-admin/react-reduction/src/App.js`
- [Link](https://github.com/reduction-admin/react-reduction/blob/HEAD/src/App.js#L42-L44)
```js
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `reduction-admin/react-reduction/src/App.js`
- [Link](https://github.com/reduction-admin/react-reduction/blob/HEAD/src/App.js#L50-L52)
```js
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />
```
