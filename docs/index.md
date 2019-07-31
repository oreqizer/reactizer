## Docs

Use **yarn** as a package manager.

* [Git](./git)
* [Styleguide](./styleguide)
* [Folder structure](./structure)
* [Rendering](./rendering)
* [Translations](./translations)
* [File templates](./templates)

## Usage

Just browse the files! You'll get a feel for what's going on quickly.

### Server

Adjust the following files to your needs:
* `src/server/config.ts` - static config of assets, routes...
* `src/server/data.ts` - load any JSONs with i18n, theming...

To alter the generated markup, see `src/server/markup`. It contains an entry function for both **static** and **dynamic** rendering.

Any static files go into the `src/static` folder.

### Client

Main entry points:
* `src/client/app.tsx` - initial client render
* `src/client/scenes/Root.tsx` - first common component for client/server

### Scripts

- `yarn start` - Dev server at **:8080**

Static analysis:
- `yarn ci` - shorthand for all of the below at once
- `yarn test`
- `yarn lint`
- `yarn types`
- `yarn madge`
