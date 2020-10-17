## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RenderingExample" or memoize it.`
- Path: `ericgio/react-bootstrap-typeahead/example/src/examples/RenderingExample.js`
- [Link](https://github.com/ericgio/react-bootstrap-typeahead/blob/HEAD/example/src/examples/RenderingExample.js#L26-L40)
```js
  const props = {};

  switch (selectedOption) {
    case 0:
      props.renderInput = ({
        inputRef,
        referenceElementRef,
        ...inputProps
      }) => (
        <Hint>
          <Form.Control
            {...inputProps}
            ref={(node) => {
              inputRef(node);
              referenceElementRef(node);
            }}
          />
        </Hint>
      );
      break;
    case 1:
      props.renderMenu = (results, menuProps, state) => {
        let index = 0;
        const regions = groupBy(results, 'region');
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RenderingExample" or memoize it.`
- Path: `ericgio/react-bootstrap-typeahead/example/src/examples/RenderingExample.js`
- [Link](https://github.com/ericgio/react-bootstrap-typeahead/blob/HEAD/example/src/examples/RenderingExample.js#L43-L65)
```js
        </Hint>
      );
      break;
    case 1:
      props.renderMenu = (results, menuProps, state) => {
        let index = 0;
        const regions = groupBy(results, 'region');
        const items = Object.keys(regions).sort().map((region) => (
          <Fragment key={region}>
            {index !== 0 && <Menu.Divider />}
            <Menu.Header>{region}</Menu.Header>
            {regions[region].map((i) => {
              const item =
                <MenuItem key={index} option={i} position={index}>
                  <Highlighter search={state.text}>
                    {i.name}
                  </Highlighter>
                </MenuItem>;

              index += 1;
              return item;
            })}
          </Fragment>
        ));

        return <Menu {...menuProps}>{items}</Menu>;
      };
      break;
    case 2:
      props.renderMenuItemChildren = (option, { text }, index) => (
        <Fragment>
          <Highlighter search={text}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RenderingExample" or memoize it.`
- Path: `ericgio/react-bootstrap-typeahead/example/src/examples/RenderingExample.js`
- [Link](https://github.com/ericgio/react-bootstrap-typeahead/blob/HEAD/example/src/examples/RenderingExample.js#L68-L79)
```js
        return <Menu {...menuProps}>{items}</Menu>;
      };
      break;
    case 2:
      props.renderMenuItemChildren = (option, { text }, index) => (
        <Fragment>
          <Highlighter search={text}>
            {option.name}
          </Highlighter>,
          <div>
            <small>
              Population: {option.population.toLocaleString()}
            </small>
          </div>
        </Fragment>
      );
      break;
    case 3:
      props.multiple = true;
      props.renderToken = (option, { onRemove }, index) => (
        <Token
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RenderingExample" or memoize it.`
- Path: `ericgio/react-bootstrap-typeahead/example/src/examples/RenderingExample.js`
- [Link](https://github.com/ericgio/react-bootstrap-typeahead/blob/HEAD/example/src/examples/RenderingExample.js#L83-L90)
```js
      );
      break;
    case 3:
      props.multiple = true;
      props.renderToken = (option, { onRemove }, index) => (
        <Token
          key={index}
          onRemove={onRemove}
          option={option}>
          {`${option.name} (Pop: ${option.population.toLocaleString()})`}
        </Token>
      );
      break;
    default:
      break;
  }

```
