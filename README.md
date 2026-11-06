# Six Days of Decisions | Version 15: War Desk Redesign

A browser game for students aged 16 to 17, developed for StandWithUs UK Explore. It runs directly on GitHub Pages using static HTML, CSS, JavaScript, local photos, videos and animated SVG maps.

## Version 15 changes

* Rebuilt the home screen as a focused intelligence desk: one Top Secret folder and three archival prints, led by David Rubinger's photograph of the three paratroopers at the Western Wall. The layout keeps the title and Start button clearly separated from the pictures.
* Rewrote the briefings, questions, two choices, feedback and results across all 14 stages. Text is shorter and more direct, without changing which choices follow the historical record.
* Reduced clutter on decision screens. The extra historical note is available under **Why it mattered**, and the archive panel shows a photograph, date, location and source. Additional details remain in the gallery and educator notes.
* Removed unnecessary labels such as **Silent Archive Video** from outcome screens. The history and media take centre stage.
* Set the Stage 2 Straits of Tiran and Stage 6 Jerusalem Under Fire archive panels to the supplied Nasser image from the GPO collection. The Stage 6 caption explicitly identifies this as context, not a photograph of shelling in Jerusalem.
* Improved mobile layout, reduced repeated navigation on the home screen and retained the transparent StandWithUs UK and Explore logos.
* Preserved the previous 14 stages, 8 local video sequences, 6 animated military maps with 1967 flags, archive gallery, the two spare lives system, Game Over and restart.

## Upload to GitHub

1. Download and extract the ZIP.
2. Open the existing `6-day-war-game` GitHub repository.
3. Use **Add file > Upload files** and upload the extracted files and entire `assets` folder into the repository root. Replace existing files when prompted.
4. Use this commit message: `Redesign Six Days of Decisions with a clearer 1967 war desk`.
5. Commit the changes. The game will update at https://yehuda-swu.github.io/6-day-war-game/ once GitHub Pages publishes the new revision.

If working in a local Git checkout, use:

```bash
git add .
git commit -m "Redesign Six Days of Decisions with a clearer 1967 war desk"
git push origin main
```

No build step or hosting software is needed.

## Historical content and attribution

This activity asks learners to identify decisions recorded in the historical record. It does **not** suggest that those decisions were inevitable, the only defensible choices or free from controversy. The educator notes preserve additional historical nuance and sources.

The Stage 2 and Stage 6 Nasser image is a contextual photograph from 1967 with an unverified exact day and location. In particular, it does not show the actual shelling of Jerusalem. Images with other uncertain dates are labelled carefully. The home screen folder, stamp and desk are graphic design elements rather than real archival objects.

Photographs from the supplied GPO archive are credited to the Government Press Office. The three paratroopers photograph is credited to David Rubinger / GPO. Other source credits, including UN Photo, the National Library of Israel, IDF, AP Archive, Unpacked / OpenDor Media and Periscope Film LLC, are retained separately.

All videos remain silent except the original Hebrew military communications in the IDF Old City clip. Video transitions and the six animated maps work locally without third party services. The map unit movements are educational illustrations, not precise battlefield positions.

See `MEDIA_SOURCES.md`, `GPO_IMPORTED_PHOTOS.md`, `GPO_IMPORTED_PHOTOS.csv` and `MAP_SOURCES.md` for source details.
