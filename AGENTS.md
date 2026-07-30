# Sedea user extension — agent guide

This repository is a **standalone Sedea VS Code extension** (user bespoke). It is **not** part of the `sedea-ai/app` monorepo and must **not** target `sedea-ai/app/extensions/` natives.

## Repository layout

| Path | Purpose |
|------|---------|
| `src/extension.ts` | Extension activation entrypoint |
| `package.json` | Manifest, scripts, engine constraints |
| `.vscode/launch.json` | Extension Development Host debug config (**Run Extension**) |
| `.vscode/tasks.json` | Verify and build tasks for the VS Code task runner |
| `sedea.mcp-contribution.example.json` | Example MCP contribution manifest (install-time registration) |
| `.github/workflows/ci.yml` | Compile, lint, and test on push/PR |

## Developer commands

From the repository root:

```bash
npm ci
npm run verify    # lint + typecheck + compile + test
```

Individual steps:

```bash
npm run compile
npm run lint
npm run typecheck
npm run test
```

## Extension Development Host (EDH) smoke

After `npm run verify` passes:

1. Open this folder in **Sedea** (or VS Code-compatible fork with extension development support).
2. Press **F5** (or **Run → Start Debugging**) — the checked-in **Run Extension** launch config in `.vscode/launch.json` opens an **Extension Development Host** (compiles via the default build task first).
3. In the EDH window, open the Command Palette and run **Sedea Extension Template: Hello** (`sedeaExtensionTemplate.hello`).
4. Confirm the information message appears — activation and command registration work.

Optional from the workspace (no terminal required): **Tasks: Run Task → npm: verify** runs the full verify pipeline defined in `.vscode/tasks.json`.

Optional: package a VSIX for install testing:

```bash
npx @vscode/vsce package --no-dependencies
```

Install the resulting `.vsix` on a packaged Sedea build only through the governed **`Install Sedea Extension`** mission — do not manually register MCP at install time from R&D or scaffold lanes.

## Extension MCP contribution (binding)

Mission Control merges MCP servers from three sources: workspace stub, **per-extension `extensionContributions`**, and Sedea MCP Hub **external API** registrations only.

### What extension authors declare

Ship an MCP contribution manifest in the extension repository (see `sedea.mcp-contribution.example.json`). Each entry describes a stdio or SSE MCP server the extension exposes. The manifest is **consumed at install time** — not at scaffold or R&D ship time.

### Registration owner (forbidden paths)

| Allowed | Forbidden |
|---------|-----------|
| Document manifest shape in this repo | Runtime MCP registration during R&D ship or EDH |
| **`Install Sedea Extension`** mission registers into `extensionContributions` on end-user install | Manual edits to `extensionContributions` outside install/uninstall mission |
| Hub for **external REST/API** tools only | Extension-native MCP through Sedea MCP Hub UI |

### Manifest fields (v0.1 example shape)

| Field | Requirement |
|-------|-------------|
| `extensionId` | Stable id — typically `publisher.name` from `package.json` |
| `version` | Semver aligned with shipped VSIX |
| `servers[]` | One or more MCP server definitions |
| `servers[].id` | Unique slug within this extension |
| `servers[].transport` | `stdio` or `sse` |
| `servers[].command` / `args` | Launch command for stdio servers |
| `servers[].url` | Endpoint for SSE servers |

Rename `sedea.mcp-contribution.example.json` to your shipped manifest path when the platform schema stabilizes; keep the example in template updates via **`maintain extension template`**.

## Sedea MCP Hub appendix (external APIs only)

Use **Sedea MCP Hub** only for **external API** registrations (REST, GraphQL, vendor SDKs). Hub persistence lives in user-space credentials — orthogonal to this extension repo.

| Concern | Owner |
|---------|-------|
| Extension-native MCP (stdio/SSE owned by this extension) | Extension contribution manifest → **`Install Sedea Extension`** |
| External API MCP | Sedea MCP Hub on end-user Sedea |
| Mission Control workspace tools | Built-in Mission Control stub — not authored here |

**Forbidden:** registering extension-native MCP through Hub UI; duplicating Hub external registrations in the extension manifest.

## Post-scaffold delivery

Feature work after scaffold uses **R&D `plan and deliver`** on the **user extension repository** — not sedea center maintenance missions. Template maintenance (`maintain extension template`) applies only to this canonical template repo, not forked user projects.

## Related platform docs

- Sedea Extension Platform PRD — develop vs install routing (hosting repo operations docs)
- `sedea-extensions/extension-template` — this template (GitHub template generate for new projects)
