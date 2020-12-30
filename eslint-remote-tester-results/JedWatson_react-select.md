## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Props" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `JedWatson/react-select/docs/pages/props/index.js`
- [Link](https://github.com/JedWatson/react-select/blob/HEAD/docs/pages/props/index.js#L11-L15)
```js
const Props = props => (
  <PrettyProps
    heading=""
    components={{
      Button: ({ isCollapsed, ...rest }) => (
        <button {...rest}>
          {isCollapsed ? 'Hide Prop Shape' : 'Show Prop Shape'}
        </button>
      ),
    }}
    {...props}
  />
);

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Api" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `JedWatson/react-select/docs/pages/props/index.js`
- [Link](https://github.com/JedWatson/react-select/blob/HEAD/docs/pages/props/index.js#L91-L97)
```js
    ${(
      <Props
        props={require('!!extract-react-types-loader!../../PropTypes/Select')}
        overrides={{
          components: props => (
            <Prop
              {...props}
              shapeComponent={() => null}
              type="All Components Object"
            />
          ),
        }}
      />
    )}

    ## Async props
```
