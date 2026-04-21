# Personal Website — Pushpendra Singh

A refined editorial personal site for academic and research presence.
Dark editorial aesthetic. No frameworks. No build step. Pure HTML + CSS + a
small sprinkle of vanilla JS.

## Files

- `index.html` — the single page
- `styles.css` — all styles
- `script.js` — nav hide-on-scroll + section reveal animations
- `README.md` — this file

## Deploying to GitHub Pages (free, takes 10 minutes)

1. Create a new GitHub repository named exactly:
   `pushpendrasingh.github.io` (replace with your own GitHub username)

   This specific naming makes it a "user site" — it will be served at
   `https://pushpendrasingh.github.io/` automatically.

2. Upload these four files to the root of the repo (via drag-and-drop on
   github.com, or via git on your machine):
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

3. In the repository, go to **Settings → Pages**.
   - Source: `Deploy from a branch`
   - Branch: `main` (or `master`), `/ (root)`
   - Save.

4. Wait 1–2 minutes. Then open `https://pushpendrasingh.github.io/`.

That's it. Every time you push a change to `main`, the site auto-rebuilds.

## Custom domain (optional, ~£10/year)

1. Buy a domain from Namecheap, Porkbun, or Cloudflare (e.g.
   `pushpendrasingh.com` or `pushpendra.ai`).
2. In GitHub **Settings → Pages**, add your custom domain.
3. In your domain registrar, add these DNS records pointing to GitHub:
   - Type `A`, name `@`, values:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Type `CNAME`, name `www`, value `pushpendrasingh.github.io`
4. Wait for propagation (usually under an hour).
5. Tick "Enforce HTTPS" on GitHub once the cert provisions.

## Content to update

Throughout `index.html`, replace placeholder content with your own:

- Contact email: `pushpendra.singh@kcl.ac.uk`
- LinkedIn URL
- GitHub URL
- Google Scholar URL (create one if you don't have it — scholar.google.com)
- Publication list (currently placeholder)
- Writing / blog posts (currently placeholder)

Everything else is real and reflects your actual research as of April 2026.

## Editing safely

If you want to tweak colours, open `styles.css` and edit the CSS variables at
the top (`:root { ... }`). The whole palette updates from there.

If you want to change fonts, swap the Google Fonts `<link>` in `index.html`
and the `--font-display`, `--font-body`, `--font-mono` variables in
`styles.css`.

No build step. No dependencies. Just edit and push.
