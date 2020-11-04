## Rule: react/no-reference-type-as-default-prop
- Message: `multipleSelectionProps has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `paypal/downshift/src/hooks/useMultipleSelection/testUtils.js`
- [Link](https://github.com/paypal/downshift/blob/HEAD/src/hooks/useMultipleSelection/testUtils.js#L33-L33)
```js
  input: 'input-id',
}

const DropdownMultipleCombobox = ({
  multipleSelectionProps = {},
  comboboxProps = {},
}) => {
  const {
    getSelectedItemProps,
    getDropdownProps,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `comboboxProps has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `paypal/downshift/src/hooks/useMultipleSelection/testUtils.js`
- [Link](https://github.com/paypal/downshift/blob/HEAD/src/hooks/useMultipleSelection/testUtils.js#L34-L34)
```js
}

const DropdownMultipleCombobox = ({
  multipleSelectionProps = {},
  comboboxProps = {},
}) => {
  const {
    getSelectedItemProps,
    getDropdownProps,
    selectedItems,
```
