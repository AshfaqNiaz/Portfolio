# Ashfaq Niaz - Portfolio Website

Static bilingual (Urdu / English) site. No build step needed.

## Put it on GitHub Pages
1. Create a new public repository on GitHub (e.g. `ashfaq-niaz`).
2. Upload the CONTENTS of this folder (index.html, css, js, images, .nojekyll) to the repository root.
3. Repository Settings > Pages > Source: "Deploy from a branch", Branch: `main`, folder `/ (root)` > Save.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/ashfaq-niaz/`.

## Customise
- Text (biography, career, books, contact, captions, Urdu + English): `js/content.js`
- Colours and layout: `css/style.css` (colour values at the top, `:root`)
- Photos: `images/` folders (profile, books, media, magazines); the file list is at the top of `js/content.js`

## Admin tab (adding new books, magazines, media, videos, self photos, historical pictures)
Folders: every tab has its own folder inside `images/` (books, magazines, media, videos, self-photo, historical).
1. Site > Admin tab > log in > choose the type > fill the form > Add. The item appears on that browser at once.
2. To show new items to EVERYONE: click "Download update zip" and unzip it. It contains an `images` folder (new pictures, already sorted into the tab folders) and a `data` folder (`extra-content.json`).
3. On GitHub, open the repository > Add file > Upload files, and drag in the unzipped `images` and `data` folders. They merge with the existing folders (replace `extra-content.json` when asked). The site updates after about a minute.
- GitHub's web upload takes up to 100 files at a time, so upload in batches if many pictures have piled up.
- Security note: GitHub Pages has no server, so this login only hides the panel; it is not strong protection. Only public content should be added here.

## Daily uploads, limits and automatic clean-up
- Limit: `MAXPER` at the top of `js/content.js` (default 500 pictures per tab). When a tab is over the limit, the OLDEST added items are dropped from the site automatically. The original photos are never touched.
- Space is freed automatically: the file `.github/workflows/cleanup.yml` runs each time `data/extra-content.json` is uploaded and deletes the image files that are no longer listed (only files added from the Admin panel).
- Make sure the `.github` folder is uploaded. If your computer skips it, on GitHub use Add file > Create new file, type `.github/workflows/cleanup.yml` as the name, and paste the file's contents. Then also create `.github/scripts/cleanup.py` the same way.
- If the clean-up cannot save its changes: Settings > Actions > General > Workflow permissions > "Read and write permissions".

## Permanent database (Supabase, free) - set up once
1. supabase.com > sign in > New project (free). Note the Project URL and the anon public key (Project Settings > API).
2. SQL Editor > New query > paste the whole file `supabase-setup.sql` > Run.
3. Authentication > Sign In / Providers (or Settings): turn OFF "Allow new users to sign up".
4. Authentication > Users > Add user > e-mail + password (this password is what the professor types on the Admin tab) > tick "Auto confirm".
5. Open `js/content.js`, fill the line `const SUPA={url:"...",key:"...",email:"..."}` (Project URL, anon key, the e-mail from step 4), upload the file to GitHub.
After that every upload from the Admin tab is saved permanently online and appears for everyone at once; no zip or GitHub upload is needed. When a tab passes `MAXPER` items, the oldest are deleted automatically.
Free plan note: Supabase pauses free projects after about a week with no activity; opening the Admin panel and adding something regularly keeps it awake.
