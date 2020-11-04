## Rule: react/no-reference-type-as-default-prop
- Message: `ids has a/an array literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of array literal.`
- Path: `1ven/do/client/components/Boards.js`
- [Link](https://github.com/1ven/do/blob/HEAD/client/components/Boards.js#L7-L7)
```js
import BoardTileContainer from '../containers/BoardTileContainer';
import BoardsSpinner from './BoardsSpinner';

function Boards({
  ids = [],
  spinner,
  error,
}) {
  return (
    <div className="b-boards">
```

## Rule: react/no-reference-type-as-default-prop
- Message: `ids has a/an array literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of array literal.`
- Path: `1ven/do/client/components/Lists.js`
- [Link](https://github.com/1ven/do/blob/HEAD/client/components/Lists.js#L6-L6)
```js
import ListContainer from '../containers/ListContainer';
import Masonry from 'react-masonry-component';

function Lists({
  ids = [],
  boardId,
}) {
  return (
    <Masonry className="b-lists">
      {ids.map((id, i) => (
```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:57`
- Path: `1ven/do/client/containers/forms/BoardForm.js`
- [Link](https://github.com/1ven/do/blob/HEAD/client/containers/forms/BoardForm.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:57
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
Occurred while linting <text>:47`
- Path: `1ven/do/client/containers/forms/ListForm.js`
- [Link](https://github.com/1ven/do/blob/HEAD/client/containers/forms/ListForm.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:47
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
Occurred while linting <text>:41`
- Path: `1ven/do/client/routes.js`
- [Link](https://github.com/1ven/do/blob/HEAD/client/routes.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:41
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
