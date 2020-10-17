## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ScheduledWorkshop" or memoize it.`
- Path: `kentcdodds/kentcdodds.com/src/components/workshops/scheduled-workshop.js`
- [Link](https://github.com/kentcdodds/kentcdodds.com/blob/HEAD/src/components/workshops/scheduled-workshop.js#L39-L67)
```js
      (workshopTech === 'javascript' && `${jsIcon}`) ||
      (workshopTech === 'testing' && `${testingIcon}`)
    )
  }
  const Stripe = props => (
    <div
      css={css`
        ${discount
          ? `
          display: block;
          position: absolute;
          width: 70px;
          height: 70px;
          background-image: url(${discountStripe});
          background-size: 100% 100%;
          background-repeat: no-repeat;
          margin-top: -42px;
          margin-left: -42px;
          ${bpMaxSM} {
            margin-top: -21px;
            margin-left: -21px;
            width: 40px;
            height: 40px;
            h1 {
              margin: 0 auto;
            }
          }
        `
          : `display: none;`}
      `}
      {...props}
    />
  )

  return (
    <div
      css={css`
        ${styles}
```
