## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Markdown" or memoize it.`
- Path: `codesandbox/codesandbox-client/packages/app/src/app/components/Markdown/index.tsx`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/app/src/app/components/Markdown/index.tsx#L63-L63)
```tsx
        link: LinkElement,
        linkReference: props => <Link {...props}>{props.children}</Link>,
        image: Image,
        imageReference: Image,
        thematicBreak: () => null,
        inlineCode: InlineCode,
      }}
    />
  </Element>
);
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Results" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/app/src/app/pages/Search/Results/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/app/src/app/pages/Search/Results/index.js#L21-L36)
```js
    <ResultInfo />

    <Margin bottom={2}>
      <Hits
        hitComponent={({ hit }) => (
          <SandboxCard
            selectSandbox={() => selectSandbox(hit)}
            noHeight
            sandbox={{
              ...hit,
              title: getSandboxName({
                id: hit.objectID,
                alias: hit.alias,
                git: hit.git,
                title: hit.title,
              }),
              id: hit.objectID,
            }}
          />
        )}
      />
    </Margin>

    <Centered horizontal>
      <Pagination />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L40-L57)
```js
  const [openedNav, setOpenedNav] = useState();
  const [hasOpened, setHasOpened] = useState(false);
  const muted = useTheme().homepage.muted;

  const DownButton = () => (
    <svg
      css={`
        margin-left: 0.25rem;
        top: -1px;
        position: relative;
      `}
      width={6}
      height={4}
      fill="none"
      viewBox="0 0 6 4"
    >
      <path
        fill={muted}
        d="M.471 0L0 .471 2.828 3.3 5.657.47 5.185 0 2.828 2.357.471 0z"
      />
    </svg>
  );

  useEffect(() => {
    if (openedNav) {
      setHasOpened(true);
    } else {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L195-L199)
```js
                  hasOpened={hasOpened}
                  name="resources"
                  components={[
                    {
                      Icon: () => (
                        <Link to="/docs/start" title="Documentation">
                          <DocsIcon />
                        </Link>
                      ),
                      Label: () => (
                        <a href="https://codesandbox.io/docs">Documentation</a>
                      ),
                    },
                    {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L200-L202)
```js
                        <Link to="/docs/start" title="Documentation">
                          <DocsIcon />
                        </Link>
                      ),
                      Label: () => (
                        <a href="https://codesandbox.io/docs">Documentation</a>
                      ),
                    },
                    {
                      Icon: () => (
                        <Link to="/blog">
                          <BlogIcon />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L205-L209)
```js
                        <a href="https://codesandbox.io/docs">Documentation</a>
                      ),
                    },
                    {
                      Icon: () => (
                        <Link to="/blog">
                          <BlogIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/blog">Blog</Link>,
                    },
                  ]}
                />
                <SubNav
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L210-L210)
```js
                        <Link to="/blog">
                          <BlogIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/blog">Blog</Link>,
                    },
                  ]}
                />
                <SubNav
                  openedNav={openedNav}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L220-L224)
```js
                  hasOpened={hasOpened}
                  name="support"
                  components={[
                    {
                      Icon: () => (
                        <a href="mailto:hello@codesandbox.io" title="Support">
                          <SupportIcon />
                        </a>
                      ),
                      Label: () => (
                        <a href="mailto:hello@codesandbox.io">
                          Contact Support
                        </a>
                      ),
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L225-L229)
```js
                        <a href="mailto:hello@codesandbox.io" title="Support">
                          <SupportIcon />
                        </a>
                      ),
                      Label: () => (
                        <a href="mailto:hello@codesandbox.io">
                          Contact Support
                        </a>
                      ),
                    },
                    {
                      Icon: () => (
                        <a
                          target="_blank"
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L232-L241)
```js
                        </a>
                      ),
                    },
                    {
                      Icon: () => (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://status.codesandbox.io"
                          title="Status"
                        >
                          <StatusIcon />
                        </a>
                      ),
                      Label: () => (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://status.codesandbox.io"
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L242-L250)
```js
                        >
                          <StatusIcon />
                        </a>
                      ),
                      Label: () => (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://status.codesandbox.io"
                        >
                          Status
                        </a>
                      ),
                    },
                  ]}
                />
                <SubNav
                  openedNav={openedNav}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L260-L264)
```js
                  hasOpened={hasOpened}
                  name="features"
                  components={[
                    {
                      Icon: () => (
                        <Link to="/ide">
                          <IDEIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/ide">IDE</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/embeds">
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L265-L265)
```js
                        <Link to="/ide">
                          <IDEIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/ide">IDE</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/embeds">
                          <EmbedIcon />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L268-L272)
```js
                      ),
                      Label: () => <Link to="/ide">IDE</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/embeds">
                          <EmbedIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/embeds">Embed</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/ci">
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L273-L273)
```js
                        <Link to="/embeds">
                          <EmbedIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/embeds">Embed</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/ci">
                          <CIIcon />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L276-L280)
```js
                      ),
                      Label: () => <Link to="/embeds">Embed</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/ci">
                          <CIIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/ci">CI</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/team">
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L281-L281)
```js
                        <Link to="/ci">
                          <CIIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/ci">CI</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/team">
                          <TeamsIcon />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L284-L288)
```js
                      ),
                      Label: () => <Link to="/ci">CI</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/team">
                          <TeamsIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/team">Teams</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/changelog">
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L289-L289)
```js
                        <Link to="/team">
                          <TeamsIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/team">Teams</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/changelog">
                          <NewIcon />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L292-L296)
```js
                      ),
                      Label: () => <Link to="/team">Teams</Link>,
                    },
                    {
                      Icon: () => (
                        <Link to="/changelog">
                          <NewIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/changelog">What's New</Link>,
                    },
                  ]}
                />
                <SubNav
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L297-L297)
```js
                        <Link to="/changelog">
                          <NewIcon />
                        </Link>
                      ),
                      Label: () => <Link to="/changelog">What's New</Link>,
                    },
                  ]}
                />
                <SubNav
                  openedNav={openedNav}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L307-L311)
```js
                  hasOpened={hasOpened}
                  name="explore"
                  components={[
                    {
                      Icon: () => (
                        <Link to="/explore">
                          <HighlightedICon />
                        </Link>
                      ),
                      Label: () => (
                        <Link to="/explore">Featured Sandboxes</Link>
                      ),
                    },
                    {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L312-L314)
```js
                        <Link to="/explore">
                          <HighlightedICon />
                        </Link>
                      ),
                      Label: () => (
                        <Link to="/explore">Featured Sandboxes</Link>
                      ),
                    },
                    {
                      Icon: () => (
                        <a href="/search">
                          <SearchIcon />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L317-L321)
```js
                        <Link to="/explore">Featured Sandboxes</Link>
                      ),
                    },
                    {
                      Icon: () => (
                        <a href="/search">
                          <SearchIcon />
                        </a>
                      ),
                      Label: () => <a href="/search">Search Sandboxes</a>,
                    },
                  ]}
                />
              </motion.div>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Navigation" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/Navigation/index.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L322-L322)
```js
                        <a href="/search">
                          <SearchIcon />
                        </a>
                      ),
                      Label: () => <a href="/search">Search Sandboxes</a>,
                    },
                  ]}
                />
              </motion.div>
            ) : null}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/templates/feature.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/templates/feature.js#L45-L77)
```js
      html,
    },
  },
}) => {
  const TweetSide = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      css={`
        ${props => props.theme.breakpoints.md} {
          grid-row: 1;
        }
      `}
      style={{
        height: '100%',
        display: 'flex',
      }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
    >
      <Tweet reverse={coverReversed}>
        "{tweetText}"
        <User>
          <Avatar
            src={`https://twitter-avatar-csb.vercel.app/${tweetHandle}`}
            alt={tweetName}
          />
          <div>
            <p>{tweetName}</p>
            <p>{tweetJob}</p>
          </div>
        </User>
      </Tweet>
    </motion.div>
  );

  const ImageSide = () => (
    <motion.div
      initial={{ opacity: 0, y: 140 }}
      animate={{ opacity: 1, y: 0 }}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/templates/feature.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/templates/feature.js#L79-L90)
```js
      </Tweet>
    </motion.div>
  );

  const ImageSide = () => (
    <motion.div
      initial={{ opacity: 0, y: 140 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
    >
      <img className="hero-image" src={coverImage.publicURL} alt={title} />
    </motion.div>
  );
  return (
    <Layout>
      <TitleAndMetaTags title={`${title} - CodeSandbox`} />
      <Wrapper>
        <Title>{title}</Title>
```
