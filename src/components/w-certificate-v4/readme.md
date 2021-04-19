# w-certificate-v4



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                    | Type      | Default     |
| ---------- | ----------- | ------------------------------ | --------- | ----------- |
| `linkText` | `link-text` | custom certificate link text   | `string`  | `undefined` |
| `noIcon`   | `no-icon`   | hides icon on certificate link | `boolean` | `false`     |


## Dependencies

### Depends on

- [w-compare-versions-view](./views/w-compare-versions-view)
- [w-version-view](./views/w-version-view)
- [w-certificate-link](../w-certificate-link)
- [w-modal](../w-modal)
- [w-icon](../w-icon)
- [w-router-outlet](../w-router-outlet)
- [w-logo](../w-logo)

### Graph
```mermaid
graph TD;
  w-certificate-v4 --> w-compare-versions-view
  w-certificate-v4 --> w-version-view
  w-certificate-v4 --> w-certificate-link
  w-certificate-v4 --> w-modal
  w-certificate-v4 --> w-icon
  w-certificate-v4 --> w-router-outlet
  w-certificate-v4 --> w-logo
  w-compare-versions-view --> w-date-time-select
  w-compare-versions-view --> w-icon
  w-compare-versions-view --> w-dropdown-menu
  w-date-time-select --> w-icon
  w-dropdown-menu --> w-icon
  w-version-view --> w-date-time-select
  w-version-view --> w-icon
  w-version-view --> w-dropdown-menu
  w-modal --> w-icon
  style w-certificate-v4 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
