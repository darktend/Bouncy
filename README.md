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
