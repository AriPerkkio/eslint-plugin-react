## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `mattermost/mattermost-webapp/components/post_markdown/system_message_helpers.jsx`
- [Link](https://github.com/mattermost/mattermost-webapp/blob/HEAD/components/post_markdown/system_message_helpers.jsx#L197-L197)
```jsx
                    values={{
                        username,
                        old: oldHeader,
                        new: newHeader,
                        strong: (chunks) => (<strong>{chunks}</strong>),
                        br: (x) => (<><br/>{x}</>),
                    }}
                />
            );
        }
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `mattermost/mattermost-webapp/components/post_markdown/system_message_helpers.jsx`
- [Link](https://github.com/mattermost/mattermost-webapp/blob/HEAD/components/post_markdown/system_message_helpers.jsx#L198-L198)
```jsx
                        username,
                        old: oldHeader,
                        new: newHeader,
                        strong: (chunks) => (<strong>{chunks}</strong>),
                        br: (x) => (<><br/>{x}</>),
                    }}
                />
            );
        }

```
