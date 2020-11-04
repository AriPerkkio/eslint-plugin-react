## Rule: react/no-reference-type-as-default-prop
- Message: `style has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `reach/reach-ui/website/src/components/Layout.js`
- [Link](https://github.com/reach/reach-ui/blob/HEAD/website/src/components/Layout.js#L68-L68)
```js
    />
  );
}

function HamburgerButton({ style = {}, children, ...props }) {
  return (
    <button
      id="hamburger"
      style={{
        width: 40,
```

## Rule: react/no-reference-type-as-default-prop
- Message: `style has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `reach/reach-ui/website/src/components/Layout.js`
- [Link](https://github.com/reach/reach-ui/blob/HEAD/website/src/components/Layout.js#L126-L126)
```js
    </NavTag>
  );
}

function Footer({ style = {}, ...props }) {
  return (
    <footer
      style={{
        marginTop: 100,
        color: "hsla(0, 100%, 100%, 0.75)",
```

## Rule: react/no-reference-type-as-default-prop
- Message: `style has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `reach/reach-ui/website/src/components/Layout.js`
- [Link](https://github.com/reach/reach-ui/blob/HEAD/website/src/components/Layout.js#L144-L144)
```js
    </footer>
  );
}

function Header({ children, style = {}, ...props }) {
  return (
    <header style={{ flex: 1, ...style }} {...props}>
      <div style={{ padding: "30px 50px 20px 20px" }}>
        <Logo />
      </div>
```

## Rule: react/no-reference-type-as-default-prop
- Message: `style has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `reach/reach-ui/website/src/components/MdxPre.js`
- [Link](https://github.com/reach/reach-ui/blob/HEAD/website/src/components/MdxPre.js#L137-L137)
```js
    </CodeContext.Provider>
  );
}

function CodeBlock({ style = {}, ...props }) {
  let { code, language, theme } = useContext(CodeContext);

  return (
    <div {...props}>
      {/* <h4
```

## Rule: react/no-reference-type-as-default-prop
- Message: `meta has a/an array literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of array literal.`
- Path: `reach/reach-ui/website/src/components/SEO.js`
- [Link](https://github.com/reach/reach-ui/blob/HEAD/website/src/components/SEO.js#L6-L6)
```js
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description = "", lang = "en", meta = [], title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
```

## Rule: react/no-reference-type-as-default-prop
- Message: `style has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `reach/reach-ui/website/src/components/TOC.js`
- [Link](https://github.com/reach/reach-ui/blob/HEAD/website/src/components/TOC.js#L15-L15)
```js
    </nav>
  );
}

export function TOCList({ children, style = {}, ...props }) {
  return (
    <ul
      style={{
        display: "block",
        padding: 0,
```
