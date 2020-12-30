## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Task" or memoize it.`
- Path: `Automattic/wp-calypso/client/my-sites/customer-home/cards/tasks/task.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/customer-home/cards/tasks/task.jsx#L99-L105)
```jsx
			)
		);
	};

	const ActionButtonWithStats = ( { children } ) => {
		return (
			<div onClick={ startTask } role="presentation">
				{ children }
			</div>
		);
	};

	const renderAction = () => {
		if ( ! hasAction ) {
			return null;
		}
```
