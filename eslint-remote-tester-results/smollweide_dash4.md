## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `smollweide/dash4/packages/client/src/components/App/index.tsx`
- [Link](https://github.com/smollweide/dash4/blob/HEAD/packages/client/src/components/App/index.tsx#L35-L35)
```tsx
										<Route
											key={pathName}
											exact={index === 0}
											path={pathName}
											component={() => <Widgets tab={tab} />}
										/>
									);
								})}
						</Page>
					</>
```
