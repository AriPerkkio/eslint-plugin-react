## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ContentfulBlogpost" or memoize it.`
- Path: `slk333/aweb33/src/templates/blogpost.js`
- [Link](https://github.com/slk333/aweb33/blob/HEAD/src/templates/blogpost.js#L25-L29)
```js


    const options = {
      renderNode: {
        'embedded-asset-block': node => {
          const alt = node.data.target.fields.title['en-US']
          const url = node.data.target.fields.file['en-US'].url
          return <img src={url} alt={alt} />
        },
      },
    }


  return (
```
