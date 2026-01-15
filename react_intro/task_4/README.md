Task 4: Deploy to GitHub Pages

This folder contains a small create-react-app style project configured for deployment to GitHub Pages via the `gh-pages` package.

Instructions to deploy (replace `USERNAME` with your GitHub username):

1. In `package.json` set the `homepage` field to `https://USERNAME.github.io/alu-web_react`.
2. Ensure your local git repo has a remote `origin` pointing to `https://github.com/USERNAME/alu-web_react.git`.
3. From this directory run:

```bash
npm install
npm run deploy
```

This will create and push a `gh-pages` branch automatically. The site will be available at:
`https://USERNAME.github.io/alu-web_react` after GitHub Pages publishes it (a minute or two).
