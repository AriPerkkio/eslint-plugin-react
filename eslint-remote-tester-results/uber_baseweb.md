## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "API" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/components/api.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/components/api.js#L28-L30)
```js
          props={api}
          heading={' '}
          shouldCollapseProps={true}
          components={{
            Description: props => {
              return <Paragraph3 $as="div">{props.children}</Paragraph3>;
            },
            Button: props => {
              return (
                <Button
                  {...props}
                  size={ButtonSize.compact}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "API" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/components/api.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/components/api.js#L31-L41)
```js
          components={{
            Description: props => {
              return <Paragraph3 $as="div">{props.children}</Paragraph3>;
            },
            Button: props => {
              return (
                <Button
                  {...props}
                  size={ButtonSize.compact}
                  kind={ButtonKind.secondary}
                >
                  {props.children}
                </Button>
              );
            },
            Indent: props => {
              return (
                <Block
                  overrides={{
                    Block: {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "API" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/components/api.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/components/api.js#L42-L56)
```js
                  {props.children}
                </Button>
              );
            },
            Indent: props => {
              return (
                <Block
                  overrides={{
                    Block: {
                      style: ({$theme}) => ({
                        paddingLeft: $theme.sizing.scale600,
                      }),
                    },
                  }}
                >
                  {props.children}
                </Block>
              );
            },
            Required: props => {
              return (
                <Block as="span" color="negative">
                  {props.children}
                </Block>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "API" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/components/api.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/components/api.js#L57-L63)
```js
                  {props.children}
                </Block>
              );
            },
            Required: props => {
              return (
                <Block as="span" color="negative">
                  {props.children}
                </Block>
              );
            },
            Type: props => {
              return (
                <Block as="span" color="primary">
                  {props.children}
                </Block>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "API" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/components/api.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/components/api.js#L64-L70)
```js
                  {props.children}
                </Block>
              );
            },
            Type: props => {
              return (
                <Block as="span" color="primary">
                  {props.children}
                </Block>
              );
            },
            TypeMeta: props => {
              return (
                <Block as="span" color="warning400">
                  {props.children}
                </Block>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "API" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/components/api.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/components/api.js#L71-L77)
```js
                  {props.children}
                </Block>
              );
            },
            TypeMeta: props => {
              return (
                <Block as="span" color="warning400">
                  {props.children}
                </Block>
              );
            },
            FunctionType: props => {
              return (
                <Block as="span" color="positive700">
                  {props.children}
                </Block>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "API" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/components/api.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/components/api.js#L78-L84)
```js
                  {props.children}
                </Block>
              );
            },
            FunctionType: props => {
              return (
                <Block as="span" color="positive700">
                  {props.children}
                </Block>
              );
            },
            StringType: props => {
              return (
                <Block as="span" color="positive">
                  {props.children}
                </Block>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "API" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/components/api.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/components/api.js#L85-L91)
```js
                  {props.children}
                </Block>
              );
            },
            StringType: props => {
              return (
                <Block as="span" color="positive">
                  {props.children}
                </Block>
              );
            },
          }}
        />
      </Block>
    </React.Fragment>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "VersionSelector" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/components/version-selector.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/components/version-selector.js#L92-L143)
```js
      placement={PopoverPlacement.bottomLeft}
      focusLock
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      content={({close}) => (
        <NestedMenus>
          <StatefulMenu
            items={majorVersionsToDisplay}
            onItemSelect={({item}) => {
              window.open(`https://${item.label}.baseweb.design`);
              close();
            }}
            overrides={{
              List: {
                style: {
                  width: '100px',
                },
              },
              Option: {
                props: {
                  size: 'compact',
                  getChildMenu: item => {
                    if (
                      semver.satisfies(semver.coerce(item.label), '>=8.0.0')
                    ) {
                      return (
                        <StatefulMenu
                          size="compact"
                          items={
                            versionsToShowPerMajor[item.originalVersionNumber]
                          }
                          onItemSelect={({item}) => {
                            window.open(
                              `https://${item.label.replace(
                                /\./gi,
                                '-',
                              )}.baseweb.design`,
                            );
                            close();
                          }}
                          overrides={{
                            // using 315px to make sure an option is cut in half
                            // so the user has a clue that it's scrollable
                            List: {style: {width: '100px', maxHeight: '315px'}},
                            Option: {props: {size: 'compact'}},
                          }}
                        />
                      );
                    }
                  },
                },
              },
            }}
          />
        </NestedMenus>
      )}
    >
      <Button
        size="compact"
        kind={KIND.minimal}
        endEnhancer={() => <ChevronDown size={20} />}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "VersionSelector" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/components/version-selector.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/components/version-selector.js#L148-L148)
```js
    >
      <Button
        size="compact"
        kind={KIND.minimal}
        endEnhancer={() => <ChevronDown size={20} />}
      >
        v{version}
      </Button>
    </StatefulPopover>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/app-nav-bar/map-item-to-node.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/app-nav-bar/map-item-to-node.js#L30-L40)
```js
    <AppNavBar
      title="Title"
      mainItems={mainItems}
      userItems={userItems}
      mapItemToNode={item => (
        <div
          className={css({
            border: `dashed 2px ${
              item.info ? item.info.color : 'green'
            }`,
          })}
        >
          {item.info ? `color: ${item.info.color}` : item.label}
        </div>
      )}
      onMainItemSelect={handleMainItemSelect}
      username="Umka Marshmallow"
      usernameSubtitle="5.0"
      userImgUrl=""
    />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/dropdown.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/dropdown.js#L28-L36)
```js
  return (
    <StatefulPopover
      focusLock
      placement={PLACEMENT.bottomLeft}
      content={({close}) => (
        <StatefulMenu
          items={ITEMS}
          onItemSelect={() => close()}
          overrides={{
            List: {style: {height: '150px', width: '138px'}},
          }}
        />
      )}
    >
      <Button endEnhancer={() => <ChevronDown size={24} />}>
        Open Menu
      </Button>
    </StatefulPopover>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/dropdown.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/dropdown.js#L38-L38)
```js
          }}
        />
      )}
    >
      <Button endEnhancer={() => <ChevronDown size={24} />}>
        Open Menu
      </Button>
    </StatefulPopover>
  );
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/dropdown.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/dropdown.tsx#L27-L35)
```tsx
  return (
    <StatefulPopover
      focusLock
      placement={PLACEMENT.bottomLeft}
      content={({close}) => (
        <StatefulMenu
          items={ITEMS}
          onItemSelect={() => close()}
          overrides={{
            List: {style: {height: '150px', width: '138px'}},
          }}
        />
      )}
    >
      <Button endEnhancer={() => <ChevronDown size={24} />}>
        Open Menu
      </Button>
    </StatefulPopover>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/dropdown.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/dropdown.tsx#L37-L37)
```tsx
          }}
        />
      )}
    >
      <Button endEnhancer={() => <ChevronDown size={24} />}>
        Open Menu
      </Button>
    </StatefulPopover>
  );
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/with-enhancers.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/with-enhancers.js#L11-L11)
```js
export default function Example() {
  return (
    <React.Fragment>
      <p>
        <Button startEnhancer={() => <ArrowRight size={24} />}>
          Start Enhancer
        </Button>
      </p>
      <p>
        <Button endEnhancer={() => <Upload size={24} />}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/with-enhancers.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/with-enhancers.js#L16-L16)
```js
          Start Enhancer
        </Button>
      </p>
      <p>
        <Button endEnhancer={() => <Upload size={24} />}>
          End Enhancer
        </Button>
      </p>
    </React.Fragment>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/with-enhancers.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/with-enhancers.tsx#L9-L9)
```tsx
export default function Example() {
  return (
    <React.Fragment>
      <p>
        <Button startEnhancer={() => <ArrowRight size={24} />}>
          Start Enhancer
        </Button>
      </p>
      <p>
        <Button endEnhancer={() => <Upload size={24} />}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/with-enhancers.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/with-enhancers.tsx#L14-L14)
```tsx
          Start Enhancer
        </Button>
      </p>
      <p>
        <Button endEnhancer={() => <Upload size={24} />}>
          End Enhancer
        </Button>
      </p>
    </React.Fragment>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.js#L10-L10)
```js

export default function Example() {
  return (
    <ButtonGroup>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.js#L13-L13)
```js
    <ButtonGroup>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.js#L16-L16)
```js
      </Button>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
    </ButtonGroup>
  );
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.tsx#L9-L9)
```tsx

export default function Example() {
  return (
    <ButtonGroup>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.tsx#L12-L12)
```tsx
    <ButtonGroup>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.tsx#L15-L15)
```tsx
      </Button>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
      <Button startEnhancer={() => <Upload size={24} />}>
        Label
      </Button>
    </ButtonGroup>
  );
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/checkbox/component-overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/checkbox/component-overrides.js#L13-L25)
```js
  return (
    <StatefulCheckbox
      onChange={console.log}
      overrides={{
        Checkmark: props => (
          <div
            className={css({
              color: props.checked
                ? theme.colors.primary
                : theme.colors.mono700,
              marginTop: '3px',
              marginRight: '3px',
            })}
          >
            <Alert />
          </div>
        ),
      }}
    >
      With style overrides
    </StatefulCheckbox>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/checkbox/component-overrides.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/checkbox/component-overrides.tsx#L12-L24)
```tsx
  return (
    <StatefulCheckbox
      onChange={console.log}
      overrides={{
        Checkmark: props => (
          <div
            className={css({
              color: props.checked
                ? theme.colors.primary
                : theme.colors.mono700,
              marginTop: '3px',
              marginRight: '3px',
            })}
          >
            <Alert />
          </div>
        ),
      }}
    >
      With style overrides
    </StatefulCheckbox>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/enhancers.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/enhancers.js#L20-L24)
```js
        paddingRight: 0,
      })}
    >
      <ListItem
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/enhancers.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/enhancers.js#L30-L40)
```js
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem
        endEnhancer={() => (
          <React.Fragment>
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
            <div style={{width: '18px'}} />
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
          </React.Fragment>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem endEnhancer={() => <ChevronRight />}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/enhancers.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/enhancers.js#L45-L45)
```js
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem endEnhancer={() => <ChevronRight />}>
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem
        endEnhancer={() => <ListItemLabel>Label</ListItemLabel>}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/enhancers.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/enhancers.js#L50-L50)
```js
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem
        endEnhancer={() => <ListItemLabel>Label</ListItemLabel>}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
    </ul>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/enhancers.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/enhancers.tsx#L19-L23)
```tsx
        paddingRight: 0,
      })}
    >
      <ListItem
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/enhancers.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/enhancers.tsx#L29-L39)
```tsx
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem
        endEnhancer={() => (
          <React.Fragment>
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
            <div style={{width: '18px'}} />
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
          </React.Fragment>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem endEnhancer={() => <ChevronRight />}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/enhancers.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/enhancers.tsx#L44-L44)
```tsx
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem endEnhancer={() => <ChevronRight />}>
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem
        endEnhancer={() => <ListItemLabel>Label</ListItemLabel>}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/enhancers.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/enhancers.tsx#L49-L49)
```tsx
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      <ListItem
        endEnhancer={() => <ListItemLabel>Label</ListItemLabel>}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
    </ul>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/menu-adapter.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/menu-adapter.js#L42-L42)
```js
                    {...props}
                    ref={ref}
                    artwork={props.item.icon}
                    artworkSize={ARTWORK_SIZES.LARGE}
                    endEnhancer={() => <ChevronRight />}
                  >
                    <ListItemLabel
                      description={props.item.subtitle}
                    >
                      {props.item.title}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.js#L27-L27)
```js
      </ListItem>

      <ListItem
        artwork={Search}
        endEnhancer={() => <ChevronRight />}
        sublist
      >
        <ListItemLabel sublist>Label Three</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.js#L35-L35)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
        endEnhancer={() => <ChevronRight />}
        sublist
      >
        <ListItemLabel sublist>Label Four</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.js#L44-L44)
```js
      <ListItem
        artwork={Search}
        // Medium is aliased to Small when sublist
        artworkSize={ARTWORK_SIZES.MEDIUM}
        endEnhancer={() => <ChevronRight />}
        sublist
      >
        <ListItemLabel sublist>Label Five</ListItemLabel>
      </ListItem>

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.js#L53-L55)
```js

      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <ListItemLabel sublist>Label Six</ListItemLabel>
        )}
        sublist
      >
        <ListItemLabel sublist>Label Six</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.js#L63-L65)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <ListItemLabel sublist>Label Seven</ListItemLabel>
        )}
        sublist
      >
        <ListItemLabel sublist>Label Seven</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.js#L73-L75)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <ListItemLabel sublist>Label Eight</ListItemLabel>
        )}
        sublist
      >
        <ListItemLabel sublist>Label Eight</ListItemLabel>
      </ListItem>
    </ul>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.tsx#L25-L25)
```tsx
      </ListItem>

      <ListItem
        artwork={Search}
        endEnhancer={() => <ChevronRight />}
        sublist
      >
        <ListItemLabel sublist>Label Three</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.tsx#L33-L33)
```tsx
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
        endEnhancer={() => <ChevronRight />}
        sublist
      >
        <ListItemLabel sublist>Label Four</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.tsx#L42-L42)
```tsx
      <ListItem
        artwork={Search}
        // Medium is aliased to Small when sublist
        artworkSize={ARTWORK_SIZES.MEDIUM}
        endEnhancer={() => <ChevronRight />}
        sublist
      >
        <ListItemLabel sublist>Label Five</ListItemLabel>
      </ListItem>

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.tsx#L51-L53)
```tsx

      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <ListItemLabel sublist>Label Six</ListItemLabel>
        )}
        sublist
      >
        <ListItemLabel sublist>Label Six</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.tsx#L61-L63)
```tsx
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <ListItemLabel sublist>Label Seven</ListItemLabel>
        )}
        sublist
      >
        <ListItemLabel sublist>Label Seven</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/list/sublist.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/sublist.tsx#L71-L73)
```tsx
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <ListItemLabel sublist>Label Eight</ListItemLabel>
        )}
        sublist
      >
        <ListItemLabel sublist>Label Eight</ListItemLabel>
      </ListItem>
    </ul>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/menu/virtual-list.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/menu/virtual-list.js#L25-L41)
```js
            role={props.role}
            height={500}
            rowCount={props.children.length}
            rowHeight={36}
            rowRenderer={({index, key, style}) => (
              <OptionList
                key={key}
                style={style}
                {...children[index].props}
                overrides={{
                  ListItem: {
                    style: {
                      paddingTop: 0,
                      paddingBottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                    },
                  },
                }}
              />
            )}
            width={width}
          />
        )}
      </AutoSizer>
    </Container>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/overrides/component.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/overrides/component.tsx#L8-L8)
```tsx
export default function Example() {
  return (
    <Button
      overrides={{
        BaseButton: props => <button>{props.children}</button>,
      }}
    >
      Submit
    </Button>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/pagination/overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/pagination/overrides.js#L23-L25)
```js
            padding: $theme.sizing.scale400,
          }),
        },
        PrevButton: {
          component: ({onClick}) => (
            <Button onClick={onClick}>Left</Button>
          ),
        },
        NextButton: {
          component: ({onClick}) => (
            <Button onClick={onClick}>Right</Button>
          ),
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/pagination/overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/pagination/overrides.js#L28-L30)
```js
            <Button onClick={onClick}>Left</Button>
          ),
        },
        NextButton: {
          component: ({onClick}) => (
            <Button onClick={onClick}>Right</Button>
          ),
        },
        MaxLabel: {
          style: ({$theme}) => ({
            ...$theme.typography.font300,
            marginRight: $theme.sizing.scale1000,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/popover/clipping.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/popover/clipping.js#L25-L35)
```js
        <StatefulPopover
          initialState={{isOpen: true}}
          dismissOnEsc={false}
          dismissOnClickOutside={false}
          content={() => (
            <Paragraph3
              $as="div"
              padding="scale500"
              maxWidth="200px"
            >
              Popover will reposition itself to avoid being clipped!
              <br />
              <Label3> Try scrolling in this box...</Label3>
            </Paragraph3>
          )}
          placement={PLACEMENT.top}
        >
          <Button>Click Me</Button>
        </StatefulPopover>
      </div>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/popover/clipping.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/popover/clipping.tsx#L24-L30)
```tsx
        <StatefulPopover
          initialState={{isOpen: true}}
          dismissOnEsc={false}
          dismissOnClickOutside={false}
          content={() => (
            <Paragraph3 padding="scale500" maxWidth="200px">
              Popover will reposition itself to avoid being clipped!
              <br />
              <Label3> Try scrolling in this box...</Label3>
            </Paragraph3>
          )}
          placement={PLACEMENT.top}
        >
          <Button>Click Me</Button>
        </StatefulPopover>
      </div>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/popover/dismiss.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/popover/dismiss.js#L19-L28)
```js
    <StatefulPopover
      dismissOnEsc={false}
      dismissOnClickOutside={false}
      accessibilityType={'tooltip'}
      content={({close}) => (
        <div className={contentCx}>
          <Paragraph3 paddingBottom="scale400">
            content render prop is passed a <code>close()</code>{' '}
            callback so it you can manually trigger popover close
            from within
          </Paragraph3>
          <Button onClick={close}>Dismiss</Button>
        </div>
      )}
    >
      <Button>Click Me</Button>
    </StatefulPopover>
  );
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/popover/dismiss.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/popover/dismiss.tsx#L18-L27)
```tsx
    <StatefulPopover
      dismissOnEsc={false}
      dismissOnClickOutside={false}
      accessibilityType={'tooltip'}
      content={({close}) => (
        <div className={contentCx}>
          <Paragraph3 paddingBottom="scale400">
            content render prop is passed a <code>close()</code>{' '}
            callback so it you can manually trigger popover close
            from within
          </Paragraph3>
          <Button onClick={close}>Dismiss</Button>
        </div>
      )}
    >
      <Button>Click Me</Button>
    </StatefulPopover>
  );
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/radio/overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/radio/overrides.js#L16-L20)
```js
      value={value}
    >
      <Radio
        overrides={{
          Label: ({$value}) => (
            <Paragraph3>
              Custom label for value: {$value}
            </Paragraph3>
          ),
          RadioMarkOuter: {
            style: ({$theme}) => ({
              backgroundColor: $theme.colors.positive,
            }),
          },
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/radio/overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/radio/overrides.js#L33-L37)
```js
        First
      </Radio>
      <Radio
        overrides={{
          Label: ({$value}) => (
            <Paragraph3>
              Custom label for value: {$value}
            </Paragraph3>
          ),
          RadioMarkOuter: {
            style: ({$theme}) => ({
              backgroundColor: $theme.colors.positive,
            }),
          },
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/radio/overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/radio/overrides.js#L50-L54)
```js
        Second
      </Radio>
      <Radio
        overrides={{
          Label: ({$value}) => (
            <Paragraph3>
              Custom label for value: {$value}
            </Paragraph3>
          ),
          RadioMarkOuter: {
            style: ({$theme}) => ({
              backgroundColor: $theme.colors.positive,
            }),
          },
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/radio/overrides.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/radio/overrides.tsx#L15-L19)
```tsx
      value={value}
    >
      <Radio
        overrides={{
          Label: ({$value}) => (
            <Paragraph3>
              Custom label for value: {$value}
            </Paragraph3>
          ),
          RadioMarkOuter: {
            style: ({$theme}) => ({
              backgroundColor: $theme.colors.positive,
            }),
          },
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/radio/overrides.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/radio/overrides.tsx#L32-L36)
```tsx
        First
      </Radio>
      <Radio
        overrides={{
          Label: ({$value}) => (
            <Paragraph3>
              Custom label for value: {$value}
            </Paragraph3>
          ),
          RadioMarkOuter: {
            style: ({$theme}) => ({
              backgroundColor: $theme.colors.positive,
            }),
          },
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/radio/overrides.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/radio/overrides.tsx#L49-L53)
```tsx
        Second
      </Radio>
      <Radio
        overrides={{
          Label: ({$value}) => (
            <Paragraph3>
              Custom label for value: {$value}
            </Paragraph3>
          ),
          RadioMarkOuter: {
            style: ({$theme}) => ({
              backgroundColor: $theme.colors.positive,
            }),
          },
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/slider/overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/slider/overrides.js#L12-L14)
```js
    <Slider
      value={value}
      onChange={({value}) => value && setValue(value)}
      overrides={{
        InnerThumb: ({$value, $thumbIndex}) => (
          <React.Fragment>{$value[$thumbIndex]}</React.Fragment>
        ),
        ThumbValue: () => null,
        Thumb: {
          style: () => ({
            height: '36px',
            width: '36px',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/slider/overrides.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/slider/overrides.tsx#L11-L13)
```tsx
    <Slider
      value={value}
      onChange={({value}) => setValue(value)}
      overrides={{
        InnerThumb: ({$value, $thumbIndex}) => (
          <React.Fragment>{$value[$thumbIndex]}</React.Fragment>
        ),
        ThumbValue: () => null,
        Thumb: {
          style: () => ({
            height: '36px',
            width: '36px',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ActionButtonUsage" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/snackbar/action-button-usage.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/snackbar/action-button-usage.js#L30-L30)
```js
      </div>

      <div className={css({paddingBottom: '24px'})}>
        <SnackbarElement
          startEnhancer={({size}) => <Delete size={size} />}
          message="The address was removed from your saved places"
          actionMessage="Undo"
          actionOnClick={() => {
            // handle undo
          }}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ActionButtonUsage" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/snackbar/action-button-usage.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/snackbar/action-button-usage.js#L42-L42)
```js
      </div>

      <div className={css({paddingBottom: '24px'})}>
        <SnackbarElement
          startEnhancer={({size}) => <Check size={size} />}
          message="The address was added to your saved places"
          actionMessage="See list"
          actionOnClick={() => {
            // handle see list
          }}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ActionButtonUsage" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/snackbar/action-button-usage.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/snackbar/action-button-usage.js#L54-L54)
```js
      </div>

      <div className={css({paddingBottom: '24px'})}>
        <SnackbarElement
          startEnhancer={({size}) => <DeleteAlt size={size} />}
          message="Your address wasn't added"
          actionMessage="Try again"
          actionOnClick={() => {
            // handle try again
          }}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ActionButtonUsage" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/snackbar/action-button-usage.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/snackbar/action-button-usage.tsx#L26-L26)
```tsx
      </div>

      <div className={css({paddingBottom: '24px'})}>
        <SnackbarElement
          startEnhancer={({size}) => <Delete size={size} />}
          message="The address was removed from your saved places"
          actionMessage="Undo"
          actionOnClick={() => {
            // handle undo
          }}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ActionButtonUsage" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/snackbar/action-button-usage.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/snackbar/action-button-usage.tsx#L38-L38)
```tsx
      </div>

      <div className={css({paddingBottom: '24px'})}>
        <SnackbarElement
          startEnhancer={({size}) => <Check size={size} />}
          message="The address was added to your saved places"
          actionMessage="See list"
          actionOnClick={() => {
            // handle see list
          }}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ActionButtonUsage" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/snackbar/action-button-usage.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/snackbar/action-button-usage.tsx#L50-L50)
```tsx
      </div>

      <div className={css({paddingBottom: '24px'})}>
        <SnackbarElement
          startEnhancer={({size}) => <DeleteAlt size={size} />}
          message="Your address wasn't added"
          actionMessage="Try again"
          actionOnClick={() => {
            // handle try again
          }}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Child" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/snackbar/line-lengths.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/snackbar/line-lengths.js#L23-L23)
```js
      <Button
        onClick={() =>
          enqueue({
            message: 'Copied to clipboard',
            startEnhancer: ({size}) => <Check size={size} />,
          })
        }
      >
        one line
      </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Child" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/snackbar/line-lengths.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/snackbar/line-lengths.js#L39-L39)
```js
          enqueue(
            {
              message:
                '1455 Market Street San Francisco was set as your default work address',
              startEnhancer: ({size}) => <Check size={size} />,
            },
            DURATION.medium,
          )
        }
      >
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Child" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/snackbar/line-lengths.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/snackbar/line-lengths.tsx#L21-L21)
```tsx
      <Button
        onClick={() =>
          enqueue({
            message: 'Copied to clipboard',
            startEnhancer: ({size}) => <Check size={size} />,
          })
        }
      >
        one line
      </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Child" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/snackbar/line-lengths.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/snackbar/line-lengths.tsx#L37-L37)
```tsx
          enqueue(
            {
              message:
                '1455 Market Street San Francisco was set as your default work address',
              startEnhancer: ({size}) => <Check size={size} />,
            },
            DURATION.medium,
          )
        }
      >
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/table/virtual-horizontal-scroll.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/table/virtual-horizontal-scroll.js#L72-L88)
```js
                width={WIDTH}
                rowCount={DATA.length}
                rowHeight={cache.rowHeight}
                deferredMeasurementCache={cache}
                rowRenderer={({index, key, parent, style}) => (
                  <CellMeasurer
                    cache={cache}
                    columnIndex={0}
                    key={key}
                    parent={parent}
                    rowIndex={index}
                  >
                    <StyledRow role="row" key={key} style={style}>
                      {DATA[index].map((cell, index) => (
                        <StyledCell role="gridcell" key={index}>
                          {cell}
                        </StyledCell>
                      ))}
                    </StyledRow>
                  </CellMeasurer>
                )}
              />
            )}
          </AutoSizer>
        </div>
      </StyledTable>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/table/virtual-horizontal-scroll.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/table/virtual-horizontal-scroll.tsx#L70-L86)
```tsx
                width={WIDTH}
                rowCount={DATA.length}
                rowHeight={cache.rowHeight}
                deferredMeasurementCache={cache}
                rowRenderer={({index, key, parent, style}) => (
                  <CellMeasurer
                    cache={cache}
                    columnIndex={0}
                    key={key}
                    parent={parent}
                    rowIndex={index}
                  >
                    <StyledRow role="row" key={key} style={style}>
                      {DATA[index].map((cell, index) => (
                        <StyledCell role="gridcell" key={index}>
                          {cell}
                        </StyledCell>
                      ))}
                    </StyledRow>
                  </CellMeasurer>
                )}
              />
            )}
          </AutoSizer>
        </div>
      </StyledTable>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/table/virtual.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/table/virtual.js#L70-L86)
```js
                width={width}
                rowCount={DATA.length}
                rowHeight={cache.rowHeight}
                deferredMeasurementCache={cache}
                rowRenderer={({index, key, parent, style}) => (
                  <CellMeasurer
                    cache={cache}
                    columnIndex={0}
                    key={key}
                    parent={parent}
                    rowIndex={index}
                  >
                    <StyledRow role="row" key={key} style={style}>
                      {DATA[index].map((cell, index) => (
                        <StyledCell role="gridcell" key={index}>
                          {cell}
                        </StyledCell>
                      ))}
                    </StyledRow>
                  </CellMeasurer>
                )}
              />
            )}
          </AutoSizer>
        </div>
      </StyledTable>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/table/virtual.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/table/virtual.tsx#L68-L84)
```tsx
                width={width}
                rowCount={DATA.length}
                rowHeight={cache.rowHeight}
                deferredMeasurementCache={cache}
                rowRenderer={({index, key, parent, style}) => (
                  <CellMeasurer
                    cache={cache}
                    columnIndex={0}
                    key={key}
                    parent={parent}
                    rowIndex={index}
                  >
                    <StyledRow role="row" key={key} style={style}>
                      {DATA[index].map((cell, index) => (
                        <StyledCell role="gridcell" key={index}>
                          {cell}
                        </StyledCell>
                      ))}
                    </StyledRow>
                  </CellMeasurer>
                )}
              />
            )}
          </AutoSizer>
        </div>
      </StyledTable>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Row" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/table-grid/nested.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/table-grid/nested.js#L224-L237)
```js
          {row[5]}
        </div>
        <StatefulPopover
          placement={PLACEMENT.bottomLeft}
          content={({close}) => (
            <StatefulMenu
              items={[
                {label: 'Item One'},
                {label: 'Item Two'},
                {label: 'Item Three'},
                {label: 'Item Four'},
              ]}
              onItemSelect={() => close()}
              overrides={{
                List: {style: {height: '144px', width: '138px'}},
              }}
            />
          )}
        >
          <Button shape="square" kind="minimal" size="compact">
            <Overflow size={18} />
          </Button>
        </StatefulPopover>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/use-styletron/overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/use-styletron/overrides.js#L12-L26)
```js
  return (
    <Button
      disabled
      overrides={{
        BaseButton: props => {
          return (
            <button
              disabled={props.disabled}
              className={css({
                background: props.$disabled
                  ? theme.colors.negative400
                  : theme.colors.warning400,
                color: theme.colors.backgroundPrimary,
              })}
            >
              {props.children}
            </button>
          );
        },
      }}
    >
      this is a BaseButton
    </Button>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/use-styletron/overrides.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/use-styletron/overrides.tsx#L11-L25)
```tsx
  return (
    <Button
      disabled
      overrides={{
        BaseButton: props => {
          return (
            <button
              disabled={props.disabled}
              className={css({
                background: props.$disabled
                  ? theme.colors.negative400
                  : theme.colors.warning400,
                color: theme.colors.backgroundPrimary,
              })}
            >
              {props.children}
            </button>
          );
        },
      }}
    >
      this is a BaseButton
    </Button>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/app-nav-bar/__tests__/app-nav-bar-map-item-to-node.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/app-nav-bar/__tests__/app-nav-bar-map-item-to-node.scenario.js#L41-L49)
```js
    <AppNavBar
      title="map item to node"
      mainItems={mainItems}
      userItems={userItems}
      mapItemToNode={item => (
        <div
          className={css({
            border: `dashed 2px ${item.info ? item.info.color : 'green'}`,
          })}
        >
          {item.info ? `color: ${item.info.color}` : item.label}
        </div>
      )}
      onMainItemSelect={handleMainItemSelect}
    />
  );
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/app-nav-bar/__tests__/app-nav-bar-overrides.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/app-nav-bar/__tests__/app-nav-bar-overrides.scenario.js#L82-L84)
```js
        SecondaryMenuContainer: {style: {border: 'dashed 2px lightskyblue'}},
        SideMenuButton: {
          props: {
            overrides: {
              BaseButton(props) {
                return <button {...props}>menu</button>;
              },
            },
          },
        },
        UserMenuProfileListItem: {style: {border: 'solid 2px red'}},
        UserProfileInfoContainer: {style: {border: 'solid 2px blue'}},
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/button/__tests__/button-shapes.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/button/__tests__/button-shapes.scenario.js#L30-L30)
```js
      <Button shape={SHAPE.pill} size={SIZE.large}>
        Label
      </Button>
      <Button
        startEnhancer={() => <Upload />}
        endEnhancer={() => <ChevronRight />}
        shape={SHAPE.pill}
        size={SIZE.large}
      >
        Label
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/button/__tests__/button-shapes.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/button/__tests__/button-shapes.scenario.js#L31-L31)
```js
        Label
      </Button>
      <Button
        startEnhancer={() => <Upload />}
        endEnhancer={() => <ChevronRight />}
        shape={SHAPE.pill}
        size={SIZE.large}
      >
        Label
      </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/button/__tests__/button-shapes.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/button/__tests__/button-shapes.scenario.js#L40-L40)
```js
      </Button>
      <br />
      <Button shape={SHAPE.pill}>Label</Button>
      <Button
        startEnhancer={() => <Upload />}
        endEnhancer={() => <ChevronRight />}
        shape={SHAPE.pill}
      >
        Label
      </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/button/__tests__/button-shapes.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/button/__tests__/button-shapes.scenario.js#L41-L41)
```js
      <br />
      <Button shape={SHAPE.pill}>Label</Button>
      <Button
        startEnhancer={() => <Upload />}
        endEnhancer={() => <ChevronRight />}
        shape={SHAPE.pill}
      >
        Label
      </Button>
      <br />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/button/__tests__/button-shapes.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/button/__tests__/button-shapes.scenario.js#L51-L51)
```js
      <Button shape={SHAPE.pill} size={SIZE.compact}>
        Label
      </Button>
      <Button
        startEnhancer={() => <Upload />}
        endEnhancer={() => <ChevronRight />}
        shape={SHAPE.pill}
        size={SIZE.compact}
      >
        Label
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/button/__tests__/button-shapes.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/button/__tests__/button-shapes.scenario.js#L52-L52)
```js
        Label
      </Button>
      <Button
        startEnhancer={() => <Upload />}
        endEnhancer={() => <ChevronRight />}
        shape={SHAPE.pill}
        size={SIZE.compact}
      >
        Label
      </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/datepicker/__tests__/datepicker-range-multi-month.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/datepicker/__tests__/datepicker-range-multi-month.scenario.js#L25-L27)
```js
      clearable={true}
      overrides={{
        Day: {
          // eslint-disable-next-line react/display-name
          component: props => (
            <StyledDay data-highlighted={props.$isHighlighted} {...props} />
          ),
        },
        MonthYearSelectButton: {props: {'data-id': 'monthYearSelectButton'}},
        MonthYearSelectStatefulMenu: {
          props: {
            overrides: {List: {props: {'data-id': 'monthYearSelectMenu'}}},
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/helper/__tests__/helper-position.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/helper/__tests__/helper-position.scenario.js#L59-L61)
```js
              })}
            >
              <Helper
                placement={PLACEMENT[placement]}
                content={() => (
                  <div className={css({padding: '12px'})}>content</div>
                )}
                isOpen
                showArrow
              >
                <span>{placement}</span>
              </Helper>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/helper/__tests__/helper-with-steps.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/helper/__tests__/helper-with-steps.scenario.js#L60-L71)
```js
  return (
    <div className={css({backgroundColor: 'lightblue', padding: '48px'})}>
      <StatefulHelper
        placement={PLACEMENT.bottomLeft}
        content={({close}) => (
          <Content
            index={index}
            length={LENGTH}
            onPrev={handlePrev}
            onNext={handleNext}
            onFinish={() => {
              close();
              handleFinish();
            }}
          />
        )}
      >
        <span>click</span>
      </StatefulHelper>
    </div>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/icon/__tests__/icon-buttons.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/icon/__tests__/icon-buttons.scenario.js#L23-L23)
```js
      <br />
      <Button startEnhancer="hello">Start Enhancer</Button>
      <br />
      <br />
      <Button startEnhancer={() => <span>fn</span>}>Start Enhancer</Button>
      <br />
      <br />
      <Button startEnhancer={<span>node</span>}>Start Enhancer</Button>
      <br />
      <br />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/input/__tests__/input-before-after.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/input/__tests__/input-before-after.scenario.js#L21-L25)
```js
    <React.Fragment>
      <StatefulInput
        overrides={{
          // eslint-disable-next-line react/display-name
          Before: () => (
            <Block display="flex" alignItems="center" paddingLeft="scale500">
              <Search size="16px" />
            </Block>
          ),
        }}
        placeholder="Input with a Before component"
      />

      <br />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/input/__tests__/input-before-after.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/input/__tests__/input-before-after.scenario.js#L34-L38)
```js
      <br />
      <StatefulInput
        overrides={{
          // eslint-disable-next-line react/display-name
          After: () => (
            <Block display="flex" alignItems="center" paddingRight="scale500">
              <Search size="16px" />
            </Block>
          ),
        }}
        placeholder="Input with an After component"
      />
    </React.Fragment>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/input/__tests__/input-states.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/input/__tests__/input-states.scenario.js#L23-L27)
```js
        initialState={{value: 'Default'}}
        endEnhancer="00"
        overrides={{
          // eslint-disable-next-line react/display-name
          Before: () => (
            <Block display="flex" alignItems="center" paddingLeft="scale500">
              <Search size="18px" />
            </Block>
          ),
        }}
      />
      <br />
      <StatefulInput
        initialState={{value: 'Active'}}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/input/__tests__/input-states.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/input/__tests__/input-states.scenario.js#L38-L42)
```js
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        overrides={{
          // eslint-disable-next-line react/display-name
          Before: () => (
            <Block display="flex" alignItems="center" paddingLeft="scale500">
              <Search size="18px" />
            </Block>
          ),
        }}
      />
      <br />
      <StatefulInput
        initialState={{value: 'Positive'}}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/input/__tests__/input-states.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/input/__tests__/input-states.scenario.js#L52-L56)
```js
        endEnhancer="00"
        positive
        overrides={{
          // eslint-disable-next-line react/display-name
          Before: () => (
            <Block display="flex" alignItems="center" paddingLeft="scale500">
              <Search size="18px" />
            </Block>
          ),
        }}
      />
      <br />
      <StatefulInput
        initialState={{value: 'Error'}}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/input/__tests__/input-states.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/input/__tests__/input-states.scenario.js#L66-L70)
```js
        endEnhancer="00"
        error
        overrides={{
          // eslint-disable-next-line react/display-name
          Before: () => (
            <Block display="flex" alignItems="center" paddingLeft="scale500">
              <Search size="18px" />
            </Block>
          ),
        }}
      />
      <br />
      <StatefulInput
        initialState={{value: 'Disabled'}}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/input/__tests__/input-states.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/input/__tests__/input-states.scenario.js#L80-L84)
```js
        endEnhancer="00"
        disabled
        overrides={{
          // eslint-disable-next-line react/display-name
          Before: () => (
            <Block display="flex" alignItems="center" paddingLeft="scale500">
              <Search size="18px" />
            </Block>
          ),
        }}
      />
    </>
  );
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item-artwork-sizes.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item-artwork-sizes.scenario.js#L36-L44)
```js
        <ListItemLabel>Large Artwork</ListItemLabel>
      </ListItem>

      <ListItem
        artwork={() => (
          <div
            style={{
              backgroundColor: 'lightskyblue',
              width: '64px',
              height: '24px',
            }}
          />
        )}
        artworkSize={64}
      >
        <ListItemLabel>64px Artwork</ListItemLabel>
      </ListItem>

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item-artwork-sizes.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item-artwork-sizes.scenario.js#L51-L59)
```js
        <ListItemLabel>64px Artwork</ListItemLabel>
      </ListItem>

      <ListItem
        artwork={() => (
          <div
            style={{
              backgroundColor: 'lightskyblue',
              width: '96px',
              height: '24px',
            }}
          />
        )}
        artworkSize={96}
      >
        <ListItemLabel>96px Artwork</ListItemLabel>
      </ListItem>
    </div>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item-menu-adapter.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item-menu-adapter.scenario.js#L44-L44)
```js
                    {...props}
                    ref={ref}
                    artwork={props.item.icon}
                    artworkSize={ARTWORK_SIZES.LARGE}
                    endEnhancer={() => <ChevronRight />}
                  >
                    <ListItemLabel description={props.item.subtitle}>
                      {props.item.title}
                    </ListItemLabel>
                  </MenuAdapter>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L29-L33)
```js
        padding: '24px',
      }}
    >
      <ListItem
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L40-L44)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L50-L54)
```js
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L61-L65)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      {/* ---------------------------------------- */}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L73-L83)
```js

      {/* ---------------------------------------- */}

      <ListItem
        endEnhancer={() => (
          <React.Fragment>
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
            <div style={{width: '18px'}} />
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
          </React.Fragment>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L90-L100)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
        endEnhancer={() => (
          <React.Fragment>
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
            <div style={{width: '18px'}} />
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
          </React.Fragment>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L106-L116)
```js
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        endEnhancer={() => (
          <React.Fragment>
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
            <div style={{width: '18px'}} />
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
          </React.Fragment>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L123-L133)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <React.Fragment>
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
            <div style={{width: '18px'}} />
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
          </React.Fragment>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      {/* ---------------------------------------- */}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L140-L140)
```js
      </ListItem>

      {/* ---------------------------------------- */}

      <ListItem endEnhancer={() => <ChevronRight />}>
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L146-L146)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
        endEnhancer={() => <ChevronRight />}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem artwork={Search} endEnhancer={() => <ChevronRight />}>
        <ListItemLabel>Label</ListItemLabel>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L150-L150)
```js
        endEnhancer={() => <ChevronRight />}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem artwork={Search} endEnhancer={() => <ChevronRight />}>
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L156-L156)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => <ChevronRight />}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      {/* ---------------------------------------- */}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L163-L163)
```js
      </ListItem>

      {/* ---------------------------------------- */}

      <ListItem endEnhancer={() => <ListItemLabel>Label</ListItemLabel>}>
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L169-L169)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
        endEnhancer={() => <ListItemLabel>Label</ListItemLabel>}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L175-L175)
```js
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        endEnhancer={() => <ListItemLabel>Label</ListItemLabel>}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L182-L182)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => <ListItemLabel>Label</ListItemLabel>}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>

      {/* ---------------------------------------- */}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L205-L209)
```js

      {/* ---------------------------------------- */}

      <ListItem
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L216-L220)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L226-L230)
```js
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L237-L241)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>

      {/* ---------------------------------------- */}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L249-L259)
```js

      {/* ---------------------------------------- */}

      <ListItem
        endEnhancer={() => (
          <React.Fragment>
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
            <div style={{width: '18px'}} />
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
          </React.Fragment>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L266-L276)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
        endEnhancer={() => (
          <React.Fragment>
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
            <div style={{width: '18px'}} />
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
          </React.Fragment>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L282-L292)
```js
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        endEnhancer={() => (
          <React.Fragment>
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
            <div style={{width: '18px'}} />
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
          </React.Fragment>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L299-L309)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <React.Fragment>
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
            <div style={{width: '18px'}} />
            <Button shape="round" size="compact" kind="secondary">
              <Check />
            </Button>
          </React.Fragment>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>

      {/* ---------------------------------------- */}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L316-L316)
```js
      </ListItem>

      {/* ---------------------------------------- */}

      <ListItem endEnhancer={() => <ChevronRight />}>
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L322-L322)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
        endEnhancer={() => <ChevronRight />}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem artwork={Search} endEnhancer={() => <ChevronRight />}>
        <ListItemLabel description="description">Label</ListItemLabel>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L326-L326)
```js
        endEnhancer={() => <ChevronRight />}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem artwork={Search} endEnhancer={() => <ChevronRight />}>
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L332-L332)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => <ChevronRight />}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>

      {/* ---------------------------------------- */}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L340-L342)
```js

      {/* ---------------------------------------- */}

      <ListItem
        endEnhancer={() => (
          <ListItemLabel description="description">Label</ListItemLabel>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L349-L351)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.SMALL}
        endEnhancer={() => (
          <ListItemLabel description="description">Label</ListItemLabel>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L357-L359)
```js
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        endEnhancer={() => (
          <ListItemLabel description="description">Label</ListItemLabel>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L366-L368)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => (
          <ListItemLabel description="description">Label</ListItemLabel>
        )}
      >
        <ListItemLabel description="description">Label</ListItemLabel>
      </ListItem>

      {/* ---------------------------------------- */}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L390-L390)
```js
      </ListItem>

      {/* ---------------------------------------- */}

      <ListItem endEnhancer={() => <ChevronRight />} sublist>
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>
      <ListItem artwork={Search} endEnhancer={() => <ChevronRight />} sublist>
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L393-L393)
```js

      <ListItem endEnhancer={() => <ChevronRight />} sublist>
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>
      <ListItem artwork={Search} endEnhancer={() => <ChevronRight />} sublist>
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.MEDIUM}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L399-L399)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.MEDIUM}
        endEnhancer={() => <ChevronRight />}
        sublist
      >
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L407-L407)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => <ChevronRight />}
        sublist
      >
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L416-L416)
```js

      {/* ---------------------------------------- */}

      <ListItem
        endEnhancer={() => <ListItemLabel sublist>Label</ListItemLabel>}
        sublist
      >
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L423-L423)
```js
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>
      <ListItem
        artwork={Search}
        endEnhancer={() => <ListItemLabel sublist>Label</ListItemLabel>}
        sublist
      >
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L431-L431)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.MEDIUM}
        endEnhancer={() => <ListItemLabel sublist>Label</ListItemLabel>}
        sublist
      >
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>
      <ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/list/__tests__/list-item.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/list/__tests__/list-item.scenario.js#L439-L439)
```js
      </ListItem>
      <ListItem
        artwork={Search}
        artworkSize={ARTWORK_SIZES.LARGE}
        endEnhancer={() => <ListItemLabel sublist>Label</ListItemLabel>}
        sublist
      >
        <ListItemLabel sublist>Label</ListItemLabel>
      </ListItem>

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/menu/__tests__/menu-child-in-popover.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/menu/__tests__/menu-child-in-popover.scenario.js#L91-L117)
```js
          Body: {
            style: {zIndex: 3},
          },
        }}
        content={() => (
          <NestedMenus>
            <StatefulMenu
              items={FILE}
              overrides={{
                List: {
                  style: {width: '300px', overflow: 'auto'},
                  props: {'data-e2e': 'parent-menu'},
                },
                Option: {
                  props: {
                    size: 'compact',
                    getChildMenu: item => {
                      if (item.label === OPEN_RECENT) {
                        return childMenu(RECENT_FILES);
                      }

                      if (item.label === NEW_BREAKPOINT) {
                        return childMenu(BREAKPOINTS);
                      }
                    },
                  },
                },
              }}
            />
          </NestedMenus>
        )}
      >
        <button>click</button>
      </StatefulPopover>
      <Overlay />
    </React.Fragment>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/menu/__tests__/menu-virtualized.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/menu/__tests__/menu-virtualized.scenario.js#L37-L53)
```js
            role={props.role}
            height={500}
            rowCount={props.children.length}
            rowHeight={36}
            rowRenderer={({index, key, style}) => (
              <OptionList
                key={key}
                style={style}
                {...children[index].props}
                overrides={{
                  ListItem: {
                    style: {
                      paddingTop: 0,
                      paddingBottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                    },
                  },
                }}
              />
            )}
            width={width}
          />
        )}
      </AutoSizer>
    </Container>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/popover/__tests__/popover-focus-loop.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/popover/__tests__/popover-focus-loop.scenario.js#L24-L29)
```js
  return (
    <StatefulPopover
      focusLock
      triggerType="hover"
      content={() => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        <div data-e2e="content" tabIndex={0}>
          hello
        </div>
      )}
    >
      <button>click</button>
    </StatefulPopover>
  );
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/popover/__tests__/popover-position.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/popover/__tests__/popover-position.scenario.js#L58-L60)
```js
              })}
            >
              <Popover
                placement={PLACEMENT[placement]}
                content={() => (
                  <div className={css({padding: '12px'})}>content</div>
                )}
                isOpen
                showArrow
              >
                <span>{placement}</span>
              </Popover>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/popover/__tests__/popover-reposition.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/popover/__tests__/popover-reposition.scenario.js#L23-L35)
```js
    <React.Fragment>
      <div className={css({display: 'flex', justifyContent: 'center'})}>
        <StatefulPopover
          accessibilityType={'tooltip'}
          content={() => (
            <div id="e2e-popover">
              <button
                id="e2e-update"
                className={css({marginRight: '8px'})}
                type="button"
                onClick={() => setExpanded(s => !s)}
              >
                update
              </button>
              {expanded ? <span id="e2e-expanded">hello world!</span> : 'hello'}
            </div>
          )}
          triggerType={TRIGGER_TYPE.click}
          placement={PLACEMENT.bottom}
        >
          <Button
            overrides={{
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SelectInPopover" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/popover/__tests__/popover-select.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/popover/__tests__/popover-select.scenario.js#L22-L41)
```js
      <div data-e2e="outside-popover">
        Element outside of the popover to click on
      </div>
      <StatefulPopover
        content={() => {
          return (
            <div ref={contentRef}>
              <StatefulSelect
                options={[
                  {id: 'AliceBlue', color: '#F0F8FF'},
                  {id: 'AntiqueWhite', color: '#FAEBD7'},
                  {id: 'Aqua', color: '#00FFFF'},
                  {id: 'Aquamarine', color: '#7FFFD4'},
                  {id: 'Azure', color: '#F0FFFF'},
                  {id: 'Beige', color: '#F5F5DC'},
                ]}
                overrides={{ValueContainer: {props: {'data-id': 'selected'}}}}
                labelKey="id"
                valueKey="color"
                placeholder="Start searching"
              />
            </div>
          );
        }}
        accessibilityType={'tooltip'}
      >
        <Button>Open</Button>
      </StatefulPopover>
    </>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ProgressStepsContainer" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/progress-steps/__tests__/progress-step-overrides.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/progress-steps/__tests__/progress-step-overrides.scenario.js#L23-L25)
```js
      <Step
        title="Create Account"
        overrides={{
          Title: {
            component: function TitleOverride() {
              return <div>TITLE OVERRIDE</div>;
            },
          },
        }}
      >
        <div className={useCss({...theme.typography.font400})}>
          Here is some step content
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/snackbar/__tests__/snackbar-element-overrides.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/snackbar/__tests__/snackbar-element-overrides.scenario.js#L22-L22)
```js
    <div style={{margin: '16px'}}>
      <SnackbarElement
        focus={false}
        message="09.06.2020.CSV was uploaded"
        startEnhancer={({size}) => <Upload size={size} />}
        overrides={{
          Root: {style: {border: 'solid 2px red'}},
          Content: {style: {border: 'solid 2px blue'}},
          StartEnhancerContainer: {style: {border: 'solid 2px green'}},
          Message: {style: {border: 'solid 2px orange'}},
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/snackbar/__tests__/snackbar-element.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/snackbar/__tests__/snackbar-element.scenario.js#L35-L35)
```js

      <SnackbarElement
        progress
        // startEnhancer takes precedence over progress
        startEnhancer={({size}) => <Upload size={size} />}
        message="09.06.2020.CSV was uploaded"
        focus={false}
      />

      <div className={css({height: '36px'})} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/snackbar/__tests__/snackbar-element.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/snackbar/__tests__/snackbar-element.scenario.js#L44-L44)
```js
      <div className={css({height: '36px'})} />

      <SnackbarElement
        message="09.06.2020.CSV was uploaded"
        startEnhancer={({size}) => <Upload size={size} />}
        actionMessage="Show in Finder"
        actionOnClick={event => console.log(event)}
        focus={false}
      />

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Child" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/snackbar/__tests__/snackbar-provider-overrides.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/snackbar/__tests__/snackbar-provider-overrides.scenario.js#L25-L27)
```js
      <button
        onClick={() =>
          enqueue({
            message: '09.06.2020.CSV was uploaded',
            startEnhancer: function StartEnhancer({size}) {
              return <Upload size={size} />;
            },
            actionMessage: 'Show in Finder',
          })
        }
      >
        enqueue provider overrides
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Child" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/snackbar/__tests__/snackbar-provider-overrides.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/snackbar/__tests__/snackbar-provider-overrides.scenario.js#L39-L41)
```js
      <button
        onClick={() =>
          enqueue({
            message: '09.06.2020.CSV was uploaded',
            startEnhancer: function StartEnhancer({size}) {
              return <Upload size={size} />;
            },
            actionMessage: 'Show in Finder',
            overrides: {
              Message: {style: {border: 'dotted 2px orange'}},
              ActionButtonContainer: {style: {border: 'dotted 2px yellow'}},
            },
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/tabs-motion/__tests__/tabs-motion-artwork.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/tabs-motion/__tests__/tabs-motion-artwork.scenario.js#L24-L24)
```js
    <Tabs
      activeKey={activeKey}
      onChange={({activeKey}) => setActiveKey(activeKey)}
    >
      <Tab title="Robot" artwork={props => <ArrowUp {...props} />}>
        <Button kind={KIND.secondary}>🤖</Button>
      </Tab>
      <Tab title="Monster" artwork={props => <ArrowRight {...props} />}>
        <Button kind={KIND.secondary}>👺</Button>
      </Tab>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/tabs-motion/__tests__/tabs-motion-artwork.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/tabs-motion/__tests__/tabs-motion-artwork.scenario.js#L27-L27)
```js
    >
      <Tab title="Robot" artwork={props => <ArrowUp {...props} />}>
        <Button kind={KIND.secondary}>🤖</Button>
      </Tab>
      <Tab title="Monster" artwork={props => <ArrowRight {...props} />}>
        <Button kind={KIND.secondary}>👺</Button>
      </Tab>
      <Tab title="Watermelon" artwork={props => <ArrowDown {...props} />}>
        <Button kind={KIND.secondary}>🍉</Button>
      </Tab>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/tabs-motion/__tests__/tabs-motion-artwork.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/tabs-motion/__tests__/tabs-motion-artwork.scenario.js#L30-L30)
```js
      </Tab>
      <Tab title="Monster" artwork={props => <ArrowRight {...props} />}>
        <Button kind={KIND.secondary}>👺</Button>
      </Tab>
      <Tab title="Watermelon" artwork={props => <ArrowDown {...props} />}>
        <Button kind={KIND.secondary}>🍉</Button>
      </Tab>
      <Tab title="Dragon" artwork={props => <ArrowLeft {...props} />}>
        <Button kind={KIND.secondary}>🐲</Button>
      </Tab>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/tabs-motion/__tests__/tabs-motion-artwork.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/tabs-motion/__tests__/tabs-motion-artwork.scenario.js#L33-L33)
```js
      </Tab>
      <Tab title="Watermelon" artwork={props => <ArrowDown {...props} />}>
        <Button kind={KIND.secondary}>🍉</Button>
      </Tab>
      <Tab title="Dragon" artwork={props => <ArrowLeft {...props} />}>
        <Button kind={KIND.secondary}>🐲</Button>
      </Tab>
    </Tabs>
  );
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/tabs-motion/__tests__/tabs-motion-rtl-artwork.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/tabs-motion/__tests__/tabs-motion-rtl-artwork.scenario.js#L27-L27)
```js
        <Tabs
          activeKey={activeKey}
          onChange={({activeKey}) => setActiveKey(activeKey)}
        >
          <Tab title="Robot" artwork={props => <ArrowUp {...props} />}>
            <Button kind={KIND.secondary}>🤖</Button>
          </Tab>
          <Tab title="Monster" artwork={props => <ArrowRight {...props} />}>
            <Button kind={KIND.secondary}>👺</Button>
          </Tab>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/tabs-motion/__tests__/tabs-motion-rtl-artwork.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/tabs-motion/__tests__/tabs-motion-rtl-artwork.scenario.js#L30-L30)
```js
        >
          <Tab title="Robot" artwork={props => <ArrowUp {...props} />}>
            <Button kind={KIND.secondary}>🤖</Button>
          </Tab>
          <Tab title="Monster" artwork={props => <ArrowRight {...props} />}>
            <Button kind={KIND.secondary}>👺</Button>
          </Tab>
          <Tab title="Watermelon" artwork={props => <ArrowDown {...props} />}>
            <Button kind={KIND.secondary}>🍉</Button>
          </Tab>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/tabs-motion/__tests__/tabs-motion-rtl-artwork.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/tabs-motion/__tests__/tabs-motion-rtl-artwork.scenario.js#L33-L33)
```js
          </Tab>
          <Tab title="Monster" artwork={props => <ArrowRight {...props} />}>
            <Button kind={KIND.secondary}>👺</Button>
          </Tab>
          <Tab title="Watermelon" artwork={props => <ArrowDown {...props} />}>
            <Button kind={KIND.secondary}>🍉</Button>
          </Tab>
          <Tab title="Dragon" artwork={props => <ArrowLeft {...props} />}>
            <Button kind={KIND.secondary}>🐲</Button>
          </Tab>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/src/tabs-motion/__tests__/tabs-motion-rtl-artwork.scenario.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/src/tabs-motion/__tests__/tabs-motion-rtl-artwork.scenario.js#L36-L36)
```js
          </Tab>
          <Tab title="Watermelon" artwork={props => <ArrowDown {...props} />}>
            <Button kind={KIND.secondary}>🍉</Button>
          </Tab>
          <Tab title="Dragon" artwork={props => <ArrowLeft {...props} />}>
            <Button kind={KIND.secondary}>🐲</Button>
          </Tab>
        </Tabs>
      </div>
    </ThemeProvider>
```
