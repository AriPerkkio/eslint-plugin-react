## Rule: react/no-reference-type-as-default-prop
- Message: `buttonProps has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `grommet/grommet/src/js/components/Calendar/Calendar.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/Calendar/Calendar.js#L99-L99)
```js
  size,
  isInRange,
  isSelected,
  otherMonth,
  buttonProps = {},
}) => {
  return (
    <StyledDayContainer sizeProp={size} fillContainer={fill}>
      <CalendarDayButton fill={fill} {...buttonProps}>
        <StyledDay
```

## Rule: react/no-reference-type-as-default-prop
- Message: `columns has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `grommet/grommet/src/js/components/DataTable/DataTable.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/DataTable/DataTable.js#L41-L41)
```js

const DataTable = ({
  background,
  border,
  columns = [],
  data = [],
  fill,
  groupBy,
  onClickRow, // removing unknown DOM attributes
  onMore,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `data has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `grommet/grommet/src/js/components/DataTable/DataTable.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/DataTable/DataTable.js#L42-L42)
```js
const DataTable = ({
  background,
  border,
  columns = [],
  data = [],
  fill,
  groupBy,
  onClickRow, // removing unknown DOM attributes
  onMore,
  onSearch, // removing unknown DOM attributes
```

## Rule: react/no-reference-type-as-default-prop
- Message: `items has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `grommet/grommet/src/js/components/InfiniteScroll/InfiniteScroll.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/InfiniteScroll/InfiniteScroll.js#L18-L18)
```js
import { Box } from '../Box';

const InfiniteScroll = ({
  children,
  items = [],
  onMore,
  renderMarker,
  replace,
  show: showProp,
  step = 50,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `initialRange has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `grommet/grommet/src/js/components/RangeSelector/stories/Thin.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/RangeSelector/stories/Thin.js#L11-L11)
```js

const RANGE_MIN = 0;
const RANGE_MAX = 100;

function Thin({ initialRange = [0, 100], label }) {
  const [range, setRange] = useState(initialRange);

  return (
    <Box gap="small" pad="xlarge">
      {label ? <Text>{label}</Text> : null}
```

## Rule: react/no-reference-type-as-default-prop
- Message: `value has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `grommet/grommet/src/js/components/TextInput/stories/Tag.js`
- [Link](https://github.com/grommet/grommet/blob/HEAD/src/js/components/TextInput/stories/Tag.js#L34-L34)
```js
  }
  return tag;
};

const TagInput = ({ value = [], onAdd, onChange, onRemove, ...rest }) => {
  const [currentTag, setCurrentTag] = React.useState('');
  const [box, setBox] = React.useState();
  const boxRef = React.useCallback(setBox, []);

  const updateCurrentTag = event => {
```
