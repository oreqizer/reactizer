# Contributing

Follow **all** rules written in the documents linked from the [README](./README.md).

Make sure these tasks run without errors:
* `yarn test`
* `yarn lint`
* `yarn flow check`
* `yarn madge`

### Development

Run `yarn start` and enjoy at **:8080**!

### Production

Run `yarn bundle`.

Run `yarn run run` and check out `localhost:3000`.

## Tests

Unit test **everything** testable! Isolate non-testable code as much as possible. Only the following is considered non-testable:

* Any **API calls** (REST, GraphQL...)
* Functions interacting with the **DOM API**

### Functions

**100% coverage**, no mercy. All cases, all branches, any meaningful combination of example cases.

### Components

Use **Enzyme**.

Snapshot test **dumb** components and make sure the snapshot makes sense.

Test all methods and callbacks in **smart** components.

## ESlint

Only disable stuff that _really_ needs disabling. No errors allowed, ideally not even warnings.

## Flow

Cover **all** source files with `// @flow strict`! Only disable stuff that _really_ needs disabling. No errors allowed.
