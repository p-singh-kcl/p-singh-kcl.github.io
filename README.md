# Personal Website — Pushpendra Singh

A refined editorial personal site for academic and research presence.
Dark editorial aesthetic. No frameworks. No build step. Pure HTML + CSS + a
small sprinkle of vanilla JS.

## Files

```
website/
├── index.html          # Landing page
├── media.html          # Photo + video gallery page
├── styles.css          # All styles (shared by both pages)
├── script.js           # Nav hide-on-scroll + reveal animations
├── README.md           # This file
└── images/
    ├── projects/       # Figures for landing-page work cards
    ├── media/          # Gallery photos
    └── videos/         # Short video clips (optional)
```

## Deploying to GitHub Pages (10 minutes)

1. Create a new GitHub repository named exactly: `p-singh-kcl.github.io`

   This specific naming makes it a "user site" — served at
   `https://p-singh-kcl.github.io/` automatically.

2. Upload all files and folders to the root of the repo (via drag-and-drop on
   github.com, or via git on your machine). Preserve the `images/` folder
   structure.

3. In the repository: **Settings → Pages**.
   - Source: `Deploy from a branch`
   - Branch: `main`, `/ (root)`
   - Save.

4. Wait 1–2 minutes. Open `https://p-singh-kcl.github.io/`.

Every push to `main` auto-rebuilds the site.

## Adding a project image to the landing page

Each of the four work cards on the landing page can display an image. By
default they show a subtle "figure coming soon" pattern. To add an image:

1. Drop a JPEG into `images/projects/` (e.g. `spatial-film.jpg`).
   Recommended 1200 × 675 px, under 300 KB. Compress at
   squoosh.app or tinypng.com.

2. Open `index.html`, find the card you want to update (e.g. "Spatial FiLM").

3. Replace this block:
   ```html
   <div class="card-media-empty">
     <span class="empty-label">figure coming soon</span>
   </div>
   ```

   With this:
   ```html
   <div class="card-media">
     <img src="images/projects/spatial-film.jpg" alt="Spatial FiLM figure">
   </div>
   ```

4. Commit and push.

## Adding a photo to the Media page

1. Drop the photo into `images/media/`. Name it descriptively:
   `2026-10-miccai-poster.jpg`.

2. Open `media.html`. Find the `<!-- EXAMPLES -->` block. Copy one of the
   commented examples, uncomment it, and fill in the details:

   ```html
   <figure class="gallery-item" data-category="conferences">
     <img src="images/media/2026-10-miccai-poster.jpg" alt="Spatial FiLM poster at MICCAI 2026">
     <figcaption>
       <strong>MICCAI 2026 — Spatial FiLM poster</strong>
       October 2026 · Daejeon, South Korea
     </figcaption>
   </figure>
   ```

3. Paste it above the commented examples. You can delete the empty-state
   block once you have real entries.

4. Commit and push.

The gallery uses a masonry layout — photos of different aspect ratios look
good next to each other.

## Featuring a photo on the landing page

After adding a photo to the Media page, you can optionally feature it on the
landing page in the "Recent Moments" strip.

1. Open `index.html`, find the "featured-strip" section.

2. Copy the commented `featured-item` example, uncomment it, fill in:
   ```html
   <figure class="featured-item">
     <img src="images/media/2026-10-miccai-poster.jpg" alt="MICCAI 2026">
     <figcaption>MICCAI 2026 — October</figcaption>
   </figure>
   ```

3. Keep the strip to 3-4 items max. When you add a new featured item,
   remove the oldest to keep the set fresh.

## Adding a video

### YouTube (recommended for talks and longer videos)

1. Upload the video to YouTube. Get the video ID from the URL
   (`youtube.com/watch?v=ABC123` → the ID is `ABC123`).

2. Open `media.html`. Find the video section. Copy and uncomment the example:
   ```html
   <div class="video-item">
     <div class="video-embed">
       <iframe
         src="https://www.youtube.com/embed/ABC123"
         title="Talk title"
         allowfullscreen></iframe>
     </div>
     <div class="video-meta">
       <span class="video-title">Spatial FiLM — MICCAI 2026 oral presentation</span>
       <span class="video-caption">October 2026 · 15 min</span>
     </div>
   </div>
   ```

### Short self-hosted clips (under 10 MB)

1. Drop the `.mp4` file into `images/videos/`.

2. Use the `<video>` tag version of the example in `media.html`.

Keep self-hosted videos short — GitHub Pages has a 100 MB per-file limit and
1 GB total repo limit. Anything over ~10 MB should be on YouTube.

## Custom domain (optional, ~£10/year)

1. Buy a domain from Namecheap, Porkbun, or Cloudflare
   (e.g. `pushpendrasingh.com`).
2. In **Settings → Pages**, add your custom domain.
3. In your domain registrar, add these DNS records:
   - Type `A`, name `@`, values:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Type `CNAME`, name `www`, value `p-singh-kcl.github.io`
4. Tick "Enforce HTTPS" once the cert provisions.

## Editing colours and fonts

All colour variables are at the top of `styles.css` under `:root`. Edit
them there, the whole palette updates site-wide.

Fonts are loaded from Google Fonts in each HTML file's `<head>`. To swap,
change the Google Fonts `<link>` and update `--font-display`, `--font-body`,
and `--font-mono` in `styles.css`.

No build step. No dependencies. Edit, commit, push.
