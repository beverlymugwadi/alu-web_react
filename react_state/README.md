# React State Management - Task 0

## Project Description

This project demonstrates adding local state management to a React application. It modifies the previous React inline styling project by introducing state and event handlers to manage component interactions, specifically for showing and hiding a notifications panel.

## Requirements

- Node 12.x.x
- npm 6.x.x
- All files should end with a new line
- No lint errors in the console

## Tasks Completed

### 0. Adding a local state for notifications

#### App Component Modifications

1. **Created local state** in the App component constructor:
   - `displayDrawer`: boolean (default: false)

2. **Created event handler functions**:
   - `handleDisplayDrawer()`: Sets `displayDrawer` to true
   - `handleHideDrawer()`: Sets `displayDrawer` to false
   - Both functions are bound in the constructor for performance optimization

3. **Passed props to Notifications component**:
   - `displayDrawer`: Current state value
   - `handleDisplayDrawer`: Function to show notifications
   - `handleHideDrawer`: Function to hide notifications

#### Notifications Component Modifications

1. **Added propTypes** for new props:
   - `displayDrawer` (boolean)
   - `handleDisplayDrawer` (function)
   - `handleHideDrawer` (function)

2. **Added defaultProps** for new props with sensible defaults

3. **Updated event handling**:
   - Clicking "Your notifications" calls `handleDisplayDrawer`
   - Clicking the close button (×) calls `handleHideDrawer`

4. **Updated shouldComponentUpdate**:
   - Now checks if `displayDrawer` prop has changed
   - Allows re-render when notification drawer visibility changes

5. **Conditional rendering**:
   - Notifications list only renders when `displayDrawer` is true

#### Test Suite Modifications

##### App.test.js

Added tests to verify:
- Initial state for `displayDrawer` is false
- After calling `handleDisplayDrawer`, state becomes true
- After calling `handleHideDrawer`, state becomes false
- Props are correctly passed to the Notifications component

##### Notifications.test.js

Added tests to verify:
- Clicking on "Your notifications" calls `handleDisplayDrawer`
- Clicking on the close button calls `handleHideDrawer`
- `shouldComponentUpdate` works correctly with `displayDrawer` changes
- Component has correct propTypes and defaultProps
- Component renders NotificationItems only when `displayDrawer` is true

## Installation

```bash
cd task_0/dashboard
npm install
```

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm test-watch
```

## Project Structure

```
task_0/
└── dashboard/
    ├── config/
    │   └── setupTests.js
    ├── src/
    │   ├── App/
    │   │   ├── App.js
    │   │   └── App.test.js
    │   ├── Header/
    │   │   └── Header.js
    │   ├── Login/
    │   │   └── Login.js
    │   ├── Footer/
    │   │   └── Footer.js
    │   ├── CourseList/
    │   │   └── CourseList.js
    │   ├── BodySection/
    │   │   ├── BodySection.js
    │   │   └── BodySectionWithMarginBottom.js
    │   └── Notifications/
    │       ├── Notifications.js
    │       ├── Notifications.test.js
    │       └── NotificationItem.js
    ├── package.json
    └── .babelrc
```

## Key Implementation Details

### State Management
- Uses React class component state with `setState()` for managing `displayDrawer`
- Functions are bound in constructor to optimize performance (avoid re-binding on each render)

### shouldComponentUpdate Optimization
- Checks both the notification list length and the `displayDrawer` prop
- Prevents unnecessary re-renders while allowing updates when needed

### PropTypes and DefaultProps
- All new props have proper PropTypes definitions
- DefaultProps provide safe defaults for optional props

### Event Binding
- Event handlers are bound in the constructor using `.bind(this)`
- This ensures correct `this` context when functions are passed as props

## Files Modified

- `task_0/dashboard/src/App/App.js`
- `task_0/dashboard/src/App/App.test.js`
- `task_0/dashboard/src/Notifications/Notifications.js`
- `task_0/dashboard/src/Notifications/Notifications.test.js`

## Author

This project implements the requirements for the React State Management task 0 from the ALU web React course.
