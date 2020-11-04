## Rule: react/no-reference-type-as-default-prop
- Message: `initialState has a/an object literal as default prop.
This could lead to potential infinite render loop in React.
Use a variable reference instead of object literal.`
- Path: `jeffersonRibeiro/react-shopping-cart/src/Root.js`
- [Link](https://github.com/jeffersonRibeiro/react-shopping-cart/blob/HEAD/src/Root.js#L6-L6)
```js
import { Provider } from 'react-redux';

import store from './services/store';

const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);

export default Root;

```

## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:7`
- Path: `jeffersonRibeiro/react-shopping-cart/src/services/cart/reducer.js`
- [Link](https://github.com/jeffersonRibeiro/react-shopping-cart/blob/HEAD/src/services/cart/reducer.js)
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
Occurred while linting <text>:7`
- Path: `jeffersonRibeiro/react-shopping-cart/src/services/filters/reducer.js`
- [Link](https://github.com/jeffersonRibeiro/react-shopping-cart/blob/HEAD/src/services/filters/reducer.js)
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
Occurred while linting <text>:7`
- Path: `jeffersonRibeiro/react-shopping-cart/src/services/shelf/reducer.js`
- [Link](https://github.com/jeffersonRibeiro/react-shopping-cart/blob/HEAD/src/services/shelf/reducer.js)
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
Occurred while linting <text>:7`
- Path: `jeffersonRibeiro/react-shopping-cart/src/services/sort/reducer.js`
- [Link](https://github.com/jeffersonRibeiro/react-shopping-cart/blob/HEAD/src/services/sort/reducer.js)
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
Occurred while linting <text>:13`
- Path: `jeffersonRibeiro/react-shopping-cart/src/services/total/reducer.js`
- [Link](https://github.com/jeffersonRibeiro/react-shopping-cart/blob/HEAD/src/services/total/reducer.js)
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
