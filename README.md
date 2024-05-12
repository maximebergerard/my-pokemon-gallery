# Pokémon Search Experience with Algolia

## 🛠️ Getting Started
Clone down this repository. You will need node.js and git installed globally on your machine.

1. Installation: ` npm install `
2. In the project directory, you can run: `npm run dev`
Open http://localhost:5173/ to view it in the browser.

## 👷‍♂️ Build with
- React.js
- TypeScript
- Tailwind CSS
- Algolia instant search
- Vite

## Features 
🔎 The searchable attributes in the search bar are the type, the name, the id and the game versions of the Pokémon.
🇫🇷🇨🇳🏴󠁧󠁢󠁥󠁮󠁧󠁿🇯🇵 On the right of the search bar there is a select button, you can chose in which language you wish to display Pokémons' name.
🎯 Filters are in the left sidebar, you can sort by type, game versions and Heal Point of the Pokémon. 

## To-do

- [x] Upload the data to Algolia Application and create an index
- [x] Enrich the dataset using the PokéAPI - `formatIndexData.ts`
- [x] Ensure the final record in the Algolia dashboard matches the expected format :
```
{
  "id": 15,
  "name": {
    "english": "Beedrill",
    "japanese": "スピアー",
    "chinese": "大针蜂",
    "french": "Dardargnan"
  },
  "type": ["Bug", "Poison"],
  "base": {
    "HP": 65,
    "Attack": 90,
    "Defense": 40,
    "Sp. Attack": 45,
    "Sp. Defense": 80,
    "Speed": 75
  },
  "game_versions": ["Red", "Blue", "Yellow", "Gold", "Silver", "Crystal"],
  "imageUrl": "https://example.com/beedrill-image.png"
}
```
- [x] Implement Algolia search in your application using the InstantSearch library
- [x] Create a searchbar to initiate searches
- [x] Display dynamic search results, showing each Pokémon's image, name, type, and stats
- [x] Implement filters using instant search custom widget for Pokémon type, game versions, and at least one stat (using a range slider)
- [x] Implement a dropdown to switch the display language of Pokémon names (English, Japanese, Chinese, and French)
- [x] Use local storage or any state manager with persistent services to save the user’s language preference across page reloads
- [ ] Handle the no result page
- [ ] Lazy load pokemon images
- [ ] Add a dark mode 
