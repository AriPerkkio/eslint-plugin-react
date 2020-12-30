## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `mbrevda/react-image/site/TransitionDemo.js`
- [Link](https://github.com/mbrevda/react-image/blob/HEAD/site/TransitionDemo.js#L47-L58)
```js
        src={`${window.location.href}cat.jpg?rand=${rand}`}
        width="320"
        height="240"
        key={rand}
        container={(children) => {
          return (
            <ReactCSSTransitionReplace
              transitionEnterTimeout={fadeIn * 10}
              transitionLeaveTimeout={fadeOut}
              transitionName="fade-wait"
              changeWidth={true}
            >
              {children}
            </ReactCSSTransitionReplace>
          )
        }}
      />
    )}
  </DemoContainer>
)

```
