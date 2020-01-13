# @reactizer/boil-lib

The best **React** library boilerplate!

## Setup

```sh
yarn init # fill in yo project info
yarn add @reactizer/cli @reactizer/boil-lib -D
yarn reactizer init --app lib
yarn
```

Then adjust your `README.md`, and add the following to `package.json`:

```json
{
  "files": [
    "lib",
    "index.d.ts",
    "README.md"
  ]
}
```

For updating, run `yarn reactizer update --app lib` and revert any undesired changes.

## Commits

Follow `@commitlint/conventional` with a mandatory **scope** of:
* `dev` for non-production things like CI or tests
* `types` for adjusting `.js.flow` files or type signatures
* `src` for library changes, features, patches...

Examples:
* `docs(dev): document commits`
* `feat(src): add new hook`
* `chore(types): new spread syntax`

## Release

* `yarn release`
* `yarn publish`

## License

MIT
