## Rule: react/no-reference-type-as-default-prop
- Message: `initialValues has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `kentcdodds/react-testing-library-course/src/app-reach-router.js`
- [Link](https://github.com/kentcdodds/react-testing-library-course/blob/HEAD/src/app-reach-router.js#L7-L7)
```js
import {submitForm} from './api'

const MultiPageForm = React.createContext()

function MultiPageFormProvider({initialValues = {}, ...props}) {
  const [initState] = React.useState(initialValues)
  const [form, setFormValues] = React.useReducer(
    (s, a) => ({...s, ...a}),
    initState,
  )
```

## Rule: react/no-reference-type-as-default-prop
- Message: `initialValues has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `kentcdodds/react-testing-library-course/src/app.js`
- [Link](https://github.com/kentcdodds/react-testing-library-course/blob/HEAD/src/app.js#L7-L7)
```js
import {submitForm} from './api'

const MultiPageForm = React.createContext()

function MultiPageFormProvider({initialValues = {}, ...props}) {
  const [initState] = React.useState(initialValues)
  const [form, setFormValues] = React.useReducer(
    (s, a) => ({...s, ...a}),
    initState,
  )
```
