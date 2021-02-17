# w-modal



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                      | Type                | Default |
| --------- | --------- | -------------------------------- | ------------------- | ------- |
| `rounded` | `rounded` | controls visibility of the modal | `boolean \| string` | `false` |
| `visible` | `visible` | controls visibility of the modal | `boolean`           | `false` |


## Events

| Event   | Description | Type               |
| ------- | ----------- | ------------------ |
| `close` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [w-certificate](../w-certificate)

### Depends on

- [w-button](../w-button)

### Graph
```mermaid
graph TD;
  w-modal --> w-button
  w-button --> w-icon
  w-certificate --> w-modal
  style w-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
