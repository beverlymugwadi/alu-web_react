# Webpack Tasks 0-3

This directory contains four webpack project tasks demonstrating progressive complexity in bundler configuration.

## Task 0: Basic Setup
- **Purpose**: Simple webpack project without custom configuration
- **Entry**: `src/index.js`
- **Output**: `dist/index.html` references auto-generated `main.js`
- **Dependencies**: jQuery for DOM manipulation
- **Build**: Uses webpack default configuration

To run:
```bash
cd task_0
npm install
npx webpack
```

## Task 1: Production Build with Dashboard
- **Purpose**: Production-ready webpack configuration with jQuery and Lodash
- **Entry**: `js/dashboard_main.js`
- **Output**: `public/bundle.js`
- **Features**:
  - Debounced counter button using Lodash
  - Production mode optimization
  - Custom webpack.config.js

To run:
```bash
cd task_1
npm install
npm run build
```

## Task 2: CSS and Image Loaders
- **Purpose**: Asset pipeline with CSS and image optimization
- **Extends**: Task 1 configuration
- **New Features**:
  - `style-loader` and `css-loader` for CSS support
  - `file-loader` and `image-webpack-loader` for image optimization
  - Holberton logo image (200x200px)
  - Styled counter output

To run:
```bash
cd task_2
npm install
npm run build
```

**Note**: Replace `assets/holberton-logo.jpg` with actual Holberton logo image for full functionality.

## Task 3: Dev Server with Code Splitting
- **Purpose**: Development environment with hot module replacement and code splitting
- **Features**:
  - Dev server on port 8564
  - Three separate bundles: `header.bundle.js`, `body.bundle.js`, `footer.bundle.js`
  - Auto-generated `index.html` via HtmlWebpackPlugin
  - Inline source maps for debugging
  - CleanWebpackPlugin to auto-clean output directory
  - Modular structure with separate CSS per module

To run:
```bash
cd task_3
npm install
npm run start-dev
```

Then open `http://localhost:8564` in your browser.

## Build Output
- Tasks 0-2 generate files in `dist/` or `public/` directories
- Task 3 dev server serves from `public/` directory with auto-generated index.html
- Do not commit `public/` directory or `node_modules/` to repository

## Loaders and Plugins Summary
| Loader/Plugin | Task | Purpose |
|---|---|---|
| style-loader | 2, 3 | Injects CSS into DOM |
| css-loader | 2, 3 | Resolves CSS imports |
| file-loader | 2, 3 | Handles asset files |
| image-webpack-loader | 2, 3 | Optimizes images |
| HtmlWebpackPlugin | 3 | Auto-generates HTML |
| CleanWebpackPlugin | 3 | Cleans output before build |

