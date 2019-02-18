# Folder structure

All files should have a `__tests__` folder next to them, with a `<filename>.spec.js` test.

## Components

Contains components.

```
components/
  MyComponent/
    index.jsx <- The main component, only this is allowed to be imported
    components/
      SubComponent/
        index.jsx <- A component used in 'index.jsx' or other subcomponents
```

**Can have**
* subcomponents
* services
* records

**Cannot have**
* scenes

## Primitives

Contains _styled components_.

```
primitives/
  MyComponent.jsx <- A styled component
```

**Cannot have**
* subcomponents
* scenes
* services
* records

## Records

Contains data types and their associated functions.

```
records/
  Kek.js <- A record with its functions
```

**Example:**
```js
// @flow strict
export type Kek = {|
  bur: string,
|};

export const wrapBur = (str: string, kek: Kek) => str + kek.bur + str;
```

**Cannot have**
* components
* subrecords
* services
* scenes

## Scenes

Visible sections of a website. Often defined by the URL, smaller sub-scenes can be tabs or just sections on the page.

```
scenes/
    NavBar/
        components/
            Hamburger/
                index.jsx <- component private for the scene
        index.jsx <- the scene root
```

**Can have**
* components
* records
* subscenes
* services

### Services

Code that performs computations or provides a certain functionality.

```
services/
    intl/
        context.js
        translate.js
```

**Can have**
* subservices

**Cannot have**
* components
* records
* scenes
