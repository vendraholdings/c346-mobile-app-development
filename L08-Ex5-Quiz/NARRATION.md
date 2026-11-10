# Quiz App — Recording Walkthrough + Narration Script

Everything you need to record the graded video demo of the **Animal Quiz** app.
Read Part C out loud while you click through the app. Aim for ~60–90 seconds.

---

## Part A — Run the app first
1. Open Terminal in the quiz folder:
   ```
   cd ~/Documents/Desktop-Files/School/C346/work/L08-Ex5-Quiz
   npm install
   npx expo start
   ```
2. Launch it one of these ways:
   - **iOS Simulator (easiest on your Mac):** press `i` in the Expo terminal.
   - **Your phone:** open the Expo Go app and scan the QR code.
3. Wait until the Animal Quiz screen is fully loaded (title + first animal photo visible).

## Part B — Record with narration
**On the Mac (recommended):**
1. Press `Cmd + Shift + 5`.
2. Click **Options** → under *Microphone* pick your mic (e.g. MacBook Microphone). This is what records your voice.
3. Choose **Record Selected Portion** and drag the box around the simulator/app window (or **Record Entire Screen**).
4. Click **Record**. Do your demo while reading Part C.
5. Stop: click the ■ stop icon in the menu bar (top-right). The file saves to your Desktop as a `.mov`.
6. Rename it `L08-Ex5-Quiz-demo.mov` and move it into this folder (`L08-Ex5-Quiz/`).

**On Windows (Clipchamp, per the class guide):** Clipchamp → Blank Video → Record & create → **Screen** → pick the emulator window → speak while demoing → Stop → Save and edit → Export (turn off *Save in the cloud*) → save the `.mp4` into this folder.

> Tip: keep the mic on, speak clearly, and move at a calm pace. One take is fine — small stumbles are okay.

## Part C — Narration script (read aloud)
> *"Hi, this is my Animal Quiz app for C346, restyled using a StyleSheet and Flexbox.*
>
> *First, the whole screen sits inside a ScrollView with a soft green background, and the title 'Animal Quiz' is styled bold, larger, centred, and in a matching green — that's all defined in `StyleSheet.create`, not inline.*
>
> *Each question is a reusable `Question` component wrapped in a card: a white View with rounded corners, a thin border, and spacing around it, so every question looks like a neat tile instead of plain text.*
>
> *Inside each card the animal image is given a fixed full width and a set height so the photos line up consistently, the question text is bold and centred, and below it is a dropdown picker to choose the answer.*
>
> *Let me answer them.* (pick **Elephant**, then scroll) *…Elephant,* (pick **Leopard**) *…Leopard,* (pick **Giraffe**) *…and Giraffe.*
>
> *At the bottom there's a Submit button, styled green with its own spacing. When I press it…* (press **Submit Answers**) *…it checks my answers and shows an alert with my score — three correct, 'Well done!'.*
>
> *So the before was plain stacked text and a basic list; the after uses a StyleSheet for the colours and typography, and Flexbox layout for the cards, image sizing and spacing — giving a clear, consistent, much more polished look. Thanks for watching."*

## Part D — Styling cheat-sheet (so you can explain it in your own words)
**Quiz app (`App.js`):**
- `StyleSheet.create({...})` holds all styles (slides: *benefits performance, organises code*).
- `container`: `flex: 1`, green background, top padding — the screen shell.
- `title`: `fontSize: 28`, `fontWeight: 'bold'`, `textAlign: 'center'`, green.
- `card`: white background, `borderRadius: 10`, `borderWidth: 1`, margin — the tile look.
- `image`: `width: '100%'`, `height: 220` — fixed, consistent photos.
- Reusable `Question` component = same card styling for all 3 questions (less repeated code).

**Boats app (`L08-Ex5-Boats`):** header bar, white cards with shadows (`elevation`/`shadowColor`), and a **`flexDirection: 'row'`** title row that puts the ship icon next to the boat name — the clearest Flexbox example across the two apps.
