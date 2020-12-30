## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Nav" or memoize it.`
- Path: `adobe/react-spectrum/packages/dev/docs/src/Layout.js`
- [Link](https://github.com/adobe/react-spectrum/blob/HEAD/packages/dev/docs/src/Layout.js#L318-L331)
```js

  let title = currentParts.length > 1 ? dirToTitle(currentPageName) : 'React Spectrum';
  let currentPageIsIndex = isIndex.test(currentPageName);

  function SideNavItem({name, url, title, preRelease}) {
    const isCurrentPage = !currentPageIsIndex && name === currentPageName;
    return (
      <li className={clsx(sideNavStyles['spectrum-SideNav-item'], {[sideNavStyles['is-selected']]: isCurrentPage || (name === blogIndex && isBlog)})}>
        <a
          className={clsx(sideNavStyles['spectrum-SideNav-itemLink'], docStyles.sideNavItem)}
          href={url}
          aria-current={isCurrentPage ? 'page' : null}
          {...getAnchorProps(url)}>{title}
          <VersionBadge version={preRelease} />
        </a>
      </li>
    );
  }

  return (
    <nav className={docStyles.nav} aria-labelledby="nav-title-id">
      <header>
        {currentParts.length > 1 &&
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "BlogPostLayout" or memoize it.`
- Path: `adobe/react-spectrum/packages/dev/docs/src/Layout.js`
- [Link](https://github.com/adobe/react-spectrum/blob/HEAD/packages/dev/docs/src/Layout.js#L441-L447)
```js
  let components = mdxComponents;
  if (date) {
    components = {
      ...mdxComponents,
      h1: (props) => (
        <header className={docStyles.blogHeader}>
          {mdxComponents.h1(props)}
          {author && <address className={typographyStyles['spectrum-Body4']}>By <a rel="author" href={authorParts[2]} className={clsx(linkStyle['spectrum-Link'], docStyles.link)} {...getAnchorProps(authorParts[2])}>{authorParts[1]}</a></address>}
          <Time date={date} />
        </header>
      )
    };
  }

  return (
    <Layout {...props}>
```
