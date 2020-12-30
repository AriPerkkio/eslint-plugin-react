## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "WubtitlePanel" or memoize it.`
- Path: `CTMobi/Wubtitle-Wordpress-Plugin/src/block/WubtitlePanel.js`
- [Link](https://github.com/CTMobi/Wubtitle-Wordpress-Plugin/blob/HEAD/src/block/WubtitlePanel.js#L65-L92)
```js
	const optionLanguage =
		wubtitle_button_object.isFree === '1'
			? selectOptionsFreePlan
			: selectOptions;
	const GenerateSubtitles = () => {
		status =
			status === 'error'
				? __('Error', 'wubtitle')
				: __('None', 'wubtitle');
		return (
			<Fragment>
				<div>{__('Status:', 'wubtitle') + ' ' + status}</div>
				<SelectControl
					label={__('Select the video language', 'wubtitle')}
					value={languageSelected}
					onChange={(lingua) => {
						setLanguage(lingua);
					}}
					options={optionLanguage}
				/>
				<Button
					disabled={isDisabled}
					name="sottotitoli"
					id={props.id}
					isPrimary
					onClick={onClick}
				>
					{__('GENERATE SUBTITLES', 'wubtitle')}
				</Button>
			</Fragment>
		);
	};

	const FormatNotSupported = () => (
		<Fragment>
			<div>
				{__('Unsupported video format for free plan', 'wubtitle')}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "WubtitlePanel" or memoize it.`
- Path: `CTMobi/Wubtitle-Wordpress-Plugin/src/block/WubtitlePanel.js`
- [Link](https://github.com/CTMobi/Wubtitle-Wordpress-Plugin/blob/HEAD/src/block/WubtitlePanel.js#L94-L100)
```js
			</Fragment>
		);
	};

	const FormatNotSupported = () => (
		<Fragment>
			<div>
				{__('Unsupported video format for free plan', 'wubtitle')}
			</div>
		</Fragment>
	);

	function onClick() {
		const idAttachment = props.id;
		const srcAttachment = props.src;
		setIsLoading(true);
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "WubtitlePanel" or memoize it.`
- Path: `CTMobi/Wubtitle-Wordpress-Plugin/src/block/WubtitlePanel.js`
- [Link](https://github.com/CTMobi/Wubtitle-Wordpress-Plugin/blob/HEAD/src/block/WubtitlePanel.js#L138-L163)
```js
			}
		});
	}

	const WubtitlePanelContent = () => {
		if (wubtitle_button_object.isFree === '1' && extensionsFile !== 'mp4') {
			return <FormatNotSupported />;
		}
		switch (status) {
			case 'pending':
				return (
					<PendingSubtitle
						langText={languageSaved}
						statusText={status}
					/>
				);
			case 'draft':
			case 'enabled':
				return (
					<SubtitleControl
						statusText={status}
						langText={languageSaved}
						isPublished={isPublished}
						postId={props.id}
					/>
				);
			default:
				return <GenerateSubtitles />;
		}
	};

	return (
		<InspectorControls>
			<PanelBody title="Wubtitle">
				<WubtitlePanelContent
```
