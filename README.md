# H5P ESLint Config

Reusable ESLint configuration for H5P projects.

## Description
This package provides a shared ESLint configuration for H5P projects, allowing for consistent linting across multiple repositories. It is based on the Airbnb style guide with specific customizations suitable for H5P development.

## Installation
Install the package via npm:

```bash
npm install --save-dev eslint-config-h5p
```

## Usage
Add an ESLint configuration file to the root of your project.

### Using eslint.config.js (ESM)
Using ESM modules, create an eslint.config.js file:

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

Then, install dependencies and peer dependencies
```bash
npm install --save-dev eslint-config-h5p eslint eslint-config-airbnb-base eslint-plugin-import
```

Or use the shorthand:
```bash
npx install-peerdeps --dev eslint-config-h5p
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
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import

# Link to your local eslint-config-h5p
npm link eslint-config-h5p

Create eslint.config.js in your project root:

import h5pConfig from 'eslint-config-h5p';

export default {
  ...h5pConfig,
  // Add any project-specific overrides here
};

Add a lint script to package.json:

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
