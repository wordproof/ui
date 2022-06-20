# w-certificate



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                                                                                                                                        | Type                | Default     |
| --------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ----------- |
| `debug`               | `debug`                 | Enables debug information logging to the console.                                                                                                                  | `boolean`           | `false`     |
| `lastModified`        | `last-modified`         | The datetime the post was last modified. Used to show the visitor if the post is edited after the last timestamp. This is a visual notice, not a security feature. | `string`            | `undefined` |
| `linkText`            | `link-text`             | Change the certificate link text.                                                                                                                                  | `string`            | `undefined` |
| `noIcon`              | `no-icon`               | Hides the icon on certificate link.                                                                                                                                | `boolean`           | `false`     |
| `renderWithoutButton` | `render-without-button` | Render without button inside, if a button is used outside this element.                                                                                            | `boolean`           | `false`     |
| `sharedIdentifier`    | `shared-identifier`     | Specify shared identifier to allow pages with multiple certificates.                                                                                               | `string`            | `''`        |
| `showRevisions`       | `show-revisions`        | Determines if revisions are shown in the certificate.                                                                                                              | `boolean \| string` | `undefined` |


## Dependencies

### Depends on

- [w-compare-versions-view](./views/w-compare-versions-view)
- [w-version-view](./views/w-version-view)
- [w-certificate-button](../w-certificate-button)
- [w-modal](../w-modal)
- [w-icon](../w-icon)
- [w-router-outlet](../w-router-outlet)
- [w-logo](../w-logo)

### Graph
```mermaid
graph TD;
  w-certificate --> w-compare-versions-view
  w-certificate --> w-version-view
  w-certificate --> w-certificate-button
  w-certificate --> w-modal
  w-certificate --> w-icon
  w-certificate --> w-router-outlet
  w-certificate --> w-logo
  w-compare-versions-view --> w-date-time-select
  w-compare-versions-view --> w-icon
  w-compare-versions-view --> w-dropdown-menu
  w-date-time-select --> w-icon
  w-dropdown-menu --> w-icon
  w-version-view --> w-date-time-select
  w-version-view --> w-revision-select
  w-version-view --> w-icon
  w-version-view --> w-dropdown-menu
  w-revision-select --> w-icon
  w-certificate-button --> w-icon
  w-modal --> w-icon
  style w-certificate fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
