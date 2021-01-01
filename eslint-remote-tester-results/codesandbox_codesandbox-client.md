## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SignInBanner" or memoize it.`
- Path: `codesandbox/codesandbox-client/packages/app/src/app/pages/Sandbox/Editor/Workspace/SignInBanner.tsx`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/app/src/app/pages/Sandbox/Editor/Workspace/SignInBanner.tsx#L11-L27)
```tsx
export const SignInBanner = ({ theme }) => {
  const { actions } = useOvermind();
  const dark = theme.type !== 'light';

  const Checkmark = ({ children }) => (
    <Text
      block
      marginBottom={1}
      css={css({
        color: 'grays.200',
        lineHeight: '150%',
        span: {
          color: 'blues.500',
          paddingRight: 1,
        },
      })}
    >
      <span>✓</span>
      {children}
    </Text>
  );

  return (
    <Element
      css={css({
        fontFamily: 'Inter, Roboto, sans-serif',
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L201-L205)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L206-L208)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L211-L215)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L216-L216)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L226-L230)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L231-L235)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L238-L247)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L248-L256)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L266-L270)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L271-L271)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L274-L278)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L279-L279)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L282-L286)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L287-L287)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L290-L294)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L295-L295)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L298-L302)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L303-L303)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L313-L317)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L318-L320)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L323-L327)
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
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/Navigation/index.js#L328-L328)
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
- Message: `Declare this component outside parent component "TeamMember" or memoize it.`
- Path: `codesandbox/codesandbox-client/packages/homepage/src/components/TeamMember.js`
- [Link](https://github.com/codesandbox/codesandbox-client/blob/HEAD/packages/homepage/src/components/TeamMember.js#L180-L187)
```js
  const person = people.find(p =>
    noAccentsName(p.name.toLocaleLowerCase()).includes(name.toLocaleLowerCase())
  );

  const Wrapper = ({ children }) =>
    noHover ? (
      children
    ) : (
      <PersonWrapper personName={person.name} team={person.team}>
        {children}
      </PersonWrapper>
    );

  if (person) {
    return (
      <Wrapper>
        <Peep
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
