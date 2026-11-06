# Six Days of Decisions | Version 17

A browser game for students aged 16 and 17, developed for StandWithUs UK Explore. It runs directly on GitHub Pages using static HTML, CSS, JavaScript, local photographs, archival videos, original audio and animated SVG maps.

## What is new

**Original looping cinematic music** replaces the previous quiet tone synthesiser. Press Start Mission to begin the game and music. Browser audio rules mean the score cannot play before the user interacts. The Music button switches playback on or off. Music continues through all screens and films except the Old City clip, where it pauses so the Hebrew voices can be heard.

**Completely redesigned final debrief** gives students a dramatic completion photo, clear mission stats, a before and after map comparison, more photographs at the Western Wall, concise historical takeaways and three fully working actions: Play Again, Home and Educator Sources. Duplicate final screen buttons have been removed.

The 14 historical decisions, two spare lives, Game Over, archival photo gallery and media credits remain unchanged. Student progress is not saved between visits.

## Update the GitHub website

1. Download and extract the Version 17 ZIP.
2. Open the existing repository: https://github.com/yehuda-swu/6-day-war-game
3. In GitHub, select Add file then Upload files.
4. Upload all extracted files and the `assets` folder into the **root** of the repository. `index.html` should be visible next to `assets`, not inside an extra folder.
5. Commit with the message: `Add cinematic background music and redesign final debrief`.
6. Open https://yehuda-swu.github.io/6-day-war-game/ after GitHub Pages publishes the change.

Alternatively, inside a local Git checkout run:

```bash
git add .
git commit -m "Add cinematic background music and redesign final debrief"
git push origin main
```

No build process or API keys are required. The MP3 plays in modern desktop and mobile browsers.

## Historical content and media credits

The game presents historically documented decisions without suggesting that all these decisions were inevitable or morally uncontested. The educator notes discuss important historical distinctions. Source credits for AP Archive, IDF, Unpacked / OpenDor Media, GPO, David Rubinger, UN Photo and the National Library of Israel are retained.

The original instrumental background score uses the openly licensed TimGM6mb soundfont. The score and its rendering credits are explained in `MUSIC_SOURCES.md` and the soundfont license is included in `MUSIC_LICENSE_GPL2.txt`. The soundfont itself is not included in this archive.

See `MEDIA_SOURCES.md`, `MAP_SOURCES.md`, `GPO_PHOTO_SOURCES.md`, `MUSIC_SOURCES.md` and `V17_CHANGELOG.md` for further information.
