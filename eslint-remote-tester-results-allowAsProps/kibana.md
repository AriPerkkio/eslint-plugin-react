## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "App" or memoize it.`
- Path: `elastic/kibana/x-pack/plugins/license_management/public/application/app.js`
- [Link](https://github.com/elastic/kibana/blob/HEAD/x-pack/plugins/license_management/public/application/app.js#L88-L88)
```js
        </EuiPageBody>
      );
    }

    const withTelemetry = (Component) => (props) => <Component {...props} telemetry={telemetry} />;
    return (
      <EuiPageBody>
        <Switch>
          <Route path={`/upload_license`} component={withTelemetry(UploadLicense)} />
          <Route path={['/']} component={withTelemetry(LicenseDashboard)} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ForecastsTableUI" or memoize it.`
- Path: `elastic/kibana/x-pack/plugins/ml/public/application/jobs/jobs_list/components/job_details/forecasts_table/forecasts_table.js`
- [Link](https://github.com/elastic/kibana/blob/HEAD/x-pack/plugins/ml/public/application/jobs/jobs_list/components/job_details/forecasts_table/forecasts_table.js#L293-L295)
```js
        sortable: false,
        render: (messages) => {
          return (
            <div>
              {messages.map((message, index) => {
                return <p key={index}>{message}</p>;
              })}
            </div>
          );
        },
        textOnly: true,
      },
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Status" or memoize it.`
- Path: `elastic/kibana/x-pack/plugins/monitoring/public/components/apm/instance/status.js`
- [Link](https://github.com/elastic/kibana/blob/HEAD/x-pack/plugins/monitoring/public/components/apm/instance/status.js#L66-L76)
```js
      'data-test-subj': 'timeOfLastEvent',
    },
  ];

  const IconComponent = ({ status }) => (
    <Fragment>
      <FormattedMessage
        id="xpack.monitoring.apm.instance.statusDescription"
        defaultMessage="Status: {apmStatusIcon}"
        values={{
          apmStatusIcon: <ApmStatusIcon status={status} />,
        }}
      />
    </Fragment>
  );

  return (
    <SummaryStatus
      metrics={metrics}
      alerts={alerts}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Status" or memoize it.`
- Path: `elastic/kibana/x-pack/plugins/monitoring/public/components/apm/instances/status.js`
- [Link](https://github.com/elastic/kibana/blob/HEAD/x-pack/plugins/monitoring/public/components/apm/instances/status.js#L56-L66)
```js
      'data-test-subj': 'timeOfLastEvent',
    },
  ];

  const IconComponent = ({ status }) => (
    <Fragment>
      <FormattedMessage
        id="xpack.monitoring.apm.instances.statusDescription"
        defaultMessage="Status: {apmStatusIcon}"
        values={{
          apmStatusIcon: <ApmStatusIcon status={status} />,
        }}
      />
    </Fragment>
  );

  return (
    <SummaryStatus
      metrics={metrics}
      alerts={alerts}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ClusterStatus" or memoize it.`
- Path: `elastic/kibana/x-pack/plugins/monitoring/public/components/elasticsearch/cluster_status/index.js`
- [Link](https://github.com/elastic/kibana/blob/HEAD/x-pack/plugins/monitoring/public/components/elasticsearch/cluster_status/index.js#L78-L78)
```js
      'data-test-subj': 'dataSize',
    },
  ];

  const IconComponent = ({ status }) => <ElasticsearchStatusIcon status={status} />;

  return (
    <SummaryStatus
      metrics={metrics}
      status={status}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "IndexDetailStatus" or memoize it.`
- Path: `elastic/kibana/x-pack/plugins/monitoring/public/components/elasticsearch/index_detail_status/index.js`
- [Link](https://github.com/elastic/kibana/blob/HEAD/x-pack/plugins/monitoring/public/components/elasticsearch/index_detail_status/index.js#L58-L68)
```js
      'data-test-subj': 'unassignedShards',
    },
  ];

  const IconComponent = ({ status }) => (
    <Fragment>
      <FormattedMessage
        id="xpack.monitoring.elasticsearch.indexDetailStatus.iconStatusLabel"
        defaultMessage="Health: {elasticsearchStatusIcon}"
        values={{
          elasticsearchStatusIcon: <ElasticsearchStatusIcon status={status} />,
        }}
      />
    </Fragment>
  );

  return (
    <SummaryStatus
      metrics={metrics}
      status={status}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "NodeDetailStatus" or memoize it.`
- Path: `elastic/kibana/x-pack/plugins/monitoring/public/components/elasticsearch/node_detail_status/index.js`
- [Link](https://github.com/elastic/kibana/blob/HEAD/x-pack/plugins/monitoring/public/components/elasticsearch/node_detail_status/index.js#L104-L108)
```js
      'data-test-subj': 'nodeType',
    },
  ];

  const IconComponent = ({ status, isOnline }) => (
    <Fragment>
      <NodeStatusIcon status={status} isOnline={isOnline} />
    </Fragment>
  );

  return (
    <SummaryStatus
      metrics={metrics}
      status={status}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ClusterStatus" or memoize it.`
- Path: `elastic/kibana/x-pack/plugins/monitoring/public/components/kibana/cluster_status/index.js`
- [Link](https://github.com/elastic/kibana/blob/HEAD/x-pack/plugins/monitoring/public/components/kibana/cluster_status/index.js#L62-L62)
```js
      'data-test-subj': 'maxResponseTime',
    },
  ];

  const IconComponent = ({ status }) => <KibanaStatusIcon status={status} />;

  return (
    <SummaryStatus
      metrics={metrics}
      status={status}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DetailStatus" or memoize it.`
- Path: `elastic/kibana/x-pack/plugins/monitoring/public/components/kibana/detail_status/index.js`
- [Link](https://github.com/elastic/kibana/blob/HEAD/x-pack/plugins/monitoring/public/components/kibana/detail_status/index.js#L53-L53)
```js
      'data-test-subj': 'uptime',
    },
  ];

  const IconComponent = ({ status }) => <KibanaStatusIcon status={status} />;

  return (
    <SummaryStatus
      metrics={metrics}
      status={status}
```
