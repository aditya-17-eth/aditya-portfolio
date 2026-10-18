# Contributing

Small fixes and focused improvements are welcome. For larger changes, open an
issue to discuss the proposed behavior and design first.

## Development

Use Node.js 20.9 or newer and npm:

```sh
npm ci
npm run dev
```

Before submitting a pull request:

```sh
npm run lint
npm run build
git diff --check
```

For interface changes, check desktop and mobile layouts, keyboard navigation,
visible focus states, and reduced motion. Describe what changed and how you
verified it; include screenshots when the appearance changes.

Keep dependencies limited, preserve the existing design direction, and avoid
changing personal portfolio content without discussing it first. Code
contributions are provided under the repository's MIT license. Personal-content
exclusions are documented in `ASSETS.md`.
