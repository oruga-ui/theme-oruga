<p align="center">
    <img width="150" src="https://oruga.io/logo.png" />
</p>

<p align="center">
  🦋 <i>Default theme for <a href="https://oruga.io" target="_blank">Oruga</a></i> without any dependencies
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@oruga-ui/theme-oruga">
        <img src="https://img.shields.io/npm/v/@oruga-ui/theme-oruga.svg?logo=npm" alt="Oruga Default theme version" />
    <a>
    <a href="https://www.npmjs.com/package/@oruga-ui/theme-oruga">
        <img src="https://img.shields.io/npm/dt/@oruga-ui/theme-oruga.svg" alt="Oruga Default theme downloads" />
    </a>
    <a href="https://vuejs.org">
        <img src="https://img.shields.io/badge/vue.js-3.x-4fc08d" alt="Vue.js version">
    </a>
    <a href="https://discord.gg/RuKuBYN">
        <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord"  alt="Discord Link"/>
    </a>
</p>


### Install

```sh
npm install @oruga-ui/theme-oruga
```

or

```sh
yarn add @oruga-ui/theme-oruga
```

### Configure

```js
import { createApp } from 'vue'
import App from './App.vue'

// import Oruga
import Oruga from '@oruga-ui/oruga-next'

// import Oruga theme styling
import '@oruga-ui/theme-oruga/oruga.css'

createApp(App)
    .use(Oruga)
    .mount('#app')
```

The Oruga Default theme comes with two different stylesheets:

* `oruga.css` provides a lightweight stylesheet containing only essential CSS rules for Oruga components such as display, position, z-index and other basic attributes. 
* `oruga-full.css` contains the full Oruga style (the default style used for documentation). 

The Oruga Default theme uses the default classes set by Oruga and doesn't come with any JS configuration at all.

Note that the package also works for `@oruga-ui/oruga` (Vue 2).

### Customization (SASS/SCSS)

For customasing any SASS variables you have to set them pefore the SCSS Import.


```scss
// Include any default variable overrides here (though functions and maps won't be available here)
// ...

// Include the Oruga theme here
@import "/node_modules/@oruga-ui/theme-oruga/oruga-full.css";

// Then add additional custom code here
// ...
```

### Override default config

In case you want to replace the default style of a component you can override or add new classes; more details about components customization on https://oruga.io/documentation/#customization

```js
import { createApp } from 'vue'

import Oruga from '@oruga-ui/oruga-next'

import '@oruga-ui/theme-oruga/oruga-full.css'

const customConfig = {
    checkbox: {
        override: true,
        rootClass: 'checkbox'
    }
}

createApp(App)
    .use(Oruga, customConfig)
    .mount('#app')
```

## Contributors
Thank you to everyone involved for improving this project, day by day 💚

<a href="https://github.com/oruga-ui/theme-oruga">
  <img
  src="https://contrib.rocks/image?repo=oruga-ui/theme-oruga"
  />
</a>

[Complete list](CONTRIBUTORS.md).

## License

Code released under [MIT](https://github.com/oruga-ui/theme-oruga/blob/main/LICENSE) license.
