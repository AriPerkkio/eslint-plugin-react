## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "StandardsSection" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `yahoo/react-intl/website/src/pages/index.js`
- [Link](https://github.com/yahoo/react-intl/blob/HEAD/website/src/pages/index.js#L171-L175)
```js
        <FormattedMessage
          id="standards-desc"
          defaultMessage="FormatJS is aligned with: <ecma>ECMAScript Internationalization API (ECMA-402)</ecma>, <cldr>Unicode CLDR</cldr>, and <icu>ICU Message syntax</icu>. By building on these industry standards, FormatJS leverages APIs in modern browsers and works with the message syntax used by professional translators."
          values={{
            ecma: chunks => (
              <a href="https://www.ecma-international.org/ecma-402/">
                {chunks}
              </a>
            ),
            cldr: chunks => <a href="http://cldr.unicode.org/">{chunks}</a>,
            icu: chunks => (
              <a href="http://userguide.icu-project.org/formatparse/messages">
                {chunks}
              </a>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "StandardsSection" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `yahoo/react-intl/website/src/pages/index.js`
- [Link](https://github.com/yahoo/react-intl/blob/HEAD/website/src/pages/index.js#L176-L176)
```js
              <a href="https://www.ecma-international.org/ecma-402/">
                {chunks}
              </a>
            ),
            cldr: chunks => <a href="http://cldr.unicode.org/">{chunks}</a>,
            icu: chunks => (
              <a href="http://userguide.icu-project.org/formatparse/messages">
                {chunks}
              </a>
            ),
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "StandardsSection" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `yahoo/react-intl/website/src/pages/index.js`
- [Link](https://github.com/yahoo/react-intl/blob/HEAD/website/src/pages/index.js#L177-L181)
```js
                {chunks}
              </a>
            ),
            cldr: chunks => <a href="http://cldr.unicode.org/">{chunks}</a>,
            icu: chunks => (
              <a href="http://userguide.icu-project.org/formatparse/messages">
                {chunks}
              </a>
            ),
          }}
        />
      </p>
    </div>
  )
```
