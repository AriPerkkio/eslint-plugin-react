## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "List" or memoize it.`
- Path: `effector/effector/src/react/__tests__/useList.test.tsx`
- [Link](https://github.com/effector/effector/blob/HEAD/src/react/__tests__/useList.test.tsx#L183-L187)
```tsx
    return (
      <div>
        {useList(list, {
          keys: [dep],
          fn: item => (
            <div>
              {item} {dep}
            </div>
          ),
        })}
      </div>
    )
  }

```
