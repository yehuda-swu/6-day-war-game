# Version 19: Outcome viewing layout

The video and map viewing area is now separate from the explanatory text on all screen sizes. A fullscreen button has been added.

# Six Days of Decisions | Version 18

A browser game for students aged 16 and 17, developed for StandWithUs UK Explore. It runs on GitHub Pages using static HTML, CSS, JavaScript, local photographs, historical videos, a supplied soundtrack and animated SVG maps.

## What is new

**Soundtrack replaced:** The previous cinematic score has been removed. Version 18 now uses the music file supplied by the project owner, *March of the Israeli Defence Force*, with approximately five seconds of leading silence removed.

**Music on the home screen:** The site attempts to play the soundtrack as soon as the home page loads. Most browsers block audible autoplay until the first user interaction. If so, select **Play soundtrack** on the home screen or **Play music** in the top bar. A first click or tap on the home screen can also start the track before beginning the mission.

**Continuous looping music:** The music stays on throughout the experience and is only paused during the Old City video with Hebrew audio. It then resumes at the same point. The top bar and home screen provide pause and play controls. Student progress is not saved between visits.

The 14 historical decisions, two spare lives, Game Over, redesigned final debrief, archival photo gallery, animated maps and existing media credits remain unchanged.

## Update the GitHub website

1. Download and extract the Version 18 ZIP.
2. Open the existing repository: https://github.com/yehuda-swu/6-day-war-game
3. Select Add file, then Upload files.
4. Upload all extracted files and the `assets` folder into the root of the repository. `index.html` should sit next to the `assets` folder.
5. Commit with the message: `Replace game music with supplied march and enable home screen playback`.
6. Open https://yehuda-swu.github.io/6-day-war-game/ after GitHub Pages publishes the change.

To commit from the command line in an existing local checkout, use:

```bash
git add .
git commit -m "Replace game music with supplied march and enable home screen playback"
git push origin main
```

No build process or API keys are required.

## Historical content, recordings and source rights

The game presents historical decisions without suggesting that all these decisions were inevitable or morally uncontested. The educator notes discuss historical distinctions. Source credits for AP Archive, IDF, Unpacked / OpenDor Media, GPO, David Rubinger, UN Photo and the National Library of Israel remain included.

The new soundtrack was supplied by the project owner and is **not** claimed to be public domain. Before publication on a public GitHub Pages website, ensure that the necessary rights to host and reproduce this particular music recording and composition have been obtained. See `MUSIC_SOURCES.md` for details.

See also `MEDIA_SOURCES.md`, `MAP_SOURCES.md`, `GPO_PHOTO_SOURCES.md` and `V18_CHANGELOG.md`.
