## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HeaderMenu" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `yahoo/athenz/ui/src/components/header/HeaderMenu.js`
- [Link](https://github.com/yahoo/athenz/blob/HEAD/ui/src/components/header/HeaderMenu.js#L119-L127)
```js

            <HeaderMenuUserDiv>
                <Menu
                    placement='bottom-end'
                    trigger={({ getTriggerProps, triggerRef }) => (
                        <Icon
                            icon={'help-circle'}
                            {...getTriggerProps({ innerRef: triggerRef })}
                            isLink
                            size={'25px'}
                            color={colors.white}
                        />
                    )}
                    triggerOn='click'
                >
                    <MenuDiv>{menuItems}</MenuDiv>
                </Menu>
            </HeaderMenuUserDiv>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HeaderMenu" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `yahoo/athenz/ui/src/components/header/HeaderMenu.js`
- [Link](https://github.com/yahoo/athenz/blob/HEAD/ui/src/components/header/HeaderMenu.js#L137-L145)
```js
            {props.headerDetails && props.headerDetails.userId && (
                <HeaderMenuUserDiv>
                    <Menu
                        placement='bottom-end'
                        trigger={({ getTriggerProps, triggerRef }) => (
                            <Icon
                                icon={'user-profile-circle'}
                                {...getTriggerProps({ innerRef: triggerRef })}
                                isLink
                                size={'25px'}
                                color={colors.white}
                            />
                        )}
                        triggerOn='click'
                    >
                        <UserDropDownDiv>
                            <UserDetailsDiv>
                                <UserHeaderDiv>
```
