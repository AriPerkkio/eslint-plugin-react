## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `rebassjs/rebass/packages/docs/src/components/edit-link.js`
- [Link](https://github.com/rebassjs/rebass/blob/HEAD/packages/docs/src/components/edit-link.js#L14-L29)
```js
}

export default props =>
  <Location
    children={({ location }) => {
      const href = getHREF(location)
      if (!href) return false

      return (
        <Link
          {...props}
          href={href}
          sx={{
            display: 'inline-block',
            color: 'inherit',
            fontSize: 1,
          }}
        />
      )
    }}
  />

```
