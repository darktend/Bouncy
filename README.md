# Bouncy (Vite + React + TypeScript + SCSS)

Bouncy is now re-architected as a modern front-end application using:

- **Vite** for fast development/build
- **React + TypeScript** for component-driven UI
- **SCSS** with layered architecture for maintainable styles

## Project structure

```text
src/
  components/
    layout/
    sections/
  data/
  styles/
    abstracts/
    base/
    layout/
    sections/
```

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Notes

Legacy static/Gulp architecture was replaced with a modular React app structure.
Assets are served from `public/`.
=======
# Bouncy

https://darktend.github.io/Bouncy/

## Deploy

The project is configured to deploy automatically to **GitHub Pages** using GitHub Actions.

### How it works

- Workflow file: `.github/workflows/deploy.yml`
- Trigger: every push to the `main` branch (and manual `workflow_dispatch`)
- It publishes the repository root as a static site artifact.

### One-time GitHub setup

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. In **Build and deployment**, choose **Source: GitHub Actions**.
4. Ensure your default production branch is `main` (or adjust the workflow branch trigger if you use another branch).

After that, each push to `main` will deploy the latest version automatically.
