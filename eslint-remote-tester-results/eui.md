## Rule: react/no-reference-type-as-default-prop
- Message: `arrowProps has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `elastic/eui/packages/react-datepicker/src/calendar_container.jsx`
- [Link](https://github.com/elastic/eui/blob/HEAD/packages/react-datepicker/src/calendar_container.jsx#L7-L7)
```jsx

export default function CalendarContainer({
  className,
  children,
  arrowProps = {}
}) {
  return (
    <div className={className}>
      <div className="react-datepicker__triangle" {...arrowProps} />
      {children}
```
