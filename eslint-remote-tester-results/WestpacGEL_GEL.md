## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Alert" or memoize it.`
- Path: `WestpacGEL/GEL/components/alert/src/Alert.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/alert/src/Alert.js#L83-L87)
```js
			() => setOpen(false)
		)(event);
	};

	const HeadingJSX = () => (
		<Heading state={state} {...headingAttributes(state)} css={headingStyles(state)}>
			{heading}
		</Heading>
	);

	const IconJSX = () => <Icon state={state} {...iconAttributes(state)} css={iconStyles(state)} />;

	const CloseBtnJSX = () => (
		<CloseBtn
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Alert" or memoize it.`
- Path: `WestpacGEL/GEL/components/alert/src/Alert.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/alert/src/Alert.js#L89-L89)
```js
			{heading}
		</Heading>
	);

	const IconJSX = () => <Icon state={state} {...iconAttributes(state)} css={iconStyles(state)} />;

	const CloseBtnJSX = () => (
		<CloseBtn
			onClose={(event) => handleClose(event)}
			state={state}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Alert" or memoize it.`
- Path: `WestpacGEL/GEL/components/alert/src/Alert.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/alert/src/Alert.js#L91-L98)
```js
	);

	const IconJSX = () => <Icon state={state} {...iconAttributes(state)} css={iconStyles(state)} />;

	const CloseBtnJSX = () => (
		<CloseBtn
			onClose={(event) => handleClose(event)}
			state={state}
			{...closeBtnAttributes(state)}
			css={closeBtnStyles(state)}
		/>
	);

	const AlertJSX = () => (
		<Alert state={state} {...rest} {...alertAttributes(state)} css={alertStyles(state)}>
			{Icon && <IconJSX />}
			<Body state={state} {...bodyAttributes(state)} css={bodyStyles(state)}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Alert" or memoize it.`
- Path: `WestpacGEL/GEL/components/alert/src/Alert.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/alert/src/Alert.js#L100-L109)
```js
			css={closeBtnStyles(state)}
		/>
	);

	const AlertJSX = () => (
		<Alert state={state} {...rest} {...alertAttributes(state)} css={alertStyles(state)}>
			{Icon && <IconJSX />}
			<Body state={state} {...bodyAttributes(state)} css={bodyStyles(state)}>
				{heading && <HeadingJSX />}
				{children}
			</Body>
			{dismissible && <CloseBtnJSX />}
		</Alert>
	);

	return (
		<Fragment>
			{transition.map(
				({ item, key, props }) =>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Demo" or memoize it.`
- Path: `WestpacGEL/GEL/components/breadcrumb/demos/dev/10-router.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/breadcrumb/demos/dev/10-router.js#L9-L9)
```js
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	const CrumbTag = (props) => <a {...props} onClick={() => console.log(`Clicked crumb link`)} />;

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Declarative</Title>
			<Breadcrumb assistiveText="Page transitions and the such">
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "AllStyles" or memoize it.`
- Path: `WestpacGEL/GEL/components/button-group/blender/recipe.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/button-group/blender/recipe.js#L21-L21)
```js
			component: blenderButtonGroup.component,
			styles: blenderButtonGroup.styles,
		},
		Button: {
			component: (props) => <span {...props} />,
			styles: blenderBtnGroupBtn.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens} noScope>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "AllStyles" or memoize it.`
- Path: `WestpacGEL/GEL/components/input-group/blender/recipe.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/input-group/blender/recipe.js#L22-L22)
```js
			component: blenderText.component,
			styles: blenderText.styles,
		},
		TextInput: {
			component: ({ invalid, ...props }) => <input {...props} />,
			styles: blenderGroupTextInput.styles,
		},
		Button: {
			component: (props) => <button {...props} />,
			styles: blenderGroupButton.styles,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "AllStyles" or memoize it.`
- Path: `WestpacGEL/GEL/components/input-group/blender/recipe.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/input-group/blender/recipe.js#L26-L26)
```js
			component: ({ invalid, ...props }) => <input {...props} />,
			styles: blenderGroupTextInput.styles,
		},
		Button: {
			component: (props) => <button {...props} />,
			styles: blenderGroupButton.styles,
		},
		Select: {
			component: (props) => <select {...props} />,
			styles: blenderGroupSelect.styles,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "AllStyles" or memoize it.`
- Path: `WestpacGEL/GEL/components/input-group/blender/recipe.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/input-group/blender/recipe.js#L30-L30)
```js
			component: (props) => <button {...props} />,
			styles: blenderGroupButton.styles,
		},
		Select: {
			component: (props) => <select {...props} />,
			styles: blenderGroupSelect.styles,
		},
	};

	return (
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "BlenderList" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `WestpacGEL/GEL/components/list/src/overrides/list.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/list/src/overrides/list.js#L50-L52)
```js
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
				component: ({ state: { tag: Tag }, className, ...rest }) => (
					<Tag className={formatClassName(className)} {...rest} />
				),
			},
		}}
		{...props}
	/>
);
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Demo" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `WestpacGEL/GEL/components/switch/demos/dev/component-overrides.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/switch/demos/dev/component-overrides.js#L15-L15)
```js
				name="example-default"
				label="I'm an overriden switch"
				overrides={{
					Label: {
						component: ({ state, ...props }) => <strong {...props} />,
						styles: (styles) => ({
							...styles,
							color: 'palevioletred',
							paddingRight: '2rem',
						}),
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it.`
- Path: `WestpacGEL/GEL/components/tabcordion/examples/70-overrides.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/tabcordion/examples/70-overrides.js#L50-L54)
```js
				};
			},
		},
		AccordionButtonIcon: {
			component: ({ state, ...rest }) => {
				const Icon = state.hidden ? ExpandMoreIcon : ExpandLessIcon;

				return <Icon color="black" size="small" assistiveText={null} {...rest} />;
			},
		},
		Panel: {
			styles: (styles, { look, mode }) => ({
				...styles,
				backgroundColor: 'black',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `WestpacGEL/GEL/components/tabcordion/examples/70-overrides.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/tabcordion/examples/70-overrides.js#L232-L235)
```js
								},
							}),
						},
						AccordionButtonIcon: {
							component: ({ state, ...rest }) => {
								const Icon = state.hidden ? ThumbDownIcon : ThumbUpIcon;
								return <Icon color="mediumblue" size="small" assistiveText={null} {...rest} />;
							},
						},
						Panel: {
							styles: (styles) => ({
								...styles,
								backgroundColor: 'mediumblue',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `WestpacGEL/GEL/components/tabcordion/examples/70-overrides.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/tabcordion/examples/70-overrides.js#L271-L274)
```js
								},
							}),
						},
						AccordionButtonIcon: {
							component: ({ state, ...rest }) => {
								const Icon = state.hidden ? ThumbDownIcon : ThumbUpIcon;
								return <Icon color="mediumblue" size="small" assistiveText={null} {...rest} />;
							},
						},
						Panel: {
							styles: (styles) => ({
								...styles,
								backgroundColor: 'mediumblue',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Example" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `WestpacGEL/GEL/components/tabcordion/examples/70-overrides.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/tabcordion/examples/70-overrides.js#L315-L318)
```js
								},
							}),
						},
						AccordionButtonIcon: {
							component: ({ state, ...rest }) => {
								const Icon = state.hidden ? ThumbDownIcon : ThumbUpIcon;
								return <Icon color="mediumblue" size="small" assistiveText={null} {...rest} />;
							},
						},
						Panel: {
							styles: (styles) => ({
								...styles,
								backgroundColor: 'mediumblue',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "BlenderTable" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `WestpacGEL/GEL/components/table/src/overrides/table.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/components/table/src/overrides/table.js#L35-L37)
```js
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
				component: ({ state: { tag: Tag }, className, ...rest }) => (
					<Tag className={formatClassName(className)} {...rest} />
				),
			},
		}}
		{...props}
	/>
);
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "AddBlock" or memoize it.`
- Path: `WestpacGEL/GEL/website/field-content/src/views/editor/add-block.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/field-content/src/views/editor/add-block.js#L84-L99)
```js
	useLayoutEffect(layout);

	const ItemActions = blocks[focusBlock?.type]?.Actions;

	const MoveUp = ({ node }) => {
		if (!node || !editorHasFocus) return null;
		const index = editorState.document.nodes.findIndex((o) => node.key === o.key);
		if (index === 0) return null;
		return (
			<BlockDisclosureMenuButton
				onClick={() => {
					const index = editorState.document.nodes.findIndex((o) => node.key === o.key);
					editor.moveNodeByKey(node.key, editorState.document.key, index - 1);
				}}
				title={'Move Up'}
			>
				<ArrowUpIcon title={'Move up'} />
			</BlockDisclosureMenuButton>
		);
	};
	const MoveDown = ({ node }) => {
		if (!node || !editorHasFocus) return null;
		const index = editorState.document.nodes.findIndex((o) => node.key === o.key);
		if (index === editorState.document.nodes.size - 1) return null;
		return (
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "AddBlock" or memoize it.`
- Path: `WestpacGEL/GEL/website/field-content/src/views/editor/add-block.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/field-content/src/views/editor/add-block.js#L100-L115)
```js
				<ArrowUpIcon title={'Move up'} />
			</BlockDisclosureMenuButton>
		);
	};
	const MoveDown = ({ node }) => {
		if (!node || !editorHasFocus) return null;
		const index = editorState.document.nodes.findIndex((o) => node.key === o.key);
		if (index === editorState.document.nodes.size - 1) return null;
		return (
			<BlockDisclosureMenuButton
				onClick={() => {
					const index = editorState.document.nodes.findIndex((o) => node.key === o.key);
					editor.moveNodeByKey(node.key, editorState.document.key, index + 1);
				}}
				title="Move Down"
			>
				<ArrowDownIcon title={'Move down'} />
			</BlockDisclosureMenuButton>
		);
	};

	// move up/down only make sense for dynamic types (i think)
	if (!ItemActions) {
		return null;
	}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HeadingsMenu" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `WestpacGEL/GEL/website/field-content/src/views/editor/headings.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/field-content/src/views/editor/headings.js#L18-L31)
```js

export const HeadingsMenu = ({ editor, editorState }) => {
	return (
		<DropdownMenu
			target={({ ref, isOpen, toggleOpen }) => (
				<ToolbarButton
					ref={ref}
					label="Headings"
					icon={
						<div css={{ display: 'flex' }}>
							<HeadingIcon />
							<ArrowDownIcon />
						</div>
					}
					isActive={isOpen}
					onClick={toggleOpen}
				/>
			)}
		>
			{sizes.map((size) => {
				let isActive =
					editorState?.focusBlock?.type === type &&
					editorState?.focusBlock?.data.get('size') === size;
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "InsertMenu" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `WestpacGEL/GEL/website/field-content/src/views/editor/toolbar.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/field-content/src/views/editor/toolbar.js#L116-L129)
```js
	return (
		<Fragment>
			<ToolbarDivider />
			<DropdownMenu
				target={({ ref, isOpen, toggleOpen }) => (
					<ToolbarButton
						ref={ref}
						label="Insert"
						icon={
							<div css={{ display: 'flex' }}>
								<PlusIcon />
								<ArrowDownIcon />
							</div>
						}
						isActive={isOpen}
						onClick={toggleOpen}
					/>
				)}
			>
				{Object.keys(blocks).map((key) => {
					let { Sidebar } = blocks[key];

					// only interested in "dynamic-components"
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "FormattingMenu" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `WestpacGEL/GEL/website/field-content/src/views/editor/toolbar.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/field-content/src/views/editor/toolbar.js#L158-L167)
```js
	if (!secondaryMarks.length) return null;

	return (
		<DropdownMenu
			target={({ ref, isOpen, toggleOpen }) => (
				<ToolbarButton
					ref={ref}
					label="More formatting"
					icon={<MoreIcon />}
					isDisabled={editorState?.focusBlock?.type === 'dynamic-components'}
					isActive={isOpen}
					onClick={toggleOpen}
				/>
			)}
		>
			{secondaryMarks.map((name) => {
				return (
					<BlockInsertMenuItem
						key={name}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "BrandSwitcher" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/brand-switcher/brand-switcher.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/brand-switcher/brand-switcher.js#L144-L183)
```js
	const { isScrolled } = useSidebar();
	const { SPACING, COLORS, PACKS, TYPE } = useBrand();
	const logo = brandsMap[brand].logo;

	const OptionButton = ({ brand, active, ...rest }) => {
		const handleClick = (brand) => {
			setOpen(false);
			setBrand(brand);
		};

		return (
			<button
				type="button"
				onClick={() => handleClick(brand)}
				css={{
					appearance: 'none',
					whiteSpace: 'nowrap',
					cursor: 'pointer',
					lineHeight: 1.5,
					touchAction: 'manipulation',
					userSelect: 'none',
					boxSizing: 'border-box',
					backgroundColor: 'transparent',
					border: 0,
					fontSize: '0.875rem',
					color: active ? COLORS.primary : COLORS.text,
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '3.75rem',
					padding: '10px 18px 10px 18px',
					...(active && TYPE.bodyFont[700]),
					':hover, :focus': {
						backgroundColor: COLORS.background,
					},
					':focus': {
						outlineOffset: `-${PACKS.focus.outlineWidth}`,
					},
				}}
				{...rest}
			/>
		);
	};

	const BrandList = (props) => {
		return (
			//a11y: as we're using `list-style:none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
			<ul role="list" css={{ paddingLeft: 0, listStyle: 'none', margin: 0 }} {...props}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "BrandSwitcher" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/brand-switcher/brand-switcher.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/brand-switcher/brand-switcher.js#L185-L199)
```js
			/>
		);
	};

	const BrandList = (props) => {
		return (
			//a11y: as we're using `list-style:none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
			<ul role="list" css={{ paddingLeft: 0, listStyle: 'none', margin: 0 }} {...props}>
				{Object.entries(brandsMap).map(([key, val]) => (
					<li key={key} css={{ borderTop: `1px solid ${COLORS.border}` }}>
						<OptionButton brand={key} active={brandName === key}>
							<span css={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{val.label}</span>
							<div css={{ marginLeft: '0.4em' }}>{val.smallLogo}</div>
						</OptionButton>
					</li>
				))}
			</ul>
		);
	};

	const handleClick = () => {
		setOpen(!open);
	};

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ComponentPageHeaderImage" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/header/component-page-header-image.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/header/component-page-header-image.js#L10-L27)
```js

const ComponentPageHeaderImage = ({ brand, ...rest }) => {
	const mq = useMediaQuery();

	const WBCImage = (props) => (
		<div
			css={mq({
				top: 0,
				bottom: 0,
				right: 0,
			})}
			{...props}
		>
			<WbcBackgroundSvg
				css={{
					display: 'block',
					width: 'auto',
					height: '100%',
				}}
			/>
		</div>
	);

	const STGImage = (props) => (
		<div
			css={mq({
				bottom: 0,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ComponentPageHeaderImage" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/header/component-page-header-image.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/header/component-page-header-image.js#L29-L46)
```js
			/>
		</div>
	);

	const STGImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				left: 0,
				width: [601, 1202],
			})}
			{...props}
		>
			<StgBackgroundSvg
				css={{
					display: 'block',
					width: 'auto',
					height: '100%',
				}}
			/>
		</div>
	);
	const BSAImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				right: 0,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ComponentPageHeaderImage" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/header/component-page-header-image.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/header/component-page-header-image.js#L47-L64)
```js
				}}
			/>
		</div>
	);
	const BSAImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				right: 0,
				width: [508, 1016],
			})}
			{...props}
		>
			<BsaBackgroundSvg
				css={{
					display: 'block',
					width: 'auto',
					height: '100%',
				}}
			/>
		</div>
	);

	const BRAND_HEADERS = {
		WBC: WBCImage,
		WBG: null,
		STG: STGImage,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HomePageHeaderImage" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/header/home-page-header-image.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/header/home-page-header-image.js#L9-L26)
```js

const HomePageHeaderImage = ({ brand, ...rest }) => {
	const mq = useMediaQuery();

	const STGImage = (props) => (
		<div
			css={{
				bottom: 0,
				left: 0,
				width: 1202,
			}}
			{...props}
		>
			<StgBackgroundSvg
				css={{
					display: 'block',
					width: '100%',
					height: 'auto',
				}}
			/>
		</div>
	);
	const BSAImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				right: 0,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HomePageHeaderImage" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/header/home-page-header-image.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/header/home-page-header-image.js#L27-L44)
```js
				}}
			/>
		</div>
	);
	const BSAImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				right: 0,
				width: 1016,
			})}
			{...props}
		>
			<BsaBackgroundSvg
				css={{
					display: 'block',
					width: '100%',
					height: 'auto',
				}}
			/>
		</div>
	);

	const BRAND_HEADERS = {
		WBC: null,
		WBG: null,
		STG: STGImage,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HomePageStickyHeaderImage" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/header/home-page-sticky-header-image.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/header/home-page-sticky-header-image.js#L9-L27)
```js

const HomePageStickyHeaderImage = ({ brand, hide, ...rest }) => {
	const mq = useMediaQuery();

	const WBCImage = (props) => (
		<div
			css={mq({
				top: [0, null, 'auto'],
				bottom: 0,
				right: 0,
				height: [null, null, 228],
			})}
			{...props}
		>
			<WbcBackgroundSvg
				css={{
					display: 'block',
					width: 'auto',
					height: '100%',
				}}
			/>
		</div>
	);

	const STGImage = (props) => (
		<div
			css={mq({
				bottom: 0,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HomePageStickyHeaderImage" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/header/home-page-sticky-header-image.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/header/home-page-sticky-header-image.js#L29-L46)
```js
			/>
		</div>
	);

	const STGImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				left: 0,
				width: [601, 1202],
			})}
			{...props}
		>
			<StgBackgroundSvg
				css={{
					display: 'block',
					width: '100%',
					height: 'auto',
				}}
			/>
		</div>
	);
	const BSAImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				right: 0,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HomePageStickyHeaderImage" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/header/home-page-sticky-header-image.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/header/home-page-sticky-header-image.js#L47-L64)
```js
				}}
			/>
		</div>
	);
	const BSAImage = (props) => (
		<div
			css={mq({
				bottom: 0,
				right: 0,
				width: [508, 1016],
			})}
			{...props}
		>
			<BsaBackgroundSvg
				css={{
					display: 'block',
					width: '100%',
					height: 'auto',
				}}
			/>
		</div>
	);

	const BRAND_HEADERS = {
		WBC: WBCImage,
		WBG: null,
		STG: STGImage,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MenuButton" or memoize it.`
- Path: `WestpacGEL/GEL/website/src/components/header/menu-button.js`
- [Link](https://github.com/WestpacGEL/GEL/blob/HEAD/website/src/components/header/menu-button.js#L13-L13)
```js
export const MenuButton = (props) => {
	const { PACKS } = useBrand();
	const { setIsOpen } = useSidebar();

	const Icon = () => <HamburgerMenuIcon color="#fff" />;

	return (
		<Button
			look="unstyled"
			size="large"
```
