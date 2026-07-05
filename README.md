# Website + Site Manager

## Files
- `index.html` — the public landing page (renders from your content)
- `site-content.js` — built-in default content
- `site-render.js` — the engine that paints the page
- `admin.html` — password-protected "manage site" panel
- `content.json` — (optional) your published edits; overrides the defaults for everyone

## Editing the site
1. Open `admin.html` in your browser (or yoursite.com/admin.html).
2. Enter the admin password (set in `site-content.js` → `meta.adminPass`).
3. Edit any text, link, price, or list. Use the **Show** toggles to hide/show whole sections.
4. **Save (live preview)** — updates the page on *your device* instantly so you can check it.
5. **Export to publish** — downloads `content.json`. Put that file in this folder (next to index.html)
   and commit + push to GitHub. Now *all visitors* see your changes.

## Deploy (GitHub Pages)
Put all files in your repo and enable Pages. Because the site loads `content.json` and the
scripts via relative paths, it must be served over http(s) (GitHub Pages does this). Opening
index.html directly from disk (file://) will still show the built-in defaults.

## Change the admin password
In the admin panel open **🔐 Admin password**, set a new one, Save, then Export & publish.
(Until you publish, the new password only applies on your device.)

## Notes
- The PayPal button opens PayPal's send-money page prefilled with your email. Buyers send as
  "Goods & Services" and include their email in the note. If you make a PayPal.Me link, tell your
  developer to swap it in for a smoother checkout.
- The "· manage site" link at the bottom-right of the public page goes to admin.html. You can
  remove it if you prefer the admin URL stay unlisted.
