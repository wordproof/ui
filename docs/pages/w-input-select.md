# w-input-select

<div style="margin-top:1rem;">
  <w-input-select label="Blockchain" error="you can't select EOS" id="select" placeholder="Please select the blockchain">
    <w-input-select-option value="eos">EOS<span> (Recommended)</span></w-input-select-option>
    <w-input-select-option value="jungle3" disabled="true">Jungle3</w-input-select-option>
    <w-input-select-option value="telos">Telos</w-input-select-option>
  </w-input-select>
</div>

<script>
  setTimeout(()=>{
    const selectEl = document.querySelector('#select');
    selectEl.addEventListener('change' , (ev)=>{
      console.log(ev.target.value)
    })
  }, 100)
</script>

```html
<w-input-select label="Name"></w-input-select></div>
```

## API

!!!include(src/components/w-input-select/readme.md)!!!
