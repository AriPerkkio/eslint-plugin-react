## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "CommentMobileList" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `marmelab/react-admin/examples/simple/src/comments/CommentList.js`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/examples/simple/src/comments/CommentList.js#L208-L208)
```js
        secondaryText={record => record.body}
        tertiaryText={record =>
            new Date(record.created_at).toLocaleDateString()
        }
        leftAvatar={() => <PersonIcon />}
    />
);

const CommentList = props => (
    <ListBase perPage={6} exporter={exporter} {...props}>
```
