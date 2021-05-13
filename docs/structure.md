# Folder structure

- `.storybook` has **Storybook** config
- `etc` has build stuff and configs
- `src` contains source files
- `static` has static assets that should be pointed to _relative to this directory_
- `stories` has **Storybook** stories
- `types` has global **TypeScript** types

See [styleguide](./styleguide/structure) for details.

### Special

- `coverage` has test coverage
- `dist` is the output of the build

### Src

Contains **all** source files.

- `client` has the actual application.
- `server` has stuff for generating markup and both static and dynamic SSR.

## Application code

All application code is located in the `src/client` directory.

- `index.ts` is **webpack**'s entrypoint
- `app.tsx` is the client's render root
