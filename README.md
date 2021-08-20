# Skeleton for Google Cloud Functions projects (base / project starter)

This is a repository intended to serve as a starting point if you want to bootstrap a google cloud function project in TypeScript.

## Features

- [TypeScript](https://www.typescriptlang.org/) (v4)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
  - [Import plugin](https://github.com/benmosher/eslint-plugin-import/)
- [Jest](https://jestjs.io) with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push

## Recommended Links
- [Javascript best practices](https://github.com/goldbergyoni/nodebestpractices.git)
- [Javascript testing best practices](https://github.com/goldbergyoni/javascript-testing-best-practices.git)
- [Google Cloud Functions deployment options](https://cloud.google.com/sdk/gcloud/reference/functions/deploy)
- [Git Flow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)
## Development

```bash
# install commitizen 
npm i -g commitizen

# run prettier watcher (run in another terminal)
yarn prettier:watch

# add all changes to repository and create bew commit
yarn commit

# configure project to create new commit
git cz
```

## Running the app

```bash
# install dependencies
yarn

# run in dev mode on port 3000
yarn dev

# generate production build
yarn build

# run generated content in dist folder on port 3000
yarn start
```

## Testing

### Jest with supertest

```
yarn test
```

## Linting

```
# run linter
yarn lint

# fix lint issues
yarn lint:fix
```
