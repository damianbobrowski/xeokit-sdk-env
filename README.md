# xeokit-sdk Development Environment

A customized development environment for working with the xeokit-sdk, allowing for real-time development and testing.

## Overview

This project provides a streamlined workflow for xeokit-sdk development. It uses Rolldown for building the SDK source files without bundling and Live Server for serving the content with automatic page refreshing. The xeokit-sdk is included as a Git submodule to enable easy updates and version management.

## Requirements

- [VS Code](https://code.visualstudio.com/)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [PNPM](https://pnpm.io/) for package management
- [Git](https://git-scm.com/) for version control and submodule management

## Setup

### Initialize the Git Submodule

This project uses the xeokit-sdk as a Git submodule. After cloning this repository, you need to initialize and update the submodule:

```bash
# If you're cloning the repository for the first time
git clone --recursive https://github.com/your-username/xeokit-sdk-env.git

# Or, if you've already cloned the repository without the --recursive flag
git submodule update --init --recursive
```

### Install Dependencies

```bash
pnpm install
```

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

## Working with the xeokit-sdk Submodule

### Updating the xeokit-sdk

To update the xeokit-sdk submodule to its latest version:

```bash
# Navigate to the xeokit-sdk directory
cd xeokit-sdk

# Fetch the latest changes
git fetch

# Check out the desired branch or tag (e.g., master)
git checkout master

# Update to the latest commit
git pull

# Return to the parent project
cd ..

# Commit the submodule update
git add xeokit-sdk
git commit -m "Update xeokit-sdk submodule to latest version"
```

### Switching to a Specific Version

To switch the xeokit-sdk to a specific version:

```bash
cd xeokit-sdk
git checkout v1.x.x  # Replace with the desired version tag
cd ..
git add xeokit-sdk
git commit -m "Switch xeokit-sdk to version v1.x.x"
``` 