# L08-Ex5-Boats - Week 4 Lesson 08 Exercise 5 (GRADED, due Sat 11:59 PM)

The restyled **L2 Boats (GetABoat)** app for Exercise #5, in its own folder next to
`L08-Ex5-Quiz`. Copied from `Lesson 04/L2boats` (without node_modules).

## What was styled (StyleSheet + Flexbox)
- **Screen:** outer View with `flex: 1` and a light background (`#EEF4FA`).
- **Header:** dark navy bar (`#13315C`) with a bold "GetABoat" title and a spaced-out
  "FOR SALE" subtitle; matching `StatusBar`.
- **Cards (`Boat.js`):** white card with `borderRadius`, `overflow: 'hidden'`, and a
  drop shadow (`shadowColor/Opacity/Radius/Offset` on iOS, `elevation` on Android).
- **Row:** `flexDirection: 'row'` title row — a round icon circle (ship icon) next to
  the boat name, vertically centred with `alignItems: 'center'`.
- **Image:** full-width image, fixed `height: 230`, `resizeMode="cover"`.
- **Animation:** each card fades + slides up on entry, staggered by its `index`.

## Run
```
npm install
npx expo start
```
Scan the QR code with Expo Go (or press `i` / `a` for a simulator). No node_modules in git.
