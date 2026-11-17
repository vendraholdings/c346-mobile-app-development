// Pokemon data for the SectionList.
// Card images come from the Pokemon TCG "151" gallery:
// https://tcg.pokemon.com/en-us/galleries/151/
// URL pattern: .../SV3pt5_EN_<cardNumber>-2x.png
export const cardUrl = (num) =>
  `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${num}-2x.png`;

// Each section = one Element, with its own icon and colour scheme.
// `colours` is a 2-colour gradient used for the header, badges and glow.
export const datasource = [
  {
    title: 'Fire',
    icon: 'fire',
    colours: ['#FF9A3C', '#E8411C'],
    data: [
      { key: 'Charmander', card: 4 },
      { key: 'Vulpix', card: 37 },
      { key: 'Growlithe', card: 58 },
    ],
  },
  {
    title: 'Water',
    icon: 'water',
    colours: ['#4FC3F7', '#2962FF'],
    data: [
      { key: 'Squirtle', card: 7 },
      { key: 'Psyduck', card: 54 },
      { key: 'Poliwag', card: 60 },
    ],
  },
  {
    title: 'Grass',
    icon: 'leaf',
    colours: ['#8BE36B', '#2E9E4F'],
    data: [
      { key: 'Bulbasaur', card: 1 },
      { key: 'Oddish', card: 43 },
    ],
  },
  {
    title: 'Lightning',
    icon: 'lightning-bolt',
    colours: ['#FFE259', '#F5A300'],
    data: [
      { key: 'Pikachu', card: 25 },
      { key: 'Voltorb', card: 100 },
    ],
  },
];

// Card numbers in the 151 set match the National Pokedex number, e.g. 4 -> "#004".
export const dexNo = (num) => `#${String(num).padStart(3, '0')}`;

export const totalCards = datasource.reduce((sum, s) => sum + s.data.length, 0);
