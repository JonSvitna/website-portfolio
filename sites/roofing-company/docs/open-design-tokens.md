# Columbia — Industrial Editorial Design Tokens

Applied per the Columbia Visual Refresh plan (Open Design `web-prototype` direction).

## Typography

| Role | Font | CSS variable |
|------|------|----------------|
| Display (H1–H2) | Outfit 500–800 | `--font-display` |
| Body | Source Sans 3 | `--font-body` |
| Licenses / steps | JetBrains Mono | `--font-mono` |

Utility classes: `.text-display`, `.text-body`, `.font-mono`

## Color

| Token | Value | Use |
|-------|-------|-----|
| `--stone` | `#f6f4f0` | Page base |
| `--asphalt` | `#1c1917` | Dark bands, footer, contact inset |
| `--copper` | `#b45309` | Single accent |
| `--asphalt-muted` | `#a8a29e` | Muted text on dark |

## Canvas rhythm

1. Hero — light stone, offset grid on 3D panel, `md:pl-[6vw]` copy
2. Credentials — full-width asphalt band
3. About — blueprint grid wash
4. Services — asphalt band, zig-zag; repairs row: 5:3 aspect + copper corner
5. Process — light stone, oversized step numerals
6. Contact — asphalt inset with stone form card
7. Footer — asphalt band

## Open Design

To iterate visually: `cd ~/open-design && pnpm tools-dev run web` → http://localhost:7456

Skill: `web-prototype` · Direction: industrial editorial · Accent: `#b45309`
