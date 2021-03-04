# Getting started

## Installation

install uikit library:

```
npm i @wordproof/uikit
```

## Integration with Vue 2.x

Add to your `app.js` file:

```js
import { defineCustomElements } from '@wordproof/uikit';

Vue.config.ignoredElements = [/w-\w*/];
defineCustomElements();
```

## Integration with Vue 3.x

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
