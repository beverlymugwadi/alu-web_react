# alu-web_react TypeScript Projects

This repository contains tasks for learning TypeScript basics, interfaces and classes, DOM interactions, namespaces, ambient declarations, and nominal typing.

Projects:
- task_0: Student interface + DOM table
- task_1: Teacher/Directors interfaces, printTeacher, StudentClass
- task_2: Advanced types, classes, predicates, string literal types
- task_3: Ambient namespace declarations for CRUD
- task_4: Namespaces + declaration merging (Subjects)
- task_5: Brand convention & nominal typing

Build:
Each task directory includes its own TypeScript and webpack configuration (except task_4 which uses only tsconfig). Use the task-level commands:

```
cd TypeScript/task_0 && npm install && npm run build
cd TypeScript/task_1 && npm install && npm run build
cd TypeScript/task_2 && npm install && npm run build
cd TypeScript/task_3 && npm install && npm run build
cd TypeScript/task_5 && npm install && npm run build
```

Notes:
- Configs constrain types to browser DOM to avoid Node type conflicts with TS 3.6.
- All files end with a newline; code uses `.ts`.
