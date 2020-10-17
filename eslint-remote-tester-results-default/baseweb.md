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
- Message: `Declare this component outside parent component "Scenario" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it.`
- Path: `uber/baseweb/documentation-site/examples/breadcrumbs/pseudo.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/breadcrumbs/pseudo.js#L24-L24)
```js
          };
        },
      },
      Separator: {
        component: () => null,
      },
    }}
  >
    <Link href="#pseudo-parent">Parent Page</Link>
    <Link href="#pseudo-subparent">Sub-Parent Page</Link>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `uber/baseweb/documentation-site/examples/breadcrumbs/pseudo.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/breadcrumbs/pseudo.tsx#L23-L23)
```tsx
          };
        },
      },
      Separator: {
        component: () => null,
      },
    }}
  >
    <Link href="#pseudo-parent">Parent Page</Link>
    <Link href="#pseudo-subparent">Sub-Parent Page</Link>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/dropdown.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/dropdown.js#L27-L35)
```js
export default () => (
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/dropdown.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/dropdown.js#L37-L37)
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

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/dropdown.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/dropdown.tsx#L26-L34)
```tsx
export default () => (
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/dropdown.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/dropdown.tsx#L36-L36)
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

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/with-enhancers.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/with-enhancers.js#L10-L10)
```js

export default () => (
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/with-enhancers.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/with-enhancers.js#L15-L15)
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/with-enhancers.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/with-enhancers.tsx#L8-L8)
```tsx

export default () => (
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button/with-enhancers.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button/with-enhancers.tsx#L13-L13)
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.js#L9-L9)
```js
import Upload from 'baseui/icon/upload.js';

export default () => (
  <ButtonGroup>
    <Button startEnhancer={() => <Upload size={24} />}>
      Label
    </Button>
    <Button startEnhancer={() => <Upload size={24} />}>
      Label
    </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.js#L12-L12)
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.js#L15-L15)
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

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.tsx#L8-L8)
```tsx
import {Upload} from 'baseui/icon';

export default () => (
  <ButtonGroup>
    <Button startEnhancer={() => <Upload size={24} />}>
      Label
    </Button>
    <Button startEnhancer={() => <Upload size={24} />}>
      Label
    </Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.tsx#L11-L11)
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/button-group/enhancer.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/button-group/enhancer.tsx#L14-L14)
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

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/list/menu-adapter.js#L36-L50)
```js
        Option: {
          props: {
            overrides: {
              ListItem: {
                component: React.forwardRef((props, ref) => (
                  <MenuAdapter
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
                    </ListItemLabel>
                  </MenuAdapter>
                )),
              },
            },
          },
        },
      }}
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/overrides/component.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/overrides/component.tsx#L7-L7)
```tsx

export default () => (
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/pagination/overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/pagination/overrides.js#L21-L23)
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `uber/baseweb/documentation-site/examples/pagination/overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/pagination/overrides.js#L26-L28)
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
};
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
};
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it.`
- Path: `uber/baseweb/documentation-site/examples/slider/overrides.js`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/slider/overrides.js#L15-L15)
```js
      overrides={{
        InnerThumb: ({$value, $thumbIndex}) => (
          <React.Fragment>{$value[$thumbIndex]}</React.Fragment>
        ),
        ThumbValue: () => null,
        Thumb: {
          style: () => ({
            height: '36px',
            width: '36px',
            display: 'flex',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it.`
- Path: `uber/baseweb/documentation-site/examples/slider/overrides.tsx`
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/slider/overrides.tsx#L14-L14)
```tsx
      overrides={{
        InnerThumb: ({$value, $thumbIndex}) => (
          <React.Fragment>{$value[$thumbIndex]}</React.Fragment>
        ),
        ThumbValue: () => null,
        Thumb: {
          style: () => ({
            height: '36px',
            width: '36px',
            display: 'flex',
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- [Link](https://github.com/uber/baseweb/blob/HEAD/documentation-site/examples/table-grid/nested.js#L221-L234)
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
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
