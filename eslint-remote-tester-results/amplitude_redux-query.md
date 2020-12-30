## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HomeSplash" or memoize it.`
- Path: `amplitude/redux-query/website/pages/en/index.js`
- [Link](https://github.com/amplitude/redux-query/blob/HEAD/website/pages/en/index.js#L24-L30)
```js
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HomeSplash" or memoize it.`
- Path: `amplitude/redux-query/website/pages/en/index.js`
- [Link](https://github.com/amplitude/redux-query/blob/HEAD/website/pages/en/index.js#L32-L36)
```js
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HomeSplash" or memoize it.`
- Path: `amplitude/redux-query/website/pages/en/index.js`
- [Link](https://github.com/amplitude/redux-query/blob/HEAD/website/pages/en/index.js#L38-L43)
```js
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HomeSplash" or memoize it.`
- Path: `amplitude/redux-query/website/pages/en/index.js`
- [Link](https://github.com/amplitude/redux-query/blob/HEAD/website/pages/en/index.js#L45-L51)
```js
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HomeSplash" or memoize it.`
- Path: `amplitude/redux-query/website/pages/en/index.js`
- [Link](https://github.com/amplitude/redux-query/blob/HEAD/website/pages/en/index.js#L53-L59)
```js
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Index" or memoize it.`
- Path: `amplitude/redux-query/website/pages/en/index.js`
- [Link](https://github.com/amplitude/redux-query/blob/HEAD/website/pages/en/index.js#L79-L83)
```js
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container id={props.id} background={props.background}>
        <GridBlock align="center" contents={props.children} layout={props.layout} />
      </Container>
    );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Index" or memoize it.`
- Path: `amplitude/redux-query/website/pages/en/index.js`
- [Link](https://github.com/amplitude/redux-query/blob/HEAD/website/pages/en/index.js#L85-L105)
```js
        <GridBlock align="center" contents={props.children} layout={props.layout} />
      </Container>
    );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            title: 'Simply Redux',
            content:
              "Follow best practices for storing and handling network state in Redux, with support for features like optimistic updates and cancellation. There's no magic here, just middleware, actions, selectors, and reducers.",
          },
          {
            title: 'Extensible',
            content:
              'Built to fit most use cases out-of-the-box, but can easily be extended with custom Redux middleware, UI integrations, and network interfaces.',
          },
          {
            title: 'Works Great with React',
            content:
              'With the provided React hooks and higher-order component in redux-query-react (optional), colocate data dependencies with your components and run requests when components mount or update.',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer lightBackground">
```
