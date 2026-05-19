# Website Portfolio (monorepo)

This repository contains multiple Next.js sites under `sites/`.

## Sites

| Site | Folder | Dev URL |
|------|--------|---------|
| Superset Shaw | [`sites/superset-shaw`](sites/superset-shaw) | http://localhost:3000 |
| Roofing Company | [`sites/roofing-company`](sites/roofing-company) | http://localhost:3001 |
| Ryan 2.0 | [`sites/ryan-2.0`](sites/ryan-2.0) | http://localhost:3002 |

## Getting started

Install dependencies from the repo root:

```bash
npm install
```

Run a site from the root:

```bash
npm run dev:shaw      # Superset Shaw on :3000
npm run dev:roofing   # Roofing Company on :3001
npm run dev:ryan      # Ryan 2.0 on :3002
```

Or run from a site folder:

```bash
cd sites/superset-shaw && npm run dev
cd sites/roofing-company && npm run dev
cd sites/ryan-2.0 && npm run dev
```

## Build

```bash
npm run build:shaw
npm run build:roofing
npm run build:ryan
npm run build          # build all workspaces
```

## Deploy on Vercel

Create a separate Vercel project per site and set **Root Directory**:

| Project | Root Directory |
|---------|----------------|
| Superset Shaw | `sites/superset-shaw` |
| Roofing Company | `sites/roofing-company` |
| Ryan 2.0 | `sites/ryan-2.0` |
