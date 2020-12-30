## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `bvaughn/react-window/src/__tests__/FixedSizeGrid.js`
- [Link](https://github.com/bvaughn/react-window/blob/HEAD/src/__tests__/FixedSizeGrid.js#L1182-L1184)
```js
      const container = document.createElement('div');
      ReactDOM.render(
        <FixedSizeGrid
          {...defaultProps}
          innerElementType={forwardRef((props, ref) => (
            <div ref={ref} id="inner" {...props} />
          ))}
          outerElementType={forwardRef((props, ref) => (
            <div ref={ref} id="outer" {...props} />
          ))}
        />,
        container
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `bvaughn/react-window/src/__tests__/FixedSizeGrid.js`
- [Link](https://github.com/bvaughn/react-window/blob/HEAD/src/__tests__/FixedSizeGrid.js#L1185-L1187)
```js
          {...defaultProps}
          innerElementType={forwardRef((props, ref) => (
            <div ref={ref} id="inner" {...props} />
          ))}
          outerElementType={forwardRef((props, ref) => (
            <div ref={ref} id="outer" {...props} />
          ))}
        />,
        container
      );
      expect(container.firstChild.id).toBe('outer');
      expect(container.firstChild.firstChild.id).toBe('inner');
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `bvaughn/react-window/src/__tests__/FixedSizeList.js`
- [Link](https://github.com/bvaughn/react-window/blob/HEAD/src/__tests__/FixedSizeList.js#L773-L775)
```js
      const container = document.createElement('div');
      ReactDOM.render(
        <FixedSizeList
          {...defaultProps}
          innerElementType={forwardRef((props, ref) => (
            <div ref={ref} id="inner" {...props} />
          ))}
          outerElementType={forwardRef((props, ref) => (
            <div ref={ref} id="outer" {...props} />
          ))}
        />,
        container
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `bvaughn/react-window/src/__tests__/FixedSizeList.js`
- [Link](https://github.com/bvaughn/react-window/blob/HEAD/src/__tests__/FixedSizeList.js#L776-L778)
```js
          {...defaultProps}
          innerElementType={forwardRef((props, ref) => (
            <div ref={ref} id="inner" {...props} />
          ))}
          outerElementType={forwardRef((props, ref) => (
            <div ref={ref} id="outer" {...props} />
          ))}
        />,
        container
      );
      expect(container.firstChild.id).toBe('outer');
      expect(container.firstChild.firstChild.id).toBe('inner');
```
