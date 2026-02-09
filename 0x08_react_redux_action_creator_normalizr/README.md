# 0x08. React Redux action creator+normalizr

This project focuses on implementing Redux action creators and using Normalizr to normalize nested JSON data in a React application.

## Tasks

### Task 0: Read data from a JSON
- Created `notifications.json` with sample notification data
- Implemented `getAllNotificationsByUser` function to filter notifications by user ID
- Added tests to verify the function returns correct data

### Task 1: Normalize a nested JSON
- Set up Normalizr schema for users, messages, and notifications
- Normalized the notifications data using the schema
- Added comprehensive tests for normalized data structure

### Task 2: Filter a normalized Schema
- Modified `getAllNotificationsByUser` to use the normalized dataset
- Implementation uses only one loop (for...of)
- Does not use Object.keys
- All tests pass without modification

### Task 3: Create actions for the course list
- Created action types: SELECT_COURSE and UNSELECT_COURSE
- Implemented action creators: selectCourse and unSelectCourse
- Added comprehensive tests for both action creators

## Directory Structure
```
0x08_react_redux_action_creator_normalizr/
├── task_0/
│   └── dashboard/
│       ├── notifications.json
│       └── src/
│           └── schema/
│               ├── notifications.js
│               └── notifications.test.js
├── task_1/
│   └── dashboard/
│       ├── notifications.json
│       └── src/
│           └── schema/
│               ├── notifications.js
│               └── notifications.test.js
├── task_2/
│   └── dashboard/
│       ├── notifications.json
│       └── src/
│           └── schema/
│               ├── notifications.js
│               └── notifications.test.js
└── task_3/
    └── dashboard/
        ├── notifications.json
        └── src/
            ├── actions/
            │   ├── courseActionTypes.js
            │   ├── courseActionCreators.js
            │   └── courseActionCreators.test.js
            └── schema/
                ├── notifications.js
                └── notifications.test.js
```

## Running Tests

### For task_0:
```bash
cd task_0/dashboard
npm install
npm test -- src/schema/notifications.test.js
```

### For task_1:
```bash
cd task_1/dashboard
npm install
npm test -- src/schema/notifications.test.js
```

### For task_2:
```bash
cd task_2/dashboard
npm install
npm test -- src/schema/notifications.test.js
```

### For task_3:
```bash
cd task_3/dashboard
npm install
npm test -- "src/(actions|schema)/"
```

## Technologies Used
- React 16.14.0
- Jest for testing
- Babel for transpilation
- Normalizr for data normalization (task_1+)
