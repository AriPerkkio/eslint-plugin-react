## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/apps/editing-toolkit/editing-toolkit-plugin/block-inserter-modifications/contextual-tips/tip-link.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/apps/editing-toolkit/editing-toolkit-plugin/block-inserter-modifications/contextual-tips/tip-link.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:21`
- Path: `Automattic/wp-calypso/apps/editing-toolkit/editing-toolkit-plugin/starter-page-templates/page-template-modal/components/block-preview.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/apps/editing-toolkit/editing-toolkit-plugin/starter-page-templates/page-template-modal/components/block-preview.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:21
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: react/no-reference-type-as-default-prop
- Message: `templates has a/an array literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of array literal.`
- Path: `Automattic/wp-calypso/apps/editing-toolkit/editing-toolkit-plugin/starter-page-templates/page-template-modal/components/template-selector-control.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/apps/editing-toolkit/editing-toolkit-plugin/starter-page-templates/page-template-modal/components/template-selector-control.js#L25-L25)
```js
	label,
	className,
	help,
	instanceId,
	templates = [],
	blocksByTemplates = {},
	useDynamicPreview = false,
	onTemplateSelect = noop,
	siteInformation = {},
	selectedTemplate,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `blocksByTemplates has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/apps/editing-toolkit/editing-toolkit-plugin/starter-page-templates/page-template-modal/components/template-selector-control.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/apps/editing-toolkit/editing-toolkit-plugin/starter-page-templates/page-template-modal/components/template-selector-control.js#L26-L26)
```js
	className,
	help,
	instanceId,
	templates = [],
	blocksByTemplates = {},
	useDynamicPreview = false,
	onTemplateSelect = noop,
	siteInformation = {},
	selectedTemplate,
} ) => {
```

## Rule: react/no-reference-type-as-default-prop
- Message: `siteInformation has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/apps/editing-toolkit/editing-toolkit-plugin/starter-page-templates/page-template-modal/components/template-selector-control.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/apps/editing-toolkit/editing-toolkit-plugin/starter-page-templates/page-template-modal/components/template-selector-control.js#L29-L29)
```js
	templates = [],
	blocksByTemplates = {},
	useDynamicPreview = false,
	onTemplateSelect = noop,
	siteInformation = {},
	selectedTemplate,
} ) => {
	if ( isEmpty( templates ) || ! isArray( templates ) ) {
		return null;
	}
```

## Rule: react/no-reference-type-as-default-prop
- Message: `blocks has a/an array literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of array literal.`
- Path: `Automattic/wp-calypso/apps/editing-toolkit/editing-toolkit-plugin/starter-page-templates/page-template-modal/components/template-selector-preview.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/apps/editing-toolkit/editing-toolkit-plugin/starter-page-templates/page-template-modal/components/template-selector-preview.js#L11-L11)
```js
 * Internal dependencies
 */
import BlockIframePreview from './block-iframe-preview';

const TemplateSelectorPreview = ( { blocks = [], viewportWidth, title } ) => {
	const noBlocks = ! blocks.length;
	return (
		/* eslint-disable wpcalypso/jsx-classname-namespace */
		<div className={ `template-selector-preview ${ noBlocks ? 'not-selected' : '' }` }>
			{ noBlocks && (
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:26`
- Path: `Automattic/wp-calypso/client/blocks/color-scheme-picker/constants.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/blocks/color-scheme-picker/constants.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:26
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: react/no-reference-type-as-default-prop
- Message: `apiParams has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/client/blocks/credit-card-form/index.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/blocks/credit-card-form/index.jsx#L50-L50)
```jsx

const debug = debugFactory( 'calypso:credit-card-form' );

export function CreditCardForm( {
	apiParams = {},
	createCardToken,
	countriesList,
	initialValues = undefined,
	purchase = undefined,
	recordFormSubmitEvent,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `searchResults has a/an array literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of array literal.`
- Path: `Automattic/wp-calypso/client/blocks/inline-help/inline-help-search-results.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/blocks/inline-help/inline-help-search-results.jsx#L58-L58)
```jsx
	isSearching = false,
	onSelect,
	onAdminSectionSelect = noop,
	searchQuery = '',
	searchResults = [],
	sectionName,
	selectedResultIndex = -1,
	selectSearchResult,
	translate = identity,
	placeholderLines,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `labels has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/client/components/jetpack/server-credentials-form/index.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/jetpack/server-credentials-form/index.jsx#L38-L38)
```jsx
	handleFieldChange,
	handleSubmit,
	form,
	formErrors,
	labels = {},
	showCancelButton = true,
} ) => {
	React.useEffect( () => {
		if ( formSubmissionStatus === 'success' ) {
			onComplete && onComplete();
```

## Rule: react/no-reference-type-as-default-prop
- Message: `content has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/client/components/notes-formatted-block/index.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/notes-formatted-block/index.jsx#L11-L11)
```jsx
 * Internal dependencies
 */
import { getBlockByType } from './blocks';

const FormattedBlock = ( { content = {}, onClick = null, meta = {} } ) => {
	if ( 'string' === typeof content ) {
		return content;
	}

	const { children: nestedContent, text = null, type } = content;
```

## Rule: react/no-reference-type-as-default-prop
- Message: `meta has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/client/components/notes-formatted-block/index.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/notes-formatted-block/index.jsx#L11-L11)
```jsx
 * Internal dependencies
 */
import { getBlockByType } from './blocks';

const FormattedBlock = ( { content = {}, onClick = null, meta = {} } ) => {
	if ( 'string' === typeof content ) {
		return content;
	}

	const { children: nestedContent, text = null, type } = content;
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:112`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/advanced/plugin.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/advanced/plugin.jsx)
```jsx
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:112
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:536`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/after-the-deadline/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/after-the-deadline/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:536
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:33`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/contact-form/dialog/locales.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/contact-form/dialog/locales.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:33
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:112`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/editor-button-analytics/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/editor-button-analytics/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:112
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:24`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/markdown/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/markdown/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:24
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:931`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/media/plugin.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/media/plugin.jsx)
```jsx
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:931
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:68`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/media/restrict-size/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/media/restrict-size/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:68
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:88`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/toolbar-pin/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/toolbar-pin/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:88
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:101`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/touch-scroll-toolbar/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/touch-scroll-toolbar/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:101
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:754`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wpcom/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wpcom/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:754
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:203`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wpcom-autoresize/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wpcom-autoresize/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:203
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:50`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wpcom-charmap/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wpcom-charmap/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:50
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:48`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wpcom-help/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wpcom-help/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:48
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:79`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wpcom-sourcecode/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wpcom-sourcecode/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:79
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:38`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wpcom-tabindex/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wpcom-tabindex/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:38
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:955`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wpcom-view/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wpcom-view/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:955
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:78`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wpcom-view/views/contact-form/preview-fields.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wpcom-view/views/contact-form/preview-fields.jsx)
```jsx
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:78
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:829`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wpeditimage/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wpeditimage/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:829
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:140`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wpemoji/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wpemoji/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:140
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:216`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wplink/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wplink/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:216
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:314`
- Path: `Automattic/wp-calypso/client/components/tinymce/plugins/wptextpattern/plugin.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/components/tinymce/plugins/wptextpattern/plugin.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:314
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:21`
- Path: `Automattic/wp-calypso/client/extensions/hello-dolly/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/extensions/hello-dolly/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:21
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:30`
- Path: `Automattic/wp-calypso/client/extensions/sensei/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/extensions/sensei/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:30
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: react/no-reference-type-as-default-prop
- Message: `storeData has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/client/extensions/woocommerce/app/settings/email/mailchimp/setup-steps/newsletter-settings.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/extensions/woocommerce/app/settings/email/mailchimp/setup-steps/newsletter-settings.js#L22-L22)
```js
import FormSettingExplanation from 'calypso/components/forms/form-setting-explanation';
import Notice from 'calypso/components/notice';
import QueryMailChimpLists from 'woocommerce/state/sites/settings/mailchimp/queryLists';

const NewsletterSettings = ( { storeData = {}, onChange, siteId, isRequesting, translate } ) => {
	return (
		<FormFieldset className="setup-steps__store-info-field">
			<QueryMailChimpLists siteId={ siteId } />
			<p>{ translate( 'Finally, choose a mailing list to sync with your store.' ) }</p>
			<Notice>
```

## Rule: react/no-reference-type-as-default-prop
- Message: `storeData has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/client/extensions/woocommerce/app/settings/email/mailchimp/setup-steps/store-info.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/extensions/woocommerce/app/settings/email/mailchimp/setup-steps/store-info.js#L26-L26)
```js
	{ name: 'store_phone', label: translate( 'Phone' ) },
	{ name: 'admin_email', label: translate( 'Admin Email' ) },
];

const StoreInfo = ( { storeData = {}, onChange, validateFields } ) => {
	const onTimezoneSelect = ( value ) => {
		const e = {
			target: {
				name: 'store_timezone',
				value,
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:259`
- Path: `Automattic/wp-calypso/client/extensions/woocommerce/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/extensions/woocommerce/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:259
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:12`
- Path: `Automattic/wp-calypso/client/extensions/woocommerce/lib/get-keyboard-handler/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/extensions/woocommerce/lib/get-keyboard-handler/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:12
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:22`
- Path: `Automattic/wp-calypso/client/extensions/wp-super-cache/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/extensions/wp-super-cache/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:22
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:24`
- Path: `Automattic/wp-calypso/client/extensions/zoninator/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/extensions/zoninator/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:24
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/gutenberg/editor/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/gutenberg/editor/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:45`
- Path: `Automattic/wp-calypso/client/jetpack-cloud/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/jetpack-cloud/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:45
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:12`
- Path: `Automattic/wp-calypso/client/jetpack-cloud/sections/pricing/index.ts`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/jetpack-cloud/sections/pricing/index.ts)
```ts
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:12
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:16`
- Path: `Automattic/wp-calypso/client/jetpack-cloud/sections/settings/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/jetpack-cloud/sections/settings/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:16
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:25`
- Path: `Automattic/wp-calypso/client/jetpack-connect/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/jetpack-connect/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:25
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/lib/accept/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/accept/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:18`
- Path: `Automattic/wp-calypso/client/lib/keyboard-shortcuts/global.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/keyboard-shortcuts/global.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:18
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:83`
- Path: `Automattic/wp-calypso/client/lib/local-storage-bypass/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/local-storage-bypass/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:83
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:19`
- Path: `Automattic/wp-calypso/client/lib/local-storage-polyfill/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/local-storage-polyfill/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:19
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/lib/media-serialization/create-element-from-string.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/media-serialization/create-element-from-string.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:18`
- Path: `Automattic/wp-calypso/client/lib/media-serialization/detect-format.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/media-serialization/detect-format.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:18
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:8`
- Path: `Automattic/wp-calypso/client/lib/mixins/data-observe/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/mixins/data-observe/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:8
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:8`
- Path: `Automattic/wp-calypso/client/lib/mixins/emitter/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/mixins/emitter/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:8
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:8`
- Path: `Automattic/wp-calypso/client/lib/phone-validation/index.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/phone-validation/index.jsx)
```jsx
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:8
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:15`
- Path: `Automattic/wp-calypso/client/lib/post-normalizer/rule-add-discover-properties.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/post-normalizer/rule-add-discover-properties.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:15
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:130`
- Path: `Automattic/wp-calypso/client/lib/products-list/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/products-list/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:130
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:8`
- Path: `Automattic/wp-calypso/client/lib/react-pass-to-children/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/react-pass-to-children/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:8
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:8`
- Path: `Automattic/wp-calypso/client/lib/track-scroll-page/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/track-scroll-page/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:8
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/lib/user/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/user/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:16`
- Path: `Automattic/wp-calypso/client/lib/wpcom-xhr-wrapper/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/lib/wpcom-xhr-wrapper/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:16
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:18`
- Path: `Automattic/wp-calypso/client/mailing-lists/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/mailing-lists/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:18
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/me/account/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/me/account/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/me/account-close/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/me/account-close/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:10`
- Path: `Automattic/wp-calypso/client/me/help/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/me/help/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:10
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/me/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/me/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/me/notification-settings/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/me/notification-settings/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/me/privacy/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/me/privacy/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:21`
- Path: `Automattic/wp-calypso/client/me/security/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/me/security/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:21
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/me/site-blocks/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/me/site-blocks/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/my-sites/activity/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/activity/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:40`
- Path: `Automattic/wp-calypso/client/my-sites/backup/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/backup/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:40
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:23`
- Path: `Automattic/wp-calypso/client/my-sites/checkout/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/checkout/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:23
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/my-sites/comments/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/comments/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: react/no-reference-type-as-default-prop
- Message: `cart has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/client/my-sites/current-site/pending-payment-notice.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/current-site/pending-payment-notice.jsx#L14-L14)
```jsx
import Notice from 'calypso/components/notice';
import NoticeAction from 'calypso/components/notice/notice-action';
import { hasPendingPayment } from 'calypso/lib/cart-values';

export const PendingPaymentNotice = ( { translate, cart = {} } ) => {
	if ( ! hasPendingPayment( cart ) ) {
		return null;
	}

	return (
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/my-sites/customer-home/controller.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/customer-home/controller.jsx)
```jsx
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/my-sites/customer-home/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/customer-home/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:15`
- Path: `Automattic/wp-calypso/client/my-sites/customize/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/customize/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:15
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:48`
- Path: `Automattic/wp-calypso/client/my-sites/domains/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/domains/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:48
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/my-sites/earn/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/earn/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:20`
- Path: `Automattic/wp-calypso/client/my-sites/email/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/email/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:20
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:15`
- Path: `Automattic/wp-calypso/client/my-sites/exporter/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/exporter/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:15
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:51`
- Path: `Automattic/wp-calypso/client/my-sites/google-my-business/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/google-my-business/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:51
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/my-sites/hosting/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/hosting/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/my-sites/importer/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/importer/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: react/no-reference-type-as-default-prop
- Message: `importData has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/client/my-sites/importer/site-importer/site-importer-importable-content.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/importer/site-importer/site-importer-importable-content.jsx#L14-L14)
```jsx
 * Style dependencies
 */
import './site-importer-importable-content.scss';

const SiteImporterImportableContent = ( { translate, importData = {} } ) => (
	<div className="site-importer__site-preview-import-content">
		{ ! isEmpty( importData.supported ) && (
			<Fragment>
				<p>{ translate( 'We will import:' ) }</p>
				<ul>
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:15`
- Path: `Automattic/wp-calypso/client/my-sites/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:15
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:23`
- Path: `Automattic/wp-calypso/client/my-sites/marketing/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/marketing/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:23
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:15`
- Path: `Automattic/wp-calypso/client/my-sites/media/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/media/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:15
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:16`
- Path: `Automattic/wp-calypso/client/my-sites/media-library/filter-to-mime-prefix.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/media-library/filter-to-mime-prefix.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:16
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:18`
- Path: `Automattic/wp-calypso/client/my-sites/migrate/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/migrate/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:18
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/my-sites/pages/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/pages/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/my-sites/people/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/people/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:26`
- Path: `Automattic/wp-calypso/client/my-sites/plans/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/plans/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:26
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:25`
- Path: `Automattic/wp-calypso/client/my-sites/plugins/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/plugins/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:25
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:15`
- Path: `Automattic/wp-calypso/client/my-sites/posts/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/posts/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:15
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:9`
- Path: `Automattic/wp-calypso/client/my-sites/preview/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/preview/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:9
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:19`
- Path: `Automattic/wp-calypso/client/my-sites/purchase-product/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/purchase-product/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:19
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:40`
- Path: `Automattic/wp-calypso/client/my-sites/scan/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/scan/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:40
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:26`
- Path: `Automattic/wp-calypso/client/my-sites/site-settings/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/site-settings/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:26
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/my-sites/site-settings/settings-discussion/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/site-settings/settings-discussion/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:28`
- Path: `Automattic/wp-calypso/client/my-sites/site-settings/settings-jetpack/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/site-settings/settings-jetpack/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:28
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/my-sites/site-settings/settings-performance/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/site-settings/settings-performance/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/my-sites/site-settings/settings-security/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/site-settings/settings-security/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:15`
- Path: `Automattic/wp-calypso/client/my-sites/site-settings/settings-writing/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/site-settings/settings-writing/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:15
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:35`
- Path: `Automattic/wp-calypso/client/my-sites/stats/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/stats/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:35
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: react/no-reference-type-as-default-prop
- Message: `onSelect has a/an arrow function as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of arrow function.`
- Path: `Automattic/wp-calypso/client/my-sites/stats/stats-module/select-dropdown.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/stats/stats-module/select-dropdown.jsx#L13-L13)
```jsx
 * Internal dependencies
 */
import SelectDropdown from 'calypso/components/select-dropdown';

const StatsModuleSelectDropdown = ( { initialSelected, options, onSelect = () => {} } ) => {
	return (
		<div className="stats-module__select-dropdown-wrapper">
			<SelectDropdown
				options={ options }
				onSelect={ onSelect }
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:7`
- Path: `Automattic/wp-calypso/client/my-sites/stats/stats-strings.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/stats/stats-strings.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:7
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:9`
- Path: `Automattic/wp-calypso/client/my-sites/theme/index.node.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/theme/index.node.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:9
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:19`
- Path: `Automattic/wp-calypso/client/my-sites/theme/index.web.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/theme/index.web.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:19
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:15`
- Path: `Automattic/wp-calypso/client/my-sites/themes/index.node.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/themes/index.node.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:15
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:19`
- Path: `Automattic/wp-calypso/client/my-sites/themes/index.web.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/themes/index.web.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:19
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:10`
- Path: `Automattic/wp-calypso/client/my-sites/types/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/types/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:10
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/reader/conversations/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/conversations/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:20`
- Path: `Automattic/wp-calypso/client/reader/conversations/stream.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/conversations/stream.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:20
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/reader/discover/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/discover/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/reader/following/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/following/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/reader/full-post/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/full-post/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:46`
- Path: `Automattic/wp-calypso/client/reader/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:46
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/reader/liked-stream/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/liked-stream/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:21`
- Path: `Automattic/wp-calypso/client/reader/list/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/list/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:21
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: react/no-reference-type-as-default-prop
- Message: `list has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `Automattic/wp-calypso/client/reader/list-manage/list-form.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/list-manage/list-form.jsx#L31-L31)
```jsx
	...INITIAL_UPDATE_FORM_STATE,
	slug: '',
};

export default function ListForm( { isCreateForm, isSubmissionDisabled, list = {}, onSubmit } ) {
	const translate = useTranslate();
	const [ formList, updateFormList ] = React.useState(
		isCreateForm ? INITIAL_CREATE_FORM_STATE : { ...INITIAL_UPDATE_FORM_STATE, ...list }
	);
	const onChange = ( event ) => {
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/reader/search/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/search/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:21`
- Path: `Automattic/wp-calypso/client/reader/tag-stream/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/reader/tag-stream/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:21
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:15`
- Path: `Automattic/wp-calypso/client/root.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/root.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:15
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:111`
- Path: `Automattic/wp-calypso/client/server/api/oauth.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/server/api/oauth.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:111
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:75`
- Path: `Automattic/wp-calypso/client/server/api/sign-in-with-apple.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/server/api/sign-in-with-apple.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:75
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:6`
- Path: `Automattic/wp-calypso/client/signup/index.node.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/signup/index.node.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:6
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/signup/index.web.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/signup/index.web.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:8`
- Path: `Automattic/wp-calypso/client/signup/test/mocks/lib/user/index.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/signup/test/mocks/lib/user/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:8
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:22`
- Path: `Automattic/wp-calypso/client/state/editor/contact-form/reducer.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/editor/contact-form/reducer.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:22
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:12`
- Path: `Automattic/wp-calypso/client/state/happychat/selectors/get-happychat-connection-status.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/happychat/selectors/get-happychat-connection-status.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:12
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:17`
- Path: `Automattic/wp-calypso/client/state/happychat/selectors/has-happychat-localized-support.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/happychat/selectors/has-happychat-localized-support.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:17
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:17`
- Path: `Automattic/wp-calypso/client/state/happychat/selectors/is-happychat-available.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/happychat/selectors/is-happychat-available.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:17
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/state/happychat/selectors/is-happychat-client-connected.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/happychat/selectors/is-happychat-client-connected.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/state/happychat/selectors/is-happychat-connection-uninitialized.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/happychat/selectors/is-happychat-connection-uninitialized.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:17`
- Path: `Automattic/wp-calypso/client/state/happychat/selectors/is-happychat-server-reachable.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/happychat/selectors/is-happychat-server-reachable.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:17
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:12`
- Path: `Automattic/wp-calypso/client/state/media/thunks/get-media-item.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/media/thunks/get-media-item.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:12
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:24`
- Path: `Automattic/wp-calypso/client/state/selectors/can-upgrade-to-plan.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/selectors/can-upgrade-to-plan.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:24
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:6`
- Path: `Automattic/wp-calypso/client/state/selectors/get-site-address-availability-pending.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/selectors/get-site-address-availability-pending.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:6
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:6`
- Path: `Automattic/wp-calypso/client/state/selectors/get-site-address-validation-error.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/selectors/get-site-address-validation-error.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:6
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:14`
- Path: `Automattic/wp-calypso/client/state/selectors/get-store-referrers-by-date.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/selectors/get-store-referrers-by-date.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:14
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:13`
- Path: `Automattic/wp-calypso/client/state/selectors/get-store-referrers-by-referrer.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/selectors/get-store-referrers-by-referrer.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:13
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:21`
- Path: `Automattic/wp-calypso/client/state/selectors/get-upgrade-plan-slug-from-path.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/selectors/get-upgrade-plan-slug-from-path.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:21
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:18`
- Path: `Automattic/wp-calypso/client/state/selectors/is-site-upgradeable.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/state/selectors/is-site-upgradeable.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:18
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:6`
- Path: `Automattic/wp-calypso/packages/i18n-calypso/src/use-translate.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/packages/i18n-calypso/src/use-translate.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:6
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:7`
- Path: `Automattic/wp-calypso/packages/popup-monitor/src/emitter.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/packages/popup-monitor/src/emitter.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:7
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:33`
- Path: `Automattic/wp-calypso/packages/wpcom.js/src/lib/util/runtime-builder.js`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/packages/wpcom.js/src/lib/util/runtime-builder.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:33
    at isReactComponentName (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:24:15)
    at FunctionDeclaration (<removed-path>/eslint-plugin-react/lib/rules/no-reference-type-as-default-prop.js:115:12)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:254:26)
    at NodeEventGenerator.applySelectors (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:283:22)
    at NodeEventGenerator.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/node-event-generator.js:297:14)
    at CodePathAnalyzer.enterNode (<removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:711:23)
    at <removed-path>/eslint-plugin-react/node_modules/eslint/lib/linter/linter.js:952:32
```
