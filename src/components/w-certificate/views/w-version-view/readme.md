# w-version-view



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Default     |
| ------------------- | --------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `content`           | --                    |             | `WPContent`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `locale`            | `locale`              |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined` |
| `revision`          | `revision`            |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined` |
| `showRevisions`     | `show-revisions`      |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `strings`           | --                    |             | `{ compareVersions: string; thatIsImportantText: string; contentChangedAfterTimestamp: string; aboutWordproof: string; todaysRevision: string; selectDayToCompare: string; contentCertificate: string; thisContent: string; hasNotChanged: string; hasChanged: string; lastEdited: string; publishedBy: string; explainThis: string; timestampChecker: string; viewOnTheBlockchain: string; changed: string; removed: string; viewCode: string; viewContent: string; mostRecent: string; whatIsTimestamp: string; withTimestampYouCan: string; wantToKnowMore: string; goBack: string; showContent: string; }` | `undefined` |
| `timestampCheckUrl` | `timestamp-check-url` |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined` |
| `view`              | `view`                |             | `"clean" \| "raw" \| "render"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `undefined` |
| `viewBlockchainUrl` | `view-blockchain-url` |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined` |


## Dependencies

### Used by

 - [w-certificate](../..)

### Depends on

- [w-date-time-select](../../../w-date-time-select)
- [w-revision-select](../../../w-revision-select)
- [w-icon](../../../w-icon)
- [w-dropdown-menu](../../../w-dropdown-menu)

### Graph
```mermaid
graph TD;
  w-version-view --> w-date-time-select
  w-version-view --> w-revision-select
  w-version-view --> w-icon
  w-version-view --> w-dropdown-menu
  w-date-time-select --> w-icon
  w-revision-select --> w-icon
  w-dropdown-menu --> w-icon
  w-certificate --> w-version-view
  style w-version-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
