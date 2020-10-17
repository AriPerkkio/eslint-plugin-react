## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Avatar" or memoize it.`
- Path: `grommet/grommet/src/js/components/Avatar/Avatar.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Avatar/Avatar.js#L31-L35)
```js
    round,
    width: avatarSize,
  };

  const AvatarChildren = () => (
    <StyledAvatar {...avatarProps} {...rest}>
      {children}
    </StyledAvatar>
  );

  if (height || width) {
    console.warn(
      'Avatar should use `size` instead of `height` or `width` props',
    );
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Stacked" or memoize it.`
- Path: `grommet/grommet/src/js/components/Avatar/stories/typescript/Stacked.tsx`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Avatar/stories/typescript/Stacked.tsx#L16-L22)
```tsx
  const bryan = '//s.gravatar.com/avatar/10d15019166606cfed23846a7f902660?s=80';

  const borderSmall = { color: 'white', size: 'small' };

  const GroupedGravatar = ({ border }) => (
    <Stack anchor="left">
      <Avatar src={bryan} border={border} />
      <Avatar src={eric} border={border} margin={{ left: 'medium' }} />
      <Avatar src={shimi} border={border} margin={{ left: 'large' }} />
    </Stack>
  );

  const GroupedGravatarCentered = () => (
    <Stack anchor="right" margin={{ left: 'xlarge' }}>
      <Avatar src={bryan} />
      <Avatar src={shimi} margin={{ right: 'large' }} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Stacked" or memoize it.`
- Path: `grommet/grommet/src/js/components/Avatar/stories/typescript/Stacked.tsx`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Avatar/stories/typescript/Stacked.tsx#L24-L30)
```tsx
      <Avatar src={shimi} border={border} margin={{ left: 'large' }} />
    </Stack>
  );

  const GroupedGravatarCentered = () => (
    <Stack anchor="right" margin={{ left: 'xlarge' }}>
      <Avatar src={bryan} />
      <Avatar src={shimi} margin={{ right: 'large' }} />
      <Avatar src={eric} margin={{ right: 'medium' }} />
    </Stack>
  );
  const GroupedGravatarRTL = () => (
    <Stack anchor="right" margin={{ left: 'xlarge' }}>
      <Avatar size="large" src={shimi} />
      <Avatar size="large" src={eric} margin={{ right: 'large' }} />
      <Avatar size="large" src={bryan} margin={{ right: 'xlarge' }} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Stacked" or memoize it.`
- Path: `grommet/grommet/src/js/components/Avatar/stories/typescript/Stacked.tsx`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Avatar/stories/typescript/Stacked.tsx#L31-L37)
```tsx
      <Avatar src={shimi} margin={{ right: 'large' }} />
      <Avatar src={eric} margin={{ right: 'medium' }} />
    </Stack>
  );
  const GroupedGravatarRTL = () => (
    <Stack anchor="right" margin={{ left: 'xlarge' }}>
      <Avatar size="large" src={shimi} />
      <Avatar size="large" src={eric} margin={{ right: 'large' }} />
      <Avatar size="large" src={bryan} margin={{ right: 'xlarge' }} />
    </Stack>
  );

  const GroupedIcons = () => (
    <Stack anchor="left">
      <Avatar background="accent-1">
        <UserNew color="accent-2" />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Stacked" or memoize it.`
- Path: `grommet/grommet/src/js/components/Avatar/stories/typescript/Stacked.tsx`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Avatar/stories/typescript/Stacked.tsx#L39-L51)
```tsx
      <Avatar size="large" src={bryan} margin={{ right: 'xlarge' }} />
    </Stack>
  );

  const GroupedIcons = () => (
    <Stack anchor="left">
      <Avatar background="accent-1">
        <UserNew color="accent-2" />
      </Avatar>
      <Avatar background="accent-2" margin={{ left: 'medium' }}>
        <UserFemale color="accent-1" />
      </Avatar>
      <Avatar background="accent-4" margin={{ left: 'large' }}>
        <Favorite color="accent-2" />
      </Avatar>
    </Stack>
  );

  return (
    <Grommet theme={grommet}>
      <Box align="center" gap="medium" pad="large" background="dark-1">
        {/* Nested Avatars */}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "CustomHeaderCalendar" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `grommet/grommet/src/js/components/Calendar/stories/CustomHeader.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Calendar/stories/CustomHeader.js#L24-L52)
```js
          date={date}
          onSelect={onSelect}
          size="small"
          bounds={['2018-09-08', '2018-12-13']}
          header={({
            date: currentDate,
            locale,
            onPreviousMonth,
            onNextMonth,
            previousInBound,
            nextInBound,
          }) => (
            <Box direction="row" align="center" justify="between">
              <Button disabled={!previousInBound} onClick={onPreviousMonth}>
                <Box>
                  <FormPreviousLink />
                </Box>
              </Button>
              <Text size="small">
                <strong>
                  {currentDate.toLocaleDateString(locale, {
                    month: 'long',
                    year: 'numeric',
                  })}
                </strong>
              </Text>
              <Button disabled={!nextInBound} onClick={onNextMonth}>
                <Box>
                  <FormNextLink />
                </Box>
              </Button>
            </Box>
          )}
        />
      </Box>
    </Grommet>
  );
};
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DualCalendar" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `grommet/grommet/src/js/components/Calendar/stories/Dual.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Calendar/stories/Dual.js#L44-L64)
```js
            nextDate.setMonth(refDate.getMonth() + 1, 1);
            setReference1(refDate);
            setReference2(nextDate);
          }}
          header={({
            date: currentDate,
            locale,
            onPreviousMonth,
            previousInBound,
          }) => (
            <Box direction="row" align="center" justify="between">
              <Button
                disabled={!previousInBound}
                icon={<Previous />}
                onClick={onPreviousMonth}
              />
              <Heading level={3} margin="none">
                {currentDate.toLocaleDateString(locale, {
                  month: 'long',
                  year: 'numeric',
                })}
              </Heading>
              <Blank />
            </Box>
          )}
        />
        <Calendar
          animate={false}
          showAdjacentDays={false}
          date={date}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DualCalendar" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `grommet/grommet/src/js/components/Calendar/stories/Dual.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Calendar/stories/Dual.js#L81-L96)
```js
            priorDate.setMonth(refDate.getMonth() - 1, 1);
            setReference1(priorDate);
            setReference2(refDate);
          }}
          header={({ date: currentDate, locale, onNextMonth, nextInBound }) => (
            <Box direction="row" align="center" justify="between">
              <Blank />
              <Heading level={3} margin="none">
                {currentDate.toLocaleDateString(locale, {
                  month: 'long',
                  year: 'numeric',
                })}
              </Heading>
              <Button
                disabled={!nextInBound}
                icon={<Next />}
                onClick={onNextMonth}
              />
            </Box>
          )}
        />
      </Box>
    </Grommet>
  );
};
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it.`
- Path: `grommet/grommet/src/js/components/Card/stories/RichFooter.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Card/stories/RichFooter.js#L42-L51)
```js
const Example = () => {
  const [open, setOpen] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const ExpandButton = ({ ...rest }) => {
    const Icon = open ? FormUp : FormDown;
    return (
      <Button
        hoverIndicator="light-4"
        icon={<Icon color="brand" />}
        {...rest}
      />
    );
  };
  return (
    <Grommet theme={theme}>
      <Box pad="medium" align="start">
        <Card elevation="large" width="medium">
          <CardBody height="small">
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `grommet/grommet/src/js/components/Form/stories/Components.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Form/stories/Components.js#L77-L77)
```js
          />
          <FormField
            label="Custom"
            name="custom"
            component={props => <input {...props} />}
          />
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Update" primary />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ActionList" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `grommet/grommet/src/js/components/List/stories/action.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/List/stories/action.js#L22-L31)
```js
    <Box pad="large">
      <List
        data={data.slice(0, 10)}
        pad={{ left: 'small', right: 'none' }}
        action={(item, index) => {
          return (
            <Menu
              key={index}
              icon={<More />}
              hoverIndicator
              items={[{ label: 'one' }]}
            />
          );
        }}
      />
    </Box>
  </Grommet>
);

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RenderedList" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `grommet/grommet/src/js/components/List/stories/key render.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/List/stories/key render.js#L28-L32)
```js
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <List
        data={data.slice(0, 10)}
        primaryKey={item => (
          <Text size="large" weight="bold">
            {item.entry}
          </Text>
        )}
        secondaryKey={item => (
          <Text size="small" color="dark-4">
            {item.location}
          </Text>
        )}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RenderedList" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `grommet/grommet/src/js/components/List/stories/key render.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/List/stories/key render.js#L33-L37)
```js
          <Text size="large" weight="bold">
            {item.entry}
          </Text>
        )}
        secondaryKey={item => (
          <Text size="small" color="dark-4">
            {item.location}
          </Text>
        )}
      />
    </Box>
  </Grommet>
);

```
