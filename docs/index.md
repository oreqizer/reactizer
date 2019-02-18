## Docs

Use **yarn** as a package manager.

* [Git](./git)
* [Styleguide](./styleguide)
* [Folder structure](./structure)
* [Rendering](./rendering)
* [Translations](./translations)
* [File templates](./templates)

Comes with an **updater tool**! Simply overwrites all config files, it's up to you to revert any custom changes you want to keep.

* `yarn add -D reactizer`
* `yarn reactizer`

## Example

* [App](./app)
* [Storybook](./storybook)

## Usage

Just browse the files! You'll get a feel for what's going on quickly.

### Server

Adjust the following files to your needs:
* `src/server/config.js` - static config of assets, routes...
* `src/server/data.js` - load any JSONs with i18n, theming...

To alter the generated markup, see `src/server/markup`. It contains an entry function for both **static** and **dynamic** rendering.

Any static files go into the `src/static` folder.

### Client

Main entry points:
* `src/client/app.jsx` - initial client render
* `src/client/scenes/Root.jsx` - first common component for client/server

### Scripts

- `yarn start` - Dev server at **:8080**

Static analysis:
- `yarn test`
- `yarn lint`
- `yarn flow`
- `yarn madge`
