# w-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                       | Type                                                                                                                                                                              | Default     |
| ---------- | ---------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `color`    | `color`    | button text size                  | `"gray" \| "white"`                                                                                                                                                               | `'gray'`    |
| `disabled` | `disabled` | button html "disabled" attribute  | `boolean`                                                                                                                                                                         | `false`     |
| `icon`     | `icon`     | button html "type" attribute      | `"arrow-down" \| "blockchain" \| "check-circle" \| "clock" \| "close" \| "close-circle" \| "comment" \| "eye" \| "eye-large" \| "ink-pen" \| "question-circle" \| "times-circle"` | `undefined` |
| `outline`  | `outline`  | renders button as underlined text | `boolean`                                                                                                                                                                         | `false`     |
| `size`     | `size`     | button text size                  | `"base" \| "lg" \| "sm" \| "xl" \| "xs"`                                                                                                                                          | `'lg'`      |
| `text`     | `text`     | renders button as underlined text | `boolean`                                                                                                                                                                         | `false`     |
| `type`     | `type`     | button html "type" attribute      | `string`                                                                                                                                                                          | `'button'`  |


## Dependencies

### Used by

 - [w-certificate](../w-certificate)
 - [w-modal](../w-modal)

### Depends on

- [w-icon](../w-icon)

### Graph
```mermaid
graph TD;
  w-button --> w-icon
  w-certificate --> w-button
  w-modal --> w-button
  style w-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
