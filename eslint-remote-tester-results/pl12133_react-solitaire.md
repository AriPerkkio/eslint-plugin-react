## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `pl12133/react-solitaire/src/components/Table/index.js`
- [Link](https://github.com/pl12133/react-solitaire/blob/HEAD/src/components/Table/index.js#L268-L281)
```js
  }

  cardSlice (location, offsetLeft = 0, offsetTop = 0, offsetWidth = 0, offsetHeight = 0) {
    let cardMap = (offsetLeft = 0, offsetTop = 0, offsetWidth = 0, offsetHeight = 0) => {
      return (card, index) => {
        return (
          <Card
            name={card.name}
            key={card.name}
            flipped={card.flipped}
            offsetLeft={index * offsetLeft}
            offsetTop={index * offsetTop}
            offsetWidth={offsetWidth}
            offsetHeight={offsetHeight}
            handleBeginDragDrop={this.handleBeginDragDrop}
          />
        );
      };
    };
    let { cards } = this.props;
    let { offsetWidth: cardWidth, offsetHeight: cardHeight } = this.getCardDimensions();
    offsetWidth = offsetWidth || cardWidth;
    offsetHeight = offsetHeight || cardHeight;
```
