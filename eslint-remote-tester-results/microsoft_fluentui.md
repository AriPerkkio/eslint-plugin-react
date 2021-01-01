## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DatepickerCellExample" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `microsoft/fluentui/packages/fluentui/docs/src/examples/components/Datepicker/Slots/DatepickerCellExample.shorthand.tsx`
- [Link](https://github.com/microsoft/fluentui/blob/HEAD/packages/fluentui/docs/src/examples/components/Datepicker/Slots/DatepickerCellExample.shorthand.tsx#L10-L15)
```tsx
    <Datepicker
      today={new Date(2020, 8, 12, 0, 0, 0, 0)}
      calendar={{
        calendarCell: {
          children: (ComponentType, props) =>
            props.today ? (
              <Tooltip content="TODAY!" trigger={<ComponentType {...props} />} />
            ) : (
              <ComponentType {...props} />
            ),
        },
      }}
    />
  );
};
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DatepickerHeaderCellExample" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `microsoft/fluentui/packages/fluentui/docs/src/examples/components/Datepicker/Slots/DatepickerHeaderCellExample.shorthand.tsx`
- [Link](https://github.com/microsoft/fluentui/blob/HEAD/packages/fluentui/docs/src/examples/components/Datepicker/Slots/DatepickerHeaderCellExample.shorthand.tsx#L10-L12)
```tsx
    <Datepicker
      today={new Date(2020, 8, 12, 0, 0, 0, 0)}
      calendar={{
        calendarHeaderCell: {
          children: (ComponentType, props) => (
            <Tooltip content={props['aria-label']} trigger={<ComponentType {...props} />} />
          ),
        },
      }}
    />
  );
};
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DatepickerHeaderExample" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `microsoft/fluentui/packages/fluentui/docs/src/examples/components/Datepicker/Slots/DatepickerHeaderExample.shorthand.tsx`
- [Link](https://github.com/microsoft/fluentui/blob/HEAD/packages/fluentui/docs/src/examples/components/Datepicker/Slots/DatepickerHeaderExample.shorthand.tsx#L10-L28)
```tsx
    <Datepicker
      today={new Date(2020, 8, 12, 0, 0, 0, 0)}
      calendar={{
        header: {
          children: (ComponentType, props) => {
            return (
              <Flex space="between" hAlign="center">
                <Datepicker.CalendarHeaderAction
                  onClick={props.onPreviousClick}
                  direction="previous"
                  title={props.prevMonthAriaLabel}
                  disabled={props.disabledPreviousButton}
                />
                <Text content={props.label} styles={{ paddingTop: pxToRem(5) }} />
                <Datepicker.CalendarHeaderAction
                  onClick={props.onNextClick}
                  direction="next"
                  title={props.nextMonthAriaLabel}
                  disabled={props.disabledNextButton}
                />
              </Flex>
            );
          },
        },
      }}
    />
  );
};
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DialogExampleScroll" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `microsoft/fluentui/packages/fluentui/docs/src/examples/components/Dialog/Variations/DialogExampleScroll.shorthand.tsx`
- [Link](https://github.com/microsoft/fluentui/blob/HEAD/packages/fluentui/docs/src/examples/components/Dialog/Variations/DialogExampleScroll.shorthand.tsx#L10-L19)
```tsx
  <Dialog
    content={{
      content: (
        <>
          {_.times(10, i => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare, neque eget egestas fermentum,
              massa risus mollis orci, et ullamcorper purus turpis at risus. Fusce pharetra mollis sapien nec commodo.
              Quisque ut congue sem, vel aliquam augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Duis porttitor, nunc quis dapibus imperdiet, ligula sem egestas orci, sed volutpat
              ipsum felis vitae velit. Sed maximus egestas dui elementum aliquam. In hac habitasse platea dictumst.
              Proin maximus nibh velit, ut ornare dui mollis viverra.
            </p>
          ))}
        </>
      ),
      styles: {
        height: '500px',
        overflow: 'scroll',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RadioGroupCustomExample" or memoize it.`
- Path: `microsoft/fluentui/packages/fluentui/docs/src/examples/components/RadioGroup/Usage/RadioGroupCustomExample.shorthand.tsx`
- [Link](https://github.com/microsoft/fluentui/blob/HEAD/packages/fluentui/docs/src/examples/components/RadioGroup/Usage/RadioGroupCustomExample.shorthand.tsx#L26-L38)
```tsx
    {
      name: 'pizza',
      key: 'Custom',
      label: 'Choose your own',
      children: (Component, { key, ...props }) => {
        return (
          <Flex key={key} inline>
            <Component {...props} />
            <Input
              onFocus={() => setCheckedValue('custom')}
              input={{ tabIndex: checkedValue === 'custom' ? '0' : '-1' }}
              inline
              placeholder="flavour"
            />
          </Flex>
        );
      },
      value: 'custom',
      'aria-label': 'Press Tab to change flavour',
    },
  ];

```
