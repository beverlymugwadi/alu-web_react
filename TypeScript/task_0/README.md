# TypeScript Task 0: Student Interface

## Overview
This project demonstrates TypeScript fundamentals including interfaces, type annotations, and DOM manipulation.

## Features
- **Student Interface**: Defines a Student type with firstName, lastName, age, and location properties
- **Type-Safe Variables**: Creates typed student objects following the Student interface
- **DOM Manipulation**: Dynamically generates an HTML table displaying student information
- **TypeScript Compilation**: Uses webpack and ts-loader for TypeScript compilation

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run start-dev
```
This will start the webpack dev server and open the application in your default browser.

### Build
```bash
npm run build
```
This will compile the TypeScript code and generate the bundle.

### Testing
```bash
npm test
```

## Project Structure
```
task_0/
├── js/
│   └── main.ts          # Main TypeScript file with Student interface and table rendering
├── index.html           # Entry HTML file
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── webpack.config.js    # Webpack configuration
├── .eslintrc.js         # ESLint configuration
└── README.md            # This file
```

## Implementation Details
- The `Student` interface enforces type safety for student objects
- Student objects are stored in a typed array (`Student[]`)
- The DOM table is created using vanilla JavaScript with proper TypeScript typing
- All variables use TypeScript type annotations where possible
