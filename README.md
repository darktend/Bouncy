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
