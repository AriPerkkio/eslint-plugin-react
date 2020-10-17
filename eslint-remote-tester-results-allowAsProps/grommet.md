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
