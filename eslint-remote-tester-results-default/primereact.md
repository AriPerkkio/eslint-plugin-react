## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DataTableEditDemo" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `primefaces/primereact/src/showcase/datatable/DataTableEditDemo.js`
- [Link](https://github.com/primefaces/primereact/blob/HEAD/src/showcase/datatable/DataTableEditDemo.js#L160-L162)
```js
    statusEditor(productKey, props) {
        return (
            <Dropdown value={props.rowData['inventoryStatus']} options={this.statuses} optionLabel="label" optionValue="value"
                onChange={(e) => this.onEditorValueChange(productKey, props, e.value)} style={{ width: '100%' }} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                }} />
        );
    }

    statusBodyTemplate(rowData) {
        return this.getStatusLabel(rowData.inventoryStatus);
```
