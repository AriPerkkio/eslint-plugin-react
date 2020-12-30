## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `ant-design/ant-design-pro-layout/docs/demo/api.tsx`
- [Link](https://github.com/ant-design/ant-design-pro-layout/blob/HEAD/docs/demo/api.tsx#L109-L114)
```tsx
        breakpoint={false}
        collapsed={collapsed}
        loading={loading}
        onCollapse={setCollapsed}
        rightContentRender={() =>
          right ? (
            <div>
              <Avatar src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4" />
            </div>
          ) : null
        }
        location={{
          pathname: '/welcome',
        }}
        pure={pure}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `ant-design/ant-design-pro-layout/docs/demo/api.tsx`
- [Link](https://github.com/ant-design/ant-design-pro-layout/blob/HEAD/docs/demo/api.tsx#L120-L120)
```tsx
        location={{
          pathname: '/welcome',
        }}
        pure={pure}
        footerRender={() => (footer ? <DefaultFooter /> : null)}
      >
        <PageContainer content="欢迎使用">Hello World</PageContainer>
      </ProLayout>
    </>
  );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `ant-design/ant-design-pro-layout/docs/demo/customizeMenu.tsx`
- [Link](https://github.com/ant-design/ant-design-pro-layout/blob/HEAD/docs/demo/customizeMenu.tsx#L20-L24)
```tsx
      >
        +1
      </Button>
      <ProLayout
        menuItemRender={(item, dom) => (
          <div>
            {index} {dom}
          </div>
        )}
        subMenuItemRender={(_, dom) => (
          <div>
            {index} {dom}
          </div>
        )}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `ant-design/ant-design-pro-layout/docs/demo/customizeMenu.tsx`
- [Link](https://github.com/ant-design/ant-design-pro-layout/blob/HEAD/docs/demo/customizeMenu.tsx#L25-L29)
```tsx
          <div>
            {index} {dom}
          </div>
        )}
        subMenuItemRender={(_, dom) => (
          <div>
            {index} {dom}
          </div>
        )}
        title="Remax"
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        menuHeaderRender={(logo, title) => (
          <div
            id="customize_menu_header"
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `ant-design/ant-design-pro-layout/docs/demo/customizeMenu.tsx`
- [Link](https://github.com/ant-design/ant-design-pro-layout/blob/HEAD/docs/demo/customizeMenu.tsx#L32-L42)
```tsx
          </div>
        )}
        title="Remax"
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        menuHeaderRender={(logo, title) => (
          <div
            id="customize_menu_header"
            onClick={() => {
              window.open('https://remaxjs.org/');
            }}
          >
            {logo}
            {title}
          </div>
        )}
        {...defaultProps}
        location={{
          pathname: '/welcome',
        }}
      >
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `ant-design/ant-design-pro-layout/docs/demo/footer.tsx`
- [Link](https://github.com/ant-design/ant-design-pro-layout/blob/HEAD/docs/demo/footer.tsx#L20-L28)
```tsx
    collapsed
    location={{
      pathname: '/welcome',
    }}
    footerRender={() => (
      <DefaultFooter
        links={[
          { key: 'test', title: 'layout', href: 'www.alipay.com' },
          { key: 'test2', title: 'layout2', href: 'www.alipay.com' },
        ]}
        copyright="这是一条测试文案"
      />
    )}
  >
    <PageContainer content="欢迎使用">Hello World</PageContainer>
  </ProLayout>
);

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `ant-design/ant-design-pro-layout/docs/demo/hideMenu.tsx`
- [Link](https://github.com/ant-design/ant-design-pro-layout/blob/HEAD/docs/demo/hideMenu.tsx#L16-L28)
```tsx
    location={{
      pathname: '/welcome',
    }}
    collapsed
    menuRender={(props, dom) => (
      <div
        style={{
          background: '#fff',
          boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
          transition: 'all 0.2s',
          overflow: 'hidden',
          width: props.collapsed ? 0 : props.siderWidth || 256,
        }}
      >
        {dom}
      </div>
    )}
  >
    <PageContainer content="欢迎使用">Hello World</PageContainer>
  </ProLayout>
);

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `ant-design/ant-design-pro-layout/docs/demo/materialMenu.tsx`
- [Link](https://github.com/ant-design/ant-design-pro-layout/blob/HEAD/docs/demo/materialMenu.tsx#L16-L43)
```tsx
    }}
    location={{
      pathname: '/welcome',
    }}
    menuRender={(props) => (
      <div
        style={{
          background: '#fff',
          boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
          transition: 'all 0.2s',
        }}
      >
        <List
          component="nav"
          style={{
            transition: 'all 0.2s',
            width: props.collapsed ? 80 : 256,
          }}
          aria-label="main mailbox folders"
        >
          <ListItem button>
            <ListItemText primary="welcome" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="one" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="two" />
          </ListItem>
        </List>
      </div>
    )}
  >
    <PageContainer content="欢迎使用">Hello World</PageContainer>
  </ProLayout>
);

```
