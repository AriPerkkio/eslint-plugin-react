## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `SpareBank1/designsystem/packages/ffe-account-selector-react/src/subcomponents/suggestion-high-capacity/SuggestionList.js`
- [Link](https://github.com/SpareBank1/designsystem/blob/HEAD/packages/ffe-account-selector-react/src/subcomponents/suggestion-high-capacity/SuggestionList.js#L67-L75)
```js
                suggestions.length * itemSize < height
                    ? suggestions.length * itemSize
                    : height
            }
            innerElementType={forwardRef((forwardProps, ref) => (
                <ul
                    ref={ref}
                    id={id}
                    className={'ffe-base-selector__suggestion-container-list'}
                    role="listbox"
                    {...forwardProps}
                />
            ))}
            itemCount={suggestions.length}
            itemSize={itemSize}
            itemData={{
                forwardProps: props,
                renderSuggestion,
```
