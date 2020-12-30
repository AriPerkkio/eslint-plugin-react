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

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "TimelineDemo" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `primefaces/primereact/src/showcase/timeline/TimelineDemo.js`
- [Link](https://github.com/primefaces/primereact/blob/HEAD/src/showcase/timeline/TimelineDemo.js#L72-L72)
```js
                    </div>

                    <div className="card">
                        <h5>Opposite Content</h5>
                        <Timeline value={this.events1} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
                    </div>

                    <div className="card">
                        <h5>Customized</h5>
                        <Timeline value={this.events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
```
