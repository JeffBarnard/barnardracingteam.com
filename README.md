# Barnard Racing Team website

A static copy of https://www.barnardracingteam.com/, rebuilt from the Squarespace site as plain HTML and CSS with no build step and no framework.

## Structure

```
index.html            Home
calendar/index.html   Calendar & tracks       (/calendar)
standings/index.html  Results & standings     (/standings)
bike/index.html       Race bike               (/bike)
raceiq/index.html     RaceIQ                  (/raceiq)
about/index.html      Meet the team           (/about)
partners/index.html   Partners                (/partners)
home/index.html       Redirect for the old Squarespace /home URL
404.html              Not-found page
css/site.css          All styles
js/site.js            Mobile menu and bike gallery arrows
images/               All images, downloaded from the Squarespace CDN
```

Each page lives in its own folder, so the existing URLs (`/bike`, `/calendar`, and so on) keep working after the move.

## Preview locally

Serve the folder rather than opening the files directly, so the folder-style links resolve:

```powershell
python -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Upload the contents of this folder to the web root of any static host (Netlify, Cloudflare Pages, GitHub Pages, Azure Static Web Apps, S3, or ordinary shared hosting). Most of these hosts serve `404.html` automatically for unknown URLs.

Then point the `barnardracingteam.com` and `www` DNS records at the new host, and cancel the Squarespace plan once the new site is live.

## Editing

- Text and links live directly in each page's `index.html`.
- The header and footer are repeated on every page. A change to the menu or footer has to be made in all of them.
- To replace an image, overwrite the file in `images/` under the same name.
- The home page "Latest news" posts are Instagram embeds. To change a post, update the post ID in the `instagram-media` blocks in `index.html`.

## External dependencies

- Google Fonts (Poppins)
- Instagram `embed.js`, home page only
