# L10-Ex3-Pokemon - Week 5 Lesson 10 Exercise 3 (GRADED: submit to PoliteMall + GitHub by Sat 23:59)
Asked: Pokemon Cards list app. (A) "Add Pokemon" button above the list (wired up next lesson).
(B) each item shows name on the left and the online card picture on the right, and is clickable.
(C) at least 2 element sections with at least 2 Pokemon each. (D) each section header has a
matching icon and colour scheme.

## Requirements -> where
- **SectionList** (`App.js`) with 4 Element sections: Fire (Charmander, Vulpix, Growlithe),
  Water (Squirtle, Psyduck, Poliwag), Grass (Bulbasaur, Oddish), Lightning (Pikachu, Voltorb).
- **Section headers**: sticky, gradient in the element's colours, element icon
  (fire / water / leaf / lightning-bolt) and a count chip.
- **Rows** (`PokemonRow.js`): `flexDirection: 'row'` + `justifyContent: 'space-between'`:
  Pokedex number, name, type pill and card-number pill on the LEFT, card picture on the RIGHT.
  Every row is a `Pressable` (tap = details Alert).
- **Card images** load online from the TCG 151 gallery URL pattern (`data.js`)
  `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_<card#>-2x.png`.
  Needs internet on the phone.
- **ADD POKEMON** button above the list (placeholder Alert for now).

## Design / UX
- Dark premium theme (navy gradient background), safe-area aware (notch + home bar).
- Header area: "SCARLET & VIOLET 151" tag, big title, subtitle with card count,
  type chips that jump to that section, pill-shaped red gradient ADD POKEMON button.
- Rows are elevated dark cards with a type-tinted glow, border and colour wash; card art has
  rounded corners and a shadow, with a pokeball + spinner placeholder until the image loads,
  then fades in.
- Animations (built-in `Animated`): staggered fade + slide-in for rows, spring press-scale on
  rows and the button.

## Files
- `App.js` - screen, header area, SectionList, section headers, styles
- `PokemonRow.js` - one list item (animations, image placeholder)
- `data.js` - sections, Pokemon, card image URL helper

Run: `npm install` then `npx expo start` (scan with Expo Go).
