Following issues on imports seem to be connected to [#3004](https://github.com/snowpackjs/snowpack/issues/3004):
```js
// src/index.jsx

// Fails (when cache is clean):
import Avatar from '@material-ui/core/Avatar';
import Alert from '@material-ui/lab/Alert';

// Works: also caches other components which makes the previous imports not fail
import { Avatar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// ^ Both seem to work on build (when there's no alias defined in snowpack.config.js)
```

Also when running `snowpack build` with the following config, it finishes succesfully but the build fails on the browser:
```js
// snowpack.config.js
{
  alias: {
    // these seem to work fine in snowpack dev but not when making a build:
    '@material-ui/core/Avatar': '@material-ui/core/esm/Avatar',
    '@material-ui/lab/Alert': '@material-ui/lab/esm/Alert',
  }
}
```
For this last part, in medium-big sized projects changing every Material UI import from `import Avatar from '@material-ui/core/Avatar'` to `import { Avatar } from '@material-ui/core'` might be hard and take too long so I thought creating an `alias` in `snowpack.config.js` would make it easier without changing all of the imports.
