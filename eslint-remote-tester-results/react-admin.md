## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:3`
- Path: `marmelab/react-admin/examples/data-generator/src/finalize.ts`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/examples/data-generator/src/finalize.ts)
```ts
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:3
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: react/no-reference-type-as-default-prop
- Message: `pagination has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `marmelab/react-admin/packages/ra-core/src/dataProvider/useGetList.spec.tsx`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-core/src/dataProvider/useGetList.spec.tsx#L11-L11)
```tsx
import { DataProviderContext } from '../dataProvider';

const UseGetList = ({
    resource = 'posts',
    pagination = { page: 1, perPage: 10 },
    sort = { field: 'id', order: 'DESC' },
    filter = {},
    options = {},
    callback = null,
    ...rest
```

## Rule: react/no-reference-type-as-default-prop
- Message: `sort has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `marmelab/react-admin/packages/ra-core/src/dataProvider/useGetList.spec.tsx`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-core/src/dataProvider/useGetList.spec.tsx#L12-L12)
```tsx

const UseGetList = ({
    resource = 'posts',
    pagination = { page: 1, perPage: 10 },
    sort = { field: 'id', order: 'DESC' },
    filter = {},
    options = {},
    callback = null,
    ...rest
}) => {
```

## Rule: react/no-reference-type-as-default-prop
- Message: `filter has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `marmelab/react-admin/packages/ra-core/src/dataProvider/useGetList.spec.tsx`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-core/src/dataProvider/useGetList.spec.tsx#L13-L13)
```tsx
const UseGetList = ({
    resource = 'posts',
    pagination = { page: 1, perPage: 10 },
    sort = { field: 'id', order: 'DESC' },
    filter = {},
    options = {},
    callback = null,
    ...rest
}) => {
    const hookValue = useGetList(resource, pagination, sort, filter, options);
```

## Rule: react/no-reference-type-as-default-prop
- Message: `options has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `marmelab/react-admin/packages/ra-core/src/dataProvider/useGetList.spec.tsx`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-core/src/dataProvider/useGetList.spec.tsx#L14-L14)
```tsx
    resource = 'posts',
    pagination = { page: 1, perPage: 10 },
    sort = { field: 'id', order: 'DESC' },
    filter = {},
    options = {},
    callback = null,
    ...rest
}) => {
    const hookValue = useGetList(resource, pagination, sort, filter, options);
    if (callback) callback(hookValue);
```

## Rule: react/no-reference-type-as-default-prop
- Message: `options has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `marmelab/react-admin/packages/ra-core/src/dataProvider/useGetMany.spec.tsx`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-core/src/dataProvider/useGetMany.spec.tsx#L12-L12)
```tsx

const UseGetMany = ({
    resource,
    ids,
    options = {},
    callback = null,
    ...rest
}) => {
    const hookValue = useGetMany(resource, ids, options);
    if (callback) callback(hookValue);
```

## Rule: react/no-reference-type-as-default-prop
- Message: `query has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `marmelab/react-admin/packages/ra-core/src/dataProvider/useQueryWithStore.spec.tsx`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-core/src/dataProvider/useQueryWithStore.spec.tsx#L10-L10)
```tsx
import useQueryWithStore from './useQueryWithStore';
import { DataProviderContext } from '../dataProvider';

const UseQueryWithStore = ({
    query = { type: 'getOne', resource: 'posts', payload: { id: 1 } },
    options = {},
    dataSelector = state => state.admin?.resources.posts.data[1],
    totalSelector = state => null,
    callback = null,
    ...rest
```

## Rule: react/no-reference-type-as-default-prop
- Message: `options has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `marmelab/react-admin/packages/ra-core/src/dataProvider/useQueryWithStore.spec.tsx`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-core/src/dataProvider/useQueryWithStore.spec.tsx#L11-L11)
```tsx
import { DataProviderContext } from '../dataProvider';

const UseQueryWithStore = ({
    query = { type: 'getOne', resource: 'posts', payload: { id: 1 } },
    options = {},
    dataSelector = state => state.admin?.resources.posts.data[1],
    totalSelector = state => null,
    callback = null,
    ...rest
}) => {
```

## Rule: react/no-reference-type-as-default-prop
- Message: `dataSelector has a/an arrow function as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of arrow function.`
- Path: `marmelab/react-admin/packages/ra-core/src/dataProvider/useQueryWithStore.spec.tsx`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-core/src/dataProvider/useQueryWithStore.spec.tsx#L12-L12)
```tsx

const UseQueryWithStore = ({
    query = { type: 'getOne', resource: 'posts', payload: { id: 1 } },
    options = {},
    dataSelector = state => state.admin?.resources.posts.data[1],
    totalSelector = state => null,
    callback = null,
    ...rest
}) => {
    const hookValue = useQueryWithStore(
```

## Rule: react/no-reference-type-as-default-prop
- Message: `totalSelector has a/an arrow function as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of arrow function.`
- Path: `marmelab/react-admin/packages/ra-core/src/dataProvider/useQueryWithStore.spec.tsx`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-core/src/dataProvider/useQueryWithStore.spec.tsx#L13-L13)
```tsx
const UseQueryWithStore = ({
    query = { type: 'getOne', resource: 'posts', payload: { id: 1 } },
    options = {},
    dataSelector = state => state.admin?.resources.posts.data[1],
    totalSelector = state => null,
    callback = null,
    ...rest
}) => {
    const hookValue = useQueryWithStore(
        query,
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:102`
- Path: `marmelab/react-admin/packages/ra-core/src/sideEffect/accumulate.ts`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-core/src/sideEffect/accumulate.ts)
```ts
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:102
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: react/no-reference-type-as-default-prop
- Message: `meta has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `marmelab/react-admin/packages/ra-ui-materialui/src/input/ReferenceInput.spec.tsx`
- [Link](https://github.com/marmelab/react-admin/blob/HEAD/packages/ra-ui-materialui/src/input/ReferenceInput.spec.tsx#L110-L110)
```tsx
        expect(queryByDisplayValue('fetch error')).not.toBeNull();
    });

    it('should pass warning as error to the children if defined', () => {
        const Component = ({ meta = { error: null } }) => meta.error;

        const { queryByText } = render(
            <ReferenceInputView
                {...{
                    ...defaultProps,
```
