![build workflow](https://github.com/eckode/webpack/actions/workflows/build.yml/badge.svg)

# Eckode / Webpack

> ⚠️ This package is still a working in progress and is not yet suitable for usage.

*Not, just another boilerplate.*

An unopinionated; module bundling and preprocessing boilerplate to rapidly streamline frontend development.

___

## About:

This code base can be used in 3 ways:

* Fork it
* Clone it
* Depend on it
___

## Features:
* Webpack (v5):
   * Webpack-Dev-Server with HMR
* CSS:
   * SCSS/SASS
   * PostCSS
* JavaScript:
   * TypeScript
   * Babel
   * Jest
* HTML

### Sample code:
* JavaScript/TypeScript [`./src/binary-search.ts`](https://github.com/eckode/webpack/blob/main/src/binary-search.ts)
* Jest unit test [`./src/tests/binary-search.test.ts`](https://github.com/eckode/webpack/blob/main/src/tests/binary-search.test.ts)
* CSS/SCSS [`./src/scss/index.scss`](https://github.com/eckode/webpack/blob/main/src/scss/index.scss)
* HTML [`./src/index.html.ejs`](https://github.com/eckode/webpack/blob/main/src/index.html.ejs)

### Use it:

By far the easiest way to use this code is via NPM.

`yarn add -D @eckode/webpack` then add the following script commands to your `package.json`.

```json
"scripts": {
   "dev": "eckode", // Development
   "build": "eckode" // Production
},
```
Alternatively, clone and/or fork it, then run:

| Yarn        | NPM         |
| ----------- | ----------- |
| **Install** ||
| `yarn`    | `npm i`   |
| **Develeping** ||
| `yarn start` | `npm run start` |
| **Testing** ||
| `yarn test` | `npm run test` |
| **Build** ||
| `yarn build` | `npm run build` |
| **Test build** ||
| `yarn start-prod` | `npm run start-prod` |
| **Lint** ||
| `yarn lint` | `npm run lint` |

___

## Roadmap:

- [x] CLI functionality to allow usage of this code base as an npm package.
- [ ] Replace Babel with [SWC](https://swc.rs/)