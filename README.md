# H5P ESLint Config

Reusable ESLint configuration for H5P projects.

## Description
This package provides a shared ESLint configuration for H5P projects, allowing for consistent linting across multiple repositories. It is based on the Airbnb style guide with specific customizations suitable for H5P development.

## Installation
Install the package via npm:

```javascript
npm install --save-dev h5p-eslint-config
```

## Usage
Add an ESLint configuration file to the root of your project. You can choose between different formats.

### Using .eslintrc.json
Create a .eslintrc.json file with the following content:

```javascript
{
  "extends": "h5p-eslint-config",
  "rules": {
    // You can override or extend the configuration here
    // For example:
    // "no-console": "off"
  }
}
```

### Using .eslintrc.js
Alternatively, create an .eslintrc.js file:

```javascript
module.exports = {
  extends: "h5p-eslint-config",
  // You can override or extend the configuration here
  // For example:
  // rules: {
  //   "no-console": "off",
  // },
};
```

### Using eslint.config.js (ESM)
If you prefer using ESM modules, create an eslint.config.js file:

```javascript
import h5pConfig from "h5p-eslint-config";

export default [
  h5pConfig,
  {
    // You can override or extend the configuration here
    // For example:
    // rules: {
    //   "no-console": "off",
    // },
  },
];
```

## Running ESLint
Add a lint script to your package.json:

```javascript
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

Now you can run ESLint with:
```javascript
npm run lint
```

## Ignoring Files and Directories
To ignore specific files or directories from linting, create a .eslintignore file in the root of your project:

```
/vendor
/node_modules
/public
/webpack.mix.js
```
Customize the ignore list as needed for your project.

