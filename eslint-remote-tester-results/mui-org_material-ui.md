## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "NestedGrid" or memoize it.`
- Path: `mui-org/material-ui/docs/src/pages/components/grid/NestedGrid.js`
- [Link](https://github.com/mui-org/material-ui/blob/HEAD/docs/src/pages/components/grid/NestedGrid.js#L20-L34)
```js

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
```
