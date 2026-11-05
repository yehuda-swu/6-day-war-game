# Six Days of Decisions | StandWithUs UK Explore

An educational decision game about the crisis leading to the Six Day War, the events of 5 to 10 June 1967, and the first diplomatic discussions afterwards.

## What's new in this version

* Two enormous choice panels take up most of the decision screen. Both desktop and mobile have been tested.
* Correct choices immediately transition to a cinematic historical outcome screen.
* If you upload the matching MP4 clip, it plays automatically and advances after ending. There is also a continue button for classroom control.
* Incorrect choices show a historical explanation and allow the student to retry.
* The game automatically recognises correctly named video files, without any code changes.
* If a clip or image is unavailable, an elegant historical outcome card appears, so every stage works now.
* All 14 decisions, historical sources, teacher notes and progress saving remain included.

## Play locally

Open `index.html` in a modern web browser. You do not need to install software or run a server.

## Publish the update on GitHub Pages

1. Download and extract the ZIP.
2. Open the existing game repository on GitHub.
3. Upload `index.html`, `styles.css`, `cinematic.css`, `game.js`, `README.md`, `MEDIA_CHECKLIST.md`, `media_checklist.csv` and the complete `assets` folder to the root of the repository. Replace the existing files when prompted.
4. Select **Commit changes**.
5. Refresh your published GitHub Pages website.
6. If you have not yet enabled Pages, open **Settings**, then **Pages**, choose **Deploy from a branch**, `main` and `/(root)`, and save.

No npm, build tools, external services or API keys are required. GitHub Pages serves the static site.

## Add photographs, videos and maps

See **`MEDIA_CHECKLIST.md`** for the complete 14 stage asset list, exact file names, proposed visual content, map requirements and suggested historical archives. Open `media_checklist.csv` in Excel if you want to track asset collection.

Put numbered JPEG images and MP4s into `assets`. For example:

* `assets/05-airfields.jpg` displays as the decision and fallback outcome background at decision 05.
* `assets/05-airfields.mp4` plays as the outcome video after a correct decision at stage 05.
* `assets/swu-logo.png` and `assets/explore-logo.png` replace logo text placeholders.

Use landscape 16:9 media. MP4 encoded as H.264 video and AAC audio is recommended for broad compatibility. Compress large films before uploading: a public website with many lengthy clips could be slow to load.

## Content and teaching approach

The two answer choices represent historical courses of action. A correct answer means it follows the documented historical record, not that it was necessarily the only justified strategic or moral course. The game includes explanatory feedback, sources and opportunities for classroom discussion.

The player moves through 14 decisions across three chapters. Images and video must be historically dated and correctly labelled. Animated reconstructions should not be presented as genuine archival film. The consequences for Palestinian civilians, the territorial occupation and diplomatic debates are part of the game's teaching context.

## Files

* `index.html`: game screens, logo placeholders, outcome player and notes
* `styles.css`: existing base and welcome screen design
* `cinematic.css`: new large choice interface and film sequence design
* `game.js`: 14 decisions and game navigation
* `MEDIA_CHECKLIST.md`: media requirements and archive suggestions
* `media_checklist.csv`: sortable asset list
* `assets/`: upload your media here
