## Rule: react/no-reference-type-as-default-prop
- Message: `componentsData has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `ant-design/ant-design/site/theme/template/Content/ComponentOverview.jsx`
- [Link](https://github.com/ant-design/ant-design/blob/HEAD/site/theme/template/Content/ComponentOverview.jsx#L32-L32)
```jsx
}, 2000);

const { Title } = Typography;
const ComponentOverview = ({
  componentsData = [],
  doc: {
    meta: { title },
    content,
  },
  location,
```
