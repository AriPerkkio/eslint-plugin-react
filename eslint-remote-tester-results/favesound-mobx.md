## Rule: no-reference-type-as-default-prop
- Message: `Cannot read property 'type' of null
Occurred while linting <text>:4`
- Path: `rwieruch/favesound-mobx/src/components/FetchOnScroll/index.js`
- [Link](https://github.com/rwieruch/favesound-mobx/blob/HEAD/src/components/FetchOnScroll/index.js)
```js
TypeError: Cannot read property 'type' of null
Occurred while linting <text>:4
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
