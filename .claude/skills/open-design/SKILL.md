---
name: open-design
description: Generate UI designs, web prototypes, mobile apps, dashboards, decks, and visual artifacts using Open Design — a local-first agent-native design tool. Use when the user wants to create, design, prototype, or generate any visual UI, screen, component, mockup, landing page, dashboard, presentation, or design artifact. Also use when the user asks to list design skills or design systems.
when_to_use: Trigger on requests like "design a ...", "create a prototype for ...", "generate a UI for ...", "make a landing page", "build a dashboard", "open design", "/open-design", or any request to visually design something.
argument-hint: "[skill-name] [optional: design-system]"
allowed-tools: Bash(curl *) Bash(open *) Bash(pnpm *) Bash(node *) Bash(docker *)
---

## Open Design

Open Design is a local-first, agent-native design tool that generates web prototypes, mobile apps, presentations, dashboards, and design artifacts using your installed coding agents (Claude Code, etc.).

- Repo: https://github.com/nexu-io/open-design
- Default URL: http://localhost:7456
- 31 built-in design skills · 72 design systems

## Step 1 — Check if Open Design is running

```!
curl -sf http://localhost:7456/api/skills > /dev/null 2>&1 && echo "RUNNING" || echo "STOPPED"
```

If the output above is `STOPPED`, start Open Design before continuing (see **Starting Open Design** below). If it says `RUNNING`, skip to **Step 2**.

## Starting Open Design

If Open Design is not installed, clone and start it:

```bash
git clone https://github.com/nexu-io/open-design.git ~/open-design
cd ~/open-design
corepack enable
pnpm install
pnpm tools-dev run web
```

Or with Docker:

```bash
git clone https://github.com/nexu-io/open-design.git ~/open-design
cd ~/open-design/deploy
docker compose up -d
```

Once started, it runs at http://localhost:7456. Tell the user to visit that URL in their browser.

If Open Design is already cloned locally, start it with:

```bash
cd ~/open-design && pnpm tools-dev run web
```

## Step 2 — List available skills

```!
curl -sf http://localhost:7456/api/skills 2>/dev/null | node -e "
const d=require('fs').readFileSync('/dev/stdin','utf8');
try{const s=JSON.parse(d);s.slice(0,20).forEach(x=>console.log('- '+x.name+(x.description?' — '+x.description.slice(0,60):'')));}catch(e){console.log('(could not parse skills)');}
" 2>/dev/null || echo "(Open Design not running — start it first)"
```

## Step 3 — List available design systems

```!
curl -sf http://localhost:7456/api/design-systems 2>/dev/null | node -e "
const d=require('fs').readFileSync('/dev/stdin','utf8');
try{const s=JSON.parse(d);s.slice(0,20).forEach(x=>console.log('- '+(x.name||x)));} catch(e){console.log('(could not parse design systems)');}
" 2>/dev/null || echo "(Open Design not running — start it first)"
```

## Step 4 — Guide the user

Based on $ARGUMENTS and the user's request:

1. **Identify the skill** — Match the user's goal to one of the available skills above (e.g., `web-prototype`, `dashboard`, `mobile-app`, `saas-landing`, `pricing-page`, `guizang-ppt`). If `$ARGUMENTS` includes a skill name, use that.

2. **Identify the design system** — Ask the user if they have a preference (e.g., Linear, Vercel, Stripe, Notion, Apple). Default to the project's existing design system if apparent from the codebase.

3. **Open the UI** — Tell the user to navigate to http://localhost:7456, select the identified skill and design system, then describe their design goal in the chat.

4. **Assist with the prompt** — Offer to help draft the initial chat message for Open Design. A good prompt should include:
   - What the page/component is for
   - Target audience
   - Key content sections or features
   - Tone or visual style (if the user has a preference)

5. **After generation** — The artifact preview appears in the browser. Exports available: HTML, PDF, PPTX, ZIP, Markdown. Offer to help integrate the generated HTML into the current codebase if applicable.

## Skill categories

| Category | Skills |
|----------|--------|
| Web | `web-prototype`, `saas-landing`, `pricing-page`, `blog-post`, `email` |
| Dashboard | `dashboard`, `finance-report`, `kanban-board` |
| Mobile | `mobile-app`, `mobile-onboarding`, `gamified-app` |
| Documents | `pm-spec`, `invoice` |
| Decks | `guizang-ppt`, `simple-deck`, `replit-deck`, `weekly-update` |
| Motion | `ad-creative`, `social-carousel` |

## Useful API endpoints

| Endpoint | Purpose |
|----------|---------|
| `GET /api/skills` | List all skills |
| `GET /api/design-systems` | List all design systems |
| `GET /api/agents` | List detected coding agents |
| `POST /api/chat` | Stream artifact generation (SSE) |

## Adding custom skills to Open Design

If the user wants to add a skill to Open Design itself (not this Claude skill), create `~/open-design/skills/<skill-name>/SKILL.md` with frontmatter and restart the daemon. The daemon auto-discovers skills on startup.
