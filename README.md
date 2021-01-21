# Archanae

[![Maintainability](https://api.codeclimate.com/v1/badges/677152ea6e0519355229/maintainability)](https://codeclimate.com/github/jpbarela/arachnae/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/677152ea6e0519355229/test_coverage)](https://codeclimate.com/github/jpbarela/arachnae/test_coverage)

Arachnae is a simple React component library. It uses Flow for typing and Aphrodite for style
management.

## Installation

A NPM package is hosted on the Github package repository. To install this package:

1. Create a Github Personal Access Token, https://github.com/settings/tokens.
   - It is recommended you use an access token with only read package access
1. Update your `.npmrc` file:
   1. Add your token to authenticate to the Github registry,
      `//npm.pkg.github.com/:_authToken=TOKEN`
   2. Add `@jpbarela:registry=https://npm.pkg.github.com/jpbarela`
1. You can now use your node package manager to add `@jpbarela/arachnae`

The repo also uses a theme extensively. You should wrap the components in a `react-jss`,
`ThemeProvider` component. There is a Flow `ThemeType` exported for type consistence.

## Development

Arachanae comes with a (Storybook)[https://storybook.js.org] that can be used for local development or to view the components for use in another
project. To start the Storybook simply use

```
npm run storybook
```

## Testing

The primary tests for the repository are Jest tests using the `testing-library` framework. You can
run the tests with

```
npm run test
```
