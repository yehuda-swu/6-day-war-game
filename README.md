# Six Days of Decisions | Version 12

A chronological, interactive learning game for students aged 16 to 17, prepared for StandWithUs UK Explore. The game runs on GitHub Pages as static HTML, JavaScript, CSS, SVG maps and local video files.

## What is new

* An archive card beside each of the 14 decisions. Each card provides a short caption, date, location and source.
* Stage 1 displays the supplied genuine UN Photo of a peacekeeper lowering the UN flag at King’s Gate near Gaza City on **19 May 1967**. The decision concerns the earlier diplomatic crisis, which had already been developing before this photograph was taken.
* Stage 5 displays the supplied Dan Hadani / National Library of Israel photograph of Egyptian aircraft wreckage.
* Stage 9 displays the supplied photograph of Israeli soldiers using a makeshift shower in Sinai.
* Other stages use clearly credited archive video frames where appropriate. Five stages have explicitly labelled image placeholders, rather than a misleading reconstruction presented as a genuine photograph.
* Six silent maps contain moving, labelled military symbols, including infantry, tanks, aircraft, artillery and ships. Flags are attached to units. Egyptian, Syrian, Jordanian, Israeli and UN symbols use the **1967** flag designs.
* The two large choices, two spare lives, Game Over after three mistakes, restart, all video edits, historical credits and transparent StandWithUs UK / Explore branding are retained from Version 11.

## Publish to GitHub Pages

1. Extract the ZIP.
2. Open your existing `6-day-war-game` GitHub repository.
3. Upload the **contents** of this folder, including `assets`, to the repository root. Replace the previous game files.
4. Select **Commit changes** and use the message below.
5. Reload https://yehuda-swu.github.io/6-day-war-game/ after GitHub Pages deploys the change.

**Suggested commit message:** `Add archival decision cards and 1967 military unit animations`

If using Git locally instead of the web interface:

```bash
git add .
git commit -m "Add archival decision cards and 1967 military unit animations"
git push origin main
```

There is no build process and no external server requirement. Open `index.html` locally if you want a quick preview. Some browsers may restrict locally opened media; GitHub Pages is the preferred check.

## Photography still needed

Authentic archival photographs would improve decision cards **2, 3, 7, 12 and 13**. These stages already have the same card layout, but clearly state that a photograph is pending. See `MEDIA_CHECKLIST.md` for suggested subjects. Do not use modern photographs or animated illustrations as unidentified archival images.

## Map design and historical limits

The animated unit routes are illustrative. They are **not** evidence of exact positions, troop strength, movement times or the location of specific battalions. Modern Natural Earth geography is a base map only. 1967 flag designs are used to avoid modern flag anachronisms. The Jerusalem map is a schematic of the front, not a surveyed street map.

The six SVG maps run silently. Local documentary MP4 files are silent except the IDF Old City video containing the original Hebrew military communications.

## Source and rights

The supplied photograph metadata and source credits are preserved. The project owner has previously confirmed reuse permissions for the provided media. Keep all original credit displays intact when publishing. See `MEDIA_SOURCES.md` for the current source register and `MAP_SOURCES.md` for the cartographic and flag references.

The correct answers identify the historically recorded decisions, not the only possible or morally justified decisions.


## Version 13: GPO photographic archive

The new contextual GPO gallery is available from relevant decision screens. It contains verified descriptions and dates from the photo collection at https://www.sixdaywar.org/resources-documents-photos-and-video/photos/. Three independently verified GPO photographs load directly from Wikimedia Commons in the decision cards; others are listed with source links because image files were inaccessible for direct transfer. See GPO_PHOTO_CATALOGUE.csv and GPO_PHOTO_SOURCES.md. No documentary photograph is substituted without a genuine source. External images need an internet connection.

