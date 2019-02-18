# Folder structure

* `.storybook` has **Storybook** config
* `etc` has build stuff and configs
* `src` contains source files
* `stories` has **Storybook** stories
* `types` has global **Flow** types

See [styleguide](./styleguide/structure) for details.

### Special

* `.tmp` has stuff for development
* `data` is generated during build and development
* `dist` is the output of the build
* `flow-typed` is version controlled, but auto-generated

### Src

Contains **all** source files.

* `client` has the actual application.
* `server` has stuff for generating markup and both static and dynamic SSR.
* `static` has static assets that should be pointed to _relative to this directory_

## Application code

All application code is located in the `src/client` directory.

* `index.js` is **webpack**'s entrypoint
* `app.jsx` is the client's render root
