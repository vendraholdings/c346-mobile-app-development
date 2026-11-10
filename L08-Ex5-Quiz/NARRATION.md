# Quiz App — Full Recording Walkthrough + Narration Script

A step-by-step guide to record the graded **Animal Quiz** video demo, start to finish.
No prior experience needed — just follow the steps in order.

**You are submitting:** a screen recording (with your voice) of the Animal Quiz app running,
saved into this `L08-Ex5-Quiz/` folder, then pushed to GitHub and uploaded to PoliteMall.
**Due:** Saturday 11:59 PM.

---

## STEP 1 — Start the app
1. Open **Terminal** (press `Cmd + Space`, type `Terminal`, Enter).
2. Paste these lines one at a time, pressing Enter after each:
   ```
   cd ~/Documents/Desktop-Files/School/C346/work/L08-Ex5-Quiz
   npm install
   npx expo start
   ```
   `npm install` only needs to run the first time (it downloads packages — wait for it to finish).
3. A menu with a QR code appears. Open the app one of these ways:
   - **iOS Simulator (best for recording on your Mac):** press the `i` key. Wait for the iPhone simulator to boot and the app to load.
   - **Your phone (fallback):** install **Expo Go** from the App Store, open it, scan the QR code.
   - If `i` gives an error like *"Xcode not found"*, use the phone option, or install Xcode from the App Store first.
4. Wait until you can see the green **"Animal Quiz"** title and the first elephant photo. Leave this running.

## STEP 2 — Get ready to record (Mac)
1. Press `Cmd + Shift + 5`. A small control bar appears at the bottom.
2. Click **Options**. Under **Microphone**, choose your mic (e.g. *MacBook Microphone*).
   ⚠️ If you skip this, your video will have **no narration audio.**
3. Choose **Record Selected Portion**, then drag the box around the simulator window
   (or choose **Record Entire Screen** — simpler, just close other windows first).
4. Have this script (STEP 3) open on a second screen or printed, so you can read while you click.
5. Click **Record**. (If macOS asks for Screen Recording permission, allow it, then try again.)

> **Windows alternative (class Clipchamp guide):** Clipchamp → Blank Video → Record & create →
> **Screen** → pick the emulator window → Share → speak while demoing → Stop recording →
> Save and edit → Export (turn **off** *Save in the cloud*) → save the `.mp4` here.

## STEP 3 — Narration script (read aloud while you click)
Speak calmly. The *(italic actions)* tell you what to click as you say each line. ~60–90 seconds total.

> **[Start]** *"Hi, this is my Animal Quiz app for C346. I restyled it using a StyleSheet and Flexbox so it looks a lot cleaner than before."*
>
> **[Slowly scroll up and down once]** *"The whole screen is a ScrollView with a soft green background. The title 'Animal Quiz' is bold, larger, centred, and green — all of that is defined in `StyleSheet.create`, not written inline on each element."*
>
> **[Point cursor at the first card]** *"Each question is a reusable component wrapped in a card — a white box with rounded corners, a thin border, and spacing around it, so every question looks like a neat tile."*
>
> **[Point at the image, then the dropdown]** *"Inside each card the animal photo has a fixed full width and set height so they all line up, the question text is bold and centred, and there's a dropdown to pick the answer."*
>
> **[Open the first dropdown, choose Elephant]** *"I'll answer them — this one's an Elephant…"*
> **[Scroll to question 2, choose Leopard]** *"…this is a Leopard…"*
> **[Scroll to question 3, choose Giraffe]** *"…and a Giraffe."*
>
> **[Scroll to the green button, press it]** *"At the bottom is the Submit button, styled green with its own spacing. When I press it, the app checks my answers and shows an alert with the score."*
>
> **[Alert appears showing 3 correct]** *"Three out of three — 'Well done!'."* **[Tap OK]**
>
> **[End]** *"So the before was plain stacked text; the after uses a StyleSheet for the colours and typography and Flexbox for the card layout, image sizing and spacing — a much more polished look. Thanks for watching!"*

## STEP 4 — Stop and save the file
1. Click the **■ stop** button in the menu bar (top-right of screen).
2. The recording saves to your **Desktop** as a `.mov` file (a thumbnail shows briefly — you can click it to trim if needed).
3. Rename it to **`L08-Ex5-Quiz-demo.mov`** and move it into this folder:
   `~/Documents/Desktop-Files/School/C346/work/L08-Ex5-Quiz/`
   (In Finder: drag it in, or in Terminal: `mv ~/Desktop/L08-Ex5-Quiz-demo.mov ~/Documents/Desktop-Files/School/C346/work/L08-Ex5-Quiz/`)

## STEP 5 — Push the video to GitHub
In Terminal:
```
cd ~/Documents/Desktop-Files/School/C346/work
git add L08-Ex5-Quiz/L08-Ex5-Quiz-demo.mov
git commit -m "Add narrated quiz demo video"
git push origin main
```
(If you'd rather I handle this part once the file is in the folder, just tell me — I'll commit and push it for you.)

## STEP 6 — Submit on PoliteMall
Upload to the **Individual Submission** for Exercise #5. Make sure the recording is included.
Both apps are already on GitHub (`L08-Ex5-Quiz` and `L08-Ex5-Boats`).

---

## If something goes wrong
- **No sound in the video →** you forgot STEP 2.2 (pick the Microphone before recording). Re-record.
- **`npx expo start` errors →** run `npm install` again; make sure you're inside the `L08-Ex5-Quiz` folder.
- **Dropdown won't open in the simulator →** click directly on it; give the app a second to finish loading.
- **File too big for GitHub (>100 MB) →** export/record at 720p, or keep it short (~60–90s). The demo only needs to be a minute or two.

## Cheat-sheet — explain the styling in your own words
**Quiz (`App.js`):** `StyleSheet.create` holds every style (slides say it *benefits performance and organises code*).
`container` = `flex: 1` + green background; `title` = `fontSize 28`, `fontWeight 'bold'`, `textAlign 'center'`;
`card` = white, `borderRadius`, `borderWidth`, margins (the tile look); `image` = `width '100%'`, `height 220` (consistent photos).
The `Question` component reuses one card style for all three questions = less repeated code.

**Boats (`L08-Ex5-Boats`):** header bar, white cards with shadows (`elevation` / `shadowColor`), and a
**`flexDirection: 'row'`** title row placing the ship icon next to the name — the clearest Flexbox example of the two apps.
