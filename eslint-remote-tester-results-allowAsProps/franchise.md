## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Configure" or memoize it.`
- Path: `HVF/franchise/src/db/carto.js`
- [Link](https://github.com/HVF/franchise/blob/HEAD/src/db/carto.js#L48-L68)
```js

        // let credentials = (config.carto && config.carto.credentials) || {}
        let credentials = (config.credentials && config.credentials.carto) || {}

        const Field = (type, icon, className = '') => (
            <div className="pt-input-group">
                {icon ? <span className={className + ' pt-icon pt-icon-' + icon} /> : null}
                <input
                    type={type === 'password' ? 'password' : 'text'}
                    disabled={connect.status == 'connected' || connect.status === 'connecting'}
                    className="pt-input"
                    value={credentials[type] || ''}
                    onChange={(e) =>
                        State.apply(
                            'config',
                            'credentials',
                            'carto',
                            type,
                            U.replace(e.target.value)
                        )
                    }
                    placeholder={credentialHints[type]}
                />
            </div>
        )

        return (
            <div>
                <img src={require('./img/carto.png')} style={{ height: 40 }} />
                <div className="pg-form">
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Configure" or memoize it.`
- Path: `HVF/franchise/src/db/graphql/index.js`
- [Link](https://github.com/HVF/franchise/blob/HEAD/src/db/graphql/index.js#L34-L54)
```js
        }

        let credentials = (config.credentials && config.credentials.graphql) || {}

        const Field = (type, icon, className = '') => (
            <div className="pt-input-group">
                {icon ? <span className={className + ' pt-icon pt-icon-' + icon} /> : null}
                <input
                    type={type === 'password' ? 'password' : 'text'}
                    disabled={connect.status == 'connected' || connect.status === 'connecting'}
                    className="pt-input"
                    value={credentials[type] || ''}
                    onChange={(e) =>
                        State.apply(
                            'config',
                            'graphql',
                            'credentials',
                            type,
                            U.replace(e.target.value)
                        )
                    }
                    placeholder={credentialHints[type]}
                />
            </div>
        )

        return (
            <div>
                <img src={require('../img/graphql.svg')} style={{ height: 60 }} />
                <p>{Field('endpoint', 'globe')}</p>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Configure" or memoize it.`
- Path: `HVF/franchise/src/db/mongo.js`
- [Link](https://github.com/HVF/franchise/blob/HEAD/src/db/mongo.js#L65-L85)
```js
            password: 'password (optional)',
        }
        let credentials = (config.credentials && config.credentials.mongo) || {}

        const Field = (type, icon, className = '') => (
            <div className="pt-input-group">
                {icon ? <span className={className + ' pt-icon pt-icon-' + icon} /> : null}
                <input
                    type={type === 'password' ? 'password' : 'text'}
                    disabled={connect.status == 'connected' || connect.status === 'connecting'}
                    className="pt-input"
                    value={credentials[type] || ''}
                    onChange={(e) =>
                        State.apply(
                            'config',
                            'credentials',
                            'mongo',
                            type,
                            U.replace(e.target.value)
                        )
                    }
                    placeholder={credentialHints[type]}
                />
            </div>
        )

        return (
            <div>
                <img src={require('./img/mongodb.svg')} style={{ height: 60 }} />
                <p />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Configure" or memoize it.`
- Path: `HVF/franchise/src/db/mysql.js`
- [Link](https://github.com/HVF/franchise/blob/HEAD/src/db/mysql.js#L79-L99)
```js
            password: 'password (optional)',
        }
        let credentials = (config.credentials && config.credentials.mysql) || {}

        const Field = (type, icon, className = '') => (
            <div className="pt-input-group">
                {icon ? <span className={className + ' pt-icon pt-icon-' + icon} /> : null}
                <input
                    type={type === 'password' ? 'password' : 'text'}
                    disabled={connect.status == 'connected' || connect.status === 'connecting'}
                    className="pt-input"
                    value={credentials[type] || ''}
                    onChange={(e) =>
                        State.apply(
                            'config',
                            'credentials',
                            'mysql',
                            type,
                            U.replace(e.target.value)
                        )
                    }
                    placeholder={credentialHints[type]}
                />
            </div>
        )

        return (
            <div>
                <img src={require('./img/mysql.svg')} style={{ height: 40 }} />
                <p />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Configure" or memoize it.`
- Path: `HVF/franchise/src/db/postgres.js`
- [Link](https://github.com/HVF/franchise/blob/HEAD/src/db/postgres.js#L63-L83)
```js
        }

        let credentials = (config.credentials && config.credentials.postgres) || {}

        const Field = (type, icon, className = '') => (
            <div className="pt-input-group">
                {icon ? <span className={className + ' pt-icon pt-icon-' + icon} /> : null}
                <input
                    type={type === 'password' ? 'password' : 'text'}
                    disabled={connect.status == 'connected' || connect.status === 'connecting'}
                    className="pt-input"
                    value={credentials[type] || ''}
                    onChange={(e) =>
                        State.apply(
                            'config',
                            'credentials',
                            'postgres',
                            type,
                            U.replace(e.target.value)
                        )
                    }
                    placeholder={credentialHints[type]}
                />
            </div>
        )

        return (
            <div>
                <img src={require('./img/postgres.svg')} style={{ height: 40 }} />

```
