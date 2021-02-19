# w-modal

The Modal is controlled externally by `visible` prop. When backdrop or close button clicked the component emits `close` event. The handler of this event should modify the value of `visible` prop accordingly.

```html
<w-modal visible="true">
  ... content
</w-modal>
```

## API

!!!include(src/components/w-modal/readme.md)!!!
