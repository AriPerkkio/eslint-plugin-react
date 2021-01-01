## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/examples/expanding/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/expanding/src/App.js#L92-L96)
```js
    () => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/examples/expanding/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/expanding/src/App.js#L97-L113)
```js
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? '👇' : '👉'}
            </span>
          ) : null,
      },
      {
        Header: 'Name',
        columns: [
          {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/examples/footers/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/footers/src/App.js#L133-L142)
```js
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            Footer: info => {
              // Only calculate total visits if rows change
              const total = React.useMemo(
                () =>
                  info.rows.reduce((sum, row) => row.values.visits + sum, 0),
                [info.rows]
              )

              return <>Total: {total}</>
            },
          },
          {
            Header: 'Status',
            accessor: 'status',
            Footer: 'Status',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `tannerlinsley/react-table/examples/full-width-resizable-table/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/full-width-resizable-table/src/App.js#L141-L145)
```js
          width: 35,
          maxWidth: 35,
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `tannerlinsley/react-table/examples/full-width-resizable-table/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/full-width-resizable-table/src/App.js#L148-L152)
```js
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
        // fix the parent group of the selection button to not be resizable
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `tannerlinsley/react-table/examples/kitchen-sink/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/kitchen-sink/src/App.js#L329-L333)
```js
            // are placed after it
            groupByBoundary: true,
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `tannerlinsley/react-table/examples/kitchen-sink/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/kitchen-sink/src/App.js#L336-L340)
```js
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ]
      })
    }
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `tannerlinsley/react-table/examples/kitchen-sink-controlled/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/kitchen-sink-controlled/src/App.js#L316-L320)
```js
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <input type="checkbox" {...row.getToggleRowSelectedProps()} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `tannerlinsley/react-table/examples/kitchen-sink-controlled/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/kitchen-sink-controlled/src/App.js#L323-L327)
```js
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <input type="checkbox" {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "EnhancedTable" or memoize it.`
- Path: `tannerlinsley/react-table/examples/material-UI-kitchen-sink/src/components/EnhancedTable.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/material-UI-kitchen-sink/src/components/EnhancedTable.js#L145-L149)
```js
          // rows even though not all rows are on the current page.  The solution should
          // be server side pagination.  For one, the clients should not download all
          // rows in most cases.  The client should only download data for the current page.
          // In that case, getToggleAllRowsSelectedProps works fine.
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "EnhancedTable" or memoize it.`
- Path: `tannerlinsley/react-table/examples/material-UI-kitchen-sink/src/components/EnhancedTable.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/material-UI-kitchen-sink/src/components/EnhancedTable.js#L152-L156)
```js
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/examples/pivoting/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/pivoting/src/App.js#L263-L270)
```js
      {
        Header: 'Unit Cost',
        accessor: 'unitCost',
        aggregate: 'average',
        Cell: ({ value }) =>
          typeof value !== 'undefined' ? (
            <div
              style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}
            >
              ${(Math.floor(value * 100) / 100).toLocaleString()}
            </div>
          ) : null,
      },
      {
        Header: 'Total',
        accessor: 'total',
        aggregate: 'sum',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/examples/pivoting/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/pivoting/src/App.js#L276-L283)
```js
      {
        Header: 'Total',
        accessor: 'total',
        aggregate: 'sum',
        Cell: ({ value }) =>
          typeof value !== 'undefined' ? (
            <div
              style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}
            >
              ${(Math.floor(value * 100) / 100).toLocaleString()}
            </div>
          ) : null,
      },
    ],
    []
  )

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `tannerlinsley/react-table/examples/row-selection/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/row-selection/src/App.js#L76-L80)
```js
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `tannerlinsley/react-table/examples/row-selection/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/row-selection/src/App.js#L83-L87)
```js
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `tannerlinsley/react-table/examples/row-selection-and-pagination/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/row-selection-and-pagination/src/App.js#L92-L96)
```js
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Table" or memoize it.`
- Path: `tannerlinsley/react-table/examples/row-selection-and-pagination/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/row-selection-and-pagination/src/App.js#L99-L103)
```js
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/examples/sub-components/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/sub-components/src/App.js#L121-L128)
```js
      {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
      },
      {
        Header: 'Name',
        columns: [
          {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/examples/sub-components-lazy/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/sub-components-lazy/src/App.js#L177-L184)
```js
      {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
        // We can override the cell renderer with a SubCell to be used with an expanded row
        SubCell: () => null // No expander on an expanded row
      },
      {
        Header: 'Name',
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/examples/sub-components-lazy/src/App.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/examples/sub-components-lazy/src/App.js#L196-L198)
```js
            Header: 'First Name',
            // We re-map data using accessor functions for subRows
            accessor: (d) => d.firstName,
            // We can render something different for subRows
            SubCell: (cellProps) => (
              <>🥳 {cellProps.value} 🎉</>
            )
          },
          {
            Header: 'Last Name',
            accessor: (d) => d.lastName
          }
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/src/plugin-hooks/tests/useExpanded.test.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/src/plugin-hooks/tests/useExpanded.test.js#L72-L82)
```js
    () => [
      {
        Header: () => null,
        id: 'expander',
        Cell: ({ row }) => (
          <span
            style={{
              cursor: 'pointer',
              paddingLeft: `${row.depth * 2}rem`,
            }}
            onClick={() => row.toggleRowExpanded()}
          >
            {row.isExpanded ? 'Collapse' : 'Expand'} Row {row.id}
          </span>
        ),
      },
      {
        Header: 'First Name',
        accessor: 'name',
        Cell: ({ row: { id } }) => `Row ${id}`,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `tannerlinsley/react-table/src/plugin-hooks/tests/useExpanded.test.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/src/plugin-hooks/tests/useExpanded.test.js#L97-L97)
```js
  return (
    <Table
      columns={columns}
      data={data}
      SubComponent={({ row }) => <span>SubComponent: {row.id}</span>}
    />
  )
}

test('renders an expandable table', () => {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/src/plugin-hooks/tests/useFiltersAndRowSelect.test.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/src/plugin-hooks/tests/useFiltersAndRowSelect.test.js#L141-L148)
```js
      {
        id: 'selection',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <label>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />{' '}
              Select All
            </label>
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div>
            <label>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/src/plugin-hooks/tests/useFiltersAndRowSelect.test.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/src/plugin-hooks/tests/useFiltersAndRowSelect.test.js#L151-L158)
```js
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div>
            <label>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />{' '}
              Select Row
            </label>
          </div>
        ),
      },
      {
        id: 'selectedStatus',
        Cell: ({ row }) => (
          <div>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/src/plugin-hooks/tests/useFiltersAndRowSelect.test.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/src/plugin-hooks/tests/useFiltersAndRowSelect.test.js#L162-L166)
```js
        ),
      },
      {
        id: 'selectedStatus',
        Cell: ({ row }) => (
          <div>
            Row {row.id} {row.isSelected ? 'Selected' : 'Not Selected'}
          </div>
        ),
      },
      {
        Header: 'Name',
        columns: [
          {
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SelectAllTable" or memoize it.`
- Path: `tannerlinsley/react-table/src/plugin-hooks/tests/useRowSelect.test.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/src/plugin-hooks/tests/useRowSelect.test.js#L93-L100)
```js
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <label>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />{' '}
                Select All
              </label>
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <label>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SelectAllTable" or memoize it.`
- Path: `tannerlinsley/react-table/src/plugin-hooks/tests/useRowSelect.test.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/src/plugin-hooks/tests/useRowSelect.test.js#L103-L110)
```js
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <label>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />{' '}
                Select Row
              </label>
            </div>
          ),
        },
        ...columns,
      ])
    }
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SelectAllPaginatedTable" or memoize it.`
- Path: `tannerlinsley/react-table/src/plugin-hooks/tests/useRowSelect.test.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/src/plugin-hooks/tests/useRowSelect.test.js#L174-L181)
```js
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <label>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />{' '}
                Select All
              </label>
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <label>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SelectAllPaginatedTable" or memoize it.`
- Path: `tannerlinsley/react-table/src/plugin-hooks/tests/useRowSelect.test.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/src/plugin-hooks/tests/useRowSelect.test.js#L184-L191)
```js
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <label>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />{' '}
                Select Row
              </label>
            </div>
          ),
        },
        ...columns,
      ])
    }
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `tannerlinsley/react-table/src/plugin-hooks/tests/useRowSelect.test.js`
- [Link](https://github.com/tannerlinsley/react-table/blob/HEAD/src/plugin-hooks/tests/useRowSelect.test.js#L249-L255)
```js
  const columns = React.useMemo(
    () => [
      {
        id: 'selectedStatus',
        Cell: ({ row }) =>
          row.isSelected ? (
            <div>
              <div>Selected</div>
              <div>Row {row.id}</div>
            </div>
          ) : null,
      },
      {
        Header: 'Name',
        columns: [
          {
```
