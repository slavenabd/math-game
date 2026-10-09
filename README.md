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
7. At the end the child sees stars, points, new trophies, and a list of the "tricky ones" to remember.

## Features

- ⏱ **Timer per question.** The default is 5 seconds; set it to 3–20 seconds or turn it off. It turns orange and then red as time runs out.
- 🔁 **Repeat until learned.** Missed questions come back in fix‑up rounds.
- 🧠 **Remembers old mistakes.** Facts a player got wrong before are mixed into later games (up to 30% of the questions) until they are answered right on the first try.
- 🗣️ **Read questions aloud** in English, Bosnian/Croatian/Serbian or German, using the device's built‑in voice. The timer starts after the question has been read.
- ⭐ **Points.** Each correct answer earns 10 points, plus a speed bonus of up to 5 and a streak combo of up to 5. Correct answers in fix‑up rounds earn 5.
- 🌟 **1–3 stars** per game, based on how many questions were right on the first try.
- 🏆 **14 trophies** to collect, e.g. *Perfect!*, *On Fire* (5 in a row), *Lightning*, *Never Give Up*, *Math Wizard*.
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

## Tip: add it to the home screen

On a phone, open the game in the browser and choose **Share → Add to Home Screen** (iPhone) or **⋮ → Add to Home screen** (Android). It then opens full screen like an app.

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

Progress (players, settings, scores, trophies) is saved in the browser's local storage on each device. Clearing the browser's site data resets it.

## Technologies

HTML, CSS and vanilla JavaScript. Sounds are generated with the Web Audio API, read‑aloud uses the Web Speech API, and confetti is drawn on a canvas. There are no dependencies apart from the Fredoka font from Google Fonts.
