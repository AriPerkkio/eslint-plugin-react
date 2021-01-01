## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ShorthandItemFuncAssert" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `Semantic-Org/Semantic-UI-React/test/typings.tsx`
- [Link](https://github.com/Semantic-Org/Semantic-UI-React/blob/HEAD/test/typings.tsx#L19-L23)
```tsx
export const ShorthandItemFuncAssert = () => (
  <>
    <Button
      icon={{
        children: (Component, props) => (
          <div className='bar'>
            <Component name={props.name} />
          </div>
        ),
      }}
    />
    <Button
      label={{
        children: (Component, props) => (
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ShorthandItemFuncAssert" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `Semantic-Org/Semantic-UI-React/test/typings.tsx`
- [Link](https://github.com/Semantic-Org/Semantic-UI-React/blob/HEAD/test/typings.tsx#L28-L32)
```tsx
      }}
    />
    <Button
      label={{
        children: (Component, props) => (
          <div className='bar'>
            <Component active={props.active}>{props.children}</Component>
          </div>
        ),
      }}
    />
    <Button label={{ children: <div className='bar' /> }} />
  </>
)
```
