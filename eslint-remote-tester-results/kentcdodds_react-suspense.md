## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PokemonErrorBoundary" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `kentcdodds/react-suspense/src/pokemon.js`
- [Link](https://github.com/kentcdodds/react-suspense/blob/HEAD/src/pokemon.js#L288-L288)
```js
function PokemonErrorBoundary(parentProps) {
  const canReset = Boolean(parentProps.onReset || parentProps.resetKeys)
  return (
    <ErrorBoundary
      fallbackRender={props => <ErrorFallback canReset={canReset} {...props} />}
      {...parentProps}
    />
  )
}

```
