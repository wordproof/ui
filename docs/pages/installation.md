# Getting started

## Installation with Vanilla JS

Add the following two lines inside `head` tag of the pages that will use WordProod Uikit components:

```html
<script type="module" src="https://unpkg.com/@wordproof/uikit/dist/uikit/uikit.esm.js"></script>
<script nomodule src="https://unpkg.com/@wordproof/uikit/dist//uikit/uikit.js"></script>
```

## Installation with Vue.js

install uikit library:

```
npm i @wordproof/uikit
```

### Integration with Vue 2.x

Add to your `app.js` file:

```js
import { defineCustomElements } from '@wordproof/uikit';

Vue.config.ignoredElements = [/w-\w*/];
defineCustomElements();
```

### Integration with Vue 3.x

Add to your `app.js` file:

```js
import { defineCustomElements } from '@wordproof/uikit';

defineCustomElements();
```

Then you need to add `isCustomElement: tag => tag.startsWith("w-")` to `compilerOptions`

If you are using `laravel mix` then you should add it to `webpack.mix.js`:

```js
mix.js("resources/js/app.js", "public/js")
    ...
    .options({
        vue: {
            compilerOptions: {
                isCustomElement: tag => tag.startsWith("w-")
            }
        }
    })
```
