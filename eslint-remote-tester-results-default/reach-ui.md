## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "MyPageLayout" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `reach/reach-ui/website/src/components/mdx-layout.js`
- [Link](https://github.com/reach/reach-ui/blob/HEAD/website/src/components/mdx-layout.js#L128-L211)
```js
  return (
    <Layout>
      <MDXProvider
        components={{
          pre: function(props) {
            return (
              <PreComponent
                {...props}
                theme={{ plain: {}, styles: [] }}
                scope={{
                  ...React,
                  Accordion,
                  AccordionButton,
                  AccordionItem,
                  AccordionPanel,
                  Alert,
                  AlertDialog,
                  AlertDialogContent,
                  AlertDialogDescription,
                  AlertDialogLabel,
                  AlertDialogOverlay,
                  animated,
                  Combobox,
                  ComboboxInput,
                  ComboboxList,
                  ComboboxOption,
                  ComboboxOptionText,
                  ComboboxPopover,
                  Component,
                  CustomCheckbox,
                  CustomCheckboxContainer,
                  CustomCheckboxInput,
                  Dialog,
                  DialogContent,
                  DialogOverlay,
                  Disclosure,
                  DisclosureButton,
                  DisclosurePanel,
                  GatsbyLink,
                  Listbox,
                  ListboxInput,
                  ListboxButton,
                  ListboxArrow,
                  ListboxPopover,
                  ListboxList,
                  ListboxOption,
                  ListboxGroup,
                  ListboxGroupLabel,
                  matchSorter,
                  Menu,
                  MenuButton,
                  MenuItem,
                  MenuItems,
                  MenuLink,
                  MenuList,
                  MenuPopover,
                  MixedCheckbox,
                  Phased,
                  Portal,
                  Rect,
                  Slider,
                  SliderHandle,
                  SliderInput,
                  SliderMarker,
                  SliderTrack,
                  SliderTrackHighlight,
                  Tab,
                  TabList,
                  TabPanel,
                  TabPanels,
                  Tabs,
                  Tooltip,
                  TooltipPopup,
                  useComboboxContext,
                  useId,
                  useMixedCheckbox,
                  useRect,
                  useTabsContext,
                  useThrottle,
                  useTooltip,
                  useTransition,
                  useWindowSize,
                  VisuallyHidden,
                  WindowSize,
                }}
              />
            );
          },
          table: Table,
        }}
      >
        <main>
          <div ref={contentFocusRef}>{children}</div>
```
