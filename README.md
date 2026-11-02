# Vanguard Wilderness Protection: website demo

Design demo of the five-page website for Vanguard Wilderness Protection (Namibia). It is plain HTML, CSS and JavaScript with no build step.

The illustrated scenes are placeholders for the client's own photos. Contact details are still to be finalised.

## Pages

The site is one page with hash links:

| Page | Link |
| --- | --- |
| Home | `#home` |
| About Us | `#about` |
| Our Services | `#services` |
| Our Team | `#team` |
| Contact Us | `#contact` |

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then go to http://localhost:8000.

## Publish on GitHub Pages

1. Create a new repository on GitHub, for example `vanguard-demo`.
2. Upload the contents of this folder to the root of the repository, or push it:

   ```bash
   git init
   git add .
   git commit -m "Vanguard website demo"
   git branch -M main
   git remote add origin https://github.com/<your-username>/vanguard-demo.git
   git push -u origin main
   ```

3. In the repository, go to **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, then choose branch `main` and folder `/ (root)`. Click **Save**.
5. After a minute or two the site is live at `https://<your-username>.github.io/vanguard-demo/`.

Share that link with the client for review. You can link to a page directly, for example `.../vanguard-demo/#services`.

The page has a `noindex` tag so search engines won't list the demo. Remove it from `index.html` when the real site goes live.

## Folder structure

```
index.html            all five pages
css/style.css         styles and design tokens
js/main.js            page switching, illustrations, parallax, form checks
assets/logo/          logo files (SVG) and favicon
assets/og-image.png   preview image shown when the link is shared
```

## Notes for the live build

- The contact form only checks the fields in this demo. Connect it to a form service (for example Formspree) or a small server script before launch.
- Replace the illustrated scenes with real photos. Remove GPS and camera data from them first.
- Replace the sample figures in the stats strip with verified numbers.
