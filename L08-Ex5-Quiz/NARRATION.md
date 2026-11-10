# Quiz App — Full Recording Walkthrough + Narration Script

Step-by-step guide to record the graded **Animal Quiz** video demo for Friday. Follow it in order.
The app uses an Apple-style **liquid-glass** theme: a dark gradient background, blurred translucent cards,
clean icons, and smooth entrance + score animations.

**You submit:** a screen recording (with your voice) of the quiz running, saved into `L08-Ex5-Quiz/`,
pushed to GitHub + uploaded to PoliteMall. **Recording: Friday. Due: Saturday 11:59 PM.**

---

## STEP 1 — Start the app
1. Open **Terminal** (`Cmd + Space`, type `Terminal`, Enter).
2. Run these, one line at a time:
   ```
   cd ~/Documents/Desktop-Files/School/C346/work/L08-Ex5-Quiz
   npm install
   npx expo start
   ```
   (`npm install` downloads the packages, including the glass/gradient/icon libraries — wait for it the first time.)
3. Press **`w`** in that Terminal to open the app in your browser (or open the printed **Web** URL — e.g. http://localhost:8081 — in **Chrome**). No Xcode needed.
4. Make it look like a phone: in Chrome press **`Cmd + Option + I`** → click the **phone/tablet icon** (or `Cmd + Shift + M`) → choose **iPhone 14 Pro** in the top bar.
5. Wait for the dark gradient **"Animal Quiz"** screen to load.

## STEP 2 — Set up recording (Mac)
1. Press `Cmd + Shift + 5`.
2. **Options → Microphone → your mic.** ⚠️ Skip this and the video has **no voice.**
3. Choose **Record Selected Portion** and drag the box around the **phone-sized app area** in Chrome.
4. Have STEP 3 open to read from. Click **Record** (allow Screen Recording permission if asked).

> **Windows (Clipchamp):** Blank Video → Record & create → **Screen** → pick the emulator → Share →
> speak while demoing → Stop → Save and edit → Export (turn **off** *Save in the cloud*) → save `.mp4` here.

## STEP 3 — Narration script (read aloud while you click, ~60–90s)

> **[Start]** *"Hi, this is my Animal Quiz app for C346. I restyled it with a StyleSheet and Flexbox into a clean, Apple-style liquid-glass design."*
>
> **[Let the screen settle / scroll once]** *"The background is a dark gradient with soft glows, and as it loads each card smoothly fades and slides into place. The title 'Animal Quiz' is large, bold and white — all styled in `StyleSheet.create`, not inline."*
>
> **[Point at the first card]** *"Each question sits in a frosted, blurred glass card with rounded corners and a thin glowing border — that translucent blur is the liquid-glass look."*
>
> **[Point at the badge, image, dropdown]** *"The question row uses a Flexbox `flexDirection: row` to line up a numbered badge next to the text. The photo has a fixed width and height so they all match, and there's a dropdown to pick the answer."*
>
> **[Open dropdown → Elephant]** *"When I answer one…"* **[choose Elephant]** *"…a green tick appears on the card and its border lights up green. Elephant…"* **[scroll → Leopard]** *"…Leopard…"* **[scroll → Giraffe]** *"…and Giraffe."*
>
> **[Press the emerald Submit button]** *"The Submit button is an emerald gradient with an icon, and it springs slightly when pressed."*
>
> **[Animated score card appears]** *"My score animates in as its own glass card — three out of three, with a trophy. Perfect score!"*
>
> **[End]** *"So the before was plain stacked text; the after uses a StyleSheet for the gradient, glass cards and typography, Flexbox for the layout, plus smooth animations and icons — a polished, Apple-style result. Thanks for watching!"*

## STEP 4 — Save the file
1. Click the **■ stop** button in the menu bar (top-right).
2. It saves to your **Desktop** as a `.mov`.
3. Rename to **`L08-Ex5-Quiz-demo.mov`** and move it into `L08-Ex5-Quiz/`
   (Terminal: `mv ~/Desktop/L08-Ex5-Quiz-demo.mov ~/Documents/Desktop-Files/School/C346/work/L08-Ex5-Quiz/`).

## STEP 5 — Push the video
Once the file is in the folder, **tell me "video's in"** and I'll commit + push it for you.

## STEP 6 — Submit on PoliteMall
Upload the recording to the Exercise #5 Individual Submission. Both apps are already on GitHub.

---

## If something goes wrong
- **No sound →** you skipped STEP 2.2 (pick the Microphone first). Re-record.
- **`npx expo start` errors →** re-run `npm install`; make sure you're in the `L08-Ex5-Quiz` folder.
- **Dropdown won't open →** tap directly on it; give the app a second to load.
- **Video too big for GitHub (>100 MB) →** record at 720p / keep it ~60–90s.

## Cheat-sheet — explain the styling in your own words
**Quiz (`App.js`):** all styling lives in `StyleSheet.create` (slides: *benefits performance, organises code*).
- `LinearGradient` dark background + two soft **glow** circles for depth.
- **Liquid glass** cards = `BlurView` (blurred, translucent) with a hairline border and `borderRadius` — the Apple frosted look.
- `qRow` / `badge` = a **`flexDirection: 'row'`** Flexbox row placing a numbered badge beside the question.
- Smooth **`Animated`** entrance (fade + rise + scale), a green tick + glowing border when answered, a spring on the button, and an animated glass **score card** on submit.
- Clean **Ionicons** (`paw`, `checkmark-circle`, `checkmark-done`, `trophy`) for a minimal, modern feel.

**Boats (`L08-Ex5-Boats`):** same gradient + `BlurView` glass system — a **`flexDirection: 'row'`** title row with a
boat-icon circle next to the name, muted description, and a staggered fade/slide/scale animation per card.
