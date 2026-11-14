# Soil Protection – Community Service Project website

Plain HTML, CSS and JavaScript. No build step, no dependencies, no paid services.

## Files
```
soil-protection/
├── index.html
├── css/styles.css
├── js/main.js
├── images/        <- add your own photos here
└── README.md
```

## Photos (add to /images, exact names)
soil-erosion.jpg, soil-testing.jpg, mini-garden.jpg, team-with-guide.jpg,
field-visit.jpg, erosion-observation.jpg, soil-collection.jpg, farmer-interview.jpg,
awareness-session.jpg, school-session.jpg, compost-demo.jpg, mini-garden-planting.jpg
Until a file exists, a dashed "Photo placeholder" box is shown. Use only your real project photos.

## To confirm with your faculty guide
1. Location: Sangam Mandal vs Madharaju Gudur Village, Nellore Mandal (note in "About"; delete the `.flag` block when settled).
2. Week 7: no log in the report. Week 8 / mini project dates (13/07–26/07) overlap Week 7.
3. Week 4 log lists day 6 as 27/06/26 but the week range ends 26/06/26 (the site uses the range).
4. Photo GPS stamps in the report show Oct 2026 dates, outside the CSP period.

## Run locally
Open index.html in a browser, or: `python -m http.server 8000` then visit http://localhost:8000

## Deploy free on GitHub Pages
```
git init
git add .
git commit -m "Soil Protection CSP website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/soil-protection.git
git push -u origin main
```
Then on GitHub: Settings > Pages > Source: "Deploy from a branch" > Branch: main, folder /(root) > Save.
Site URL: https://YOUR-USERNAME.github.io/soil-protection/

## Free domain
Your github.io address is free and needs nothing more. A custom domain is not free
(Settings > Pages > Custom domain only connects one you already own).