# w-input-select

<div style="margin-top:1rem;">
  <w-input-select label="Blockchain" error="you can't select Jungle3" id="select" placeholder="Please select the blockchain" value="">
    <w-input-select-option value="eos">EOS<span> (Recommended)</span></w-input-select-option>
    <w-input-select-option value="jungle3" disabled="true">Jungle3</w-input-select-option>
    <w-input-select-option value="telos">Telos</w-input-select-option>
  </w-input-select>

  <div style="padding:1rem 0;">Value: <span id="value"></span></div>
</div>

<ClientOnly>
  <script>
    setTimeout(()=>{
      const selectEl = document.querySelector('#select');
      const valueEl = document.querySelector('#value');
      selectEl.addEventListener('change' , (ev)=>{
        valueEl.innerText = ev.target.value;
      })
    }, 100)
  </script>
</ClientOnly>

```html
<w-input-select
  label="Blockchain"
  error="you can't select EOS"
  id="select"
  placeholder="Please select the blockchain"
  value=""
>
  <w-input-select-option value="eos"
    >EOS<span> (Recommended)</span></w-input-select-option
  >
  <w-input-select-option value="jungle3" disabled="true"
    >Jungle3</w-input-select-option
  >
  <w-input-select-option value="telos">Telos</w-input-select-option>
</w-input-select>

<script>
  const selectEl = document.querySelector('#select');
  const valueEl = document.querySelector('#value');
  selectEl.addEventListener('change', ev => {
    valueEl.innerText = ev.target.value;
  });
</script>
```

## API

!!!include(src/components/w-input-select/readme.md)!!!
