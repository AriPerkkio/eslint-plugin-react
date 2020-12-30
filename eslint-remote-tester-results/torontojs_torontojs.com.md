## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `torontojs/torontojs.com/src/App.js`
- [Link](https://github.com/torontojs/torontojs.com/blob/HEAD/src/App.js#L25-L31)
```js
          component={StaticPage}
        />
        <Route
          exact path="/workshop"
          component={() =>
            <div>
              <Splash
                backgroundColor={theme.secondary}
                page="WORKSHOP"
              />
            </div>
          }
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
```
