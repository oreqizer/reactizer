# Folder structure

All files should have a `__tests__` folder next to them, with a `<filename>.spec.ts` test.

## Components

Contains _components_.

> Sub-components can go only one level deep. Sub-components cannot have nested sub-components.

```
components/
  MyComponent/
    index.tsx <- The main component, only this is allowed to be imported
    components/
      SubComponent/
        index.tsx <- A component used in 'index.tsx' or other subcomponents
    services/
      getName.ts <- A component's mini service
```

**Can have**
* subcomponents
* consts
* records
* services

**Cannot have**
* scenes

## Consts

Contains _constants_. Prefer granular exporting than one huge blob. Utilize **TS** `enum` type.

```
consts/
    cookies.ts <- Keys used for storing cookies
```

**Cannot have**
* components
* subconsts
* records
* services
* scenes

## Records

Contains _data types_ and _functions_ operating on the data type.

```
records/
    Kek.ts <- A record with its functions
```

**Example:**
```js
// @flow strict
export type Kek = {
  bur: string;
};

export const wrapBur = (str: string, kek: Kek) => str + kek.bur + str;
```

**Cannot have**
* components
* consts
* subrecords
* services
* scenes

## Scenes

Visible sections of a website. Often defined by the URL.

> Scene's private components can have sub-components

```
scenes/
    NavBar/
        components/
            Hamburger/
                index.tsx <- component private for the scene
        index.tsx <- the scene root
```

**Can have**
* components
* consts
* records
* services

**Cannot have**
* subscenes

### Styles

A special folder that contains styling-related things, such as the `theme` definition and `mixins`.

```
styles/
    mixins/ <- Reusable styles
        box.ts
        line.ts
    theme.ts <- Main theme definition and utilies
```

**Cannot have**
* components
* consts
* records
* services
* scenes

### Services

Code that performs computations or provides a certain functionality.

Nest in a folder when it is a *global* service, no need for a nested folder when it belongs to a *component* or a *scene*.

```
services/
    intl/
        context.ts
        translate.ts
```

**Can have**
* subservices

**Cannot have**
* components
* records
* scenes
