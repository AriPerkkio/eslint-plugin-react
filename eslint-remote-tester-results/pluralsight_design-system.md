## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Story" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `pluralsight/design-system/packages/appframe/src/react/__stories__/examples.story.tsx`
- [Link](https://github.com/pluralsight/design-system/blob/HEAD/packages/appframe/src/react/__stories__/examples.story.tsx#L31-L34)
```tsx
    const topnavItems = useMemo(() => (mobile ? [] : MAIN_NAV_ITEMS), [mobile])

    return (
      <AppFrame
        topnav={({ openSidenav, closeSidenav, sidenavOpen }) => {
          const toggle = sidenavOpen ? closeSidenav : openSidenav
          return <TopNav items={topnavItems} onMobileMenuClick={toggle} />
        }}
        sidenav={({ visible }) => (
          <SideNav collapsed={!visible} sections={sidenavSections} />
        )}
      >
        <MockContent />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Story" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `pluralsight/design-system/packages/appframe/src/react/__stories__/examples.story.tsx`
- [Link](https://github.com/pluralsight/design-system/blob/HEAD/packages/appframe/src/react/__stories__/examples.story.tsx#L35-L37)
```tsx
        topnav={({ openSidenav, closeSidenav, sidenavOpen }) => {
          const toggle = sidenavOpen ? closeSidenav : openSidenav
          return <TopNav items={topnavItems} onMobileMenuClick={toggle} />
        }}
        sidenav={({ visible }) => (
          <SideNav collapsed={!visible} sections={sidenavSections} />
        )}
      >
        <MockContent />
      </AppFrame>
    )
  }
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Story" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `pluralsight/design-system/packages/appframe/src/react/__stories__/index.story.tsx`
- [Link](https://github.com/pluralsight/design-system/blob/HEAD/packages/appframe/src/react/__stories__/index.story.tsx#L37-L37)
```tsx
        <AppFrame
          onRequestSideNavClose={close}
          onRequestSideNavOpen={open}
          topnav={<TopNav onMobileMenuClick={toggle} />}
          sidenav={({ visible }) => <SideNav collapsed={!visible} />}
          sidenavOpen={sidenavOpen}
        >
          <MockContent />
        </AppFrame>
      )
```
