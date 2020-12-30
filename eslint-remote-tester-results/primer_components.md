## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ComponentStickerSheet" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `primer/components/playroom/util.js`
- [Link](https://github.com/primer/components/blob/HEAD/playroom/util.js#L80-L84)
```js
    return (
      <StickerSheetRow
        label={pseudoClass}
        key={pseudoClass}
        childWrapper={child => (
          <WithPseudoClass pseudoClass={pseudoClass}>
            {React.cloneElement(child, {mr: 2, ...child.props})}
          </WithPseudoClass>
        )}
      >
        {children}
      </StickerSheetRow>
    )
  })
```
