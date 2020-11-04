## Rule: react/no-reference-type-as-default-prop
- Message: `arrowProps has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `Hacker0x01/react-datepicker/src/calendar_container.jsx`
- [Link](https://github.com/Hacker0x01/react-datepicker/blob/HEAD/src/calendar_container.jsx#L8-L8)
```jsx
export default function CalendarContainer({
  className,
  children,
  showPopperArrow,
  arrowProps = {}
}) {
  return (
    <div className={className}>
      {showPopperArrow && (
        <div className="react-datepicker__triangle" {...arrowProps} />
```
