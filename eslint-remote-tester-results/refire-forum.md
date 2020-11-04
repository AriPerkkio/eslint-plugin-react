## Rule: react/no-reference-type-as-default-prop
- Message: `styles has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `hoppula/refire-forum/src/Admin/SettingsModal.js`
- [Link](https://github.com/hoppula/refire-forum/blob/HEAD/src/Admin/SettingsModal.js#L25-L25)
```js
  hide,
  visible,
  width="medium",
  Footer=DefaultFooter,
  styles = {},
}) => {
  return (
    <Modal
      isOpen={visible}
      onCancel={hide}
```

## Rule: react/no-reference-type-as-default-prop
- Message: `nextThreads has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `hoppula/refire-forum/src/Board/NewThreadsAvailable.js`
- [Link](https://github.com/hoppula/refire-forum/blob/HEAD/src/Board/NewThreadsAvailable.js#L5-L5)
```js
import React from 'react'
import { styles } from 'refire-app'
import Color from 'color'

const NewThreadsAvailable = ({ threads, nextThreads = [], showNewThreads, styles }) => {
  const diff = nextThreads.length - threads.length
  const threadsWord = diff === 1 ? "thread" : "threads"
  if (!diff) {
    return <div />
  } else {
```
