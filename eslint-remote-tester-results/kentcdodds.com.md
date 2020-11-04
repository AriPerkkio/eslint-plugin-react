## Rule: react/no-reference-type-as-default-prop
- Message: `onChange has a/an arrow function as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of arrow function.`
- Path: `kentcdodds/kentcdodds.com/src/components/countup-textarea.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/countup-textarea.js#L6-L6)
```js

function CountupTextarea({
  maxLength,
  defaultValue = '',
  onChange = () => {},
  wrapperClassName,
  ...rest
}) {
  const [length, setLength] = React.useState(defaultValue.length)
  function handleChange(e) {
```

## Rule: react/no-reference-type-as-default-prop
- Message: `subscribeForm has a/an JSX element as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of JSX element.`
- Path: `kentcdodds/kentcdodds.com/src/components/footer.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/footer.js#L12-L12)
```js
import Container from './container'

import Signature from '../images/signature.png'

const Footer = ({subscribeForm = <SubscribeForm />, maxWidth}) => (
  <footer
    css={css`
      background: ${theme.colors.purple_dark};
      color: white;
      margin-top: 70px;
```

## Rule: react/no-reference-type-as-default-prop
- Message: `onChange has a/an arrow function as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of arrow function.`
- Path: `kentcdodds/kentcdodds.com/src/components/forms/contact.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/forms/contact.js#L32-L32)
```js

function CountupTextarea({
  maxLength,
  defaultValue = '',
  onChange = () => {},
  wrapperClassName,
  ...rest
}) {
  const [length, setLength] = React.useState(defaultValue.length)
  function handleChange(e) {
```

## Rule: react/no-reference-type-as-default-prop
- Message: `tags has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `kentcdodds/kentcdodds.com/src/components/forms/subscribe.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/forms/subscribe.js#L178-L178)
```js

  return state
}

function Subscribe({style, tags = [], header = 'Join the Newsletter'}) {
  const [values, setValues] = React.useState()
  const {pending, response, error} = useFetch({
    url: `https://app.convertkit.com/forms/827139/subscriptions`,
    body: values,
  })
```

## Rule: react/no-reference-type-as-default-prop
- Message: `frontmatter has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `kentcdodds/kentcdodds.com/src/components/layout.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/layout.js#L179-L179)
```js

function Layout({
  headerLink,
  siteTitle = 'Kent C. Dodds',
  frontmatter = {},
  hero = <DefaultHero />,
  subscribeForm,
  children,
  dark,
  headerBg,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `hero has a/an JSX element as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of JSX element.`
- Path: `kentcdodds/kentcdodds.com/src/components/layout.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/layout.js#L180-L180)
```js
function Layout({
  headerLink,
  siteTitle = 'Kent C. Dodds',
  frontmatter = {},
  hero = <DefaultHero />,
  subscribeForm,
  children,
  dark,
  headerBg,
  headerColor,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `children has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `kentcdodds/kentcdodds.com/src/components/podcast/homeworks.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/podcast/homeworks.js#L7-L7)
```js
import * as React from 'react'
import IconHomework from '../../images/icons/homework.svg'
import theme from '../../../config/theme'

function Homework({children = [], ...props}) {
  const [homeworks, setHomeworks] = React.useState(
    typeof window === 'undefined'
      ? []
      : JSON.parse(localStorage.getItem('completed-homeworks')) || [],
  )
```

## Rule: react/no-reference-type-as-default-prop
- Message: `children has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `kentcdodds/kentcdodds.com/src/components/podcast/homeworks.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/podcast/homeworks.js#L64-L64)
```js
    </li>
  )
}

function Homeworks({children = []}) {
  return (
    <div
      css={{
        margin: '1rem 0 2rem 0',
        '.container': {
```

## Rule: react/no-reference-type-as-default-prop
- Message: `children has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `kentcdodds/kentcdodds.com/src/components/podcast/resources.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/podcast/resources.js#L5-L5)
```js
import * as React from 'react'
import {css} from '@emotion/core'
import externalLinkIcon from '../../images/icons/external-link.svg'

function Resources({children = []}) {
  return (
    <div
      css={css({
        li: {
          listStyleImage: `url(${externalLinkIcon})`,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `onChange has a/an arrow function as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of arrow function.`
- Path: `kentcdodds/kentcdodds.com/src/components/subject-selector.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/subject-selector.js#L6-L6)
```js

function SubjectSelector({
  options,
  noSelectionUi,
  onChange = () => {},
  ...rest
}) {
  const [value, setValue] = React.useState(
    rest.defaultValue || Object.keys(options)[0],
  )
```
