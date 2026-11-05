# Six Days of Decisions | StandWithUs UK Explore

## Version 10: silent archive films and presenter free Unpacked footage (current build)

* All downloadable outcome videos are silent, except Stage 08, which retains the original Hebrew military communications from the IDF Old City footage.
* The Stage 08 clip ends at approximately 28.4 seconds, avoiding the subsequent montage.
* Onscreen presenter shots were **removed**, not blurred, from Unpacked / OpenDor Media sequences at Stages 04, 05, 06 and 11. Stage 10 already contains only archive images and graphics.
* Stage 09 now plays a silent, locally hosted 46 second extract from the supplied Periscope Film LLC footage instead of relying on an external YouTube player. This means the whole game uses the same automatic progression and silence settings.
* The game labels silent clips and the Hebrew language exception clearly in the historical outcome screens. All source credits, logos, media and the two spare lives system are retained.
* Users confirmed that publication and editing permissions for all shared footage are in place. Preserve the attribution text on the outcome screens.

**GitHub commit message:** `Mute archive footage and remove Unpacked presenter scenes`

**Terminal commands:**

```bash
git add .
git commit -m "Mute archive footage and remove Unpacked presenter scenes"
git push origin main
```


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


## Included historical video clips (November 2026 update)

This package includes five clips and stills: decisions 04, 05, 06 and 10 from a video credited to Unpacked and OpenDor Media, plus decision 08 from a separate Old City film supplied by the project team. They play after the relevant historically accurate choice and automatically advance afterwards. Other stages show the original illustrated outcome screen until additional films are supplied.

### Public distribution rights

The team must confirm permission to republish the uploaded films and derived stills before deploying this version on a public GitHub Pages site. Being able to edit a personal copy and citing Unpacked/OpenDor Media does not in itself authorise republication. If permission has not been obtained, remove the five MP4 and JPG files from `assets` before publishing. The application will continue to work without them. See `MEDIA_SOURCES.md` for clip timestamps and attribution.

## Version 4 update

The supplied StandWithUs UK and Explore logos now appear in the header. The landing screen has been refined, and learners can return home or restart after a confirmation. The educator notes do not include deployment instructions. Video credits are visible within the outcome scenes. The Sinai archive photograph is installed for Stage 09. For the additional Stage 05 image, save the supplied Egyptian aircraft wreckage photograph as `assets/05-airfields-wreckage.jpg`; the game will display it after the video without any code edits.

**Suggested GitHub commit message:** `Improve home screen, navigation, logos and historical media credits`

**Git commands:**

```bash
git add .
git commit -m "Improve home screen, navigation, logos and historical media credits"
git push origin main
```

Confirm publication rights and accurate collection attributions before making the site public.

## Version 5: additional contextual footage linked to Periscope Film LLC

In Version 5, two outcome screens offered the original YouTube film without copying its footage into the repository:

* **Stage 09, Sinai:** a suggested selection beginning at 04:14 and ending at 05:00, covering tanks and mobile artillery.
* **Stage 11, Golan:** a suggested selection beginning at 07:43 and ending at 08:17, covering a position described in the supplied archive summary as a Syrian bunker.

These are externally hosted excerpts from the same source: `https://www.youtube.com/watch?v=UfWaa0a-e98`, credited to **Periscope Film LLC**. They were selected based on the clip descriptions supplied by the project team and have not been visually verified in this package. Video is embedded using the official YouTube player; users can open the original video if embedding does not work. An internet connection is required. External embeds do not advance automatically: choose **Continue** when finished. Both stages work with normal historical background images if YouTube is unavailable.

**Rights:** Periscope Film's public licensing information says archival media reuse requires a licence. These excerpts have **not** been downloaded, edited or redistributed in the ZIP. If the team wishes to host the clips as local MP4 files or use them within a new edited animation, seek licensing permission first. Embedding must also be compatible with the original video's settings and YouTube's terms.

**Suggested GitHub commit message:** `Add Periscope archive references to Sinai and Golan stages`

**Git commands:**

```bash
git add .
git commit -m "Add Periscope archive references to Sinai and Golan stages"
git push origin main
```

## Version 6: IDF Old City and Unpacked Golan footage

* Stage 08 now uses a 35 second selection from the supplied IDF film, with visible footage credit **IDF**. It replaces the previous Old City film to avoid duplicating the same historical moments.
* Stage 11 now uses a 21 second selection from the supplied Golan Heights documentary, with visible footage credit **Unpacked / OpenDor Media**. The earlier Periscope YouTube selection is not used for this stage.
* The Golan extract contains documentary material, not purely contemporary archival footage. The IDF sequence includes contemporary editorial captions along with archive images.
* Stage 14 Khartoum Summit has a proposed future media attribution **AP Archive**, provided by the project team. No Khartoum film has been attached or incorporated yet. Its fallback card remains playable.
* Stage 09 continues to refer to the separately hosted Periscope Film LLC film through YouTube.

**Rights:** Before deploying any third party footage publicly, obtain the necessary permissions. Credits alone are not a licence to edit and republish.

**Suggested GitHub commit message:** `Add IDF Jerusalem film and Golan documentary with source credits`

**Git commands:**

```bash
git add .
git commit -m "Add IDF Jerusalem film and Golan documentary with source credits"
git push origin main
```

## Version 7: Arab League Council archive footage

* Stage 14 now plays a 48 second extract from the user supplied AP Archive film `SYND 12 9 67 ARAB LEAGUE COUNCIL MEETING(1).mp4`.
* The film appears on the historical outcome screen after the student identifies the Khartoum declaration and then advances to the final debrief.
* The game displays the credit **AP Archive** and a specific disclaimer: the clip is labelled as a later Arab League Council meeting, **not verified as footage from the Khartoum Summit**.
* The Khartoum Summit took place from 29 August to 1 September 1967, while the supplied film filename suggests 12 September 1967. Its exact location and filming date have not been independently verified.
* A still from the film is added to the decision screen at `assets/14-khartoum.jpg`.

**Before public deployment:** obtain the necessary rights to reproduce and edit AP Archive footage, including stills. An attribution is not a reuse licence. This ZIP is provided for editorial review until reuse rights are confirmed.

**GitHub commit message:** `Add AP Archive footage to Arab League aftermath stage`

**Terminal commands (if using Git):**

```bash
git add .
git commit -m "Add AP Archive footage to Arab League aftermath stage"
git push origin main
```

## Version 8: Two lives

* Players start with two spare lives. An incorrect answer consumes one spare life.
* The third incorrect answer ends the game on a full screen Game Over page.
* The game saves the life counter and Game Over state between page reloads.
* Restart begins at Decision 1 with two spare lives, and the Home button continues to work.
* The AP Archive footage in Stage 14 is labelled as a later Arab League Council meeting, not directly as footage of the Khartoum Summit.

GitHub commit message: Add two lives and game over screen to Six Days of Decisions
