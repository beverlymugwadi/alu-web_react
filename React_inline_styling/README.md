# React Inline Styling Tasks

Guided React exercises focused on inline styling with Aphrodite. Each task lives in its own `task_X/dashboard` folder with an isolated test suite.

## Prerequisites

- Node.js 16+ and npm installed
- Run all commands inside a chosen `task_X/dashboard`
- Fresh install per task if you switch folders (`npm install` inside that dashboard)

## Quick Start

```bash
# Pick a task (0-4) and enter its dashboard
cd task_4/dashboard

# Install dependencies for that task only
npm install

# Run tests
npm test         # One-time run
npm run test-watch  # Watch mode
```

## Task Layout

```
task_0/  Inline styling basics
task_1/  Inline styling with interactions
task_2/  Inline styling with notifications
task_3/  Responsive tweaks and styling
task_4/  Animations and menu styling
```

## Notes

- React 16.14 + Aphrodite + Jest/Enzyme stack
- No shared `node_modules` across tasks—install inside each dashboard
- No dev server scripts here; focus is on components and tests

## Troubleshooting

- Tests fail after switching tasks: reinstall in the current dashboard
- Module resolution issues: delete `node_modules` + `package-lock.json` within that task, then `npm install`
- Port conflicts are unlikely (no dev server), but if you add one, choose a unique port per task
