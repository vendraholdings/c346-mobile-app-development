# PLAN — L08 Exercise #5 (Restyle two apps)

Goal: finish Exercise #5. Both apps are already restyled. Ship the Boats app into
this repo and record a narrated demo of the Quiz app. Submit on PoliteMall by Sat 11:59 PM.

## Steps
1. [done] Read both apps, confirm all image assets exist (no crashes).
2. [done] Copy `C346 - Mobile App Development/Lesson 04/L2boats` -> `work/L08-Ex5-Boats`
         (without node_modules), add README, update root README.
3. [done] Commit + push the Boats app (branch `auto/l08-ex5-boats` -> PR).
4. [you]  Run each app to confirm it works:
             cd L08-Ex5-Boats && npm install && npx expo start
             cd L08-Ex5-Quiz  && npm install && npx expo start
5. [you]  Screen-record the Quiz app running while narrating the styling
         (use NARRATION.md). Save video in `L08-Ex5-Quiz/`, commit + push.
6. [you]  Take before/after screenshots of both apps (optional, helps show improvement).
7. [you]  Submit on PoliteMall.

## Proof it works
- `npx expo start` launches Metro; app loads on phone/emulator with no red error screen.
- Quiz: pick answers, Submit shows the correct-count alert.
- Boats: 6 cards scroll, each animates in, image + title row render.
