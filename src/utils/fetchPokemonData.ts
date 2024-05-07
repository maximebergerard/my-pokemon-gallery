import { Pokemon } from '../types/pokemon'

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export default async function fetchPokemonData(pokemonId: number): Promise<Pokemon> {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}/${pokemonId}`);
    const data = await response.json();
    const gameVersions = data.game_indices && data.game_indices.map((gameIndex: { version: { name: string; }; }) => gameIndex.version.name.charAt(0).toUpperCase() + gameIndex.version.name.slice(1));

    return {
      id: pokemonId,
      game_versions: gameVersions
    };
  } catch (error) {
    console.error(`Error fetching Pokemon data for ID ${pokemonId}: ${error}`);
    throw error;
  }
}