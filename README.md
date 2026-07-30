# sedea-extensions/extension-template

GitHub **template repository v0.1** for Sedea **user bespoke** VS Code extensions.

Generate a new project from this template (GitHub **Use this template** or `gh repo create my-ext --template sedea-extensions/extension-template`), then:

1. Replace `your-publisher-id` in `package.json`.
2. Run `npm ci && npm run verify`.
3. Read **`AGENTS.md`** for EDH smoke and MCP contribution guidance.

## What v0.1 includes

- TypeScript extension shell with compile / lint / typecheck / test scripts
- Vitest unit test stub
- GitHub Actions CI (`.github/workflows/ci.yml`)
- **`AGENTS.md`** — EDH smoke, extension MCP contribution appendix, Sedea MCP Hub external-only boundary
- Example MCP contribution manifest (`sedea.mcp-contribution.example.json`)

## What v0.1 does not include

- Webview UI shell (optional follow-up)
- Runtime MCP server implementation (document manifest only)
- Sedea app monorepo wiring (`@sedea/extension-shared`, native extension symlinks)

## Governance

Canonical template maintenance: sedea center **`maintain extension template`** mission. Post-scaffold feature delivery: R&D **`plan and deliver`** on the user extension repo.
