## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `segmentio/evergreen/src/autocomplete/src/Autocomplete.js`
- [Link](https://github.com/segmentio/evergreen/blob/HEAD/src/autocomplete/src/Autocomplete.js#L178-L195)
```js
                (targetWidth < popoverMinWidth
                  ? Position.BOTTOM_LEFT
                  : Position.BOTTOM)
              }
              content={() => (
                <AutocompleteItems
                  getItemProps={getItemProps}
                  getMenuProps={getMenuProps}
                  highlightedIndex={highlightedIndex}
                  inputValue={inputValue}
                  isFilterDisabled={isFilterDisabled}
                  itemsFilter={itemsFilter}
                  itemSize={itemSize}
                  itemToString={itemToString}
                  originalItems={props.items}
                  popoverMaxHeight={popoverMaxHeight}
                  renderItem={renderItem}
                  selectedItem={selectedItem}
                  title={props.title}
                  width={Math.max(targetWidth, popoverMinWidth)}
                />
              )}
              minHeight={0}
              animationDuration={0}
            >
              {({ isShown: isShownPopover, toggle, getRef }) =>
                children({
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `segmentio/evergreen/src/select-menu/src/SelectMenu.js`
- [Link](https://github.com/segmentio/evergreen/blob/HEAD/src/select-menu/src/SelectMenu.js#L43-L72)
```js
    <Popover
      minWidth={width}
      position={position}
      minHeight={height}
      content={({ close }) => (
        <SelectMenuContent
          width={width}
          height={height}
          options={options}
          title={title}
          hasFilter={hasFilter}
          filterPlaceholder={filterPlaceholder}
          filterIcon={filterIcon}
          hasTitle={hasTitle}
          isMultiSelect={isMultiSelect}
          titleView={titleView}
          listProps={{
            onSelect,
            onDeselect,
            onFilterChange,
            selected: selectedArray
          }}
          close={close}
          detailView={
            typeof detailView === 'function'
              ? detailView({ close })
              : detailView
          }
          emptyView={
            typeof emptyView === 'function' ? emptyView({ close }) : emptyView
          }
          closeOnSelect={closeOnSelect}
        />
      )}
      {...rest}
    />
  )
})

```
