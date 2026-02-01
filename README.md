# Math Game

A simple, interactive web-based math game designed to help children (and adults!) practice basic arithmetic.

**[Play Online Here](https://slavenabd.github.io/math-game/)**

## Features

- **Four Operations:** Practice Addition (+), Subtraction (-), Multiplication (×), and Division (÷).
- **Customizable Settings:** 
    - Choose which operations to include.
    - Set the minimum and maximum number range (e.g., 0-20, 0-100).
- **Smart Question Generation:**
    - Subtraction always results in non-negative numbers.
    - Division always results in whole integers (no remainders).
- **Progress Tracking:**
    - Visual progress bar showing correct (green) and incorrect (red) answers.
    - "Where to Improve" list at the end of the game showing mistakes.
- **Scoreboard:** Tracks your score and time taken.

## How to Play

1.  Open the game in your web browser.
2.  (Optional) Click the **Settings** button in the top right to configure the difficulty and operations.
3.  Type your answer using the number keys.
4.  Press **Enter** to submit your answer.
5.  Use **Backspace** to correct mistakes before submitting.

## Installation & Running

### Option 1: Open Directly
Simply open the `index.html` file in any modern web browser.

### Option 2: Run with Node.js
If you have Node.js installed, you can run the included simple server:

1.  Install dependencies (if not already installed):
    ```bash
    npm install express
    ```
2.  Start the server:
    ```bash
    node server.js
    ```
3.  Open your browser to `http://localhost:5000`

## Technologies
- HTML5
- CSS3
- JavaScript (Vanilla)
- Node.js & Express (Optional for serving)
