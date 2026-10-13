# Maddy’s Meeting Buddy

One app for the whole week. The **📘 Midweek / ☀️ Sunday** switch is on the start screen and at the top of each meeting.

- On Sundays it opens in Sunday mode, and on every other day in Midweek mode. If you tap the switch, the app remembers that choice for the rest of the day. Adding `?mode=sunday` or `?mode=midweek` to the address forces a mode.
- Each mode saves its own progress, so you can switch partway through without losing your place.
- Both modes share one star wallet, one star shop, Brutus’s looks and the drawing pad.
- After the first visit online, the service worker (`sw.js`) keeps an offline copy of everything.

## 🎵 Song button

The 🎵 Song button is on the start screen, in the Midweek meeting and on the Sunday bar. Maddy types any song number and its lead sheet appears. This week’s songs show up as quick-tap buttons. Song buttons inside the Sunday flow open the same popup.

- Songs 1–151 come from `songs/`. These are page images of the whole *“Sing Out Joyfully”* lead-sheet book (`sjjsm_E.pdf`), plus `songs/songs.js`, which maps each song number to its title and pages. The map was built from the PDF’s own text, so it isn’t guessed. Run `tools/build_songs.py` only if jw.org ever replaces that PDF.
- Newer songs (152 and up) don’t have a lead-sheet PDF on jw.org yet. Add their sheet image to the week pack’s `SONG_SHEETS` (as song 161 is now), and the Song button will show it.

## Folder layout

```
index.html                 app + Midweek engine (no weekly content in here)
sunday/index.html          Sunday Watchtower engine (runs inside index.html)
sunday/engine.js           shared engine for the Sunday paragraph games
songs/                     songbook lead sheets: NNN-k.png pages + songs.js (number → title, pages)
media/                     Brutus, shop art, Midweek pictures and song sheets
weeks/current.js           ← THE weekly switch: which week folders to use
weeks/<Monday>/midweek/week.js     Midweek week pack (WEEK, meetingParts, checks, games, songs, buddy answers)
weeks/<Monday>/sunday/data.js      Sunday week pack (meta, paragraph text, Maddy text, questions, units)
weeks/<Monday>/sunday/games/w-XX.html   one game per unit (data only; loads ../../../../sunday/engine.js)
weeks/<Monday>/sunday/wt-pages/    Watchtower pictures used by paragraphs and games
weeks/<Monday>/sunday/<issue>.pdf  the Watchtower issue PDF (Page button)
```

## Weekly update (one upload covers both meetings)

1. Make a new folder named for the Monday of the week, e.g. `weeks/2026-10-12/`.
2. **Midweek:** copy last week’s `midweek/week.js` into `weeks/2026-10-12/midweek/` and edit it. Change `WEEK` (`id`, `heading`, `range`, `start`, secret word) and then `meetingParts`, `PART_CHECKS`, `PART_GAMES` and `BUDDY_FACTS` (one entry per part). Add any new song titles or sheets to `SONG_TITLES`/`SONG_SHEETS`. New pictures can go in `weeks/2026-10-12/midweek/`. Paths are written relative to `index.html`, e.g. `weeks/2026-10-12/midweek/pic.jpg`.
3. **Sunday:** copy last week’s `sunday/` folder into `weeks/2026-10-12/sunday/` and edit it:
   - In `data.js`, update `meta`. That means `id`, which is the Sunday date and the key Sunday progress is saved under, plus `range`, `title`, `short`, `theme`, `wt`, the opening/closing songs and `about`. Also update `wtPage()` (paragraph → PDF page), `pTexts`, `easy`, `questions` and `units`. Each unit’s `game:'w-XX'` must match a file in `games/`.
   - Replace the files in `games/w-XX.html`, the `wt-pages/` pictures and the Watchtower PDF.
4. Edit `weeks/current.js` to point at the new folders:
   ```js
   self.MMB_WEEK = { midweek: "weeks/2026-10-12/midweek", sunday: "weeks/2026-10-12/sunday" };
   ```
5. Upload. Nothing else needs to change. Editing `current.js` makes the offline copy refresh by itself. The service worker builds its file list from `index.html`, `sunday/index.html` and the two week folders.

Keep last week’s folders (and the pictures they use) for one more week, then delete them (git history keeps them). Devices that still have last week’s offline copy may briefly open it while the new copy downloads. If last week’s files are already gone at that moment, the Sunday page can fail to load until the next refresh.

## Stars from the old Sunday app

The first time this app opens on a device, it reads the old Sunday Meeting Buddy’s saved stars and shop items once. Those are the `smb-sunday-*` keys, which live on the same site. It adds the stars and any items Maddy doesn’t already own, then sets `mmb2_sunday_migrated` so this never happens again. It only reads the old app’s data and never changes it, so the old app keeps working.
