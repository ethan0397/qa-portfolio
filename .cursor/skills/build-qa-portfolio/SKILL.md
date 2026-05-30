---
name: build-qa-portfolio
description: >-
  Build, customize, theme, and deploy a static QA automation engineer portfolio
  (HTML/CSS/JS). Use when creating or updating a single-page QA portfolio,
  GitHub Pages deploy, CV download, certifications gallery, GitLab impact section,
  light/dark theme, or ethan0397/qa-portfolio-style sites.
---

# Build QA Portfolio Online

Static portfolio pattern used in `qa-portfolio` — no build step, data-driven via `script.js`, deployed to GitHub Pages.

**Live example:** https://ethan0397.github.io/qa-portfolio/

## Repo layout

```
qa-portfolio/
├── index.html          # Structure, sections, templates
├── styles.css          # Theme tokens, layout, animations
├── script.js           # All content arrays + render/effects
├── Van-Nguyen-CV.pdf   # Downloadable CV
├── van-hero-poster.png
├── cert-*.png          # Certification images
├── logo-hcmute.png     # Education flip card (front)
├── logo-*.jpeg         # Company logos for timeline
├── vercel.json         # Optional Vercel headers
├── .nojekyll           # GitHub Pages (skip Jekyll)
└── .gitignore          # Include .venv/
```

## Content model (`script.js`)

Edit arrays — do not hardcode long copy in HTML:

| Array | Section |
|-------|---------|
| `skills` | `#skills-grid` |
| `domains` | `#domains-grid` |
| `projects` | `#projects-grid` |
| `impactData` | `#impact` stats, charts, proof |
| `metrics` | `#metrics-grid` |
| `roadmap` | `#roadmap-grid` |
| `timeline` | `#timeline-list` |
| `blogPosts` | `#blog-grid` |
| `certifications` | `#cert-grid` + lightbox |

Render functions run on `DOMContentLoaded`. Page effects in `initPageEffects()`.

## Page sections (order in `index.html`)

1. **Hero** — name, alias, summary, CTA, portrait, focus panel
2. **About** — bento: philosophy + quickfacts | education (flip logo → GPA)
3. **Skills / Projects / Impact / Metrics / Architecture / Roadmap**
4. **Timeline / Philosophy / Domains / Insights / Certifications / Contact**

Nav links: Skills, Projects, Impact, Experience, Philosophy, Certs, Contact.

## Design system

### Fonts
- Sans: **Plus Jakarta Sans** (Google Fonts)
- Mono: **JetBrains Mono** (alias badge, code)

### Theme tokens (`styles.css`)

Use `[data-theme="dark"]` (default) and `[data-theme="light"]` on `<html>`.

Key variables:
- Surfaces: `--surface-hero`, `--surface-card`, `--surface-about`, `--body-bg`
- Text: `--text`, `--muted`, `--heading`, `--chip-text-*`
- Accent: `--accent`, `--accent-strong`, `--line`, `--shadow`
- Components: `--quote-text`, `--education-clc-*`, `--cert-badge-*`

**Never hardcode gold/warm colors.** Prefer variables so light mode works.

### Theme toggle

1. Inline script in `<head>` (before CSS) reads `localStorage.theme` → sets `data-theme`
2. Button `#theme-toggle` in topbar (sun/moon SVG)
3. `initTheme()` in `script.js` — syncs `meta[name=theme-color]`

Default: **dark**. Persist: `localStorage.setItem("theme", "light"|"dark")`.

### Light theme checklist

After any CSS change, verify in light mode:
- [ ] `.impact-quote` — dark text `#1e293b`, not `#d0dcf0`
- [ ] `.education-clc-title`, `.education-chip-clc` — dark blue text
- [ ] `.cert-badge` — solid `#2563eb` bg, white text
- [ ] `.about-label`, `.cert-issuer` — readable muted/accent

## Feature patterns

### Hero name (gradient text)

```css
.hero-name {
  line-height: 1.18;
  padding-bottom: 0.06em;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Tight `line-height` + `background-clip: text` clips descenders (g, y).

### Alias badge (Van Nguyen + Ethan)

```html
<span class="hero-alias">
  <span class="hero-alias-label">Also known as</span>
  <span class="hero-alias-name">Ethan</span>
</span>
```

Label: uppercase eyebrow style. Name: mono pill (`--font-mono`).

### Education flip card

- Front: `logo-hcmute.png`
- Back: GPA `7.48 / 10` (not CLC logo)
- `initSchoolFlip()` — click/keyboard toggle `.is-flipped`
- CLC text: **Faculty for High Quality Training (CLC)** (English only)

### Certifications gallery

- Template `#cert-template` → `#cert-grid`
- Lightbox `#cert-lightbox` on "View Certificate"
- Badge **Verified** top-right of `.cert-visual`

### GitLab Impact section

Data from `impactData` in `script.js`:
- Snapshot stats, highlights, commit chart, workstream bars, API domain bars
- Source note: `git log` in e2e-tests repo
- Link project card to `#impact`

### Architecture flow

Grid with fixed arrow columns (28px), flexible node columns:

```css
grid-template-columns:
  minmax(0, 1fr) 28px minmax(0, 1fr) 28px
  minmax(0, 1fr) 28px minmax(0, 1fr);
```

### CV PDF

Generate with fpdf2 (local venv, not committed):

```bash
cd qa-portfolio
python3 -m venv .venv
.venv/bin/pip install fpdf2
# Run generator script or maintain Van-Nguyen-CV.pdf manually
```

Hero + Contact buttons:

```html
<a href="Van-Nguyen-CV.pdf" download="Van-Nguyen-CV.pdf">Download CV</a>
```

Use ASCII hyphens in PDF text (not en-dash) for Helvetica compatibility.

## Animations (`initPageEffects`)

- Scroll progress bar, ambient orbs, reveal on scroll
- Nav spy, topbar scroll state, metric counters
- Hero parallax, chip pop, school flip, impact chart animation
- Respect `prefers-reduced-motion`

## Deploy workflow

### Local preview

```bash
cd qa-portfolio
python3 -m http.server 8080
# open http://localhost:8080
```

### GitHub Pages (primary)

Repo: `ethan0397/qa-portfolio`, branch `main`, root `/`.

```bash
git status && git diff
git add <files>
git commit -m "$(cat <<'EOF'
Short summary of why.

EOF
)"
git push origin main
```

Deploy propagates in **1–3 minutes**. Hard refresh live site.

Requirements:
- `.nojekyll` at repo root
- All asset paths relative (no absolute local paths)
- Binary assets committed: PNG, PDF, JPEG logos

### Vercel (optional)

Import repo, static site, publish directory `.`, use existing `vercel.json`.

## Common user requests → actions

| Request | Action |
|---------|--------|
| Dark blue theme | Update `:root` / `[data-theme="dark"]` tokens |
| Light theme fix contrast | Add/adjust vars + `[data-theme="light"]` overrides |
| About too empty | Use `about-bento` 2-column; avoid duplicate Philosophy |
| Remove My Goal list | Delete goal cards; keep philosophy + quickfacts |
| Flip logo show GPA | Back face `.school-gpa`, remove GPA chip from meta |
| Wider arch columns | Fixed px arrows, `1fr` nodes |
| Commit push deploy | Commit all assets + push `main` |
| Name alias | Keep **Van Nguyen** primary; Ethan as `.hero-alias` |

## Commit message style

Focus on **why**, 1–2 sentences:

```
Fix hero name clipping and add Ethan alias badge.

Prevents descender clipping on Van Nguyen and adds a styled alias beneath the hero name.
```

## Do not

- Commit `.venv/` (in `.gitignore`)
- Use `git push --force` on `main`
- Put secrets in repo
- Create skills in `~/.cursor/skills-cursor/` (Cursor internal)
- Regenerate entire CSS without theme variables when adding light mode

## Verification before deploy

- [ ] Dark + light theme toggle works; preference persists
- [ ] Hero name fully visible (g, y descenders)
- [ ] CV download works
- [ ] Cert lightbox opens/closes
- [ ] Mobile: topbar wraps, bento stacks
- [ ] All images load (no 404 on logos/certs)
- [ ] `git status` clean after commit
