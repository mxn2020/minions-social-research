![CI](https://github.com/mxn2020/minions-social-research-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-social-research

**Trend sources, competitor snapshots, hashtag sets, and audience notes**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-social-research/sdk minions-sdk

# Python
pip install minions-social-research

# CLI (global)
npm install -g @minions-social-research/cli
```

---

## CLI

```bash
# Show help
social-research --help
```

---

## Python SDK

```python
from minions_social_research import create_client

client = create_client()
```

---

## Project Structure

```
minions-social-research/
  packages/
    core/           # TypeScript core library (@minions-social-research/sdk on npm)
    python/         # Python SDK (minions-social-research on PyPI)
    cli/            # CLI tool (@minions-social-research/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [social-research.minions.help](https://social-research.minions.help)
- Blog: [social-research.minions.blog](https://social-research.minions.blog)
- App: [social-research.minions.wtf](https://social-research.minions.wtf)

---

## License

[MIT](LICENSE)
