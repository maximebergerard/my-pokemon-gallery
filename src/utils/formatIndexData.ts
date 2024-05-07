import { SearchIndex } from "algoliasearch"
import { Pokemon } from "../types/pokemon"
import fetchPokemonData from "./fetchPokemonData"

export default async function formatIndexData(index: SearchIndex, condition: boolean) {
  if (condition) {
    let hits: any[] = []

    try {
      const formattedData: Pokemon[] = await index
        .browseObjects({
          batch: (batch) => {
            hits = hits.concat(batch)
          },
        })
        .then(() =>
          Promise.all(
            hits.map((pokemon) => {
              return fetchPokemonData(pokemon.id).then((missingInfo) => ({
                objectID: pokemon.objectID,
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.type,
                base: pokemon.base,
                imageUrl: pokemon.image,
                game_versions: missingInfo.game_versions,
              }))
            }),
          ),
        )

      index.partialUpdateObjects(formattedData)
      console.log(formattedData);
    } catch (error) {
      console.error(`Error fetching index ${index.indexName}`, error)
    }
  } else console.log("Condition in formatIndexData(index, condition) must be true to see the function work");

}