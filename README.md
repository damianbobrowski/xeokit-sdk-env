# xeokit-sdk Development Environment

A customized development environment for working with the xeokit-sdk, allowing for real-time development and testing.

## Overview

This project provides a streamlined workflow for xeokit-sdk development. It uses Rolldown for building the SDK source files without bundling and Live Server for serving the content with automatic page refreshing.

## Requirements

- [VS Code](https://code.visualstudio.com/)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [PNPM](https://pnpm.io/) for package management

## Development Workflow

### 1. Start the Build Process

```bash
pnpm run dev
```

This command runs Rolldown in watch mode to build xeokit-sdk sources into the dist folder without bundling. Changes in the source code will trigger automatic rebuilds.

### 2. Link the Distribution Files

```bash
pnpm dev:link
```

This creates a link in xeokit-sdk.min.es.js to reexport from dist/index.js, enabling you to work with the development version.

### 3. Serve the Project

Open `index.html` with the Live Server extension. This serves the repository as static content with live updates whenever files change.

### 4. Clean Up

```bash
pnpm dev:unlink
```

Use this command to revert the changes in xeokit-sdk.min.es.js when you're finished with development.

## Configuration

- Rolldown in watch mode automatically rebuilds when changes are detected in xeokit-sdk source files
- Live Server refreshes the webpage after rebuilds
- You may need to adjust the Live Server wait time in VS Code settings:
  ```json
  "liveServer.settings.wait": 600
  ```
  Adjust this value based on your workstation performance. 