# 🦉 Math Game

A friendly math practice game for elementary school kids. It's built to feel like a classroom quick test: the question appears (and can be **read aloud**, the way a teacher dictates it), and the child has a few seconds to answer. Wrong or missed questions come back in the next round until every one is solved.

**[▶ Play online](https://slavenabd.github.io/math-game/)** works on phones, tablets and computers. Nothing to install.

## How it works

1. Pick (or add) a player on the home screen and tap **▶ Play**.
2. After a short *3‑2‑1‑Go!* a question appears, e.g. `7 + 8 = ?`.
3. Type the answer on the on‑screen keypad (or a keyboard) and press **✓** / **Enter**.
4. The timer bar runs down. When time is up, whatever has been typed is checked. If nothing was typed, the question counts as missed.
5. After a mistake the correct answer is shown for a moment, so the child can learn it.
6. **Rounds:** every question that was wrong or missed goes into the next round. Rounds repeat until all questions are solved.
7. At the end the child sees stars, points, new trophies, the next trophy to aim for, and a list of the "tricky ones" to remember. **▶ Next game** continues with the next session.

## Features

- 📘 **Go through all tasks.** For the chosen settings the game works out every possible task. Each game (a *session*) takes tasks that haven't been done yet, so after enough sessions every one has come up once. For example, 0–10 with + and 🎯 has 66 tasks, which is 7 sessions of 10 questions. The home screen shows the progress ("34 / 66 tasks done · session 4 of 7"). When all are done, the child gets a 🎓 trophy and a new pass starts. Progress is saved per player and per setting, so switching ranges keeps each one's progress. 3 + 5 and 5 + 3 count as different tasks. Very large ranges (over 20,000 tasks) aren't tracked.

- ⏱ **Timer per question.** The default is 5 seconds; set it to 3–20 seconds or turn it off. It turns orange and then red as time runs out.
- 🔁 **Repeat until learned.** Missed questions come back in fix‑up rounds.
- 🧠 **Remembers old mistakes.** Facts a player got wrong before are mixed into later games (up to 30% of the questions) until they are answered right on the first try.
- 🗣️ **Read questions aloud** in English, Bosnian/Croatian/Serbian or German, using the device's built‑in voice. The timer starts after the question has been read.
- ⭐ **Points.** Each correct answer earns 10 points, plus a speed bonus of up to 5 and a streak combo of up to 5. Correct answers in fix‑up rounds earn 5.
- 🌟 **1–3 stars** per game, based on how many questions were right on the first try.
- 🏆 **46 trophies**, from easy to hard, so there's almost always something to win: *Hat Trick* (3 in a row), *Little Star*, *Good Listener*, *Halfway* through a range, *3 Days in a Row*, *Plus Pro*, … up to *Legend* (50 games) and *To the Moon* (5000 points). The results screen shows the closest trophy still to win (e.g. "🎈 25 Correct · 18 / 25"), and tapping a trophy on the home screen shows its progress.
- 👧👦 **Several players.** Each child has their own name, animal avatar, settings, best score and trophies.
- 📱 **Mobile‑friendly**, with a big on‑screen number keypad (no phone keyboard popping up). On a computer the keyboard works too.
- 🎉 Animations, confetti and sounds (sounds can be turned off). Animations are reduced automatically when the device asks for less motion.
- ⏸ **Pause** at any time. The game also pauses by itself if you switch apps.
- 🌍 **English and Croatian (Hrvatski).** Switch with the language picker next to ⚙️. The first visit picks the language from the device (hr/bs/sr → Croatian).

## Settings

Open them with ⚙️ or by tapping the summary line under the Play button. Settings are saved for each player.

| Setting | Default | Options |
|---|---|---|
| Questions per game | 10 | 5, 10, 15, 20, 30 |
| Time per question | 5 s | no timer, 3–20 s |
| Numbers from … to … | 0 – 20 | any range from 0 to 999 |
| 🎯 Answers must stay inside the number range | off | e.g. 0–20: `13 + 7` can appear, `13 + 8` can't |
| Operations | + | + − × ÷ (any combination) |
| Sounds | on | |
| Bring back old mistakes | on | |
| Read questions aloud | off | English, BHS, German |

There are quick presets: **0–10 + −**, **0–20 + −** and **0–100 + −** (these turn on 🎯 so answers stay in the range, the way school tasks like "addition up to 20" work), and **Times tables × ÷** (1–10).

How questions are made:
- Subtraction never gives a negative answer.
- Division always comes out even, and both numbers in the question stay inside the chosen range (with 0–100 you get e.g. `56 ÷ 8`, never `2556 ÷ 36`). Very easy ones like `0 ÷ 7`, `9 ÷ 1` or `6 ÷ 6` are kept rare.
- With 🎯 turned on, every number in the question *and* the answer stays inside the range. If a range makes that impossible (e.g. 15–20 with +), settings tell you.

## Keyboard shortcuts

| Key | Action |
|---|---|
| `0`–`9` | type the answer |
| `Backspace` | delete a digit |
| `Enter` | submit the answer, or start / continue |
| `Esc` or `P` | pause / resume |

## Install it & play offline

On a phone, open the game in the browser and choose **Share → Add to Home Screen** (iPhone) or **⋮ → Install app / Add to Home screen** (Android). It gets an owl icon and opens full screen like an app.

After the first visit the game also works **without internet**, e.g. in the car. A service worker (`sw.js`) keeps a copy of the files. After you publish an update, devices pick it up in the background and show the new version on the next visit.

## Privacy

The game collects nothing, has no ads and needs no sign-up. Progress stays only in the browser on each device. Everything, including the font, is served from this site, so the game doesn't contact any other service.

## Running locally

It's a static site (`index.html`, `styles.css`, `script.js`) with no build step.

- **Open directly:** double‑click `index.html`.
- **Simple server** (better for testing on a phone over Wi‑Fi):
  ```bash
  python3 -m http.server 5000
  ```
  or with Node.js:
  ```bash
  npm install express
  node server.js
  ```
  Then open `http://localhost:5000`.

  Because of the offline cache, after editing a file you may need to reload twice (or use a hard reload) to see the change.

Progress (players, settings, scores, trophies) is saved in the browser's local storage on each device. To start a player over, tap their name (or ✏️) → **↺ Reset progress**. This clears scores, stars, trophies, saved mistakes and task progress, and keeps the name and settings.

### Keeping progress safe

- **Parent check:** resetting, deleting a player or restoring a backup asks for a multiplication like 14 × 17, so a child can't wipe progress by accident.
- **Automatic backups:** after games (one per day) and before every reset, delete or restore, the game keeps a copy on the device (the last 10). You can go back to one in ⚙️ → *Backup*. If the saved data is ever damaged, the game recovers the newest good copy by itself.
- **Backup file:** ⚙️ → *Backup* → **⬇ Save backup** saves all players to a file. On a phone it opens the share menu, so you can send it to yourself on Viber or put it on Drive. **⬆ Load backup** restores it, on the same or another device. This is the only thing that survives clearing the browser's data.
- **Persistent storage:** the game asks the browser not to clear its data when the device is low on space.
- **One place per device:** the installed app and the browser share progress. A link opened *inside* Viber/WhatsApp, a different browser or private mode has its own separate, empty progress, so open the installed app instead.

## Technologies

HTML, CSS and vanilla JavaScript. Sounds are generated with the Web Audio API, read‑aloud uses the Web Speech API, and confetti is drawn on a canvas. There are no dependencies. The [Fredoka](https://github.com/hafontia/Fredoka-One) font (SIL Open Font License, see `fonts/OFL.txt`) is included in `fonts/`.

## Sharing

Links to the game show a preview card with the owl in Viber, WhatsApp, Facebook and Messenger (`og-image.png`, the `og:` tags in `index.html`). The preview tags use the full address `https://14112519.xyz/`, so if the game moves to a new domain, update those two `og:` URLs and `CNAME`.

The icons in `icons/` are made from `icons/owl.svg`.
