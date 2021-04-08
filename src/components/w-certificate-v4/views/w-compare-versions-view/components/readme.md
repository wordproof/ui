# w-certificate-versions-raw



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description | Type               | Default     |
| -------------- | --------- | ----------- | ------------------ | ----------- |
| `allOptions`   | --        |             | `RevisionOption[]` | `undefined` |
| `allRevisions` | --        |             | `WPRevision[]`     | `undefined` |


## Events

| Event    | Description | Type                      |
| -------- | ----------- | ------------------------- |
| `choose` |             | `CustomEvent<WPRevision>` |


## Dependencies

### Used by

 - [w-certificate-versions-view](..)

### Depends on

- [w-input-select](../../../../w-input-select)
- [w-input-select-option](../../../../w-input-select-option)

### Graph
```mermaid
graph TD;
  w-certificate-versions-raw --> w-input-select
  w-certificate-versions-raw --> w-input-select-option
  w-input-select --> w-icon
  w-certificate-versions-view --> w-certificate-versions-raw
  style w-certificate-versions-raw fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
