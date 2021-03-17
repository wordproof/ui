# w-certificate



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                    | Type      | Default     |
| ---------- | ----------- | ------------------------------ | --------- | ----------- |
| `linkText` | `link-text` | custom certificate link text   | `string`  | `undefined` |
| `noIcon`   | `no-icon`   | hides icon on certificate link | `boolean` | `false`     |


## Dependencies

### Depends on

- [w-certificate-versions-view](./views/w-certificate-compare-view)
- [w-certificate-link](../w-certificate-link)
- [w-modal](../w-modal)
- [w-router-outlet](../w-router-outlet)
- [w-certificate-header](components)
- [w-logo](../w-logo)
- [w-icon](../w-icon)

### Graph
```mermaid
graph TD;
  w-certificate --> w-certificate-versions-view
  w-certificate --> w-certificate-link
  w-certificate --> w-modal
  w-certificate --> w-router-outlet
  w-certificate --> w-certificate-header
  w-certificate --> w-logo
  w-certificate --> w-icon
  w-certificate-versions-view --> w-certificate-header
  w-certificate-versions-view --> w-certificate-versions-raw
  w-certificate-versions-view --> w-certificate-versions-compare
  w-certificate-versions-view --> w-icon
  w-certificate-versions-raw --> w-input-select
  w-certificate-versions-raw --> w-input-select-option
  w-input-select --> w-icon
  w-certificate-versions-compare --> w-input-select
  w-certificate-versions-compare --> w-input-select-option
  w-modal --> w-icon
  style w-certificate fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
