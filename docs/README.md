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

# Web Components

## Button

### Variants

#### default

<div style="margin-top:1rem;"><w-button>Sample Button</w-button></div>

```html
<w-button>Sample Button</w-button>
```

#### outline

<div style="margin-top:1rem;"><w-button outline>Sample Button</w-button></div>

```html
<w-button outline>Sample Button</w-button>
```

#### text

<div style="margin-top:1rem;"><w-button text>Sample Button</w-button></div>

```html
<w-button text>Sample Button</w-button>
```

### API

<<< @/src/components/w-button/readme.md

## Text Input

<div style="margin-top:1rem;"><w-input-text label="Name"></w-input-text></div>

```html
<w-input-text></w-input-text></div>
```
