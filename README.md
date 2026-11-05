# 1967 | Six Days of Decisions

A responsive history decision game made for StandWithUs UK Explore. It follows the days before the Six Day War, the fighting from 5 to 10 June 1967, and the immediate diplomatic aftermath.

## Play the game

Open `index.html` in a browser. It runs offline and does not need a server, account or API key.

Players complete 14 chronological decisions in three chapters. At each decision, two choices appear. The game advances when the player identifies what actually happened. Alternative answers display historical context and allow a retry. The game saves progress automatically in the same browser.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `six-day-war-decisions`.
2. Download this ZIP and extract it on your computer.
3. Upload `index.html`, `styles.css`, `game.js`, `README.md` and the entire `assets` folder to the **root** of the repository. Do not upload the parent ZIP folder as a folder inside the repository.
4. Select **Commit changes**.
5. Open **Settings**, then **Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Choose the **main** branch and the **/(root)** folder, then select **Save**.
8. Open the published address shown by GitHub Pages, usually `https://YOURNAME.github.io/YOUR-REPOSITORY/`.

This is a static website. No installation, packages, GitHub Actions or Git command line are required.

## Add your logos

Save your logo images in `assets` using these names:

* `swu-logo.png`
* `explore-logo.png`

The text logo placeholders will be replaced automatically when the images exist.

## Add historical images or maps

Read `assets/README.txt` for the 14 suggested filenames. Drag images into the `assets` folder in GitHub and commit. The corresponding stage will display them automatically. Missing media produces a styled fallback so the game never breaks.

## Add videos

Upload an MP4 to `assets`, then change the `video` property of the relevant stage in `game.js`. For example, for the Old City stage, use `video:'assets/08-old-city.mp4'`. Videos play with built in controls and do not autoplay.

## Edit historical content

All stages are in the `STAGES` array near the top of `game.js`. Each stage has:

* `date`, `title`, `brief` and `intel` for the narrative
* `question`, `options`, `correct`, `success` and `alternative` for the decision
* `focus` and `point` to highlight the strategic map
* `image` or `video` for your archive media
* `source` to identify a source in the `SOURCES` list

`correct:0` means the first option follows history. `correct:1` means the second.

## Educator guidance

This is a decision reconstruction, not a claim that one moral or political option was inevitably correct. Political, diplomatic and military perspectives are simplified for teaching. This game should be paired with discussion of historical uncertainty and the experiences of civilians, including Palestinians who became displaced or came under Israeli occupation after the war.

This version includes a simplified regional schematic map, not a precise historical boundary map. A professionally checked historical map would improve future versions.

The primary references and further reading links are available from the **Educator notes** button inside the game.

## Files

* `index.html`: page layout and editable SVG schematic map
* `styles.css`: full responsive design
* `game.js`: historical text and game logic
* `assets/`: optional logos, photographs, maps and videos
* `README.md`: setup and editing instructions

## Licence

This starter code is supplied to the user for their educational project. Historical images, trademarks, video footage and other assets added later remain subject to their respective rights and permissions.
