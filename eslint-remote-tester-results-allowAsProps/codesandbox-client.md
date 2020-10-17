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
