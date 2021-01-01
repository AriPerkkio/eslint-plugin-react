## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Vcf" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/components/Preview/renderers/Vcf.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/components/Preview/renderers/Vcf.js#L50-L58)
```js

function Vcf({ meta, header, data, variants, note, warnings }) {
  const classes = useStyles()

  const renderCell = (type, i = '') => (col, j) => (
    <M.TableCell
      // eslint-disable-next-line react/no-array-index-key
      key={`${type}:${i}:${j}`}
      className={cx(classes.cell, classes[type])}
    >
      {col}
    </M.TableCell>
  )

  return (
    <div className={classes.root}>
      {renderWarnings(warnings)}
      <div className={classes.tableWrapper}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `quiltdata/quilt/catalog/app/containers/Admin/Users.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Admin/Users.js#L643-L645)
```js
          getDisplay: (v, u) => (
            <Editable
              value={v}
              onChange={async (admin) => {
                const res = await openDialog(({ close }) => (
                  <AdminRights {...{ close, admin, username: u.username }} />
                ))
                if (res !== 'ok') throw new Error('cancelled')
              }}
            >
              {({ change, busy, value }) => (
                <Switch
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "BucketLayout" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Bucket.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Bucket.js#L105-L105)
```js
          <M.Container maxWidth="lg">
            {bucketExistenceData.case({
              Ok: () => children,
              Err: displayError(),
              _: () => <Placeholder color="text.secondary" />,
            })}
          </M.Container>
        </>
      }
    />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Code" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Code.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Code.js#L76-L97)
```js
  return (
    <Section
      icon="code"
      heading="Code"
      extraSummary={({ expanded }) => (
        <M.Fade in={expanded}>
          <div className={classes.container}>
            <Lab.ToggleButtonGroup
              size="small"
              value={selectedIndex}
              exclusive
              onChange={handleChange}
            >
              {children.map(({ label }, idx) => (
                <Lab.ToggleButton value={idx} key={label} className={classes.btn}>
                  {label}
                </Lab.ToggleButton>
              ))}
            </Lab.ToggleButtonGroup>
            <M.Box ml={1} />
            <M.IconButton onClick={handleCopy} title="Copy to clipboard">
              <M.Icon style={{ fontSize: 18 }}>file_copy</M.Icon>
            </M.IconButton>
          </div>
        </M.Fade>
      )}
      {...props}
    >
      <div className={classes.code}>{highlight(selected.hl, selected.contents)}</div>
    </Section>
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SuccessorsSelect" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/CopyButton.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/CopyButton.js#L50-L71)
```js

  return (
    <M.Menu anchorEl={anchorEl} onClose={onClose} open={open}>
      {data.case({
        Ok: ({ successors }) =>
          successors.length ? (
            successors.map((successor) => (
              <MenuItem key={successor.slug} item={successor} onClick={onChange} />
            ))
          ) : (
            <M.Box px={2} py={1}>
              <M.Typography gutterBottom>
                Bucket&apos;s successors are not configured.
              </M.Typography>
              <M.Typography>
                Please, read{' '}
                <StyledLink
                  href={`${docs}/advanced-usage/workflows#pushing-across-buckets-with-the-quilt-catalog`}
                  target="_blank"
                >
                  the documentation
                </StyledLink>
                .
              </M.Typography>
            </M.Box>
          ),
        _: () => <MenuPlaceholder />,
        Err: (error) => (
          <M.Box px={2} py={1}>
            <M.Typography gutterBottom>
              Error: <code>{error.message}</code>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SuccessorsSelect" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/CopyButton.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/CopyButton.js#L72-L72)
```js
                .
              </M.Typography>
            </M.Box>
          ),
        _: () => <MenuPlaceholder />,
        Err: (error) => (
          <M.Box px={2} py={1}>
            <M.Typography gutterBottom>
              Error: <code>{error.message}</code>
            </M.Typography>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "SuccessorsSelect" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/CopyButton.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/CopyButton.js#L73-L87)
```js
              </M.Typography>
            </M.Box>
          ),
        _: () => <MenuPlaceholder />,
        Err: (error) => (
          <M.Box px={2} py={1}>
            <M.Typography gutterBottom>
              Error: <code>{error.message}</code>
            </M.Typography>
            {R.is(ERRORS.WorkflowsConfigInvalid, error) && (
              <M.Typography>
                Please fix the workflows config according to{' '}
                <StyledLink href={`${docs}/advanced-usage/workflows`} target="_blank">
                  the documentation
                </StyledLink>
              </M.Typography>
            )}
          </M.Box>
        ),
      })}
    </M.Menu>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Dir" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Dir.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Dir.js#L154-L188)
```js

      {data.case({
        Err: displayError(),
        Init: () => null,
        _: (x) => {
          const res = AsyncResult.case(
            {
              Ok: R.identity,
              Pending: AsyncResult.case({
                Ok: R.identity,
                _: () => null,
              }),
              _: () => null,
            },
            x,
          )

          if (!res) return <M.CircularProgress />

          const items = formatListing({ urls }, res)

          const locked = !AsyncResult.Ok.is(x)

          // TODO: should prefix filtering affect summary?
          return (
            <>
              <ListingWithPrefixFiltering
                items={items}
                locked={locked}
                truncated={res.truncated}
                prefix={res.prefix}
                setPrefix={setPrefix}
                bucket={res.bucket}
                path={res.path}
              />
              <Summary files={res.files} />
            </>
          )
        },
      })}
    </M.Box>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "VersionInfo" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/File.js#L108-L180)
```js
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {data.case({
          Ok: (versions) => (
            <M.List className={classes.list} ref={containerRef}>
              {versions.map((v) => (
                <M.ListItem
                  key={v.id}
                  button
                  onClick={close}
                  selected={version ? v.id === version : v.isLatest}
                  component={Link}
                  to={urls.bucketFile(bucket, path, v.id)}
                >
                  <M.ListItemText
                    primary={
                      <span>
                        <FormattedRelative value={v.lastModified} />
                        {v.isLatest && ' (latest)'}
                        {' | '}
                        {v.size != null ? readableBytes(v.size) : 'Delete Marker'}
                      </span>
                    }
                    secondary={
                      <span>
                        {v.lastModified.toLocaleString()}
                        <br />
                        <span className={classes.mono}>{v.id}</span>
                      </span>
                    }
                  />
                  {!cfg.noDownload && (
                    <M.ListItemSecondaryAction>
                      {!v.deleteMarker &&
                        !v.archived &&
                        AWS.Signer.withDownloadUrl(
                          { bucket, key: path, version: v.id },
                          (url) => (
                            <M.IconButton
                              href={url}
                              title="Download this version of the object"
                            >
                              <M.Icon>arrow_downward</M.Icon>
                            </M.IconButton>
                          ),
                        )}
                      <M.Hidden xsDown>
                        <M.IconButton
                          title="Copy object version's canonical HTTPS URI to the clipboard"
                          href={getHttpsUri(v)}
                          onClick={copyHttpsUri(v)}
                        >
                          <M.Icon>link</M.Icon>
                        </M.IconButton>
                        <M.IconButton
                          title="Copy object location in CLI format (aws s3api) to the clipboard"
                          onClick={copyCliArgs(v)}
                        >
                          <M.Box
                            fontSize={20}
                            height={24}
                            width={24}
                            lineHeight={24 / 20}
                            display="flex"
                            justifyContent="center"
                          >
                            S3
                          </M.Box>
                        </M.IconButton>
                      </M.Hidden>
                    </M.ListItemSecondaryAction>
                  )}
                </M.ListItem>
              ))}
            </M.List>
          ),
          Err: () => (
            <M.List>
              <M.ListItem>
                <M.ListItemIcon>
                  <M.Icon>error</M.Icon>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "VersionInfo" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/File.js#L181-L190)
```js
                </M.ListItem>
              ))}
            </M.List>
          ),
          Err: () => (
            <M.List>
              <M.ListItem>
                <M.ListItemIcon>
                  <M.Icon>error</M.Icon>
                </M.ListItemIcon>
                <M.Typography variant="body1">Error fetching versions</M.Typography>
              </M.ListItem>
            </M.List>
          ),
          _: () => (
            <M.List>
              <M.ListItem>
                <M.ListItemIcon>
                  <M.CircularProgress size={24} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "VersionInfo" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/File.js#L191-L200)
```js
                <M.Typography variant="body1">Error fetching versions</M.Typography>
              </M.ListItem>
            </M.List>
          ),
          _: () => (
            <M.List>
              <M.ListItem>
                <M.ListItemIcon>
                  <M.CircularProgress size={24} />
                </M.ListItemIcon>
                <M.Typography variant="body1">Fetching versions</M.Typography>
              </M.ListItem>
            </M.List>
          ),
        })}
      </M.Popover>
    </>
  )
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Analytics" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/File.js#L238-L274)
```js

  return (
    <Section icon="bar_charts" heading="Analytics" defaultExpanded={defaultExpanded}>
      {data.case({
        Ok: ({ counts, total }) =>
          total ? (
            <M.Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <M.Box>
                <M.Typography variant="h5">Downloads</M.Typography>
                <M.Typography variant="h4" component="div">
                  {readableQuantity(cursor === null ? total : counts[cursor].value)}
                </M.Typography>
                <M.Typography variant="overline" component="span">
                  {cursor === null
                    ? `${counts.length} days`
                    : formatDate(counts[cursor].date)}
                </M.Typography>
              </M.Box>
              <M.Box width="calc(100% - 7rem)">
                <Sparkline
                  data={R.pluck('value', counts)}
                  onCursor={setCursor}
                  width={1000}
                  height={60}
                  stroke={SVG.Paint.Server(
                    <linearGradient x2="0" y2="100%" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor={M.colors.blueGrey[800]} />
                      <stop offset="100%" stopColor={M.colors.blueGrey[100]} />
                    </linearGradient>,
                  )}
                />
              </M.Box>
            </M.Box>
          ) : (
            <M.Typography>No analytics available</M.Typography>
          ),
        Err: () => <M.Typography>No analytics available</M.Typography>,
        _: () => <M.CircularProgress />,
      })}
    </Section>
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Analytics" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/File.js#L275-L275)
```js
            </M.Box>
          ) : (
            <M.Typography>No analytics available</M.Typography>
          ),
        Err: () => <M.Typography>No analytics available</M.Typography>,
        _: () => <M.CircularProgress />,
      })}
    </Section>
  )
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Analytics" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/File.js#L276-L276)
```js
          ) : (
            <M.Typography>No analytics available</M.Typography>
          ),
        Err: () => <M.Typography>No analytics available</M.Typography>,
        _: () => <M.CircularProgress />,
      })}
    </Section>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "File" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/File.js#L424-L424)
```js
        <div className={classes.spacer} />
        {downloadable && <FileView.DownloadButton handle={handle} />}
      </div>
      {objExistsData.case({
        _: () => <CenteredProgress />,
        Err: (e) => {
          if (e.code === 'Forbidden') {
            return (
              <Message headline="Access Denied">
                You don&apos;t have access to this object.
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "File" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/File.js#L437-L452)
```js
          // TODO: handle this more gracefully
          throw e
        },
        Ok: requests.ObjectExistence.case({
          Exists: () => (
            <>
              <Code>{code}</Code>
              {!!analyticsBucket && <Analytics {...{ analyticsBucket, bucket, path }} />}
              <Meta bucket={bucket} path={path} version={version} />
              <Section icon="remove_red_eye" heading="Preview" defaultExpanded>
                {versionExistsData.case({
                  _: () => <CenteredProgress />,
                  Err: (e) => {
                    throw e
                  },
                  Ok: withPreview(renderPreview),
                })}
              </Section>
            </>
          ),
          _: () => <Message headline="No Such Object" />,
        }),
      })}
    </FileView.Root>
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/File.js#L444-L444)
```js
              {!!analyticsBucket && <Analytics {...{ analyticsBucket, bucket, path }} />}
              <Meta bucket={bucket} path={path} version={version} />
              <Section icon="remove_red_eye" heading="Preview" defaultExpanded>
                {versionExistsData.case({
                  _: () => <CenteredProgress />,
                  Err: (e) => {
                    throw e
                  },
                  Ok: withPreview(renderPreview),
                })}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "File" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/File.js#L453-L453)
```js
                })}
              </Section>
            </>
          ),
          _: () => <Message headline="No Such Object" />,
        }),
      })}
    </FileView.Root>
  )
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ListingWithPrefixFiltering" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Listing.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Listing.js#L433-L435)
```js
              </div>
            )}
            {pagination.paginated.map(
              ListingItem.case({
                Dir: ({ name, to }) => (
                  <Item icon="folder_open" key={name} name={name || EMPTY} to={to} />
                ),
                File: ({ name, to, size, modified, archived }) => (
                  <Item
                    icon="insert_drive_file"
                    key={name}
                    name={name}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ListingWithPrefixFiltering" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Listing.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Listing.js#L436-L449)
```js
              ListingItem.case({
                Dir: ({ name, to }) => (
                  <Item icon="folder_open" key={name} name={name || EMPTY} to={to} />
                ),
                File: ({ name, to, size, modified, archived }) => (
                  <Item
                    icon="insert_drive_file"
                    key={name}
                    name={name}
                    to={to}
                    archived={archived}
                  >
                    <div className={classes.size}>{readableBytes(size)}</div>
                    {!!modified && (
                      <div className={classes.modified}>{modified.toLocaleString()}</div>
                    )}
                  </Item>
                ),
              }),
            )}
            {(truncated || pagination.pages > 1) && (
              <M.Box>
                <M.Divider />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ListingWithLocalFiltering" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Listing.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Listing.js#L572-L574)
```js
                </div>
              ))}
            {pagination.paginated.map(
              ListingItem.case({
                Dir: ({ name, to }) => (
                  <Item icon="folder_open" key={name} name={name || EMPTY} to={to} />
                ),
                File: ({ name, to, size, modified, archived }) => (
                  <Item
                    icon="insert_drive_file"
                    key={name}
                    name={name}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ListingWithLocalFiltering" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Listing.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Listing.js#L575-L588)
```js
              ListingItem.case({
                Dir: ({ name, to }) => (
                  <Item icon="folder_open" key={name} name={name || EMPTY} to={to} />
                ),
                File: ({ name, to, size, modified, archived }) => (
                  <Item
                    icon="insert_drive_file"
                    key={name}
                    name={name}
                    to={to}
                    archived={archived}
                  >
                    <div className={classes.size}>{readableBytes(size)}</div>
                    {!!modified && (
                      <div className={classes.modified}>{modified.toLocaleString()}</div>
                    )}
                  </Item>
                ),
              }),
            )}
            {(truncated || pagination.pages > 1) && (
              <M.Box>
                <M.Divider />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "ObjectsByExt" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Overview.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Overview.js#L192-L209)
```js
                </React.Fragment>
              )
            })
          },
          _: (r) => (
            <>
              {R.times(
                (i) => (
                  <Skeleton
                    key={`skeleton:${i}`}
                    className={classes.skeleton}
                    style={{ gridRow: i + 2 }}
                    animate={!AsyncResult.Err.is(r)}
                  />
                ),
                MAX_EXTS,
              )}
              {AsyncResult.Err.is(r) && (
                <div className={classes.unavail}>Data unavailable</div>
              )}
            </>
          ),
        },
        data,
      )}
    </M.Box>
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Downloads" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Overview.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Overview.js#L571-L583)
```js
          </div>
          <div className={classes.heading}>
            {AsyncResult.case(
              {
                Ok: (counts) => {
                  const stats = cursorStats(counts)
                  const hl = stats && stats.highlighted
                  const ext = hl ? hl.ext || 'other' : 'total'
                  const total = hl ? hl.total : counts.combined.total
                  if (!counts.byExtCollapsed.length) return 'Downloads'
                  return (
                    <>
                      Downloads (<span className={classes.ext}>{ext}</span>):{' '}
                      {readableQuantity(total)}
                    </>
                  )
                },
                _: () => 'Downloads',
              },
              data,
            )}
          </div>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Downloads" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Overview.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Overview.js#L592-L638)
```js
          </div>
          <div className={classes.chart}>
            {AsyncResult.case(
              {
                Ok: (counts) => {
                  if (!counts.byExtCollapsed.length) {
                    return (
                      <ChartSkel height={CHART_H} width={width}>
                        <div className={classes.unavail}>No Data</div>
                      </ChartSkel>
                    )
                  }

                  const stats = cursorStats(counts)
                  return (
                    <>
                      <StackedAreaChart
                        data={counts.byExtCollapsed.map((e) =>
                          e.counts.map((i) => Math.log(i.sum + 1)),
                        )}
                        onCursor={setCursor}
                        height={CHART_H}
                        width={width}
                        areaFills={counts.byExtCollapsed.map((e) =>
                          SVG.Paint.Color(colorPool.get(e.ext)),
                        )}
                        extendL
                        extendR
                        px={10}
                      />
                      <Transition in={!!stats && stats.firstHalf}>
                        {() => (
                          <StatsTip
                            stats={stats}
                            colorPool={colorPool}
                            className={cx(classes.dateStats, classes.right)}
                          />
                        )}
                      </Transition>
                      <Transition in={!!stats && !stats.firstHalf}>
                        {() => (
                          <StatsTip
                            stats={stats}
                            colorPool={colorPool}
                            className={cx(classes.dateStats, classes.left)}
                          />
                        )}
                      </Transition>
                    </>
                  )
                },
                _: () => <ChartSkel height={22 * MAX_EXTS - 2} width={width} animate />,
              },
              data,
            )}
          </div>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Downloads" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Overview.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Overview.js#L639-L639)
```js
                      </Transition>
                    </>
                  )
                },
                _: () => <ChartSkel height={22 * MAX_EXTS - 2} width={width} animate />,
              },
              data,
            )}
          </div>
        </M.Box>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Readmes" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Overview.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Overview.js#L1107-L1122)
```js
function Readmes({ s3, overviewUrl, bucket }) {
  return (
    <Data fetch={requests.bucketReadmes} params={{ s3, overviewUrl, bucket }}>
      {AsyncResult.case({
        Ok: (rs) =>
          (rs.discovered.length > 0 || !!rs.forced) && (
            <>
              {!!rs.forced && (
                <FilePreview
                  key="readme:forced"
                  headingOverride={false}
                  handle={rs.forced}
                  expanded
                />
              )}
              {rs.discovered.map((h) => (
                <FilePreview key={`readme:${h.bucket}/${h.key}`} handle={h} expanded />
              ))}
            </>
          ),
        _: () => <FilePreviewSkel key="readme:skeleton" />,
      })}
    </Data>
  )
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Readmes" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Overview.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Overview.js#L1123-L1123)
```js
                <FilePreview key={`readme:${h.bucket}/${h.key}`} handle={h} expanded />
              ))}
            </>
          ),
        _: () => <FilePreviewSkel key="readme:skeleton" />,
      })}
    </Data>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Imgs" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Overview.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Overview.js#L1133-L1133)
```js
function Imgs({ req, s3, overviewUrl, inStack, bucket }) {
  return (
    <Data fetch={requests.bucketImgs} params={{ req, s3, overviewUrl, inStack, bucket }}>
      {AsyncResult.case({
        Ok: (images) => (images.length ? <Thumbnails images={images} /> : null),
        _: () => (
          <Section key="thumbs:skel" heading={<HeadingSkel />}>
            <ImageGrid>
              {R.times(
                (i) => (
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Imgs" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Overview.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Overview.js#L1134-L1146)
```js
  return (
    <Data fetch={requests.bucketImgs} params={{ req, s3, overviewUrl, inStack, bucket }}>
      {AsyncResult.case({
        Ok: (images) => (images.length ? <Thumbnails images={images} /> : null),
        _: () => (
          <Section key="thumbs:skel" heading={<HeadingSkel />}>
            <ImageGrid>
              {R.times(
                (i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Skeleton key={i} height={200} />
                ),
                9,
              )}
            </ImageGrid>
          </Section>
        ),
      })}
    </Data>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DialogForm" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageCopyDialog.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageCopyDialog.js#L189-L201)
```js
              <PD.SchemaFetcher
                schemaUrl={R.pathOr('', ['schema', 'url'], values.workflow)}
              >
                {AsyncResult.case({
                  Ok: ({ responseError, schema, validate }) => (
                    <RF.Field
                      component={PD.MetaInput}
                      name="meta"
                      bucket={successor.slug}
                      schema={schema}
                      schemaError={responseError}
                      validate={validate}
                      validateFields={['meta']}
                      isEqual={R.equals}
                      initialValue={initialMeta}
                    />
                  ),
                  _: () => <PD.MetaInputSkeleton />,
                })}
              </PD.SchemaFetcher>

              <RF.Field
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DialogForm" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageCopyDialog.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageCopyDialog.js#L202-L202)
```js
                      isEqual={R.equals}
                      initialValue={initialMeta}
                    />
                  ),
                  _: () => <PD.MetaInputSkeleton />,
                })}
              </PD.SchemaFetcher>

              <RF.Field
                component={PD.WorkflowInput}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageCopyDialog" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageCopyDialog.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageCopyDialog.js#L390-L393)
```js
      scroll="body"
      onExited={handleExited}
    >
      {stateCase({
        Error: (e) =>
          successor && (
            <DialogError bucket={successor.slug} onCancel={handleClose} error={e} />
          ),
        Loading: () =>
          successor && <DialogLoading bucket={successor.slug} onCancel={handleClose} />,
        Form: (props) =>
          successor && (
            <DialogForm
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageCopyDialog" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageCopyDialog.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageCopyDialog.js#L394-L395)
```js
        Error: (e) =>
          successor && (
            <DialogError bucket={successor.slug} onCancel={handleClose} error={e} />
          ),
        Loading: () =>
          successor && <DialogLoading bucket={successor.slug} onCancel={handleClose} />,
        Form: (props) =>
          successor && (
            <DialogForm
              {...{
                bucket,
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageCopyDialog" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageCopyDialog.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageCopyDialog.js#L396-L411)
```js
            <DialogError bucket={successor.slug} onCancel={handleClose} error={e} />
          ),
        Loading: () =>
          successor && <DialogLoading bucket={successor.slug} onCancel={handleClose} />,
        Form: (props) =>
          successor && (
            <DialogForm
              {...{
                bucket,
                hash,
                name,
                successor,
                close: handleClose,
                onSubmitStart: () => setSubmitting(true),
                onSubmitEnd: () => setSubmitting(false),
                onSuccess: handleSuccess,
                ...props,
              }}
            />
          ),
        Success: (props) =>
          successor && (
            <PD.DialogSuccess
              bucket={successor.slug}
              name={props.name}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageCopyDialog" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageCopyDialog.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageCopyDialog.js#L412-L420)
```js
                ...props,
              }}
            />
          ),
        Success: (props) =>
          successor && (
            <PD.DialogSuccess
              bucket={successor.slug}
              name={props.name}
              hash={props.hash}
              onClose={handleClose}
            />
          ),
      })}
    </M.Dialog>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageCreateDialog" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageCreateDialog.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageCreateDialog.js#L585-L597)
```js
                  <PD.SchemaFetcher
                    schemaUrl={R.pathOr('', ['schema', 'url'], values.workflow)}
                  >
                    {AsyncResult.case({
                      Ok: ({ responseError, schema, validate }) => (
                        <RF.Field
                          component={PD.MetaInput}
                          name="meta"
                          bucket={bucket}
                          schema={schema}
                          schemaError={responseError}
                          validate={validate}
                          validateFields={['meta']}
                          isEqual={R.equals}
                          initialValue={PD.EMPTY_META_VALUE}
                        />
                      ),
                      _: () => <PD.MetaInputSkeleton />,
                    })}
                  </PD.SchemaFetcher>

                  <RF.Field
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageCreateDialog" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageCreateDialog.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageCreateDialog.js#L598-L598)
```js
                          isEqual={R.equals}
                          initialValue={PD.EMPTY_META_VALUE}
                        />
                      ),
                      _: () => <PD.MetaInputSkeleton />,
                    })}
                  </PD.SchemaFetcher>

                  <RF.Field
                    component={PD.WorkflowInput}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageList" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageList.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageList.js#L398-L431)
```js
      <PackageCreateDialog
        {...{ bucket, refresh, open: uploadOpen, onClose: closeUpload }}
      />
      {totalCountData.case({
        _: () => (
          <M.Box pb={{ xs: 0, sm: 5 }} mx={{ xs: -2, sm: 0 }}>
            <M.Box mt={{ xs: 0, sm: 3 }} display="flex" justifyContent="space-between">
              <M.Box
                component={M.Paper}
                className={classes.paper}
                flexGrow={{ xs: 1, sm: 0 }}
                px={2}
                py={{ xs: 1.75, sm: 1.25 }}
              >
                <Skeleton
                  height={20}
                  width={{ xs: '100%', sm: 160 }}
                  borderRadius="borderRadius"
                />
              </M.Box>
              <M.Box
                component={M.Paper}
                className={classes.paper}
                px={2}
                py={{ xs: 1.75, sm: 1.25 }}
              >
                <Skeleton
                  height={20}
                  width={{ xs: 24, sm: 120 }}
                  borderRadius="borderRadius"
                />
              </M.Box>
            </M.Box>
            {R.range(0, 10).map((i) => (
              <PackageSkel key={i} />
            ))}
          </M.Box>
        ),
        Err: displayError(),
        Ok: (totalCount) => {
          if (!totalCount) {
            return (
              <M.Box pt={5} textAlign="center">
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageList" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageList.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageList.js#L433-L548)
```js
            ))}
          </M.Box>
        ),
        Err: displayError(),
        Ok: (totalCount) => {
          if (!totalCount) {
            return (
              <M.Box pt={5} textAlign="center">
                <M.Typography variant="h4">No packages</M.Typography>
                <M.Box pt={3} />
                <M.Button variant="contained" color="primary" onClick={openUpload}>
                  Create package
                </M.Button>
                <M.Box pt={2} />
                <M.Typography>
                  Or{' '}
                  <StyledLink href={EXAMPLE_PACKAGE_URL} target="_blank">
                    push a package
                  </StyledLink>{' '}
                  with the Quilt Python API.
                </M.Typography>
              </M.Box>
            )
          }

          return (
            <M.Box pb={{ xs: 0, sm: 5 }} mx={{ xs: -2, sm: 0 }}>
              <M.Box position="relative" top={-80} ref={scrollRef} />
              <M.Box display="flex" mt={{ xs: 0, sm: 3 }}>
                <M.Box
                  component={M.Paper}
                  className={classes.paper}
                  flexGrow={{ xs: 1, sm: 0 }}
                  position="relative"
                >
                  <M.InputBase
                    {...filtering.input}
                    placeholder="Filter packages"
                    classes={{ input: classes.input }}
                    fullWidth
                    startAdornment={
                      <M.Icon className={classes.searchIcon}>search</M.Icon>
                    }
                    endAdornment={
                      <M.Fade in={!!filtering.input.value}>
                        <M.IconButton
                          className={classes.clear}
                          onClick={() => filtering.set('')}
                        >
                          <M.Icon>clear</M.Icon>
                        </M.IconButton>
                      </M.Fade>
                    }
                  />
                </M.Box>
                <M.Box flexGrow={1} display={{ xs: 'none', sm: 'block' }} />
                <M.Box display={{ xs: 'none', sm: 'block' }} pr={1}>
                  <M.Button
                    variant="contained"
                    size="large"
                    color="primary"
                    style={{ paddingTop: 7, paddingBottom: 7 }}
                    onClick={openUpload}
                  >
                    Create package
                  </M.Button>
                </M.Box>
                <M.Box component={M.Paper} className={classes.paper}>
                  <SortDropdown
                    value={computedSort.key}
                    options={SORT_OPTIONS}
                    makeSortUrl={makeSortUrl}
                  />
                </M.Box>
              </M.Box>

              {filteredCountData.case({
                _: () => R.range(0, 10).map((i) => <PackageSkel key={i} />),
                Err: displayError(),
                Ok: (filteredCount) => {
                  if (!filteredCount) {
                    return (
                      <M.Box
                        borderTop={{ xs: 1, sm: 0 }}
                        borderColor="divider"
                        pt={3}
                        px={{ xs: 2, sm: 0 }}
                      >
                        <M.Typography variant="h5">
                          No matching packages found
                        </M.Typography>
                      </M.Box>
                    )
                  }

                  const pages = Math.ceil(filteredCount / PER_PAGE)

                  return (
                    <>
                      {packagesData.case({
                        _: () => {
                          const items =
                            computedPage < pages ? PER_PAGE : filteredCount % PER_PAGE
                          return R.range(0, items).map((i) => <PackageSkel key={i} />)
                        },
                        Err: displayError(),
                        Ok: R.map((pkg) => (
                          <Package key={pkg.name} {...pkg} bucket={bucket} />
                        )),
                      })}
                      {pages > 1 && (
                        <Pagination {...{ pages, page: computedPage, makePageUrl }} />
                      )}
                    </>
                  )
                },
              })}
            </M.Box>
          )
        },
      })}
    </>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageList.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageList.js#L508-L544)
```js

              {filteredCountData.case({
                _: () => R.range(0, 10).map((i) => <PackageSkel key={i} />),
                Err: displayError(),
                Ok: (filteredCount) => {
                  if (!filteredCount) {
                    return (
                      <M.Box
                        borderTop={{ xs: 1, sm: 0 }}
                        borderColor="divider"
                        pt={3}
                        px={{ xs: 2, sm: 0 }}
                      >
                        <M.Typography variant="h5">
                          No matching packages found
                        </M.Typography>
                      </M.Box>
                    )
                  }

                  const pages = Math.ceil(filteredCount / PER_PAGE)

                  return (
                    <>
                      {packagesData.case({
                        _: () => {
                          const items =
                            computedPage < pages ? PER_PAGE : filteredCount % PER_PAGE
                          return R.range(0, items).map((i) => <PackageSkel key={i} />)
                        },
                        Err: displayError(),
                        Ok: R.map((pkg) => (
                          <Package key={pkg.name} {...pkg} bucket={bucket} />
                        )),
                      })}
                      {pages > 1 && (
                        <Pagination {...{ pages, page: computedPage, makePageUrl }} />
                      )}
                    </>
                  )
                },
              })}
            </M.Box>
          )
        },
      })}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RevisionSkel" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageRevisions.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageRevisions.js#L245-L260)
```js
          <Skeleton borderRadius="borderRadius" width={70} height={16} mr={2} />
          <Skeleton borderRadius="borderRadius" width={70} height={16} />
        </M.Box>
      }
      counts={({ sparklineW, sparklineH }) => (
        <>
          <M.Box
            position="absolute"
            right={16}
            top={0}
            display="flex"
            alignItems="center"
            height={20}
            width={120}
          >
            <Skeleton height={16} width="100%" borderRadius="borderRadius" />
          </M.Box>
          <SparklineSkel width={sparklineW} height={sparklineH} />
        </>
      )}
    />
  )
}

const useRevisionStyles = M.makeStyles((t) => ({
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Revision" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageRevisions.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageRevisions.js#L346-L346)
```js
      }
      counts={({ sparklineW, sparklineH }) =>
        AsyncResult.case(
          {
            Ok: (data) => !!data && <Counts {...{ sparklineW, sparklineH, ...data }} />,
            _: () => (
              <>
                <M.Box
                  position="absolute"
                  right={16}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Revision" or memoize it. If you want to allow component creation in props, set allowAsProps option to true.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageRevisions.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageRevisions.js#L347-L362)
```js
      counts={({ sparklineW, sparklineH }) =>
        AsyncResult.case(
          {
            Ok: (data) => !!data && <Counts {...{ sparklineW, sparklineH, ...data }} />,
            _: () => (
              <>
                <M.Box
                  position="absolute"
                  right={16}
                  top={0}
                  display="flex"
                  alignItems="center"
                  height={20}
                  width={120}
                >
                  <Skeleton height={16} width="100%" borderRadius="borderRadius" />
                </M.Box>
                <SparklineSkel width={sparklineW} height={sparklineH} />
              </>
            ),
          },
          counts,
        )
      }
    />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageRevisions" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageRevisions.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageRevisions.js#L479-L512)
```js

      {revisionCountData.case({
        Err: displayError(),
        _: () => renderRevisionSkeletons(10),
        Ok: (revisionCount) => {
          if (!revisionCount) {
            return (
              <M.Box py={5} textAlign="center">
                <M.Typography variant="h4">No such package</M.Typography>
              </M.Box>
            )
          }

          const pages = Math.ceil(revisionCount / PER_PAGE)

          return (
            <>
              {revisionsData.case({
                Err: displayError(),
                _: () => {
                  const items = actualPage < pages ? PER_PAGE : revisionCount % PER_PAGE
                  return renderRevisionSkeletons(items)
                },
                Ok: R.map((r) => (
                  <Revision
                    key={r.hash}
                    {...{ bucket, name, ...r }}
                    counts={AsyncResult.mapCase(
                      { Ok: R.prop(r.hash) },
                      countsData.result,
                    )}
                  />
                )),
              })}
              {pages > 1 && <Pagination {...{ pages, page: actualPage, makePageUrl }} />}
            </>
          )
        },
      })}
    </M.Box>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RevisionInfo" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageTree.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageTree.js#L113-L123)
```js
        {R.take(10, revision)} <M.Icon>expand_more</M.Icon>
      </span>

      {revisionData.case({
        Ok: (r) => (
          <M.IconButton
            size="small"
            title="Copy package revision's canonical catalog URI to the clipboard"
            href={getHttpsUri(r)}
            onClick={copyHttpsUri(r)}
            style={{ marginTop: -4, marginBottom: -4 }}
          >
            <M.Icon>link</M.Icon>
          </M.IconButton>
        ),
        _: () => null,
      })}

      <M.Popover
        open={opened && !!anchor}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RevisionInfo" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageTree.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageTree.js#L169-L176)
```js
                    </M.IconButton>
                  </M.ListItemSecondaryAction>
                </M.ListItem>
              )),
              Err: () => (
                <M.ListItem>
                  <M.ListItemIcon>
                    <M.Icon>error</M.Icon>
                  </M.ListItemIcon>
                  <M.Typography variant="body1">Error fetching revisions</M.Typography>
                </M.ListItem>
              ),
              _: () => (
                <M.ListItem>
                  <M.ListItemIcon>
                    <M.CircularProgress size={24} />
                  </M.ListItemIcon>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "RevisionInfo" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageTree.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageTree.js#L177-L184)
```js
                  </M.ListItemIcon>
                  <M.Typography variant="body1">Error fetching revisions</M.Typography>
                </M.ListItem>
              ),
              _: () => (
                <M.ListItem>
                  <M.ListItemIcon>
                    <M.CircularProgress size={24} />
                  </M.ListItemIcon>
                  <M.Typography variant="body1">Fetching revisions</M.Typography>
                </M.ListItem>
              ),
            },
            data,
          )}
          <M.Divider />
          <M.ListItem
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageTree.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageTree.js#L535-L548)
```js
            console.error(e)
            return renderError('Error loading file', 'Something went wrong')
          },
          Ok: requests.ObjectExistence.case({
            Exists: ({ archived, deleted }) => (
              <>
                <TopBar crumbs={crumbs}>
                  {!noDownload && !deleted && !archived && (
                    <FileView.DownloadButton handle={handle} />
                  )}
                </TopBar>
                <PkgCode {...{ bucket, name, hash, revision, path }} />
                <FileView.Meta data={AsyncResult.Ok(meta)} />
                <Section icon="remove_red_eye" heading="Preview" expandable={false}>
                  {withPreview({ archived, deleted, handle }, renderPreview)}
                </Section>
              </>
            ),
            _: () => renderError('No Such Object'),
          }),
        })}
      </Data>
    ),
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageTree" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageTree.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageTree.js#L643-L645)
```js
  return (
    <FileView.Root>
      {!!bucketCfg &&
        revisionData.case({
          Ok: ({ hash, modified }) => (
            <ExposeLinkedData {...{ bucketCfg, bucket, name, hash, modified }} />
          ),
          _: () => null,
        })}
      {!!resolvedFrom && (
        <M.Box mb={2}>
          <Lab.Alert
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageTree" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageTree.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageTree.js#L689-L706)
```js
        />
      </M.Typography>

      {revisionData.case({
        Ok: ({ hash }) =>
          isDir ? (
            <DirDisplay
              {...{
                bucket,
                name,
                hash,
                path,
                revision,
                crumbs,
                onRevisionPush,
                onCrossBucketPush,
                key: hash,
              }}
            />
          ) : (
            <FileDisplay {...{ bucket, name, hash, revision, path, crumbs }} />
          ),
        Err: (e) => {
          if (!(e instanceof errors.BadRevision)) throw e
          return (
            <>
              <TopBar crumbs={crumbs} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageTree" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageTree.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageTree.js#L707-L727)
```js
            />
          ) : (
            <FileDisplay {...{ bucket, name, hash, revision, path, crumbs }} />
          ),
        Err: (e) => {
          if (!(e instanceof errors.BadRevision)) throw e
          return (
            <>
              <TopBar crumbs={crumbs} />
              <M.Box mt={4}>
                <M.Typography variant="h4" align="center" gutterBottom>
                  Error resolving revision
                </M.Typography>
                <M.Typography variant="body1" align="center">
                  Revision{' '}
                  <M.Box
                    component="span"
                    fontWeight="fontWeightMedium"
                  >{`"${e.revision}"`}</M.Box>{' '}
                  could not be resolved.
                </M.Typography>
              </M.Box>
            </>
          )
        },
        _: () => (
          // TODO: skeleton placeholder
          <>
            <TopBar crumbs={crumbs} />
            <M.Box mt={2}>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "PackageTree" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageTree.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageTree.js#L728-L736)
```js
              </M.Box>
            </>
          )
        },
        _: () => (
          // TODO: skeleton placeholder
          <>
            <TopBar crumbs={crumbs} />
            <M.Box mt={2}>
              <M.CircularProgress />
            </M.Box>
          </>
        ),
      })}
    </FileView.Root>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DialogForm" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageUpdateDialog.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageUpdateDialog.js#L1068-L1080)
```js
              <PD.SchemaFetcher
                schemaUrl={R.pathOr('', ['schema', 'url'], values.workflow)}
              >
                {AsyncResult.case({
                  Ok: ({ responseError, schema, validate }) => (
                    <RF.Field
                      component={PD.MetaInput}
                      name="meta"
                      bucket={bucket}
                      schema={schema}
                      schemaError={responseError}
                      validate={validate}
                      validateFields={['meta']}
                      isEqual={R.equals}
                      initialValue={initialMeta}
                    />
                  ),
                  _: () => <PD.MetaInputSkeleton />,
                })}
              </PD.SchemaFetcher>

              <RF.Field
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "DialogForm" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/PackageUpdateDialog.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/PackageUpdateDialog.js#L1081-L1081)
```js
                      isEqual={R.equals}
                      initialValue={initialMeta}
                    />
                  ),
                  _: () => <PD.MetaInputSkeleton />,
                })}
              </PD.SchemaFetcher>

              <RF.Field
                component={PD.WorkflowInput}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Thumbnails" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Summary.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Summary.js#L132-L139)
```js
          <Link key={i.logicalKey || i.key} to={mkUrl(i)} className={classes.link}>
            <HandleResolver resolve={resolveLogicalKey} handle={i}>
              {AsyncResult.case({
                _: () => null,
                Ok: (resolved) => (
                  <Thumbnail
                    handle={resolved}
                    className={classes.img}
                    alt={basename(i.logicalKey || i.key)}
                    title={basename(i.logicalKey || i.key)}
                  />
                ),
              })}
            </HandleResolver>
          </Link>
        ))}
        {R.times(
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "BucketSummary" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/containers/Bucket/Summary.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/containers/Bucket/Summary.js#L214-L214)
```js
                  // eslint-disable-next-line no-console
                  console.error(e)
                  return null
                },
                _: () => <M.CircularProgress className={classes.progress} />,
                Ok: R.map((i) => (
                  <SummaryItemFile
                    key={i.key}
                    // TODO: make a reusable function to compute relative s3 paths or smth
                    title={withoutPrefix(
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Dir" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/Dir.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/Dir.js#L144-L177)
```js

      {data.case({
        Err: displayError(),
        Init: () => null,
        _: (x) => {
          const res = AsyncResult.case(
            {
              Ok: R.identity,
              Pending: AsyncResult.case({
                Ok: R.identity,
                _: () => null,
              }),
              _: () => null,
            },
            x,
          )

          if (!res) return <M.CircularProgress />

          const items = formatListing({ urls, scope: cfg.scope }, res)

          const locked = !AsyncResult.Ok.is(x)

          return (
            <>
              <ListingWithPrefixFiltering
                items={items}
                locked={locked}
                truncated={res.truncated}
                prefix={res.prefix}
                setPrefix={setPrefix}
                bucket={res.bucket}
                path={res.path}
              />
              <Summary files={res.files} />
            </>
          )
        },
      })}
    </M.Box>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "BucketLayout" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/Embed.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/Embed.js#L130-L130)
```js
      <M.Container maxWidth="lg">
        {data.case({
          Ok: () => children,
          Err: displayError(),
          _: () => <Placeholder color="text.secondary" />,
        })}
      </M.Container>
      <M.Box flexGrow={1} />
    </>
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "VersionInfo" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/File.js#L103-L175)
```js
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {data.case({
          Ok: (versions) => (
            <M.List className={classes.list} ref={containerRef}>
              {versions.map((v) => (
                <M.ListItem
                  key={v.id}
                  button
                  onClick={close}
                  selected={version ? v.id === version : v.isLatest}
                  component={Link}
                  to={urls.bucketFile(bucket, path, v.id)}
                >
                  <M.ListItemText
                    primary={
                      <span>
                        <FormattedRelative value={v.lastModified} />
                        {v.isLatest && ' (latest)'}
                        {' | '}
                        {v.size != null ? readableBytes(v.size) : 'Delete Marker'}
                      </span>
                    }
                    secondary={
                      <span>
                        {v.lastModified.toLocaleString()}
                        <br />
                        <span className={classes.mono}>{v.id}</span>
                      </span>
                    }
                  />
                  {!cfg.noDownload && (
                    <M.ListItemSecondaryAction>
                      {!v.deleteMarker &&
                        !v.archived &&
                        AWS.Signer.withDownloadUrl(
                          { bucket, key: path, version: v.id },
                          (url) => (
                            <M.IconButton
                              href={url}
                              title="Download this version of the object"
                            >
                              <M.Icon>arrow_downward</M.Icon>
                            </M.IconButton>
                          ),
                        )}
                      <M.Hidden xsDown>
                        <M.IconButton
                          title="Copy object version's canonical HTTPS URI to the clipboard"
                          href={getHttpsUri(v)}
                          onClick={copyHttpsUri(v)}
                        >
                          <M.Icon>link</M.Icon>
                        </M.IconButton>
                        <M.IconButton
                          title="Copy object location in CLI format (aws s3api) to the clipboard"
                          onClick={copyCliArgs(v)}
                        >
                          <M.Box
                            fontSize={20}
                            height={24}
                            width={24}
                            lineHeight={24 / 20}
                            display="flex"
                            justifyContent="center"
                          >
                            S3
                          </M.Box>
                        </M.IconButton>
                      </M.Hidden>
                    </M.ListItemSecondaryAction>
                  )}
                </M.ListItem>
              ))}
            </M.List>
          ),
          Err: () => (
            <M.List>
              <M.ListItem>
                <M.ListItemIcon>
                  <M.Icon>error</M.Icon>
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "VersionInfo" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/File.js#L176-L185)
```js
                </M.ListItem>
              ))}
            </M.List>
          ),
          Err: () => (
            <M.List>
              <M.ListItem>
                <M.ListItemIcon>
                  <M.Icon>error</M.Icon>
                </M.ListItemIcon>
                <M.Typography variant="body1">Error fetching versions</M.Typography>
              </M.ListItem>
            </M.List>
          ),
          _: () => (
            <M.List>
              <M.ListItem>
                <M.ListItemIcon>
                  <M.CircularProgress size={24} />
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "VersionInfo" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/File.js#L186-L195)
```js
                <M.Typography variant="body1">Error fetching versions</M.Typography>
              </M.ListItem>
            </M.List>
          ),
          _: () => (
            <M.List>
              <M.ListItem>
                <M.ListItemIcon>
                  <M.CircularProgress size={24} />
                </M.ListItemIcon>
                <M.Typography variant="body1">Fetching versions</M.Typography>
              </M.ListItem>
            </M.List>
          ),
        })}
      </M.Popover>
    </>
  )
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Analytics" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/File.js#L233-L269)
```js

  return (
    <Section icon="bar_charts" heading="Analytics" defaultExpanded={defaultExpanded}>
      {data.case({
        Ok: ({ counts, total }) =>
          total ? (
            <M.Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <M.Box>
                <M.Typography variant="h5">Downloads</M.Typography>
                <M.Typography variant="h4" component="div">
                  {readableQuantity(cursor === null ? total : counts[cursor].value)}
                </M.Typography>
                <M.Typography variant="overline" component="span">
                  {cursor === null
                    ? `${counts.length} days`
                    : formatDate(counts[cursor].date)}
                </M.Typography>
              </M.Box>
              <M.Box width="calc(100% - 7rem)">
                <Sparkline
                  data={R.pluck('value', counts)}
                  onCursor={setCursor}
                  width={1000}
                  height={60}
                  stroke={SVG.Paint.Server(
                    <linearGradient x2="0" y2="100%" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor={M.colors.blueGrey[800]} />
                      <stop offset="100%" stopColor={M.colors.blueGrey[100]} />
                    </linearGradient>,
                  )}
                />
              </M.Box>
            </M.Box>
          ) : (
            <M.Typography>No analytics available</M.Typography>
          ),
        Err: () => <M.Typography>No analytics available</M.Typography>,
        _: () => <M.CircularProgress />,
      })}
    </Section>
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Analytics" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/File.js#L270-L270)
```js
            </M.Box>
          ) : (
            <M.Typography>No analytics available</M.Typography>
          ),
        Err: () => <M.Typography>No analytics available</M.Typography>,
        _: () => <M.CircularProgress />,
      })}
    </Section>
  )
}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "Analytics" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/File.js#L271-L271)
```js
          ) : (
            <M.Typography>No analytics available</M.Typography>
          ),
        Err: () => <M.Typography>No analytics available</M.Typography>,
        _: () => <M.CircularProgress />,
      })}
    </Section>
  )
}

```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "File" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/File.js#L422-L422)
```js
        <div className={classes.spacer} />
        {downloadable && <FileView.DownloadButton handle={handle} />}
      </div>
      {objExistsData.case({
        _: () => <CenteredProgress />,
        Err: (e) => {
          if (e.code === 'Forbidden') {
            return (
              <Message headline="Access Denied">
                You don&apos;t have access to this object.
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "File" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/File.js#L435-L452)
```js
          // TODO: handle this more gracefully
          throw e
        },
        Ok: requests.ObjectExistence.case({
          Exists: () => (
            <>
              {!cfg.hideCode && <Code>{code}</Code>}
              {!cfg.hideAnalytics && !!analyticsBucket && (
                <Analytics {...{ analyticsBucket, bucket, path }} />
              )}
              <Section icon="remove_red_eye" heading="Preview" defaultExpanded>
                {versionExistsData.case({
                  _: () => <CenteredProgress />,
                  Err: (e) => {
                    throw e
                  },
                  Ok: withPreview(renderPreview),
                })}
              </Section>
              <Meta bucket={bucket} path={path} version={version} />
            </>
          ),
          _: () => <Message headline="No Such Object" />,
        }),
      })}
    </FileView.Root>
  )
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/File.js#L443-L443)
```js
                <Analytics {...{ analyticsBucket, bucket, path }} />
              )}
              <Section icon="remove_red_eye" heading="Preview" defaultExpanded>
                {versionExistsData.case({
                  _: () => <CenteredProgress />,
                  Err: (e) => {
                    throw e
                  },
                  Ok: withPreview(renderPreview),
                })}
```

## Rule: react/no-unstable-nested-components
- Message: `Declare this component outside parent component "File" or memoize it.`
- Path: `quiltdata/quilt/catalog/app/embed/File.js`
- [Link](https://github.com/quiltdata/quilt/blob/HEAD/catalog/app/embed/File.js#L453-L453)
```js
              </Section>
              <Meta bucket={bucket} path={path} version={version} />
            </>
          ),
          _: () => <Message headline="No Such Object" />,
        }),
      })}
    </FileView.Root>
  )
}
```
