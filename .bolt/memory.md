# Project memory

## Product intent & audience

- Business website for "Sunil Communications" (communications/CLI-related business).
- Intended for public-facing production hosting at `sunilcommunication.com`.

## Brand personality & voice

- Not yet inferred beyond a preference for polished, production-worthy, non-cookie-cutter designs.

## Visual design & UX direction

- Stack: Vite + React (JSX), Tailwind CSS, React hooks, Lucide React icons.
- App uses React Router with browser history (client-side routing).

## Decisions, constraints & rationale

- Hosting target: GitHub Pages via GitHub Actions deploy workflow (not branch-based deploy).
- Repo: `github.com/nicholeroper/CLI-sunil-communications`; deploy triggers on push to `main`.
- Custom domain: `sunilcommunication.com` via a `CNAME` file in the project.
- Client-side routing compatibility on GitHub Pages handled with a 404 fallback page plus a router back/forward fix, since GH Pages is static and doesn't support server rewrites.
- DNS managed at Hostinger (keep Hostinger nameservers, edit records only):
  - A records at `@` → GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
  - CNAME `www` → `nicholeroper.github.io`.
  - Must remove conflicting existing A/CNAME records before adding GitHub ones.
- GitHub Pages settings: Source = GitHub Actions; set custom domain; enable Enforce HTTPS after DNS verifies (may be greyed out ~24h).
- Build passes after hosting changes.

## Open questions & assumptions

- Direct deep-link URLs (e.g., `/services`, `/contact`) on the custom domain not yet browser-verified — should be tested post-deploy.
- DNS propagation may take up to 24–48h; HTTPS enforcement may be delayed until certificates provision.
- Existing DNS records at Hostinger (parking page, etc.) assumed present and need manual deletion before GitHub records are added.