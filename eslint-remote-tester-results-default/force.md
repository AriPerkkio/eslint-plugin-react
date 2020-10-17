## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ArtworksByFollwedArtists" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `artsy/force/src/desktop/apps/auction/components/artwork_browser/ArtworksByFollowedArtists.js`
- [Link](https://github.com/artsy/force/blob/HEAD/src/desktop/apps/auction/components/artwork_browser/ArtworksByFollowedArtists.js#L31-L39)
```js
          items={saleArtworksByFollowedArtists}
          getAspectRatio={({ artwork }) => {
            return get(artwork, "images.0.aspect_ratio")
          }}
          getDisplayComponent={({ artwork }) => {
            return (
              <div onClick={() => (window.location = artwork.href)}>
                <RelayStubProvider>
                  <Artwork artwork={artwork} />
                </RelayStubProvider>
              </div>
            )
          }}
        />
      ) : (
        // Desktop
        <ArtworkRail
          title="Works By Artists You Follow"
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ArtworksByFollwedArtists" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `artsy/force/src/desktop/apps/auction/components/artwork_browser/ArtworksByFollowedArtists.js`
- [Link](https://github.com/artsy/force/blob/HEAD/src/desktop/apps/auction/components/artwork_browser/ArtworksByFollowedArtists.js#L46-L52)
```js
        // Desktop
        <ArtworkRail
          title="Works By Artists You Follow"
          artworks={saleArtworksByFollowedArtists}
          getDisplayComponent={artwork => {
            return (
              <RelayStubProvider>
                <GridArtwork saleArtwork={artwork} />
              </RelayStubProvider>
            )
          }}
          style={{
            height: 515,
          }}
        />
      )}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PromotedSaleArtworks" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `artsy/force/src/desktop/apps/auction/components/artwork_browser/PromotedSaleArtworks.js`
- [Link](https://github.com/artsy/force/blob/HEAD/src/desktop/apps/auction/components/artwork_browser/PromotedSaleArtworks.js#L31-L39)
```js
          items={promotedSaleArtworks}
          getAspectRatio={({ artwork }) => {
            return get(artwork, "images.0.aspect_ratio")
          }}
          getDisplayComponent={({ artwork }) => {
            return (
              <div onClick={() => (window.location = artwork.href)}>
                <RelayStubProvider>
                  <Artwork artwork={artwork} />
                </RelayStubProvider>
              </div>
            )
          }}
        />
      ) : (
        // Desktop
        <ArtworkRail
          title="Buy now"
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PromotedSaleArtworks" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `artsy/force/src/desktop/apps/auction/components/artwork_browser/PromotedSaleArtworks.js`
- [Link](https://github.com/artsy/force/blob/HEAD/src/desktop/apps/auction/components/artwork_browser/PromotedSaleArtworks.js#L46-L54)
```js
        // Desktop
        <ArtworkRail
          title="Buy now"
          artworks={promotedSaleArtworks}
          getDisplayComponent={({ artwork }) => {
            return (
              <div onClick={() => (window.location = artwork.href)}>
                <RelayStubProvider>
                  <Artwork artwork={artwork} />
                </RelayStubProvider>
              </div>
            )
          }}
        />
      )}
    </Fragment>
  )
}
```

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
