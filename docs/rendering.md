# Rendering

There are **three** types of rendering:
* client-side
* static server-side
* runtime server-side

### Root

Located in `src/client/Root.tsx`.

Serves as a common entrypoint to the application for all render strategies. Root doesn't differentiate in which environment it is rendered. Initial render should be **pure**, solely based on _props_, initial _state_ and _context_.

## Client-side

Located in `src/client/app.tsx`.

Happens in the client's browser. Needs to happen ASAP, thus the data required for the render should be kept minimal and should be available _immediately_.

Initial _props_ and _context_ should be the same as on the server, thus it is essential that the server supplies all the necessary data for the client.

The client takes two pieces of data from the `window` object:
* `__THEME_` - theme info for the client
* `__INTL__` - locale info and translations

No other data except the URL should affect the client's initial render.

## Server-side

Has two roles:

* Render **markup** for the client to immediately display
* Prepare basic **data** for the client, such as _translations_ and _theme_

Common render function for both _static_ and _dynamic_ server-side rendering is located in `src/server/markup/index.tsx`. The function is kept pure, spits out consistent markup for the same arguments.

Request markup flow:
* page rendered **statically** - markup is served to the client
* page **not rendered**, or is **dynamic** - fallback to dynamic SSR

### Static

Located in `src/server/render.ts`.

Happens at **build time**. Saves an `index.html` file for every:
* Locale
* Theme
* Page

The output structure is `dist/static/pages/<theme>/<locale>/<page>/index.html`.

The generated pages are served by `src/server/pages.ts`, but serving can be done on an upper layer, too.

### Dynamic

Located in `src/server/app.ts`.

Happens at **runtime**. Generates a HTML stream that is served to the client.

The reason to have dynamic SSR is for dynamic content, e.g. `/search/<from>/<to>`. In all other cases, static SSR is preferred.
