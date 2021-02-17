# w-certificate



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                    | Type      | Default     |
| ---------- | ----------- | ------------------------------ | --------- | ----------- |
| `linkText` | `link-text` | custom certificate link text   | `string`  | `undefined` |
| `noIcon`   | `no-icon`   | hides icon on certificate link | `boolean` | `false`     |


## Dependencies

### Depends on

- [w-certificate-link](../w-certificate-link)
- [w-modal](../w-modal)
- [w-button](../w-button)
- [w-logo](../w-logo)
- [w-icon](../w-icon)

### Graph
```mermaid
graph TD;
  w-certificate --> w-certificate-link
  w-certificate --> w-modal
  w-certificate --> w-button
  w-certificate --> w-logo
  w-certificate --> w-icon
  w-modal --> w-button
  w-button --> w-icon
  style w-certificate fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
