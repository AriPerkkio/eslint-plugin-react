## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "HelpPanel" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `Graylog2/graylog2-server/graylog2-web-interface/src/components/event-definitions/common/HelpPanel.jsx`
- [Link](https://github.com/Graylog2/graylog2-server/blob/HEAD/graylog2-web-interface/src/components/event-definitions/common/HelpPanel.jsx#L44-L44)
```jsx
        <Panel.Title toggle={collapsible}>
          {header || defaultHeader}
        </Panel.Title>
      </Panel.Heading>
      <ConditionalCollapse condition={collapsible} wrapper={(wrapChild) => <Panel.Collapse>{wrapChild}</Panel.Collapse>}>
        <Panel.Body>
          {children}
        </Panel.Body>
      </ConditionalCollapse>
    </Panel>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "StreamRule" or memoize it.`
- Path: `Graylog2/graylog2-server/graylog2-web-interface/src/components/streamrules/StreamRule.jsx`
- [Link](https://github.com/Graylog2/graylog2-server/blob/HEAD/graylog2-web-interface/src/components/streamrules/StreamRule.jsx#L79-L94)
```jsx
      UserNotification.success('Stream rule has been successfully updated.', 'Success');
    });
  };

  const _formatActionItems = () => {
    return (
      <ActionButtonsWrap>
        <Button bsStyle="link"
                bsSize="xsmall"
                onClick={_onDelete}>
          <Icon name="trash-alt" type="regular" />
        </Button>
        <Button bsStyle="link"
                bsSize="xsmall"
                onClick={_onEdit}>
          <Icon name="edit" />
        </Button>
      </ActionButtonsWrap>
    );
  };

  const matchDataStyle = () => (matchData.rules[streamRule.id] ? 'success' : 'danger');
  const actionItems = isPermitted(permissions, [`streams:edit:${stream.id}`]) ? _formatActionItems() : null;
  const description = streamRule.description ? <small>{' '}({streamRule.description})</small> : null;
  const listGroupStyle = !isEmpty(matchData) ? matchDataStyle() : null;
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ServerUnavailablePage" or memoize it.`
- Path: `Graylog2/graylog2-server/graylog2-web-interface/src/pages/ServerUnavailablePage.jsx`
- [Link](https://github.com/Graylog2/graylog2-server/blob/HEAD/graylog2-web-interface/src/pages/ServerUnavailablePage.jsx#L40-L100)
```jsx
  const [showDetails, setShowDetails] = useState(false);

  const _toggleDetails = () => setShowDetails(!showDetails);

  const _formatErrorMessage = () => {
    if (!showDetails) {
      return null;
    }

    const noInformationMessage = (
      <div>
        <hr />
        <p>There is no information available.</p>
      </div>
    );

    if (!server?.error) {
      return noInformationMessage;
    }

    const { error } = server;

    const errorDetails = [];

    if (error.message) {
      errorDetails.push(<dt key="error-title">Error message</dt>, <dd key="error-desc">{error.message}</dd>);
    }

    if (error.originalError) {
      const { originalError } = error;

      errorDetails.push(
        <dt key="status-original-request-title">Original Request</dt>,
        <dd key="status-original-request-content">{String(originalError.method)} {String(originalError.url)}</dd>,
      );

      errorDetails.push(
        <dt key="status-code-title">Status code</dt>,
        <dd key="status-code-desc">{String(originalError.status)}</dd>,
      );

      if (typeof originalError.toString === 'function') {
        errorDetails.push(
          <dt key="full-error-title">Full error message</dt>,
          <dd key="full-error-desc">{originalError.toString()}</dd>,
        );
      }
    }

    if (errorDetails.length === 0) {
      return noInformationMessage;
    }

    return (
      <div>
        <hr style={{ marginTop: 10, marginBottom: 10 }} />
        <p>This is the last response we received from the server:</p>
        <Well bsSize="small" style={{ whiteSpace: 'pre-line' }}>
          <dl style={{ marginBottom: 0 }}>
            {errorDetails}
          </dl>
        </Well>
      </div>
    );
  };

  return (
    <DocumentTitle title="Server unavailable">
      <ServerUnavailableStyles />
      <Modal show>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SortableSelect" or memoize it.`
- Path: `Graylog2/graylog2-server/graylog2-web-interface/src/views/components/aggregationbuilder/SortableSelect.jsx`
- [Link](https://github.com/Graylog2/graylog2-server/blob/HEAD/graylog2-web-interface/src/views/components/aggregationbuilder/SortableSelect.jsx#L49-L55)
```jsx
const SortableSelect = ({ onChange, value, valueComponent, valueTransformer, ...remainingProps }) => {
  const values = valueTransformer(value);
  const SortableMultiValue = SortableElement(Components.MultiValue);

  const Item = (props) => {
    // eslint-disable-next-line react/prop-types
    const { data: { value: itemValue } } = props;
    const index = findIndex(value, (v) => v.field === itemValue);

    return <SortableMultiValue index={index} {...props} innerProps={{ title: itemValue }} />;
  };

  const _components = {
    MultiValueLabel: valueComponent,
    MultiValue: Item,
  };
```
