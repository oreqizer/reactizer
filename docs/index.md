## CLI

Comes with an **updater tool**! Simply overwrites all config files, it's up to you to revert any custom changes you want to keep.

* `yarn add -D reactizer`
* `yarn reactizer`

## Docs

* [Git](./docs/01git.md)
* [General](./docs/02general.md)
* [Folder structure](./docs/03structure.md)
* [Rendering](./docs/04rendering.md)
* [Translations](./docs/05translations.md)
* [Styled components](./docs/06styled.md)
* [File templates](./docs/07templates.md)

Use **yarn** as a package manager.

### Usage

Just browse the files! You'll get a feel for what's going on quickly.

#### Server

Adjust the following files to your needs:
* `src/server/config.js` - static config of assets, routes...
* `src/server/data.js` - load any JSONs with i18n, theming...

To alter the generated markup, see `src/server/markup`. It contains an entry function for both **static** and **dynamic** rendering.

Any static files go into the `src/static` folder.

#### Client

Main entry points:
* `src/client/app.jsx` - initial client render
* `src/client/scenes/Root.jsx` - first common component for client/server

### Features

- [x] **Static** and **dynamic** SSR
- [x] Internationalization
- [x] Theming
- [x] Tests via **Jest** and **Enzyme**
- [x] Storybook
- [x] Flow
- [x] ESLint

### Scripts

- `yarn start` - Dev server at **:8080**

Static analysis:
- `yarn test`
- `yarn lint`
- `yarn flow`
- `yarn madge`

