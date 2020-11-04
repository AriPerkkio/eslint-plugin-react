## Rule: react/no-reference-type-as-default-prop
- Message: `urlParams has a/an object literal as default prop.
This could lead to potential infinite render loop in React. 
Use a variable reference instead of object literal.`
- Path: `getguesstimate/guesstimate-app/src/components/spaces/cards/index.js`
- [Link](https://github.com/getguesstimate/guesstimate-app/blob/HEAD/src/components/spaces/cards/index.js#L59-L59)
```js
    </div>
  </div>
)

export const SpaceCard = ({space, showPrivacy, size, urlParams = {}}) => {
  const hasName = !_.isEmpty(space.name)
  const hasOrg = _.has(space, 'organization.name')

  const owner = hasOrg ? space.organization : space.user
  const ownerUrl = hasOrg ? Organization.url(space.organization) : User.url(space.user)
```
