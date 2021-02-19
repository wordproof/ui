# Installation into Vue application

install uikit library:

```
npm i @wordproof/uikit
```

Add to your `App.js` file:

```js
import { defineCustomElements } from '@wordproof/uikit';

Vue.config.ignoredElements = [/w-\w*/];
defineCustomElements();
```