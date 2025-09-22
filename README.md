# H5P ESLint Config

Reusable ESLint configuration for H5P projects.

## Description
This package provides a shared ESLint configuration for H5P projects, allowing for consistent linting across multiple repositories. It is based on the Airbnb style guide with specific customizations suitable for H5P development.

## Installation
Install the package via npm:

```bash
npm install --save-dev eslint-config-h5p eslint@8 eslint-config-airbnb-base
```

## Usage
Add an ESLint configuration file to the root of your project.

### Using eslint.config.js (ESM)
Using ESM, create an `eslint.config.js` file and ensure that your `package.json` file contains the `"type": "module"` property/value pair. If your own code is not an ESM and you cannot set the type to `module`, then use `eslint.config.mjs` for the name of the eslint configuration file instead.

```javascript
import h5pConfig from "eslint-config-h5p";

export default [
  // {
  //  ignores: ['Add ignores here']
  // },
  h5pConfig,
  {
    // You can override or extend the rules here
    // For example:
    rules: {
      "no-console": "off",
    },
  }
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
```bash
npm run lint
```

## Ignoring Files and Directories
To ignore specific files or directories from linting, add an array of ignores to your eslint.config file:

```javascript
ignores: [
  'node_modules/**',
  'dist/**',
],
```


## Development Guide

### Setting Up Local Development

To test this ESLint configuration in your projects locally before publishing:

#### 1. Link the ESLint Config Package

```bash
# Clone and setup eslint-config-h5p
git clone https://github.com/h5p/eslint-config-h5p.git
cd eslint-config-h5p

# Install dependencies
npm install

# Create global symlink
npm link

# Navigate to your target project
cd path/to/your-h5p-project

# Install peer dependencies
npm install --save-dev eslint@8 eslint-config-airbnb-base

# Link to your local eslint-config-h5p
npm link eslint-config-h5p
```

Create eslint.config.js in your project root:

```javascript
import h5pConfig from 'eslint-config-h5p';

export default {
...h5pConfig,
  // Add any project-specific overrides here
};
```

Add a lint script to package.json:
```
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

Verify the setup:

```bash
npm run lint
```
