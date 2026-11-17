# L10-Ex3-Pokemon - Week 5 Lesson 10 Exercise 3 (GRADED: submit to PoliteMall + GitHub by Sat 23:59)
Asked: Pokemon Cards list app. (A) "Add Pokemon" button above the list (wired up next lesson).
(B) each item shows name on the left and the online card picture on the right, and is clickable.
(C) at least 2 element sections with at least 2 Pokemon each. (D) each section header has a
matching icon and colour scheme.
Done (App.js):
- `SectionList` with 4 Element sections: Fire (Charmander, Vulpix, Growlithe), Water (Squirtle,
  Psyduck, Poliwag), Grass (Bulbasaur, Oddish), Lightning (Pikachu, Voltorb).
- Section header: element colour + MaterialCommunityIcons icon (fire / water / leaf / lightning-bolt).
- Item: `flexDirection: 'row'`, `justifyContent: 'space-between'`: name left, card image right.
  Item background is a light tint of the element colour. Tapping an item shows an Alert.
- Card images load online from the TCG 151 gallery URL pattern
  `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_<card#>-2x.png`
  (all URLs checked, HTTP 200). Needs internet on the phone.
- "ADD POKEMON" button above the list (shows a placeholder Alert for now).
Run: `npm install` then `npx expo start` (scan with Expo Go).
