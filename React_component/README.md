# React Components - Learning Path

Progressive React learning project with 5 tasks covering class components, lifecycle methods, event handling, composition, HOCs, and performance optimization.

## Quick Start

```bash
# Navigate to any task
cd task_5/dashboard

# Install and run
npm install
npm test        # Run tests
npm run dev     # Development server
npm run build   # Production build
```

## Tasks Overview

| Task | Focus | Status |
|------|-------|--------|
| Task 0 | Class Components | ✅ 12 tests |
| Task 1 | Lifecycle Methods | ✅ 12 tests |
| Task 2 | Event Handling | ✅ 20 tests |
| Task 3 | Composition & Reusability | ✅ 35 tests |
| Task 4 | Higher-Order Components | ✅ 44 tests |
| Task 5 | Performance Optimization | ✅ 46 tests |

**Total:** 46 tests passing ✅

## What You'll Learn

- **Task 0:** Convert functional components to class components
- **Task 1:** Use lifecycle methods (componentDidMount, componentWillUnmount)
- **Task 2:** Handle events and bind methods in constructors
- **Task 3:** Build reusable components through composition patterns
- **Task 4:** Create higher-order components (HOCs) for code reuse
- **Task 5:** Optimize rendering with React.memo and shouldComponentUpdate

## Project Structure

```
task_0/dashboard/src/  (Class components)
task_1/dashboard/src/  (Lifecycle methods)
task_2/dashboard/src/  (Event handling + Notifications)
task_3/dashboard/src/  (BodySection, CourseList)
task_4/dashboard/src/  (WithLogging HOC)
task_5/dashboard/src/  (React.memo, shouldComponentUpdate)
```

## Key Concepts

### Class Components
```javascript
class App extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

### Lifecycle Methods
```javascript
componentDidMount() { /* Setup */ }
componentWillUnmount() { /* Cleanup */ }
shouldComponentUpdate(nextProps) { /* Optimize */ }
```

### Event Handling
```javascript
constructor(props) {
  this.handleClick = this.handleClick.bind(this);
}
handleClick() { /* Handle event */ }
```

### Component Composition
```javascript
const SpecializedComponent = (props) => (
  <BaseComponent {...props} />
);
```

### Higher-Order Components
```javascript
const WithLogging = (Component) => {
  class Wrapper extends React.Component { /* ... */ }
  Wrapper.displayName = `WithLogging(${Component.name})`;
  return Wrapper;
};
```

### Performance Optimization
```javascript
// Pure component
export default React.memo(MyComponent);

// Custom re-render logic
shouldComponentUpdate(nextProps) {
  return nextProps.listLength > this.props.listLength;
}
```

## Technology Stack

- **React** 16.14.0
- **Jest** 29.0.0
- **Enzyme** 3.10.0
- **Babel** 7.x
- **Vite** (task_2+)

## Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test-watch
```

### Testing Techniques
- Shallow rendering with Enzyme
- Spy on methods
- setProps for prop updates
- Mock console methods

## Common Commands

```bash
# Install dependencies
npm install

# Run tests
npm test

# Development server
npm run dev

# Production build
npm run build

# Watch mode for tests
npm run test-watch
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Tests fail | Run `npm install` |
| Module not found | `rm -r node_modules && npm install` |
| Port in use | Kill process or change port |

## Next Steps

After completing all tasks, explore:
- React Hooks (useEffect, useState)
- Context API for state management
- Redux for complex state
- Error Boundaries
- Performance profiling with DevTools

## Resources

- [React Docs](https://react.dev)
- [Enzyme Docs](https://enzymejs.github.io/enzyme/)
- [Jest Docs](https://jestjs.io/)

---

**Status:** All 5 tasks complete, 46 tests passing ✅
