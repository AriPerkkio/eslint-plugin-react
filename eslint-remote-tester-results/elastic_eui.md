## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `elastic/eui/src-docs/src/services/playground/playground.js`
- [Link](https://github.com/elastic/eui/blob/HEAD/src-docs/src/services/playground/playground.js#L32-L79)
```js

    return format(newCode.trim(), ' '.repeat(4));
  };

  const Playground = () => {
    const [isGhost, setGhost] = useState(false);
    const params = useView(config);

    useEffect(() => {
      const { state } = params.knobProps;
      if (setGhostBackground) {
        let needGhostTheme = false;
        Object.keys(setGhostBackground).forEach((name) => {
          if (state[name].value === setGhostBackground[name])
            needGhostTheme = true;
        });
        setGhost(needGhostTheme);
      }
    }, [params.knobProps]);

    const compilerClasses = classNames(
      'playgroundCompiler',
      {
        playgroundCompiler__ghostBackground: isGhost,
      },
      playgroundClassName
    );

    return (
      <React.Fragment>
        <EuiTitle>
          <h3>{config.componentName}</h3>
        </EuiTitle>
        <div className={compilerClasses}>
          <Compiler
            {...params.compilerProps}
            minHeight={62}
            placeholder={Placeholder}
          />
        </div>
        <EuiSpacer />

        <EuiCodeBlock language="html" fontSize="m" paddingSize="m" isCopyable>
          {getSnippet(params.editorProps.code)}
        </EuiCodeBlock>
        <EuiSpacer />

        <Knobs {...params.knobProps} />
        <EuiSpacer />
      </React.Fragment>
    );
  };

  return <Playground />;
};

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `elastic/eui/src-docs/src/views/tables/footer/footer.js`
- [Link](https://github.com/elastic/eui/blob/HEAD/src-docs/src/views/tables/footer/footer.js#L133-L135)
```js
    },
    {
      field: 'github',
      name: 'Github',
      footer: ({ items }) => (
        <span>{uniqBy(items, 'github').length} users</span>
      ),
      render: (username) => (
        <EuiLink href={`https://github.com/${username}`} target="_blank">
          {username}
        </EuiLink>
      ),
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `elastic/eui/src-docs/src/views/tables/footer/footer.js`
- [Link](https://github.com/elastic/eui/blob/HEAD/src-docs/src/views/tables/footer/footer.js#L152-L154)
```js
    },
    {
      field: 'nationality',
      name: 'Nationality',
      footer: ({ items }) => (
        <span>{uniqBy(items, 'nationality').length} countries</span>
      ),
      render: (countryCode) => {
        const country = store.getCountry(countryCode);
        return `${country.flag} ${country.name}`;
      },
    },
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `elastic/eui/src-docs/src/views/tables/footer/footer.js`
- [Link](https://github.com/elastic/eui/blob/HEAD/src-docs/src/views/tables/footer/footer.js#L163-L165)
```js
    },
    {
      field: 'online',
      name: 'Online',
      footer: ({ items }) => (
        <span>{items.filter((i) => !!i.online).length} online</span>
      ),
      dataType: 'boolean',
      render: (online) => renderStatus(online),
      sortable: true,
      hideForMobile: true,
    },
```
