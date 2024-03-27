# vue-project

Based on the official Vite + Vue starter template, this opinionated template sets up:

- Vue 3
- Vue Router 4
- Pinia 2
- Vite 5
- TailwindCSS 3
- Vitest
- Typescript
- ESLint + Prettier
- PostCSS + Autoprefixer

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.
