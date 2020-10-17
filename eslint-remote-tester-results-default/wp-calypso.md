## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Task" or memoize it.`
- Path: `Automattic/wp-calypso/client/my-sites/customer-home/cards/tasks/task.jsx`
- [Link](https://github.com/Automattic/wp-calypso/blob/HEAD/client/my-sites/customer-home/cards/tasks/task.jsx#L94-L100)
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

	return (
		<div className={ classnames( 'task', { 'is-loading': isLoading } ) }>
			{ isLoading && <Spinner /> }
			<div className="task__text">
```
