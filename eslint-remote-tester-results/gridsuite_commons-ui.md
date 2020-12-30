## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Login" or memoize it.`
- Path: `gridsuite/commons-ui/src/components/Login/Login.js`
- [Link](https://github.com/gridsuite/commons-ui/blob/HEAD/src/components/Login/Login.js#L43-L54)
```js

const Login = ({ onLoginClick, disabled }) => {
    const classes = useStyles();

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="#">
                    GridSuite
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `gridsuite/commons-ui/src/components/SnackbarProvider/SnackbarProvider.js`
- [Link](https://github.com/gridsuite/commons-ui/blob/HEAD/src/components/SnackbarProvider/SnackbarProvider.js#L25-L32)
```js
        <OrigSnackbarProvider
            ref={notistackRef}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            hideIconVariant={true}
            action={(key) => (
                <Button
                    onClick={() => notistackRef.current.closeSnackbar(key)}
                    style={{ color: '#fff', fontSize: '20px' }}
                >
                    ✖
                </Button>
            )}
            {...props}
        />
    );
});

```
