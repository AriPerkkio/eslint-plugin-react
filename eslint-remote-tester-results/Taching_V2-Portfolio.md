## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Blog" or memoize it.`
- Path: `Taching/V2-Portfolio/src/templates/blog.js`
- [Link](https://github.com/Taching/V2-Portfolio/blob/HEAD/src/templates/blog.js#L31-L35)
```js

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <BlogLayout>
      <Head title={props.data.contentfulBlogPost.title} />
```
