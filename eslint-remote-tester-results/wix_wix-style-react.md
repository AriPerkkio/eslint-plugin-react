## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "AutoCompleteWithAllProps" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/AutoComplete/test/AutoComplete.tsx`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/AutoComplete/test/AutoComplete.tsx#L114-L114)
```tsx
          overrideStyle: true,
        },
        { value: '-', id: '2' },
        {
          value: ({ selected, disabled, hovered }) => <div />,
          id: 3,
          disabled: true,
          linkTo: 'google.com',
          title: true,
          overrideStyle: true,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "AutoCompleteWithLabelWithAllProps" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/AutoCompleteWithLabel/test/AutoCompleteWithLabel.tsx`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/AutoCompleteWithLabel/test/AutoCompleteWithLabel.tsx#L51-L51)
```tsx
          overrideStyle: true,
        },
        { value: '-', id: '2' },
        {
          value: ({ selected, disabled, hovered }) => <div />,
          id: 3,
          disabled: true,
          linkTo: 'google.com',
          title: true,
          overrideStyle: true,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DropdownWithInputWithOptionsProps" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/Dropdown/test/Dropdown.tsx`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/Dropdown/test/Dropdown.tsx#L136-L136)
```tsx
          overrideStyle: true,
        },
        { value: '-', id: '2' },
        {
          value: ({ selected, disabled, hovered }) => <div />,
          id: 3,
          disabled: true,
          linkTo: 'google.com',
          title: true,
          overrideStyle: true,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DropdownLayoutWithAllProps" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/DropdownLayout/test/DropdownLayout.tsx`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/DropdownLayout/test/DropdownLayout.tsx#L64-L64)
```tsx
          label: 'label',
        },
        { value: '-', id: '2' },
        {
          value: ({ selected, disabled, hovered }) => <div />,
          id: 3,
          disabled: true,
          linkTo: 'google.com',
          title: true,
          overrideStyle: true,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "InputSuffix" or memoize it.`
- Path: `wix/wix-style-react/src/Input/InputSuffix.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/Input/InputSuffix.js#L40-L50)
```js
}) => {
  const suffixes = [
    {
      // Close Button
      component: key => (
        <div key={key} className={classes.clearButtonWrapper}>
          <CloseButton
            dataHook="input-clear-button"
            skin="standardFilled"
            size={clearButtonSize}
            onClick={onClear}
            className={classes.clearButton}
          />
        </div>
      ),
      isVisible: suffixRules.clearButton({ isClearButtonVisible }),
    },
    {
      // Status Indicator
      component: key => (
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "InputSuffix" or memoize it.`
- Path: `wix/wix-style-react/src/Input/InputSuffix.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/Input/InputSuffix.js#L55-L64)
```js
      isVisible: suffixRules.clearButton({ isClearButtonVisible }),
    },
    {
      // Status Indicator
      component: key => (
        <div key={key} className={classes.statusWrapper}>
          <StatusIndicator
            dataHook={dataHooks.status}
            status={status}
            message={statusMessage}
            tooltipPlacement={tooltipPlacement}
          />
        </div>
      ),
      isVisible: suffixRules.inputStatusSuffix({ status, disabled }),
    },
    {
      // Custom Suffix
      component: key =>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "InputSuffix" or memoize it.`
- Path: `wix/wix-style-react/src/Input/InputSuffix.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/Input/InputSuffix.js#L69-L76)
```js
      isVisible: suffixRules.inputStatusSuffix({ status, disabled }),
    },
    {
      // Custom Suffix
      component: key =>
        React.isValidElement(suffix) ? (
          React.cloneElement(suffix, { key })
        ) : (
          <div className={classes.suffix} key={key}>
            {suffix}
          </div>
        ),
      isVisible: suffixRules.customSuffix({ suffix }),
    },
    {
      // Dropdown Arrow
      component: key => (
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "InputSuffix" or memoize it.`
- Path: `wix/wix-style-react/src/Input/InputSuffix.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/Input/InputSuffix.js#L81-L91)
```js
      isVisible: suffixRules.customSuffix({ suffix }),
    },
    {
      // Dropdown Arrow
      component: key => (
        <div
          key={key}
          data-hook={dataHooks.menuArrow}
          className={classes.menuArrow}
          disabled={disabled}
          onClick={onIconClicked}
        >
          <DropDownArrow />
        </div>
      ),
      isVisible: suffixRules.menuArrow({ menuArrow }),
    },
  ].filter(isFixVisible);

  return (
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "InputWithOptionsWithAllProps" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/InputWithOptions/test/InputWithOptions.tsx`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/InputWithOptions/test/InputWithOptions.tsx#L131-L131)
```tsx
          overrideStyle: true,
        },
        { value: '-', id: '2' },
        {
          value: ({ selected, disabled, hovered }) => <div />,
          id: 3,
          disabled: true,
          linkTo: 'google.com',
          title: true,
          overrideStyle: true,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MultiSelectWithAllProps" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/MultiSelect/test/MultiSelect.tsx`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/MultiSelect/test/MultiSelect.tsx#L136-L136)
```tsx
          overrideStyle: true,
        },
        { value: '-', id: '2' },
        {
          value: ({ selected, disabled, hovered }) => <div />,
          id: 3,
          disabled: true,
          linkTo: 'google.com',
          title: true,
          overrideStyle: true,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MultiSelectCheckboxWithAllProps" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/MultiSelectCheckbox/test/MultiSelectCheckbox.tsx`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/MultiSelectCheckbox/test/MultiSelectCheckbox.tsx#L114-L114)
```tsx
          overrideStyle: true,
        },
        { value: '-', id: '2' },
        {
          value: ({ selected, disabled, hovered }) => <div />,
          id: 3,
          disabled: true,
          linkTo: 'google.com',
          title: true,
          overrideStyle: true,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PopoverWithAllProps" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/Popover/test/Popover.tsx`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/Popover/test/Popover.tsx#L19-L19)
```tsx
    <Popover
      animate
      appendTo="parent"
      className="cls"
      customArrow={(_p, _a) => <div />}
      dataHook="hook"
      dynamicWidth
      fixed
      flip
      hideDelay={500}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PopoverMenuWithMoveByY" or memoize it.`
- Path: `wix/wix-style-react/src/PopoverMenu/test/PopoverMenu.tsx`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/PopoverMenu/test/PopoverMenu.tsx#L42-L54)
```tsx
function PopoverMenuWithMoveByY() {
  return <PopoverMenu triggerElement={<span />} moveBy={{ y: 1 }} />;


  function PopoverMenuMenuItemWithAllProps() {
    return (
      <PopoverMenu.MenuItem
      text="title"
      onClick={() => (alert("menuItem clicked"))}
      skin="dark"
      prefixIcon={<Edit />}
      dataHook="menu-item-hook"
      disabled={false}
      subtitle="subtitle"
      />
    );
  }}

async function testkits() {
  const testkit = popoverMenuTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "InteractiveEyeTest" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/PopoverMenu/test/PopoverMenu.visual.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/PopoverMenu/test/PopoverMenu.visual.js#L57-L61)
```js
    return (
      <div style={{ marginLeft: '300px', marginTop: '200px' }}>
        <PopoverMenu
          dataHook={interactiveDataHook}
          triggerElement={({ toggle }) => (
            <IconButton dataHook={menuButtonDataHook} onClick={toggle}>
              <More />
            </IconButton>
          )}
          {...rest}
        >
          {children}
        </PopoverMenu>
      </div>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SearchWithAllProps" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/Search/test/Search.tsx`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/Search/test/Search.tsx#L117-L117)
```tsx
          overrideStyle: true,
        },
        { value: '-', id: '2' },
        {
          value: ({ selected, disabled, hovered }) => <div />,
          id: 3,
          disabled: true,
          linkTo: 'google.com',
          title: true,
          overrideStyle: true,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ExampleWithAnimatedRowDetails" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `wix/wix-style-react/src/Table/DataTable/docs/ExampleWithAnimatedRowDetails.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/src/Table/DataTable/docs/ExampleWithAnimatedRowDetails.js#L47-L47)
```js
      <div style={style}>
        <DataTable
          dataHook="story-data-table"
          data={generateData()}
          rowDetails={row => <MyRowDetailsComponent {...row} />}
          rowDetailsAnimation
          allowMultiDetailsExpansion
          columns={[
            {
              title: 'Row Number',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ButtonsExamples" or memoize it.`
- Path: `wix/wix-style-react/stories/Introduction/Cheatsheet/componentsFamilies/ButtonFamily.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/stories/Introduction/Cheatsheet/componentsFamilies/ButtonFamily.js#L37-L52)
```js

const groupSymbol = symbolsGroup.buttons;

const ButtonsExamples = () => {
  const PrimarySkinsExamples = () => (
    <Layout cols={6} gap="10px" alignItems="center">
      <Button>Standard</Button>
      <Button skin="premium">Premium</Button>
      <Box backgroundColor="D10" padding="3px">
        <Button skin="light" fullWidth>
          Light
        </Button>
      </Box>
      <Box backgroundColor="B20" padding="3px">
        <Button skin="transparent">Transparent</Button>
      </Box>
      <Button skin="dark">Dark</Button>
      <Button skin="destructive">Destructive</Button>
    </Layout>
  );

  const SecondarySkinsExamples = () => {
    const firstRowExamples = (
      <Layout cols={6} gap="10px" alignItems="center">
        <Button priority="secondary">Standard</Button>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ButtonsExamples" or memoize it.`
- Path: `wix/wix-style-react/stories/Introduction/Cheatsheet/componentsFamilies/ButtonFamily.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/stories/Introduction/Cheatsheet/componentsFamilies/ButtonFamily.js#L54-L99)
```js
      <Button skin="destructive">Destructive</Button>
    </Layout>
  );

  const SecondarySkinsExamples = () => {
    const firstRowExamples = (
      <Layout cols={6} gap="10px" alignItems="center">
        <Button priority="secondary">Standard</Button>
        <Button priority="secondary" skin="premium">
          Premium
        </Button>
        <Box backgroundColor="D10" padding="3px">
          <Button priority="secondary" skin="light" fullWidth>
            Light
          </Button>
        </Box>
        <Box backgroundColor="B20" padding="3px">
          <Button priority="secondary" skin="transparent">
            Transparent
          </Button>
        </Box>
        <Box backgroundColor="Y30" padding="3px">
          <Button priority="secondary" skin="dark" fullWidth>
            Dark
          </Button>
        </Box>
        <Button priority="secondary" skin="destructive">
          Destructive
        </Button>
      </Layout>
    );

    const secondRowExamples = (
      <Layout cols={6} gap="10px" justifyItems="center">
        <Button skin="inverted">Inverted</Button>
        <Box backgroundColor="D10" padding="3px">
          <Button priority="secondary" skin="premium-light" fullWidth>
            PremiumLight
          </Button>
        </Box>
      </Layout>
    );

    return (
      <Layout>
        <Cell>{firstRowExamples}</Cell>
        <Cell>{secondRowExamples}</Cell>
      </Layout>
    );
  };

  const symbol = buttonsSymbols.button;
  const components = buttonsSymbolsToComponents[symbol];

  const singleComponentProps = {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "TypographyExamples" or memoize it.`
- Path: `wix/wix-style-react/stories/Introduction/Cheatsheet/componentsFamilies/FoundationFamily.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/stories/Introduction/Cheatsheet/componentsFamilies/FoundationFamily.js#L86-L107)
```js
  );
};

const TypographyExamples = () => {
  const HeadingExamples = () => {
    const headingVariations = [
      { appearance: 'H1', text: 'Page Title' },
      { appearance: 'H2', text: 'Page Section Title' },
      { appearance: 'H3', text: 'Card Title' },
      { appearance: 'H4', text: 'Card Content Title' },
      { appearance: 'H5', text: 'Card Section Title' },
      { appearance: 'H6', text: 'Caption' },
    ];

    return (
      <Layout>
        {headingVariations.map(({ appearance, text }, i) => (
          <Cell key={`heading-example-${i}`}>
            <TypographyDisplay label={`${appearance}.Dark`}>
              <Heading appearance={appearance}>{text}</Heading>
            </TypographyDisplay>
          </Cell>
        ))}
      </Layout>
    );
  };

  const TextExamples = () => {
    const sizes = {
      medium: 'medium',
      small: 'small',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "TypographyExamples" or memoize it.`
- Path: `wix/wix-style-react/stories/Introduction/Cheatsheet/componentsFamilies/FoundationFamily.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/stories/Introduction/Cheatsheet/componentsFamilies/FoundationFamily.js#L109-L171)
```js
      </Layout>
    );
  };

  const TextExamples = () => {
    const sizes = {
      medium: 'medium',
      small: 'small',
      tiny: 'tiny',
    };

    const weights = {
      normal: 'normal',
      thin: 'thin',
      bold: 'bold',
    };

    const texts = {
      text1: 'Running Text',
      text2: 'Input fields, buttons, text button',
      text3: 'Emphasized Text',
    };

    const textVariations = {
      [sizes.medium]: [
        { text: texts.text1, weight: weights.thin },
        { text: texts.text2, weight: weights.normal },
        { text: texts.text3, weight: weights.bold },
      ],

      [sizes.small]: [
        { text: texts.text1, weight: weights.thin },
        { text: texts.text2, weight: weights.normal },
        { text: texts.text3, weight: weights.bold },
      ],
      [sizes.tiny]: [
        { text: texts.text1, weight: weights.thin },
        { text: 'Buttons, text buttons', weight: weights.normal },
        { text: texts.text3, weight: weights.bold },
      ],
    };

    return (
      <Layout>
        {Object.keys(textVariations).map(size => (
          <Cell key={`cell-${size}`}>
            {textVariations[size].map(({ text, weight }) => {
              const sizeLabel = capitalize(size);
              const weightLabel = capitalize(weight);

              return (
                <Cell key={`text-${size}-${weight}`}>
                  <TypographyDisplay label={`${sizeLabel} ${weightLabel}`}>
                    <div>
                      <Text size={size} weight={weight}>
                        {text}
                      </Text>
                    </div>
                  </TypographyDisplay>
                </Cell>
              );
            })}
          </Cell>
        ))}
      </Layout>
    );
  };

  const symbol = foundationSymbols.typography;
  const components = foundationSymbolsToComponents[symbol];

  const singleComponentProps = {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ExamplePageWithCard" or memoize it.`
- Path: `wix/wix-style-react/stories/Introduction/Cheatsheet/componentsFamilies/LayoutFamily/examples/PageExamples.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/stories/Introduction/Cheatsheet/componentsFamilies/LayoutFamily/examples/PageExamples.js#L34-L63)
```js
} from 'wix-style-react';

class ExamplePageWithCard extends Component {
  renderHeader() {
    const ActionBar = () => {
      return (
        <Box>
          <Box>
            <PopoverMenu
              triggerElement={
                <IconButton skin="inverted">
                  <More />
                </IconButton>
              }
            >
              <PopoverMenu.MenuItem
                onClick={() => console.log('PopoverMenu.MenuItem onClick')}
                text="Refresh"
              />
              <PopoverMenu.MenuItem
                onClick={() => console.log('PopoverMenu.MenuItem onClick')}
                text="Trash"
              />
            </PopoverMenu>
          </Box>
          <Box marginLeft="small" marginRight="small">
            <Button skin="light">Cancel</Button>
          </Box>
          <Box>
            <Button>Save</Button>
          </Box>
        </Box>
      );
    };

    return (
      <Page.Header
        title="Page Title"
        breadcrumbs={
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ExamplePageEmptyState" or memoize it.`
- Path: `wix/wix-style-react/stories/Introduction/Cheatsheet/componentsFamilies/LayoutFamily/examples/PageExamples.js`
- [Link](https://github.com/wix/wix-style-react/blob/HEAD/stories/Introduction/Cheatsheet/componentsFamilies/LayoutFamily/examples/PageExamples.js#L107-L107)
```js
}

class ExamplePageEmptyState extends Component {
  renderHeader() {
    const ActionBar = () => <Button prefixIcon={<Add />}>New Item</Button>;

    return (
      <Page.Header
        title="Page Title"
        breadcrumbs={
```
