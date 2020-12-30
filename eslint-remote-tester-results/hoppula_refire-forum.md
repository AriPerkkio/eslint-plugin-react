## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "UserSettings" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `hoppula/refire-forum/src/App/UserSettings.js`
- [Link](https://github.com/hoppula/refire-forum/blob/HEAD/src/App/UserSettings.js#L41-L41)
```js
        visible={visible}
        hide={toggleVisible}
        save={toggleVisible}
        saveText="Apply"
        Footer={() => <div/>}
        styles={styles}
      >
        <div>
          <FormField label="Theme">
            <Radio
```
