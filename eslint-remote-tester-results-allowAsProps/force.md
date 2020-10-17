## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "BidStatus" or memoize it.`
- Path: `artsy/force/src/desktop/components/bid_status/react.js`
- [Link](https://github.com/artsy/force/blob/HEAD/src/desktop/components/bid_status/react.js#L20-L26)
```js
  const reserveNotMet = saleArtwork.reserve_status === "reserve_not_met"
  const isWinning = leadingBidder && !reserveNotMet
  const isReserve = leadingBidder && reserveNotMet

  const Arrow = (
    { direction } // eslint-disable-line
  ) => (
    <i className={b(`arrow-${direction}`)}>
      <BidStatusArrowIcon />
    </i>
  )

  return (
    <div className={b()}>
      {(() => {
        if (isWinning) {
```
